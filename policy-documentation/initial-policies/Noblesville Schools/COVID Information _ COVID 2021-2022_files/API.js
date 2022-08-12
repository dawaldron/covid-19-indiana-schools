/* 
 * WCM API wrapper library
 * v 0.5
 * 
 * @depends on RSVP.js for Promises/A+ implementation
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, global.RSVP) :
        typeof define === 'function' && define.amd ? define(['exports', 'rsvp'], factory) :
            Bb.WCM.module('API', ['exports', 'RSVP'], factory);
}(this, (function (exports, RSVP) {
    'use strict';
    var API = {};

    API._version = 4;
    API._api_location = '';
    API._use_cache = true;
    API._auth_token = '';
    API._auth_expire = 0;
    API._use_local_storage = true;
    API._use_cookie_storage = true;
    API._waiting_for_token = false;
    API._initialized = false;


    /**
     * Gets a cookie value by name
     * @param {string} name
     * @returns {string}
     */
    function getCookie(name) {
        var cookie = ("; " + decodeURIComponent(document.cookie)).split("; " + name + "=");
        if (cookie.length == 2)
            return cookie.pop().split(";").shift();
        return '';
    }


    /**
     * Sets a cookie value
     * @param {string} name
     * @param {string} value
     */
    function setCookie(name, value) {
        if (getCookie(name) !== value)
            document.cookie = name + "=" + value + "; path=/";
    }


    /**
     * Removes cookie by name
     * @param {string} name
     * @param {string} value
     */
    function removeCookie(name) {
        if (getCookie(name) !== '')
            document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }



    /**
     * Gets User / Session ID from cookies
     * @returns {string}
     */
    function getUserSID() {
        var userID = getCookie('UserID');
        if (userID !== '')
            userID += '.' + getCookie('UserSID');
        else
            userID = "0";
        return userID;
    }


    /**
     * Restores the auth token and api location from local storage or a cookie (if available)
     */
    function restoreToken() {
        var userID = getUserSID();
        if (API._use_local_storage && typeof (Storage) !== "undefined" && sessionStorage.WCM_API_TOKEN &&
            sessionStorage.WCM_API_USERID && sessionStorage.WCM_API_USERID === userID) {
            //console.log('WCM API: restored token from local storage')
            API._auth_token = sessionStorage.WCM_API_TOKEN || '';
            API._auth_expire = sessionStorage.WCM_API_EXPIRE || '';
            API._api_location = sessionStorage.WCM_API_LOCATION || '';
            return;
        }

        if (API._use_cookie_storage && getCookie('WCM_API_USERID') === userID) {
            API._auth_token = getCookie('WCM_API_TOKEN');
            API._auth_expire = getCookie('WCM_API_EXPIRE');
            API._api_location = getCookie('WCM_API_LOCATION');

            if (API._auth_token !== '') {
                //console.log('WCM API: restored token from a cookie')
                return;
            }
        }
    }


    /**
     * Stores the current auth token and api location in either local storage or a cookie (if enabled)
     */
    function storeToken() {
        if (API._use_local_storage && typeof (Storage) !== "undefined") {
            //console.log('WCM API: stored token to local storage')
            sessionStorage.setItem("WCM_API_TOKEN", API._auth_token);
            sessionStorage.setItem("WCM_API_EXPIRE", API._auth_expire);
            sessionStorage.setItem("WCM_API_LOCATION", API._api_location);
            sessionStorage.setItem("WCM_API_USERID", getUserSID());
        }
        else if (API._use_cookie_storage) {
            //console.log('WCM API: stored token to a cookie')
            setCookie("WCM_API_TOKEN", API._auth_token);
            setCookie("WCM_API_EXPIRE", API._auth_expire);
            setCookie("WCM_API_LOCATION", API._api_location);
            setCookie("WCM_API_USERID", getUserSID());
        }
    }


    /**
     * Stores the current auth token and api location in either local storage or a cookie (if enabled)
     */
    function removeToken() {
        if (API._use_local_storage && typeof (Storage) !== "undefined") {
            //console.log('WCM API: deleted token from local storage')
            sessionStorage.removeItem("WCM_API_TOKEN");
            sessionStorage.removeItem("WCM_API_EXPIRE");
            sessionStorage.removeItem("WCM_API_LOCATION");
            sessionStorage.removeItem("WCM_API_USERID");
        }
        else if (API._use_cookie_storage) {
            //console.log('WCM API: deleted token from cookie')
            removeCookie("WCM_API_TOKEN");
            removeCookie("WCM_API_EXPIRE");
            removeCookie("WCM_API_LOCATION");
            removeCookie("WCM_API_USERID");
        }
    }


    /**
     * Initiates raw AJAX call and returns a Promise
     * @param {string} url
     * @param {string} method (defaults to 'GET')
     * @param {object} params (optional)
     * @returns {RSVP.Promise}
     */
    function _ajax(url, method, params, headers) {
        return new RSVP.Promise(function (resolve, reject) {
            var json_request = headers['Content-Type'] && headers['Content-Type'] == 'application/json';
            var query = json_request ? JSON.stringify(params) :
                Object.keys(params || {}).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
            var client = new XMLHttpRequest();
            client.open(method || 'GET', url + (method === 'GET' && query !== '' ? (url.indexOf('?') < 0 ? '?' : '&') + query : ''), true);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            if (method === 'POST' && !json_request) client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (var key in (headers || {}))
                client.setRequestHeader(key, headers[key]);
            client.send(method === 'POST' ? query : null);

            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        if (this.responseType === "json" && this.response !== null) { resolve(this.response); return; }
                        try { resolve(parseJSON(this.response)); }
                        catch (e) { reject(e); return; }
                    }
                    else if (this.status === this.UNSENT)
                        reject({ status: 0, statusText: "Request to the server was blocked by browser (possible security issue)" });
                    else
                        reject(this);
                }
            }
        });
    }


    /**
    * Refreshes Auth token from WCM using the current session cookie
    */
    function refreshToken(reason) {
        var do_call = (API._waiting_for_token === false);
        if (do_call) {
            API._waiting_for_token = [];
            API._auth_token = '';
            API._api_location = '';
            API._auth_expire = 0;
            removeToken();   /* avoid keeping stale tokens in cache */
        }
        return new RSVP.Promise(function (resolve, reject) {
            API._waiting_for_token.push({ 'resolve': resolve, 'reject': reject });

            if (do_call) {
                //console.log('WCM API: access token refreshed (' + (reason || 'initial') + ')');
                _ajax('/Generator/TokenGenerator.ashx/ProcessRequest', 'GET', {}, {})
                    .then(function (data) {
                        if (!data['ExpirationTime'] || !data['Token'] || !data['ApiServer']) {
                            throw { status: 40, statusText: "Could not refresh access token" };
                        }

                        API._auth_token = data['Token'] || '';
                        API._api_location = data['ApiServer'] || '';
                        API._auth_expire = data['ExpirationTime'] || 0;
                        storeToken();

                        var promises = API._waiting_for_token;
                        API._waiting_for_token = false;

                        for (var i = 0; i < promises.length; i++)
                            promises[i].resolve(data);
                    })
                    .catch(function (error) {
                        var promises = API._waiting_for_token;
                        API._waiting_for_token = false;

                        for (var i = 0; i < promises.length; i++)
                            promises[i].reject(error);
                    });
            }
        });
    }


    /**
     * Makes an authenticated AJAX call to the API and returns a Promise; refreshes auth token if needed
     * @param {string} url
     * @param {string} method (defaults to 'GET')
     * @param {object} params (optional)
     * @returns {RSVP.Promise}
     */
    function ajax(url, method, params, headers) {
        if (!API._initialized) {
            restoreToken();
            API._initialized = true;
        }
        headers = headers || {};
        return new RSVP.Promise(function (resolve, reject) {
            // if the token looks good, give the API call a shot
            if (API._auth_token !== '' && API._api_location !== '' /* && TODO: not expired yet (optimization) */) {
                headers['Authorization'] = 'Bearer ' + API._auth_token;
                _ajax(API._api_location + 'api/v' + API._version + '/' + url, method, params, headers)
                    .then(function (data) { resolve(data); })
                    .catch(function (error) {
                        if (error.status === 401) {
                            // on rejected token try to refresh it, rinse and repeat
                            refreshToken('expired')
                                .then(function () {
                                    headers['Authorization'] = 'Bearer ' + API._auth_token;
                                    _ajax(API._api_location + 'api/v' + API._version + '/' + url, method, params, headers)
                                        .then(function (data) { resolve(data); })
                                        .catch(function (error) { reject(error); });
                                })
                                .catch(function (error) { reject(error); });
                        }
                        else reject(error);
                    });
            }
            // otherwise fetch new access token first
            else {
                refreshToken('initial')
                    .then(function () {
                        headers['Authorization'] = 'Bearer ' + API._auth_token;
                        _ajax(API._api_location + 'api/v' + API._version + '/' + url, method, params, headers)
                            .then(function (data) { resolve(data); })
                            .catch(function (error) { reject(error); });
                    })
                    .catch(function (error) { reject(error); });
            }
        });
    }


    /**
     * Parses incoming string and returns JSON data (or throws an exception on syntax errors)
     * @param {string} data
     * @returns parsed data (JS object)
     */
    function parseJSON(data) {
        // do not parse anything but strings
        if (data === null) throw { status: 50, statusText: "Received invalid JSON response from the server" };
        if (typeof data !== "string" || !data) return data;

        // trim leading and trailing whitespaces as native parsers are sometimes picky about these
        data = data.trim();

        // prefer native implementation if available
        if (window.JSON && window.JSON.parse) {
            try { return window.JSON.parse(data); }
            catch (e) { throw { status: 51, statusText: "Received invalid JSON response from the server" }; }
        }

        // otherwise perform some basic sanity checks - based on JSON2.js at http://json.org/
        var rchars = /^[\],:{}\s]*$/;
        var rescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rbraces = /(?:^|:|,)(?:\s*\[)+/g;
        if (rchars.test(data.replace(rescape, "@")
            .replace(rtokens, "]")
            .replace(rbraces, ""))) {
            // and eventually execute in an anonymous function
            return (new Function("return " + data))();
        }
        // or throw an exception if whatever we received wasn't a sane JSON string
        throw { status: 50, statusText: "Received invalid JSON response from the server" };
    }


    /**
     * @object JSON data cache
     */
    var cache = {};


    /**
     * Caches AJAX calls by URL + params
     * @returns {RSVP.Promise}
     */
    function ajaxCached() {
        var key = JSON.stringify(arguments);
        return API._use_cache && cache.hasOwnProperty(key)
            ? new RSVP.Promise(function (resolve, reject) { resolve(cache[key]); })
            : ajax.apply(this, arguments).then(function (data) { return cache[key] = data; });
    }


    /* generic API functions */
    API.setLocation = function (url) { API._api_location = url; };
    API.setVersion = function (v) { API._version = v; };
    API.useCache = function (on) { API._use_cache = !!on; };
    API.flush = function () { cache = {}; };
    API.useLocalStorage = function (on) { API._use_local_storage = !!on; };
    API.useCookieStorage = function (on) { API._use_cookie_storage = !!on; };

    ['get', 'put', 'post', 'delete'].forEach(function (fn) {
        var method = fn.toUpperCase();
        API[fn] = function (path, params, headers) { return ajax(path, method, params, headers); };
        API[fn + 'Cached'] = function (path, params) { return ajaxCached(path, method, params); };
    });

    API.postJSON = function (path, params) { return ajax(path, 'POST', params, { "Content-Type": "application/json" }); };

    /* module-specific APIs */

    API.FlexData = {
        GetFlexData: function (moduleInstanceId) { return API.getCached("FlexData/GetFlexData/" + moduleInstanceId); },
        GetFlexDataFiltered: function (moduleInstanceId, filter) { return API.getCached("FlexData/GetFlexDataFiltered/" + moduleInstanceId, filter); }
    };

    API.SiteStructure = {
        DistrictTree: function () { return API.getCached("SiteHierarchy/GetDistrictHierarchy"); },
        DistrictInfo: function () { return API.getCached("SiteHierarchy/GetDistrictInfo"); },
        Schools: function () { return API.getCached("SiteHierarchy/GetAllSchools"); },
        SchoolTree: function (schoolId) { return API.getCached("SiteHierarchy/GetSchoolHierarchy/" + schoolId); },
        ChannelTree: function (channelId) { return API.getCached("SiteHierarchy/GetChannelHierarchy/" + channelId); },
        SchoolIdByDomainId: function (domainId) { return API.getCached("SiteHierarchy/GetSchoolIdByDomainId/" + domainId); }
    };

    API.Resources = {
        GetResources: function () { return API.getCached("Resources/GetResources"); }
    };

    API.Calendar = {
        EventOccurrence: function (moduleInstanceID, eventDateId) { return API.get("CalendarEvents/GetEventDate/" + moduleInstanceID + "/" + eventDateId); },
        Events: function (moduleInstanceID, start, end, moduleInstanceFilter, categoryFilter) { return API.get('CalendarEvents/GetEvents/' + moduleInstanceID, { StartDate: start, EndDate: end, ModuleInstanceFilter: moduleInstanceFilter, CategoryFilter: categoryFilter, IsDBStreamAndShowAll: true }); },
        SitesCalendars: function () { return API.get("Calendar/Filter/GetSitesCalendars") },
        Categories: function (categoryFilter) { return API.get("Calendar/Filter/GetCategories/", { CategoryFilter: categoryFilter }); },

        GetDomainListSelectForView: function (parentDomainID, domainTypeID) { return API.get("Calendar/Filter/GetDomainListSelectForView/" + parentDomainID + "/" + domainTypeID) },
        GetOtherThanSiteCalendars: function (domainID, searchFor) { return API.get("Calendar/Filter/GetOtherThanSiteCalendars/" + domainID, { SearchFor: searchFor }); },
        GetCalendarFilterList: function (moduleInstanceId, moduleInstanceFilter) { return API.get("Calendar/Filter/GetCalendarFilterList/" + moduleInstanceId, { moduleInstanceFilter: moduleInstanceFilter }); },

        AllyAlternateFormats: function (filePath) { return API.get("Ally/" + AllyClientID + "/File/Path/" + filePath + "/"); }
    };

    API.CalendarRegistration = {
        Status: function (eventId, eventDateId) { return API.get("Calendar/Registration/Status/Event/" + eventId + "/EventDate/" + eventDateId); },
        Register: function (eventId, eventDateId, answers) { return API.post("Calendar/Registration/Register/Event/" + eventId + "/EventDate/" + eventDateId, { Answers: answers }, { 'Content-Type': 'application/json' }); },
        Update: function (eventDateId, answers) { return API.post("Calendar/Registration/Update/EventDate/" + eventDateId, { Answers: answers }, { 'Content-Type': 'application/json' }); },
        Cancel: function (eventDateId) { return API.post("Calendar/Registration/Cancel/EventDate/" + eventDateId); },
        Form: function (eventId, eventDateId) { return API.get("Calendar/Registration/Form/Event/" + eventId + "/EventDate/" + eventDateId); },
        MyEvents: function (start, end) { return API.get("Calendar/Registration/GetList/", { StartDate: start, EndDate: end }); },
    };
    API.BBComm = {
        GetOrganizations: function (includeHiddenOrgs) { return API.get("BBComm/Organizations", { includeHiddenOrgs: includeHiddenOrgs }); },
        GetOrganization: function (orgID, includeHiddenOrgs) { return API.get("BBComm/Organizations/" + orgID, { includeHiddenOrgs: includeHiddenOrgs }); },
        GetDirectory: function (dirID) { return API.get("BBComm/Directory/" + dirID); },
        GetDirectories: function (filter) { return API.get("BBComm/Directories/", filter); },
        GetAccounts: function (filter) { return API.get("BBComm/Accounts/Search", filter); },
        GetAccount: function (accID) { return API.get("BBComm/Accounts/" + accID); },
        GetVIP: function (dirID, orgID) { return API.get("BBComm/VIP/" + dirID, { orgID: orgID }); },
        Search: function (filter) { return API.get("BBComm/Search", filter); }
    };
    API.ReCaptcha = {
        VerifyCaptcha: function (token) { return API.get("Recaptcha/VerifyCaptcha/", { token: token }); }
    };

    API.ContentVersioning = {
        InsertContentVersion: function (moduleInstanceID, VersionModel)
        {
            return API.post("ContentVersioning/Insert/Module/" + moduleInstanceID, parseJSON(VersionModel) , { 'Content-Type': 'application/json' });
        },
        GetVersioningData: function (pageID) { return API.get("ContentVersioning/Insert/GetVersionData/" + pageID); },
        RestoreApps: function (RestoreAppModel) {
            return API.post("ContentVersioning/RestoreApps/", parseJSON(RestoreAppModel), { 'Content-Type': 'application/json' });
        }
    };

    return API;
})));
