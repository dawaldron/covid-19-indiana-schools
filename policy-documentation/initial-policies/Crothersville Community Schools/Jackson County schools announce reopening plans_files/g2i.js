﻿/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 178);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);

var Utils = (function () {
    function Utils() {
    }
    Utils.getStoredLogLevel = function () {
        console.log("getStoredLogLevel");
    };
    Utils.objectArrayToObject = function (arr, keyName, valName) {
        var result = arr.reduce(function (obj, item) {
            obj[item[keyName]] = item[valName];
            return obj;
        }, {});
        return result;
    };
    Utils.objectToArrayDict = function (obj) {
        var result = [];
        if (obj) {
            var entries = this.entries(obj);
            entries.map(function (arr) {
                result.push({ "Key": arr[0], "Value": arr[1] });
            });
        }
        return result;
    };
    Utils.getNestedValueByString = function (str, obj) {
        var _this = this;
        return str.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function (o, p) {
            _this.Logger.trace("[getNestedValueByString]", str, obj, o, p);
            return o[p];
        }, obj);
    };
    Utils.ArrayToDictionaryRecursive = function (arr, result, keyArg) {
        var entries = this.entries(arr);
        entries.map(function (arr) {
            if (typeof arr[1] === "object") {
                Utils.ArrayToDictionaryRecursive(arr[1], result, arr[0]);
            }
            else {
                var key = (keyArg) ? keyArg + arr[0] : arr[0];
                result.push({ "Key": key, "Value": arr[1] });
            }
        });
        return result;
    };
    Utils.entries = function (obj) {
        if (!obj)
            return [];
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        return resArray;
    };
    Utils.addEventListener = function (queryType, qualifier, event, func) {
        var nodes = document[queryType](qualifier);
        nodes.forEach(function (el) {
            el.addEventListener(event, function (event) {
                func(event);
            });
        });
    };
    Utils.StripHtmlTags = function (htmlString) {
        var result = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
        return result;
    };
    Utils.parseJson = function (json) {
        var retObj = { success: false };
        try {
            if (json != null) {
                retObj.data = JSON.parse(json);
                retObj.success = true;
            }
            return retObj;
        }
        catch (e) {
            this.Logger.warn("Not a valid JSON object.");
            return retObj;
        }
    };
    Utils.stringToBool = function (val) {
        try {
            if (val.toLowerCase() === "true") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.exception("stringToBool", error);
            return false;
        }
    };
    Utils.toTitleCase = function (str) {
        if (!str) {
            return "";
        }
        return str.toLowerCase().split(" ").map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(" ");
    };
    Utils.createGUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = parseFloat("0." + Math.random().toString().replace("0.", "") + new Date().getTime()) * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Utils.getConnextVersion = function () {
        return (window["connextVersion"]) ? window["connextVersion"] : "Unknown";
    };
    Utils.IsGoogleAnalyticsAvail = function () {
        if (window["ga"] && window["ga"]["create"]) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.IsGTMAvail = function () {
        if (window["google_tag_manager"]) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.IsAppInsightsAvail = function () {
        if (window["appInsights"]) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.IsConnextAvail = function () {
        if (window["Connext"]) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.getVersion = function () {
        return ("1.8.0.21" || "local");
    };
    ;
    Utils.getVersionBuildInfo = function () {
        return ("V.1.8.0.21-20201014.2" || "local");
    };
    ;
    Utils.getPageLeaveEventTrigger = function () {
        var originalEventName = "unload";
        if ("onpagehide" in window) {
            originalEventName = "pagehide";
        }
        return originalEventName;
    };
    Utils.getUserPosition = function () {
        return new Promise(function (resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve({
                        Lat: position.coords.latitude,
                        Long: position.coords.longitude
                    });
                }, function () {
                    reject();
                });
            }
            else {
                reject();
            }
        });
    };
    Utils.isEmpty = function (obj) {
        return Object.keys(obj).length === 0;
    };
    Utils.isset = function (value) {
        return !(typeof value == "undefined" || value == null);
    };
    Utils.objectToBigQueryString = function (obj) {
        var string = [];
        if (typeof (obj) == "object" && (obj.join == undefined)) {
            for (var prop in obj) {
                var value = Utils.isset(obj[prop]) ? obj[prop].toString() : "";
                string.push(prop + "=" + value);
            }
            ;
        }
        return string.join(";");
    };
    Utils.getLoaderVersionInfo = function () {
        if (window.MG2Loader) {
            return window.MG2Loader.GetVersionInfo();
        }
        else {
            return "MG2Loader is not defined";
        }
    };
    Utils.getFingerprintVersionInfo = function () {
        if (window.Fingerprint) {
            return window.Fingerprint.GetVersionInfo();
        }
        else {
            return "Fingerprint is not defined";
        }
    };
    Utils.getDemoMode = function () {
        if (window.RecommendationDemo) {
            return window.RecommendationDemo.getActiveRegeneration() === "false";
        }
        else {
            return false;
        }
    };
    Utils.getRandomIntegerInRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("Utils");
    Utils.getAttributeOfDomOrParents = function (dom, name) {
        if (dom.hasAttribute(name)) {
            return dom.getAttribute(name);
        }
        else if (dom.parentElement) {
            return this.getAttributeOfDomOrParents(dom.parentElement, name);
        }
        else
            return null;
    };
    Utils.findParentByValueOfAttrbibute = function (dom, name, value) {
        if (dom.hasAttribute(name)) {
            if (dom.getAttribute(name).split(" ").indexOf(value) >= 0) {
                return dom;
            }
            else {
                return this.findParentByValueOfAttrbibute(dom.parentElement, name, value);
            }
        }
        else if (dom.parentElement) {
            return this.findParentByValueOfAttrbibute(dom.parentElement, name, value);
        }
        else
            return null;
    };
    Utils.getParentDomByTagName = function (el, tagName) {
        var fnName = "getParentDomByTagName";
        tagName = tagName.toLowerCase();
        var tagType = el.tagName.toLowerCase();
        if (tagType !== tagName && el.parentElement) {
            return this.getParentDomByTagName(el.parentElement, tagName);
        }
        else if (tagType === tagName) {
            return el;
        }
        else {
            return false;
        }
    };
    Utils.checkForNewsletterSignUpClick = function (clickTarget) {
        if (!clickTarget.hasAttribute("class") || !(clickTarget.getAttribute("class").indexOf("submit") > 0))
            return false;
        var templateElem = this.findParentByValueOfAttrbibute(clickTarget, "class", "Mg2-connext");
        if (templateElem && templateElem.children) {
            var elementChildren = templateElem.children;
            for (var i = 0; i < elementChildren.length; i++) {
                if (elementChildren[i].hasAttribute("data-tmpl-action-name") && elementChildren[i].getAttribute("data-tmpl-action-name") === "Newsletter")
                    return true;
            }
        }
        return false;
    };
    return Utils;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoggerOptions__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__LoggerOptions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__LoggerOptions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__LoggerOptions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__LoggerOptions__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoggerService__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__LoggerService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logger__ = __webpack_require__(62);
/* unused harmony reexport Logger */





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_CdpEventModel__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SpEvent = (function (_super) {
    __extends(SpEvent, _super);
    function SpEvent() {
        var _this = _super.call(this) || this;
        _this.sessionService = __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__["a" /* SessionService */].Instance;
        return _this;
    }
    SpEvent.prototype.listen = function () {
        var _this = this;
        this.Logger.trace("Registering SP EventListener", "event");
        try {
            if (this.originalEventNames && this.originalEventNames.length > 0) {
                this.originalEventNames.forEach(function (eventName, key) {
                    _this.listenEvent(eventName);
                });
            }
            else {
                if (this.originalEventName) {
                    this.listenEvent(this.originalEventName);
                }
                else {
                    this.Logger.error("No event Name in Object");
                }
            }
        }
        catch (e) {
            this.Logger.error("addSPCollectorEventListener.Error", e);
        }
    };
    SpEvent.prototype.listenEvent = function (eventName) {
        var _this = this;
        this.Logger.trace("Registering SP EventListener", "event", eventName);
        try {
            ko.postbox.subscribe(eventName, function (data) {
                _this.processEventData(eventName, data);
            });
        }
        catch (e) {
            this.Logger.error("addSPCollectorEventListener.Error", e);
        }
    };
    SpEvent.prototype.processEventData = function (eventName, data) {
        this.Logger.debug("Firing", eventName, "data", data);
        this.clearPreviousData();
        this.originalEventData = data;
        this.currentEventName = eventName;
        __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(this);
    };
    SpEvent.prototype.getEventModel = function () {
        this.eventModel = _super.prototype.getEventModel.call(this);
        this.eventModel.EventSource = __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__["a" /* Constants */].EventsSources.Panel;
        this.addPanelVersionInfo();
        return new __WEBPACK_IMPORTED_MODULE_2__models_CdpEventModel__["a" /* CdpEventModel */](this.eventModel);
    };
    SpEvent.prototype.addPanelVersionInfo = function () {
        var panelConfig = window.config;
        var panelVersion = panelConfig && panelConfig.BuildInfo ? panelConfig.BuildInfo.Version : 'Unknown';
        this.eventModel.EventData.push({ Key: "SourceVersion", Value: panelVersion });
    };
    return SpEvent;
}(__WEBPACK_IMPORTED_MODULE_1__CdpEvent__["a" /* CdpEvent */]));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextGtmTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GtmTagEvent__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ConnextGtmTagEvent = (function (_super) {
    __extends(ConnextGtmTagEvent, _super);
    function ConnextGtmTagEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnextGtmTagEvent.prototype.listen = function () {
        var _this = this;
        try {
            if (this.originalEventName) {
                document.addEventListener(this.originalEventName, function (e) {
                    _this.setOriginalEventData(e.detail);
                    _this.sendTagToAnalitcs();
                });
            }
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return ConnextGtmTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__GtmTagEvent__["a" /* GtmTagEvent */]));



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CdpModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErInterpretation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserInterests__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Recomendations__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Core_storages_http_Http__ = __webpack_require__(51);








var CdpModuleClass = (function () {
    function CdpModuleClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("CdpModule");
    }
    CdpModuleClass.prototype.setDlInformation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId().then(function (deviceId) {
            _this.Logger.debug("DeviceId", deviceId);
            return __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].setInformation(deviceId);
        });
    };
    CdpModuleClass.prototype.setDlCollectedInformation = function (apiDlData) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId().then(function (deviceId) {
            _this.Logger.debug("DeviceId", deviceId);
            return __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].handleCdpDlResponce(apiDlData, deviceId);
        });
    };
    CdpModuleClass.prototype.getDlInformation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId().then(function (deviceId) {
            _this.Logger.debug("DeviceId", deviceId);
            return __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].getCdpDl(deviceId);
        });
    };
    CdpModuleClass.prototype.getErCode = function () {
        var erObject = __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].getCdpDlFromStorage();
        var erCode = erObject && erObject.apiDl ? erObject.apiDl.er : null;
        return erCode;
    };
    CdpModuleClass.prototype.updateDeviceIdInCdpDlStorage = function (deviceId) {
        __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].updateDeviceIdInCdpDlStorage(deviceId);
    };
    CdpModuleClass.prototype.getErpCode = function () {
        var dlObject = __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].getCdpDlFromStorage();
        var erCode = dlObject && dlObject.apiDl ? dlObject.apiDl.erp : null;
        return erCode;
    };
    CdpModuleClass.prototype.getErInterpretation = function () {
        return __WEBPACK_IMPORTED_MODULE_2__ErInterpretation__["a" /* ErInterpretation */].setInformation();
    };
    CdpModuleClass.prototype.getUserInterestsStats = function () {
        return __WEBPACK_IMPORTED_MODULE_3__UserInterests__["a" /* UserInterests */].getDebugData();
    };
    CdpModuleClass.prototype.getApiVersion = function () {
        var sendUrl = __WEBPACK_IMPORTED_MODULE_5__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCdpApiUrl() + "version";
        var request = new __WEBPACK_IMPORTED_MODULE_7__Core_storages_http_Http__["a" /* Http */]();
        return request.get(sendUrl);
    };
    CdpModuleClass.prototype.getRecommendations = function (isAddCategoryInfo) {
        return __WEBPACK_IMPORTED_MODULE_6__Recomendations__["a" /* Recommendations */].getListArticles(isAddCategoryInfo);
    };
    CdpModuleClass.prototype.getG2iDeviceId = function () {
        return __WEBPACK_IMPORTED_MODULE_0__CdpDataLayer__["a" /* CdpDataLayer */].getG2iDeviceId();
    };
    return CdpModuleClass;
}());

var CdpModule = new CdpModuleClass();


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfigModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options_models_OptionsModel__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Config_CommonConfigData__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Data_services_Index__ = __webpack_require__(14);



var ConfigModuleClass = (function () {
    function ConfigModuleClass() {
        this.metaDataService = __WEBPACK_IMPORTED_MODULE_2__Data_services_Index__["a" /* MetaDataService */].Instance;
    }
    ConfigModuleClass.prototype.setInitOptions = function (options) {
        this.initOptions = options;
        var clientInitOptions = new __WEBPACK_IMPORTED_MODULE_0__options_models_OptionsModel__["a" /* OptionsModel */](this.initOptions);
        this.initClientDimensions = clientInitOptions.dimensions;
        var customInitOptions = this.findConfiguration(clientInitOptions.layoutCode);
        this.configuration = clientInitOptions.extendModel(customInitOptions);
    };
    ConfigModuleClass.prototype.getInitConfiguration = function () {
        return this.configuration;
    };
    ConfigModuleClass.prototype.getInitOptions = function () {
        return this.initOptions;
    };
    ConfigModuleClass.prototype.getInitDimensions = function () {
        if (this.initClientDimensions) {
            return this.getEvalDimensionsFrom(this.initClientDimensions);
        }
        else {
            return null;
        }
    };
    ConfigModuleClass.prototype.findConfiguration = function (layoutCode) {
        if (window.g2ExtendInits && window.g2ExtendInits["default"]) {
            if (window.g2ExtendInits["default"] && window.g2ExtendInits[layoutCode]) {
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtendInits[layoutCode]);
            }
            else {
                return window.g2ExtendInits["default"];
            }
        }
        return null;
    };
    ConfigModuleClass.prototype.isAddBotInformation = function () {
        return this.configuration ? this.configuration.detectBot : true;
    };
    ConfigModuleClass.prototype.getCdpApiUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Config_CommonConfigData__["a" /* CommonConfigData */].apiUrl;
    };
    ConfigModuleClass.prototype.getCdpEventsUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Config_CommonConfigData__["a" /* CommonConfigData */].eventsUrl;
    };
    ConfigModuleClass.prototype.getBotMode = function () {
        return this.configuration.detectBot ? this.configuration.detectBot : null;
    };
    ConfigModuleClass.prototype.getCustomDimensions = function () {
        var customClientConfiguration = this.findConfiguration(this.configuration.layoutCode);
        if (customClientConfiguration && customClientConfiguration.dimensions) {
            return this.getEvalDimensionsFrom(customClientConfiguration.dimensions);
        }
        else {
            return null;
        }
    };
    ConfigModuleClass.prototype.getEvalDimensionsFrom = function (dimensions) {
        var clientModel = {};
        for (var property in dimensions) {
            clientModel[property] = this.getValueByPropertyName(dimensions, property);
        }
        return clientModel;
    };
    ConfigModuleClass.prototype.setLayoutCode = function (layoutCode) {
        this.configuration.setLayoutCode(layoutCode);
    };
    ConfigModuleClass.prototype.getClientConfiguration = function () {
        return this.findConfiguration(this.configuration.layoutCode);
    };
    ConfigModuleClass.prototype.getValueByPropertyName = function (dimensions, property) {
        try {
            if (dimensions && dimensions[property]) {
                var cdim = dimensions[property];
                if (typeof cdim === "function") {
                    return cdim.call();
                }
                if (typeof cdim === "string") {
                    var sFunction = eval("(" + cdim + ")");
                    return sFunction.call();
                }
            }
            return null;
        }
        catch (error) {
            console.log(error);
        }
    };
    ConfigModuleClass.prototype.getSiteEnvironment = function () {
        var environment = (this.configuration && this.configuration.environment) ? this.configuration.environment : "Unknown";
        return environment.toUpperCase();
    };
    ConfigModuleClass.prototype.getSiteCode = function () {
        var siteCode = (this.configuration && this.configuration.siteCode) ? this.configuration.siteCode : "Unknown";
        return siteCode.toUpperCase();
    };
    ConfigModuleClass.prototype.getClientCode = function () {
        var clientCode = (this.configuration && this.configuration.clientCode) ? this.configuration.clientCode : "Unknown";
        return clientCode.toUpperCase();
    };
    ConfigModuleClass.prototype.getClientCodeEncode = function () {
        return encodeURIComponent(this.getClientCode());
    };
    ConfigModuleClass.prototype.getSiteCodeEncode = function () {
        return encodeURIComponent(this.getSiteCode());
    };
    return ConfigModuleClass;
}());

var ConfigModule = new ConfigModuleClass();


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Constants.preface = "G2I_";
    Constants.cookies = {
        LogLevel: Constants.preface + "logLevel",
        LogEnabled: Constants.preface + "logEnabled",
        FingerPrint: Constants.preface + "fingerPrintId",
        BrowserSessionId: Constants.preface + "browserSessionId"
    };
    Constants.NoErInformation = -1;
    Constants.EventsSources = {
        "G2Insights": "g2i",
        "Connext": "nxt",
        "Panel": "pnl",
        "Widget": "wid"
    };
    return Constants;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoggerServiceSingleton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__ = __webpack_require__(34);




var LoggerServiceSingleton = (function () {
    function LoggerServiceSingleton() {
        this._logLevel = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Debug;
        this._logEnabled = false;
    }
    Object.defineProperty(LoggerServiceSingleton, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new LoggerServiceSingleton();
                this.instance._loggers = new Map();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    LoggerServiceSingleton.prototype.createLogger = function (name, style) {
        if (__WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].get(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.LogLevel)) {
            this._logLevel = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["c" /* LogLevels */].FromString(__WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].get(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.LogLevel));
        }
        ;
        var logEnabled = __WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].get(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.LogEnabled);
        if (logEnabled !== undefined) {
            if (logEnabled.toLowerCase() === "true") {
                this._logEnabled = true;
            }
            else {
                this._logEnabled = false;
            }
        }
        ;
        var logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* Logger */](name, this._logEnabled, this._logLevel, style);
        this._loggers.set(name, logger);
        return logger;
    };
    LoggerServiceSingleton.prototype.setEnabled = function (val) {
        console.log("LOGGER SERVICE.setEnabled", val);
        this._logEnabled = val;
        __WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].set(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.LogEnabled, val.toString());
        this._loggers.forEach(function (logger, key, map) {
            logger.setEnabled(val);
        });
    };
    LoggerServiceSingleton.prototype.setLevel = function (strLogLevel) {
        try {
            console.log("LOGGER SERVICE.setLevel", strLogLevel);
            __WEBPACK_IMPORTED_MODULE_3__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].set(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.LogLevel, strLogLevel);
            this._logLevel = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["c" /* LogLevels */].FromString(strLogLevel);
            this._loggers.forEach(function (value, key, map) {
                value.setLogLevel(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["c" /* LogLevels */].FromString(strLogLevel));
            });
        }
        catch (e) {
            console.error(e.message);
        }
    };
    return LoggerServiceSingleton;
}());

var LoggerService = LoggerServiceSingleton.Instance;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_CdpEventModel__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modules_connextModule_ConnextModule__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ConnextEvent = (function (_super) {
    __extends(ConnextEvent, _super);
    function ConnextEvent() {
        var _this = _super.call(this) || this;
        _this.sessionService = __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__["a" /* SessionService */].Instance;
        return _this;
    }
    ConnextEvent.prototype.getEventModel = function () {
        this.eventModel = _super.prototype.getEventModel.call(this);
        this.eventModel.EventSource = __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__["a" /* Constants */].EventsSources.Connext;
        this.addConnextVersionInfo();
        this.eventModel.ConfigCode = __WEBPACK_IMPORTED_MODULE_3__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getConfigCode();
        return new __WEBPACK_IMPORTED_MODULE_2__models_CdpEventModel__["a" /* CdpEventModel */](this.eventModel);
    };
    ConnextEvent.prototype.addConnextVersionInfo = function () {
        this.eventModel.EventData.push({ Key: "SourceVersion", Value: __WEBPACK_IMPORTED_MODULE_3__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getVersionInfo() });
    };
    ConnextEvent.prototype.updateCustomProperties = function () { };
    return ConnextEvent;
}(__WEBPACK_IMPORTED_MODULE_1__CdpEvent__["a" /* CdpEvent */]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpGtmTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GtmTagEvent__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SpGtmTagEvent = (function (_super) {
    __extends(SpGtmTagEvent, _super);
    function SpGtmTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventNames = [];
        return _this;
    }
    SpGtmTagEvent.prototype.listen = function () {
        var _this = this;
        try {
            if (this.originalEventNames && this.originalEventNames.length > 0) {
                this.originalEventNames.forEach(function (eventName, key) {
                    _this.listenEvent(eventName);
                });
            }
            else {
                if (this.originalEventName) {
                    this.listenEvent(this.originalEventName);
                }
                else {
                    this.Logger.error("No event Name in Object");
                }
            }
        }
        catch (e) {
            this.Logger.error("addSPTags.Error", e);
        }
    };
    SpGtmTagEvent.prototype.listenEvent = function (eventName) {
        var _this = this;
        this.Logger.trace("Registering SP Tags");
        try {
            ko.postbox.subscribe(eventName, function (data) {
                _this.Logger.debug("Firing", eventName, "data", data);
                _this.currentEventName = eventName;
                _this.setOriginalEventData(data);
                _this.sendTagToAnalitcs();
            });
        }
        catch (e) {
            this.Logger.error("addSPTags.Error", e);
        }
    };
    SpGtmTagEvent.prototype.sendTagToAnalitcs = function (tagName, tagData) {
        this.eventService.sendEvent(tagName || this.getSendTagName(), tagData || this.getSendTagData(), true);
    };
    SpGtmTagEvent.prototype.getSendTagData = function () {
        var tagEventName = this.getSendTagName();
        if (tagEventName) {
            return {};
        }
        return null;
    };
    return SpGtmTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__GtmTagEvent__["a" /* GtmTagEvent */]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__ = __webpack_require__(6);



var SessionService = (function () {
    function SessionService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("SessionService", "#dfa870");
        this.savedCdpModel = null;
        this.Logger.trace("CTOR");
        this.PageSessionId = __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].createGUID();
        var storedBrowserSessionId = sessionStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.BrowserSessionId);
        this.Logger.trace("CTOR", "storedBrowserSessionId", storedBrowserSessionId);
        if (!storedBrowserSessionId) {
            this.deviceBrowserSessionId = __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].createGUID();
            this.Logger.trace("CTOR", "NO storedBrowserSessionId... New deviceBrowserSessionId", this.deviceBrowserSessionId);
            sessionStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__core_constants_Constants__["a" /* Constants */].cookies.BrowserSessionId, this.deviceBrowserSessionId);
        }
        else {
            this.deviceBrowserSessionId = storedBrowserSessionId;
        }
        this.startPageSession = Math.floor(Date.now() / 1000);
    }
    Object.defineProperty(SessionService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new SessionService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    SessionService.prototype.getStartPageSession = function () {
        return this.startPageSession;
    };
    SessionService.prototype.setStartPageSession = function (startPageSession) {
        this.startPageSession = startPageSession;
    };
    SessionService.prototype.saveRequiredData = function (data) {
        if (Array.isArray(data)) {
            this.savedCdpModel = data[0];
        }
        else {
            this.savedCdpModel = data;
        }
    };
    SessionService.prototype.getRequiredData = function () {
        return this.savedCdpModel;
    };
    SessionService.prototype.init = function () {
        this.Logger.debug("Init");
    };
    SessionService.prototype.getDeviceSessionId = function () {
        return this.deviceBrowserSessionId;
    };
    return SessionService;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DeviceDetectorClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDetector; });
var UserAgentRules = [
    ["Aol", /AOLShield\/([0-9\._]+)/],
    ["Edge", /Edge\/([0-9\._]+)/],
    ["Yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["Vivaldi", /Vivaldi\/([0-9\.]+)/],
    ["Kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["Samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["Silk", /\bSilk\/([0-9._-]+)\b/],
    ["Miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["Beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["Edge-chromium", /Edg\/([0-9\.]+)/],
    ["Chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["Chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["Phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["Crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["Firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["Fxios", /FxiOS\/([0-9\.]+)/],
    ["Opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["Opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["Opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["IE", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["IE", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["IE", /MSIE\s(7\.0)/],
    ["Bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["UCBrowser", /(?:UCWEB|UCBrowser\/)([\d\.]+)/],
    ["Android", /Android\s([0-9\.]+)/],
    ["Ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["Safari", /Version\/([0-9\._]+).*Safari/],
    ["Facebook", /FBAV\/([0-9\.]+)/],
    ["Instagram", /Instagram\s([0-9\.]+)/],
    ["Ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["Ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/]
];
var OperatingSystemRules = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/]
];
var DeviceDetectorClass = (function () {
    function DeviceDetectorClass() {
        this.calculateDeviceId = null;
        this.userAgent = navigator.userAgent;
    }
    DeviceDetectorClass.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    DeviceDetectorClass.prototype.isHasLeavePageProblems = function () {
        if (window.DeviceDetector) {
            var browserName = this.getBrowser() ? window.DeviceDetector.Device.browser.name.toLowerCase() : "";
            var chromeProblem = browserName === "chrome" && parseInt(this.getBrowserVersion()) >= 80;
            var operaProblem = browserName === "opera" && parseInt(this.getBrowserVersion()) >= 67;
            return chromeProblem || operaProblem;
        }
        else {
            return false;
        }
    };
    DeviceDetectorClass.prototype.getBrowserVersion = function () {
        if (window.DeviceDetector && window.DeviceDetector.Device && window.DeviceDetector.Device.browser) {
            return window.DeviceDetector.Device.browser.version;
        }
        return null;
    };
    DeviceDetectorClass.prototype.getBrowser = function () {
        if (window.DeviceDetector && window.DeviceDetector.Device && window.DeviceDetector.Device.browser) {
            return window.DeviceDetector.Device.browser.name;
        }
        for (var browserIndex = 0; browserIndex < UserAgentRules.length; browserIndex++) {
            if (new RegExp(UserAgentRules[browserIndex][1]).test(this.userAgent)) {
                return UserAgentRules[browserIndex][0];
            }
        }
        return null;
    };
    DeviceDetectorClass.prototype.getOs = function () {
        if (window.DeviceDetector && window.DeviceDetector.Device && window.DeviceDetector.Device.os) {
            return window.DeviceDetector.Device.os.name + " " + (window.DeviceDetector.Device.os.version || "");
        }
        for (var osIndex = 0; osIndex < OperatingSystemRules.length; osIndex++) {
            if (new RegExp(OperatingSystemRules[osIndex][1]).test(this.userAgent)) {
                return OperatingSystemRules[osIndex][0];
            }
        }
        return null;
    };
    DeviceDetectorClass.prototype.isMobile = function () {
        var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
        return mobileRE.test(this.userAgent);
    };
    DeviceDetectorClass.prototype.getDeviceType = function () {
        if (window.DeviceDetector && window.DeviceDetector.Device && window.DeviceDetector.Device.platform) {
            return window.DeviceDetector.Device.platform.type;
        }
        if (this.isMobile()) {
            return "Mobile";
        }
        else {
            var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
            if (tabletRE.test(this.userAgent)) {
                return "Tablet";
            }
        }
        return "Desktop";
    };
    DeviceDetectorClass.prototype.getMetaData = function () {
        return {
            Browser: this.getBrowser(),
            OS: this.getOs(),
            DeviceType: this.getDeviceType(),
            URL: window.location.href
        };
    };
    DeviceDetectorClass.prototype.getDeviceId = function () {
        var _this = this;
        if (this.calculateDeviceId) {
            return Promise.resolve(this.calculateDeviceId);
        }
        else {
            return this.getDeviceIdFromFP()
                .then(function (deviceId) {
                _this.setCalculatedDeviceId(deviceId);
                return Promise.resolve(deviceId);
            });
        }
    };
    DeviceDetectorClass.prototype.getDeviceIdFromFP = function () {
        var fingerPrint = window.Fingerprint;
        if (fingerPrint && typeof fingerPrint.getDeviceID === "function") {
            return window.Fingerprint.getDeviceID();
        }
        else {
            return this.getDeviceIdFromOldVersionFP();
        }
    };
    DeviceDetectorClass.prototype.getDeviceIdFromOldVersionFP = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.calculateDeviceId) {
                resolve(_this.calculateDeviceId);
                return;
            }
            var fpInterval = setInterval(function () {
                var fingerPrint = _this.getFingerPrintAccess();
                if (fingerPrint) {
                    var deviceId = fingerPrint.getDeviceId();
                    if (deviceId) {
                        _this.calculateDeviceId = deviceId;
                        clearInterval(fpInterval);
                        resolve(deviceId);
                        return;
                    }
                }
            }, 100);
            setTimeout(function () {
                if (!_this.calculateDeviceId) {
                    clearInterval(fpInterval);
                    console.warn("FP is not available or can not calculate deviceId");
                    reject();
                }
            }, 10000);
        });
    };
    DeviceDetectorClass.prototype.getFingerPrintAccess = function () {
        if (window.Fprinting) {
            return window.Fprinting();
        }
        if (window.Fingerprint) {
            return window.Fingerprint;
        }
    };
    DeviceDetectorClass.prototype.getCalculatedDeviceId = function () {
        return this.calculateDeviceId;
    };
    DeviceDetectorClass.prototype.setCalculatedDeviceId = function (calculateDeviceId) {
        this.calculateDeviceId = calculateDeviceId;
    };
    return DeviceDetectorClass;
}());

var DeviceDetector = new DeviceDetectorClass();


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CdpEventsManagerClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpEventsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modules_dataCollector_DataCollector__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Data_services_FailedEventService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Data_modules_HttpService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modules_configModule_ConfigModule__ = __webpack_require__(5);








var CdpEventsManagerClass = (function () {
    function CdpEventsManagerClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_2__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("CdpModule");
        this.sessionService = __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__["a" /* SessionService */].Instance;
        this.CollectMetaTags = false;
        this.firedEvents = [];
        this.sendEventsDelay = 0;
        this.isClosePageFlag = false;
        this.lastSendedIds = [];
    }
    CdpEventsManagerClass.prototype.setClosePageFlag = function (closeFlag) {
        this.isClosePageFlag = closeFlag;
    };
    CdpEventsManagerClass.prototype.getClosePageFlag = function () {
        return this.isClosePageFlag;
    };
    CdpEventsManagerClass.prototype.sentQueryEvents = function (updatedData) {
        var _this = this;
        if (this.firedEvents.length > 0) {
            this.firedEvents.forEach(function (firedEvent) {
                var firedData = firedEvent.getCalculateModel();
                firedEvent.updateRequiredFields(updatedData);
                __WEBPACK_IMPORTED_MODULE_3__Modules_dataCollector_DataCollector__["a" /* DataCollector */].addEventInCollector(firedEvent);
                _this.sendEvent(firedData, firedEvent.getEventOptions());
            });
            this.firedEvents = [];
        }
    };
    CdpEventsManagerClass.prototype.eventFire = function (cdpEvent) {
        this.Logger.debug("eventFire EventModel - ", cdpEvent.eventModel);
        this.Logger.debug("eventFire EventType - ", cdpEvent.eventModel.EventType);
        this.Logger.debug("eventFire DeviceId - ", cdpEvent.eventModel.DeviceId);
        var sendData = cdpEvent.getEventModel();
        var sessionRequiredData = this.sessionService.getRequiredData();
        var isValid = cdpEvent.isValid();
        __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].logEventFire(sendData, isValid, this.firedEvents);
        if (isValid) {
            this.Logger.debug("eventFire EventType - " + cdpEvent.eventModel.EventType + " isValid");
            if (!sessionRequiredData) {
                this.sessionService.saveRequiredData(sendData);
                this.sentQueryEvents(sendData);
            }
            else {
                this.sentQueryEvents(sessionRequiredData);
            }
            __WEBPACK_IMPORTED_MODULE_3__Modules_dataCollector_DataCollector__["a" /* DataCollector */].addEventInCollector(cdpEvent);
            this.sendEvent(sendData, cdpEvent.getEventOptions());
        }
        else {
            this.Logger.debug("eventFire EventType - " + cdpEvent.eventModel.EventType + " is not isValid");
            if (sessionRequiredData) {
                cdpEvent.updateRequiredFields(sessionRequiredData);
                __WEBPACK_IMPORTED_MODULE_3__Modules_dataCollector_DataCollector__["a" /* DataCollector */].addEventInCollector(cdpEvent);
                this.sendEvent(cdpEvent.getCalculateModel(), cdpEvent.getEventOptions());
            }
            else {
                this.firedEvents.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEvent__["a" /* CdpEvent */](), cdpEvent));
                this.Logger.debug("add Event in query - " + cdpEvent.eventModel.EventType + " is not isValid", this.firedEvents);
            }
        }
        ;
    };
    CdpEventsManagerClass.prototype.sendEvent = function (sendData, options) {
        var _this = this;
        if (!Array.isArray(sendData)) {
            sendData = [sendData];
        }
        this.Logger.debug("sendArrayData", sendData);
        __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].logSendEvent(sendData, options);
        sendData.forEach(function (data) {
            var eventId = data.Id;
            if (_this.lastSendedIds.indexOf(eventId) === -1) {
                _this.lastSendedIds.push();
                _this.lastSendedIds = _this.lastSendedIds.slice(-10);
                if (_this.isBeaconSupported()) {
                    _this.cdpSendBeacon(data);
                }
                else {
                    _this.sendDataFetch(data);
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].logPreventDuplicate(eventId);
            }
        });
    };
    CdpEventsManagerClass.prototype.cdpSendBeacon = function (cdpData) {
        var success = false;
        var url = __WEBPACK_IMPORTED_MODULE_7__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCdpEventsUrl() + "?" + __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].getBeaconRequestUrlParam(cdpData);
        success = navigator.sendBeacon(url, JSON.stringify(cdpData));
        return success;
    };
    CdpEventsManagerClass.prototype.isBeaconSupported = function () {
        return navigator.sendBeacon ? true : false;
    };
    CdpEventsManagerClass.prototype.sendDataXhr = function (cdpData, options) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "BEBORE_SEND");
        var resolve = function (success) {
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, success ? "RESOLVE_SUCCESS" : "RESOLVE_FAILED");
        };
        if (!cdpData) {
            resolve(true);
            return;
        }
        var isSuccessSending = false;
        try {
            if (this.getClosePageFlag()) {
                options.IsAsync = false;
            }
            var fnName_1 = "[sendDataXhr] ";
            this.Logger.debug(fnName_1, "cdpData => ", cdpData);
            var xhr = new XMLHttpRequest();
            xhr.open("post", __WEBPACK_IMPORTED_MODULE_7__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCdpEventsUrl(), options.IsAsync);
            var xhrOnLoad = function (e) {
                _this.Logger.debug("CDP Load", cdpData);
                isSuccessSending = true;
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "ON_LOAD");
                resolve(isSuccessSending);
            };
            var xhrOnError = function (e) {
                _this.Logger.error("Error Sending CDP Data", e);
                _this.Logger.debug(fnName_1, "send beacon", cdpData.EventName);
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "ON_ERROR " + String(e));
                _this.cdpSendBeacon(cdpData);
                isSuccessSending = true;
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "AFTER_ERROR_BEACON");
                resolve(isSuccessSending);
            };
            xhr.addEventListener("load", xhrOnLoad);
            xhr.addEventListener("error", xhrOnError);
            xhr.setRequestHeader("Site-Code", cdpData.SiteCode);
            xhr.setRequestHeader("Client-Code", cdpData.ClientCode);
            xhr.setRequestHeader("Content-Type", "application/json");
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addRequestHeader(xhr, cdpData);
            xhr.send(JSON.stringify(cdpData));
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "AFTER_SEND");
            this.Logger.debug(fnName_1, "send", xhr);
        }
        catch (error) {
            this.Logger.error("Error catch Sending CDP Data", error);
            this.Logger.debug("xhr error", isSuccessSending);
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "ON_CATCH");
            if (!isSuccessSending) {
                this.Logger.debug("send beacon", cdpData.EventName);
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "BEFORE_CATCH_BEACON");
                this.cdpSendBeacon(cdpData);
                isSuccessSending = true;
                __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "AFTER_CATCH_BEACON");
                resolve(isSuccessSending);
            }
        }
    };
    CdpEventsManagerClass.prototype.sendDataFetch = function (cdpData) {
        if (this.getClosePageFlag()) {
            __WEBPACK_IMPORTED_MODULE_5__Data_services_FailedEventService__["a" /* FailedEventService */].Instance.stash(cdpData);
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__Data_services_FailedEventService__["a" /* FailedEventService */].Instance.drop(cdpData);
        var fetchOptions = {};
        fetchOptions = __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addDuplicateInfo(fetchOptions);
        __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "BEBORE_SEND");
        __WEBPACK_IMPORTED_MODULE_6__Data_modules_HttpService__["a" /* HttpService */].post("", cdpData, fetchOptions, __WEBPACK_IMPORTED_MODULE_7__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCdpEventsUrl())
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "ON_LOAD");
        })
            .catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "CATCH_BEACON " + String(error));
        });
        __WEBPACK_IMPORTED_MODULE_4__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addEventsCall(cdpData, "AFTER_SEND");
    };
    return CdpEventsManagerClass;
}());

var CdpEventsManager = new CdpEventsManagerClass();


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_storages_http_Http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_deviceModule_DeviceModule__ = __webpack_require__(38);



var HttpServiceClass = (function () {
    function HttpServiceClass() {
        this.http = new __WEBPACK_IMPORTED_MODULE_0__core_storages_http_Http__["a" /* Http */]();
    }
    HttpServiceClass.prototype.get = function (url, payload, options, apiPath) {
        var _this = this;
        if (payload === void 0) { payload = {}; }
        if (options === void 0) { options = {}; }
        return __WEBPACK_IMPORTED_MODULE_2__Modules_deviceModule_DeviceModule__["a" /* DeviceModule */].getDeviceIdToApi().then(function (deviceId) {
            payload["deviceid"] = deviceId;
            return _this.call("get", url, payload, options, apiPath);
        });
    };
    HttpServiceClass.prototype.post = function (url, payload, options, apiPath) {
        return this.call("post", url, payload, options, apiPath);
    };
    HttpServiceClass.prototype.call = function (method, url, payload, options, apiPath) {
        if (options === void 0) { options = {}; }
        this.API_PATH = apiPath || __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCdpApiUrl();
        options.headers = options.headers || {};
        options.headers["Site-Code"] = __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode();
        options.headers["Client-Code"] = __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getClientCode();
        return this.http[method](this.API_PATH + url, payload, options);
    };
    return HttpServiceClass;
}());
var HttpService = new HttpServiceClass();


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MetaDataService__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MetaDataService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AzureService__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__AzureService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserService__ = __webpack_require__(25);
/* unused harmony reexport UserService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TagManagerService__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__TagManagerService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventService__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__EventService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SessionService__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__SessionService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppInsightsService__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__AppInsightsService__["a"]; });









/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_CdpEventModel__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collectors_cdp_collectors_models_SendOptionsModel__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Modules_botDetection_BotDetector__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Utils_DateUtil__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Modules_connextModule_ConnextModule__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modules_cdpModule_CdpModule__ = __webpack_require__(4);












var CdpEvent = (function () {
    function CdpEvent() {
        this.IsAsync = true;
        this.originalEventNames = [];
        this.Logger = __WEBPACK_IMPORTED_MODULE_3__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("CdpEvent");
        this.requiredFields = ["DeviceId", "SiteCode", "ClientCode", "ConfigCode"];
        this.eventModel = new __WEBPACK_IMPORTED_MODULE_4__models_CdpEventModel__["a" /* CdpEventModel */](null);
        this.sessionService = __WEBPACK_IMPORTED_MODULE_1__Data_services_SessionService__["a" /* SessionService */].Instance;
        this.clearPreviousData();
    }
    CdpEvent.prototype.getEventOptions = function () {
        var sendOptions = new __WEBPACK_IMPORTED_MODULE_5__Collectors_cdp_collectors_models_SendOptionsModel__["a" /* SendOptionsModel */]();
        sendOptions.IsAsync = this.IsAsync;
        return sendOptions;
    };
    CdpEvent.prototype.listen = function () {
        var _this = this;
        this.Logger.trace("Registering EventListener");
        try {
            if (this.originalEventNames && this.originalEventNames.length > 0) {
                this.originalEventNames.forEach(function (eventName, key) {
                    _this.listenEvent(eventName);
                });
            }
            else {
                if (this.originalEventName) {
                    this.listenEvent(this.originalEventName);
                }
                else {
                    this.Logger.error("No event Name in Object");
                }
            }
        }
        catch (e) {
            this.Logger.error("addCollectorEventListener.Error", e);
        }
    };
    CdpEvent.prototype.listenEvent = function (eventName) {
        var _this = this;
        try {
            this.Logger.trace("addEventListener...", eventName);
            document.addEventListener(eventName, function (e) {
                if (e.type !== eventName) {
                    return;
                }
                _this.Logger.trace("Firing", _this.eventModel.EventName);
                _this.clearPreviousData();
                _this.setOriginalEventData(e.detail);
                _this.currentEventName = eventName;
                __WEBPACK_IMPORTED_MODULE_7__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
            });
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    CdpEvent.prototype.transformEventData = function (transformData) {
        var originalEventData = this.getOriginalEventData();
        var eventData = transformData || originalEventData.EventData || {};
        var dataObjectToArray = __WEBPACK_IMPORTED_MODULE_2__Utils_Utils__["a" /* Utils */].ArrayToDictionaryRecursive(eventData, []);
        this.eventModel.EventData = this.eventModel.EventData.concat(this.convertDataValueToString(dataObjectToArray));
    };
    CdpEvent.prototype.addBotInfo = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].isAddBotInformation()) {
            var botDetector = new __WEBPACK_IMPORTED_MODULE_6__Modules_botDetection_BotDetector__["a" /* BotDetector */]();
            var detectBot = botDetector.getDetectBot();
            if (detectBot) {
                this.eventModel.EventData.push({ Key: "BotName", Value: detectBot.name });
                this.eventModel.EventData.push({ Key: "BotCategory", Value: detectBot.category });
            }
            else {
                this.eventModel.EventData.push({ Key: "UserBot", Value: "false" });
            }
        }
    };
    CdpEvent.prototype.getEventModel = function () {
        this.eventModel = new __WEBPACK_IMPORTED_MODULE_4__models_CdpEventModel__["a" /* CdpEventModel */](null);
        var originalEventData = this.getOriginalEventData();
        this.eventModel.PageSessionId = this.sessionService.PageSessionId || this.getEventPageSessionId(originalEventData);
        this.eventModel.DeviceBrowserSessionId = this.sessionService.getDeviceSessionId();
        this.eventModel.EventTimestamp = __WEBPACK_IMPORTED_MODULE_8__Utils_DateUtil__["a" /* DateUtil */].getNowDateInSec();
        this.eventModel.SiteEnvironment = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteEnvironment();
        this.eventModel.ClientCode = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getClientCode();
        this.eventModel.SiteCode = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode();
        this.eventModel.DeviceId = __WEBPACK_IMPORTED_MODULE_9__Utils_DeviceDetector__["a" /* DeviceDetector */].getCalculatedDeviceId();
        this.eventModel.G2Ideviceid = __WEBPACK_IMPORTED_MODULE_11__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getG2iDeviceId() || "";
        this.eventModel.ConfigCode = __WEBPACK_IMPORTED_MODULE_10__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getConfigCode() || "Unknown";
        this.addVersionInfo();
        this.addBotInfo();
        this.updateCustomProperties();
        return this.eventModel;
    };
    CdpEvent.prototype.updateCustomProperties = function () { };
    CdpEvent.prototype.addVersionInfo = function () {
        this.eventModel.EventData.push({ Key: "Version", Value: __WEBPACK_IMPORTED_MODULE_2__Utils_Utils__["a" /* Utils */].getVersion() });
    };
    CdpEvent.prototype.getEventPageSessionId = function (originalEventData) {
        return originalEventData.EventInfo ? originalEventData.EventInfo.SessionId : __WEBPACK_IMPORTED_MODULE_2__Utils_Utils__["a" /* Utils */].createGUID();
    };
    CdpEvent.prototype.convertDataValueToString = function (data) {
        this.Logger.trace("eventDataValueToString", "eventDataValueToString", data);
        var cleaned = [];
        data.map(function (e) {
            if ((typeof e.Value !== "undefined" && e.Value !== null)) {
                cleaned.push({ "Key": e.Key, "Value": e.Value.toString() });
            }
            else {
                cleaned.push({ "Key": e.Key, "Value": "" });
            }
        });
        this.Logger.trace("eventDataValueToString", "eventDataValueToString", cleaned);
        return cleaned;
    };
    CdpEvent.prototype.isValid = function () {
        var fieldLength = this.requiredFields.length;
        for (var i = 0; i < fieldLength; i++) {
            if (!this.eventModel[this.requiredFields[i]]) {
                return false;
            }
        }
        return true;
    };
    CdpEvent.prototype.updateRequiredFields = function (updateUserDataModel) {
        var _this = this;
        if (Array.isArray(updateUserDataModel)) {
            updateUserDataModel = updateUserDataModel[0];
        }
        ;
        this.Logger.debug("updateUserDataModel", updateUserDataModel);
        if (!updateUserDataModel)
            return;
        this.requiredFields.forEach(function (field) {
            _this.eventModel[field] = _this.eventModel[field] ? _this.eventModel[field] : updateUserDataModel[field];
        });
    };
    CdpEvent.prototype.tryUpdate = function () {
        if (this.eventModel && !this.eventModel.DeviceId) {
            this.eventModel.DeviceId = __WEBPACK_IMPORTED_MODULE_9__Utils_DeviceDetector__["a" /* DeviceDetector */].getCalculatedDeviceId();
        }
    };
    CdpEvent.prototype.getOriginalEventData = function () {
        return this.originalEventData || {};
    };
    CdpEvent.prototype.setOriginalEventData = function (eventData) {
        this.originalEventData = eventData;
    };
    CdpEvent.prototype.clearPreviousData = function () {
        this.originalEventData = null;
        this.eventModel = new __WEBPACK_IMPORTED_MODULE_4__models_CdpEventModel__["a" /* CdpEventModel */](null);
    };
    CdpEvent.prototype.useInCalculateFirstVisitModel = function () {
        return false;
    };
    CdpEvent.prototype.getFirstVisitProperty = function () {
        return "";
    };
    CdpEvent.prototype.getCalculateModel = function () {
        return this.eventModel;
    };
    return CdpEvent;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstVisitProperties; });
var FirstVisitProperties = {
    CollectTime: "ts_diff",
    CountClick: "cnt_click",
    CountPageview: "cnt_pageview",
    CountCreateAccountEvents: "cnt_createaccount",
    CountCheckoutStartEvents: "cnt_checkoutstart"
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtil; });
var DateUtil = (function () {
    function DateUtil() {
    }
    DateUtil.getNowDateInSec = function () {
        return parseInt((new Date().getTime()).toString().slice(0, -3));
    };
    DateUtil.getISOFormat = function (date) {
        var isoRegxp = new RegExp(/^(-?(?:[1-9][0-9]*)?[0-9]{4})(1[0-2]|0[1-9])(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/);
        try {
            if (isoRegxp.test(date)) {
                var matches = date.match(isoRegxp);
                date = matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + matches[6] + "Z";
            }
            if (this.isValidDate(date)) {
                var parsedDate = this.getCorrectDate(date);
                return this.toISOString(parsedDate);
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log("getISOFormat", error);
            return null;
        }
    };
    DateUtil.isIsoFormat = function (stringDate) {
        return stringDate.test(/^(-?(?:[1-9][0-9]*)?[0-9]{4})(1[0-2]|0[1-9])(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/);
    };
    DateUtil.isValidDate = function (dateStr) {
        var timestamp = Date.parse(dateStr);
        return !isNaN(timestamp);
    };
    DateUtil.getCorrectDate = function (date) {
        var parsedDate = new Date(date);
        if (this.isUnixTimeRange(parsedDate)) {
            return parsedDate;
        }
        return new Date();
    };
    DateUtil.isUnixTimeRange = function (date) {
        return date.getUTCFullYear() >= 1970;
    };
    DateUtil.pad = function (number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    };
    DateUtil.toISOString = function (date) {
        return date.getUTCFullYear() +
            "" + this.pad(date.getUTCMonth() + 1) +
            "" + this.pad(date.getUTCDate()) +
            "T" + this.pad(date.getUTCHours()) +
            ":" + this.pad(date.getUTCMinutes()) +
            ":" + this.pad(date.getUTCSeconds()) +
            "Z";
    };
    ;
    DateUtil.getTimestamp = function (eventTimestamp) {
        if (!eventTimestamp) {
            return this.getNowDateInSec();
        }
        var timestampPart = ("" + eventTimestamp).substring(0, 10);
        var indexPoint = timestampPart.indexOf(".");
        if (indexPoint > -1) {
            timestampPart = eventTimestamp.replace(/\./g, "");
            timestampPart = ("" + timestampPart).substring(0, 10);
        }
        var intPart = parseInt(timestampPart);
        if (intPart.toString().length !== 10) {
            return this.getNowDateInSec();
        }
        else {
            return intPart;
        }
    };
    DateUtil.addDays = function (theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000).valueOf();
    };
    DateUtil.getDateValueFromTimestamp = function (timestamp) {
        return timestamp * 1000;
    };
    DateUtil.daysDiff = function (startDateValue) {
        return Math.floor((new Date().valueOf() - +startDateValue) / 86400000);
    };
    return DateUtil;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortOfferModel; });
var ShortOfferModel = (function () {
    function ShortOfferModel(data) {
        if (!data)
            return;
        this.Name = data.Name;
    }
    return ShortOfferModel;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginInnerEvents; });
var PluginInnerEvents = {
    DlCdpGetSuccess: "g2iDlFinished",
    DlCdpGetFail: "g2iDlError",
    GetInterestsStats: "g2iDInterestsStatsFinished",
    GetInterestsStatsError: "g2iDInterestsStatsError",
    GetErInterpretation: "onG2ISetErInterpretation",
    GetErInterpretationError: "onG2IErrorSetErInterpretation",
    DlRecommendationsFinished: "g2iDlRecommendationsFinished",
    DlRecommendationsError: "g2iDlRecommendationsError",
    DlRecommendationsStatsFinished: "g2iDlRecommendationsStatsFinished",
    DlRecommendationsStatsError: "g2iDlRecommendationsStatsError",
    InnerClick: "onInnerClick"
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DimensionsModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_CommonMetaData__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha256__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Utils__ = __webpack_require__(0);




var DimensionsModuleClass = (function () {
    function DimensionsModuleClass() {
        this.dimensions = {};
        this.properties = [
            "Title",
            "Keywords",
            "Section",
            "Url",
            "ContentType",
            "Author",
            "Tags",
            "ContentId",
            "PublishDate",
            "LeadText",
            "Text",
            "Category",
            "Description",
            "Pictures",
            "Video",
            "Likes",
            "Shares",
            "BreakingNews",
            "Premium",
            "Language",
            "Recommended",
            "LeadImageUrl"
        ];
        this.subscribeOtherPluginStartChangeContent();
    }
    DimensionsModuleClass.prototype.getDimensions = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3__Utils_Utils__["a" /* Utils */].isEmpty(this.dimensions)) {
            return this.dimensions;
        }
        var customConfigDim = this.getDimensionsFromCustomConfig();
        this.extendDimensions(customConfigDim);
        var initDim = this.getDimensionsFromClientInit();
        this.extendDimensions(initDim);
        this.fillEmptyDimFromMeta();
        if (this.dimensions && !this.dimensions["ContentId"]) {
            this.dimensions["ContentId"] = this.getCalculateContentId(this.dimensions["Text"]);
        }
        this.dimensions["ContentType"] = this.getContentType();
        this.resetInvalidValus();
        return this.dimensions;
    };
    DimensionsModuleClass.prototype.getContentType = function () {
        if (this.dimensions && this.dimensions["ContentType"]) {
            return this.dimensions["ContentType"].toLowerCase();
        }
        return "unknown";
    };
    DimensionsModuleClass.prototype.getCalculateContentId = function (articleText) {
        if (!articleText) {
            return;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_js_sha256__["sha256"])(articleText.replace(/\s/g, ""));
    };
    DimensionsModuleClass.prototype.getDimensionsFromCustomConfig = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getCustomDimensions() || {};
    };
    DimensionsModuleClass.prototype.getDimensionsFromClientInit = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getInitDimensions() || {};
    };
    DimensionsModuleClass.prototype.fillEmptyDimFromMeta = function () {
        var defaultDim = __WEBPACK_IMPORTED_MODULE_1__classes_CommonMetaData__["a" /* CommonMetaData */].getDefaultMeta();
        for (var property in defaultDim) {
            if (defaultDim.hasOwnProperty(property) && !this.dimensions[property]) {
                this.dimensions[property] = defaultDim[property]();
            }
        }
    };
    DimensionsModuleClass.prototype.extendDimensions = function (dataModel) {
        if (!dataModel)
            return;
        for (var property in dataModel) {
            if (dataModel.hasOwnProperty(property)) {
                this.dimensions[property] = dataModel[property];
            }
        }
    };
    DimensionsModuleClass.prototype.getDynamicDimensions = function () {
        var dynamicDimensions = {};
        var dimensionsObject = this.getDimensions();
        for (var property in dimensionsObject) {
            if (dimensionsObject.hasOwnProperty(property) && this.properties.indexOf(property) === -1) {
                dynamicDimensions[property] = dimensionsObject[property];
            }
        }
        return dynamicDimensions;
    };
    DimensionsModuleClass.prototype.getContentId = function () {
        if (!this.dimensions) {
            this.getDimensions();
        }
        if (this.dimensions && this.dimensions["ContentId"]) {
            return this.dimensions["ContentId"];
        }
        return null;
    };
    DimensionsModuleClass.prototype.subscribeOtherPluginStartChangeContent = function () {
        var _this = this;
        document.addEventListener("onInnerBeforeContentChanged", function () {
            _this.getDimensions();
        });
        document.addEventListener("onCampaignFound", function () {
            _this.getDimensions();
        });
    };
    DimensionsModuleClass.prototype.resetInvalidValus = function () {
        var invalidStrings = [String(undefined), String(NaN).toLowerCase(), String(null)];
        for (var property in this.dimensions) {
            var value = this.dimensions[property];
            if (typeof value === "string" && invalidStrings.indexOf(value.toLowerCase()) !== -1 || value === undefined) {
                this.dimensions[property] = "";
            }
        }
    };
    return DimensionsModuleClass;
}());

var DimensionsModule = new DimensionsModuleClass();


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugTrackUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_botDetection_BotDetector__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data_services_Index__ = __webpack_require__(14);




var BugTrackUtil = (function () {
    function BugTrackUtil() {
    }
    BugTrackUtil.addBotInfoHeader = function (options, header) {
        if (header === void 0) { header = "botinfo"; }
        var botDetector = new __WEBPACK_IMPORTED_MODULE_0__Modules_botDetection_BotDetector__["a" /* BotDetector */]();
        var detectBot = botDetector.getDetectBot();
        options = options || {};
        options.headers = options.headers || {};
        if (detectBot) {
            options.headers[header] = JSON.stringify(detectBot);
        }
        return options;
    };
    BugTrackUtil.addInitSettingsHeader = function (options, header) {
        if (header === void 0) { header = "initsettings"; }
        options = options || {};
        options.headers = options.headers || {};
        if (__WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode().toLowerCase() === "unknown") {
            var config = __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getInitConfiguration();
            var dimensions = Object.keys(config.dimensions);
            options.headers[header] = JSON.stringify({
                loaderInfo: __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */].getLoaderVersionInfo(),
                initOptions: JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getInitOptions()).substring(0, 1000),
                configuration: JSON.stringify(Object.assign({}, config, { dimensions: dimensions })).substring(0, 1000)
            });
        }
        return options;
    };
    BugTrackUtil.addRequestHeader = function (xhr, model) {
        var log = this.getEvetnLog();
        log += this.getEventsCall();
        log += this.getGuidLog();
        xhr.setRequestHeader("g2i-reqid", log);
        return xhr;
    };
    BugTrackUtil.getBeaconRequestUrlParam = function (model) {
        var log = this.getEvetnLog();
        log += this.createEventCall(model.Id);
        log += this.getGuidLog();
        log = encodeURIComponent(log.substring(0, 1000));
        return "g2i-reqid=" + log;
    };
    BugTrackUtil.addDuplicateInfo = function (options, header) {
        if (header === void 0) { header = "g2i-reqid"; }
        options = options || {};
        options.headers = options.headers || {};
        var log = this.getEvetnLog();
        log += this.getEventsCall();
        log += this.getGuidLog();
        options.headers[header] = log;
        return options;
    };
    BugTrackUtil.logEventFire = function (eventModel, isValid, firedEvents) {
        this.eventsFired++;
        if (this.isNeedCollect || !isValid || firedEvents.length) {
            this.isNeedCollect = true;
            this.eventsLog += "***FIRED***iv:" + isValid + ",fel:" + firedEvents.length + ",data:" + this.getEventModelData([eventModel]);
        }
    };
    BugTrackUtil.logSendEvent = function (eventModels, options) {
        this.eventsLog += "***REP:" + ((options === null || options === void 0 ? void 0 : options.IsResend) || false) + ",PSID:" + __WEBPACK_IMPORTED_MODULE_3__Data_services_Index__["f" /* SessionService */].Instance.PageSessionId + "***";
        this.eventsSended++;
        if (this.isNeedCollect || eventModels.length > 1 || this.eventsFired !== this.eventsSended) {
            this.isNeedCollect = true;
            this.eventsLog += "***SEND***ef/es:" + this.eventsFired + "/" + this.eventsSended + ",data:" + this.getEventModelData(eventModels);
        }
    };
    BugTrackUtil.logPreventDuplicate = function (eventId) {
        this.eventsLog += "***STOP_DUPL:" + eventId + "***";
    };
    BugTrackUtil.getEventModelData = function (eventModels) {
        var result = "";
        eventModels.forEach(function (model) {
            var data = {
                Id: model.Id,
                ET: model.EventType,
                DId: model.DeviceId
            };
            result += JSON.stringify(data);
        });
        return result;
    };
    BugTrackUtil.getEvetnLog = function () {
        var log = this.logCount++ + "|" + __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */].createGUID() + "|" + __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */].createGUID() + "|" + new Date().valueOf();
        if (this.eventsLog.length) {
            log += "|" + this.eventsLog.substring(0, 1000);
        }
        return log;
    };
    BugTrackUtil.addEventsCall = function (data, status) {
        if (!data)
            return;
        var key = this.logPrefix + data.Id;
        try {
            var existValue = localStorage.getItem(key);
            if (existValue) {
                status = existValue + " " + status;
            }
            localStorage.setItem(key, status);
        }
        catch (e) { }
    };
    BugTrackUtil.getEventsCall = function () {
        return this.failedEventsLog;
    };
    BugTrackUtil.createEventsCall = function () {
        var _this = this;
        var log = "";
        Object.keys(localStorage).filter(function (key) { return key.startsWith(_this.logPrefix); })
            .forEach(function (key) {
            try {
                var value = localStorage.getItem(key);
                if (value.indexOf("RESOLVE_SUCCESS") === -1) {
                    log += "key:" + key + ",value:" + value;
                }
            }
            catch (e) { }
        });
        if (log) {
            log = "|***FAILED_EVENTS***" + log.substring(0, 1000);
        }
        this.cleanEventsCall();
        this.failedEventsLog = log;
    };
    BugTrackUtil.createEventCall = function (eventId) {
        var _this = this;
        var log = "***BEACON***";
        Object.keys(localStorage).filter(function (key) { return key.startsWith(_this.logPrefix) && key.indexOf(eventId) !== -1; })
            .forEach(function (key) {
            try {
                log += localStorage.getItem(key) + "|";
            }
            catch (e) { }
        });
        return log;
    };
    BugTrackUtil.cleanEventsCall = function () {
        var _this = this;
        Object.keys(localStorage).filter(function (key) { return key.startsWith(_this.logPrefix); })
            .forEach(function (key) {
            try {
                localStorage.removeItem(key);
            }
            catch (e) { }
        });
    };
    BugTrackUtil.addExistingGuidLog = function (existingGuid) {
        this.guidLog += existingGuid + "|";
    };
    BugTrackUtil.getGuidLog = function () {
        var log = "";
        if (this.guidLog.length) {
            log += "***GUID_LOG***|" + this.guidLog.substr(-180);
        }
        return log;
    };
    BugTrackUtil.addRepeatDelay = function (delay) {
        this.guidLog += "*DELAY:" + delay + "*";
    };
    BugTrackUtil.eventsLog = "";
    BugTrackUtil.eventsFired = 0;
    BugTrackUtil.eventsSended = 0;
    BugTrackUtil.isNeedCollect = false;
    BugTrackUtil.logPrefix = "FailedEventLog_";
    BugTrackUtil.guidLog = "";
    BugTrackUtil.logCount = 0;
    return BugTrackUtil;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferEventDataEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_OfferModel__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var OfferEventDataEvent = (function (_super) {
    __extends(OfferEventDataEvent, _super);
    function OfferEventDataEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfferEventDataEvent.prototype.createOfferEventData = function (offer) {
        var fnName = "[createOfferEventData]";
        try {
            this.Logger.trace(fnName, "data", offer);
            var offerEventData = new __WEBPACK_IMPORTED_MODULE_1__models_OfferModel__["a" /* OfferModel */](offer);
            this.Logger.trace(fnName, "cdpData => ", offerEventData);
            return offerEventData;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    OfferEventDataEvent.prototype.getEventModel = function () {
        _super.prototype.getEventModel.call(this);
        var offerData = {};
        if (this.originalEventData.offer) {
            offerData = this.createOfferEventData(this.originalEventData.offer);
        }
        ;
        this.transformEventData(offerData);
        return this.eventModel;
    };
    return OfferEventDataEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClickEventName; });
/* unused harmony export EventName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventNames; });
var ClickEventName = {
    Login: "Login",
    Activate: "Activate",
    Upgrade: "Upgrade",
    Other: "Other",
    SignUp: "SignUp",
    Social: "Social",
    Action: "Action",
    Register: "Register",
    Logout: "Logout"
};
var EventName = {
    MeterLevelSet: "meterLevelSet",
    ConversationDetermined: "conversationDetermined",
    MeterStart: "meterStart",
    MeterStop: "meterStop",
    ActionShown: "actionShown",
    NewsletterSignup: "newsletterSignup",
    CheckoutStart: "CheckoutStart",
    OffersPresented: "OffersPresented",
    BillingAddress: "BillingAddress",
    UserInfo: "UserInfo",
    CreatedNewUser: "CreatedNewUser",
    Payment: "Payment",
    DeliveryAddress: "DeliveryAddress",
    SubscriptionSuccess: "SubscriptionSuccess",
    AbandonPresented: "AbandonPresented",
    AbandonClosed: "AbandonClosed",
    IdlePresented: "IdlePresented",
    IdleClosed: "IdleClosed",
    UpsellSelected: "UpsellSelected"
};
var EventNames = {
    PageView: "PageView"
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);

var MetaDataService = (function () {
    function MetaDataService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("MetaDataService");
        this.customCollectedDimensions = [];
        this.dimensionsToCollect = [];
        this.collectableDimensions = [];
        this.Logger.trace("CTOR");
        this.analyticsDimensions = {};
        this.setDefaultDimensions();
    }
    Object.defineProperty(MetaDataService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new MetaDataService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    MetaDataService.prototype.setup = function (dimensions) {
        this.customDimensions = dimensions;
    };
    MetaDataService.prototype.process = function () {
        try {
            this.Logger.debug("Processing....", this.customDimensions, "dimensionsToCollect", this.dimensionsToCollect);
            if (this.customDimensions) {
                this.evalCustomDimensions(this.customDimensions);
            }
            this.loadMetaTags();
            this.Logger.debug("collectedDimensions", this.analyticsDimensions);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    MetaDataService.prototype.setDefaultDimensions = function () {
        try {
            this.Logger.debug("Setting Default Dimensions");
            this.dimensionsToCollect.push({
                Id: "contentType",
                Name: "ContentType",
                Required: true,
                MetaTagNames: ["type", "og:type"]
            });
            this.dimensionsToCollect.push({
                Id: "keywords",
                Name: "Keywords",
                Required: true,
                MetaTagNames: ["keywords", "og:keywords", "bt:keywords"]
            });
            this.dimensionsToCollect.push({
                Id: "section",
                Name: "Section",
                Required: true,
                MetaTagNames: ["section", "og:section"]
            });
            this.dimensionsToCollect.push({
                Id: "author",
                Name: "Author",
                Required: true,
                MetaTagNames: ["byline", "author", "bt:author"]
            });
            this.dimensionsToCollect.push({
                Id: "title",
                Name: "Title",
                Required: true,
                MetaTagNames: ["title", "og:title"]
            });
            this.dimensionsToCollect.push({
                Id: "tags",
                Name: "Tags",
                Required: false,
                MetaTagNames: ["tags"]
            });
            this.dimensionsToCollect.push({
                Id: "contentId",
                Name: "ContentId",
                Required: false,
                MetaTagNames: ["contentid"]
            });
            this.dimensionsToCollect.push({
                Id: "publishDate",
                Name: "PublishDate",
                Required: false,
                MetaTagNames: ["publishDate", "pubdate", "og:pers_rec_first_pub_date", "bt:pubDate"]
            });
            this.dimensionsToCollect.push({
                Id: "text",
                Name: "Text",
                Required: false,
                ExcludeFromAnalytics: true
            });
            this.dimensionsToCollect.push({
                Id: "leadText",
                Name: "LeadText",
                Required: false,
                ExcludeFromAnalytics: true
            });
            this.collectableDimensions = Object.assign(this.collectableDimensions, this.dimensionsToCollect);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    MetaDataService.prototype.getCustomDimensions = function () {
        return this.customCollectedDimensions;
    };
    MetaDataService.prototype.evalCustomDimensions = function (dimensions) {
        var _this = this;
        try {
            Object.keys(dimensions).forEach(function (key) {
                var cdim = dimensions[key];
                _this.Logger.debug(key, cdim, typeof cdim);
                if (typeof cdim === "function") {
                    _this.Logger.debug("Is Function");
                    var dimVal = cdim.call();
                    _this.Logger.debug("Is Function VALUE", dimVal);
                    _this.collectDimensionForAnalytics(key, dimVal);
                    _this.customCollectedDimensions[key] = dimVal;
                    var index = _this.dimensionsToCollect.findIndex(function (d) { return d.Id === key; });
                    if (index >= 0) {
                        _this.Logger.debug("evalCD Index", _this.dimensionsToCollect[index]);
                        _this.dimensionsToCollect.splice(index, 1);
                    }
                }
            });
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    MetaDataService.prototype.loadMetaTags = function () {
        var _this = this;
        try {
            var meta = document.querySelectorAll("meta");
            Array.prototype.forEach.call(meta, function (node) {
                var metaData = _this.getMetaData(node);
                if (metaData) {
                    _this.screenData(metaData);
                }
            });
            this.Logger.debug("this.dimensionsToCollect", this.dimensionsToCollect);
            this.Logger.debug("this.collectableDimensions", this.collectableDimensions);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    MetaDataService.prototype.getMetaData = function (metaTag) {
        try {
            var metaProperty = (metaTag.attributes["property"] ? metaTag.attributes["property"].value : "");
            var metaName = (metaTag.attributes["name"] ? metaTag.attributes["name"].value : "");
            var metaPropCleaned = metaName || metaProperty;
            if (metaPropCleaned) {
                var metaValue = metaTag.attributes["value"] || metaTag.content;
                if (metaValue) {
                    var tag = {
                        Name: metaPropCleaned,
                        Value: metaValue
                    };
                    return tag;
                }
            }
        }
        catch (e) {
            this.Logger.error(e);
            return null;
        }
    };
    MetaDataService.prototype.screenData = function (metaTag) {
        var _this = this;
        try {
            var fnName = "screenData";
            var allowedTagData = this.dimensionsToCollect.filter(function (element, index, array) {
                if (!element || !element.MetaTagNames) {
                    return;
                }
                var isAllowed = element.MetaTagNames.some(function (x) { return x === metaTag.Name; });
                if (isAllowed) {
                    var alreadyCollected = _this.dimensionsToCollect.some(function (x) { return x.Name === element.Id; });
                    if (!alreadyCollected) {
                        _this.analyticsDimensions[element.Id] = metaTag.Value;
                    }
                    else {
                    }
                }
                else {
                }
            });
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    MetaDataService.prototype.collectDimensionForAnalytics = function (dimensionName, dimVal) {
        var collectDimension = this.dimensionsToCollect.find(function (d) { return d.Name === dimensionName; });
        if (collectDimension && !collectDimension.ExcludeFromAnalytics) {
            this.analyticsDimensions[collectDimension.Id] = dimVal;
        }
    };
    return MetaDataService;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__ = __webpack_require__(11);



var UserService = (function () {
    function UserService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("UserService");
        this.tagManagerService = __WEBPACK_IMPORTED_MODULE_1__Index__["c" /* TagManagerService */].Instance;
        this.Logger.trace("CTOR");
        this.setDeviceDetails();
    }
    Object.defineProperty(UserService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new UserService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.setDeviceDetails = function () {
        this.Logger.trace("setDeviceDetails");
        this.DeviceDetails = __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__["a" /* DeviceDetector */].getMetaData();
        this.Logger.debug("setDeviceDetails", "this.DeviceDetails", this.DeviceDetails);
    };
    UserService.prototype.setUserState = function (userState, userData) {
        try {
            this.Logger.debug("setUserState userState => ", userState, "userData", userData);
            if (userState) {
                this.tagManagerService.setDLV("userState", userState);
            }
            this.Logger.debug("setUserState userState => ", userState);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return UserService;
}());



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnextModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_ConversationManager__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_ActionManager__ = __webpack_require__(149);


var ConnextModuleClass = (function () {
    function ConnextModuleClass() {
    }
    ConnextModuleClass.prototype.getCurrentConversation = function () {
        return __WEBPACK_IMPORTED_MODULE_0__classes_ConversationManager__["a" /* ConversationManager */].getCurrentConversation();
    };
    ConnextModuleClass.prototype.getActionDataFromElement = function (clickedElement) {
        return __WEBPACK_IMPORTED_MODULE_1__classes_ActionManager__["a" /* ActionManager */].getInfoFromClickedElement(clickedElement);
    };
    ConnextModuleClass.prototype.getVersionInfo = function () {
        if (window.Connext) {
            return window.Connext.GetVersionInfo();
        }
        else {
            return "Connext is not defined";
        }
    };
    ConnextModuleClass.prototype.getConfigCode = function () {
        if (window.Connext && window.Connext.Storage) {
            return window.Connext.Storage.GetConfigCode();
        }
        else {
            return null;
        }
    };
    return ConnextModuleClass;
}());

var ConnextModule = new ConnextModuleClass();


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationResultModel; });
var CalculationResultModel = (function () {
    function CalculationResultModel(miscKey, value, enableGA) {
        if (enableGA === void 0) { enableGA = false; }
        this.miscKey = miscKey;
        this.value = value;
        this.enableGA = enableGA || false;
    }
    return CalculationResultModel;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__ = __webpack_require__(7);

var Collector = (function () {
    function Collector() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("Collector");
        this.listeners = [];
    }
    Collector.prototype.registerEvents = function () {
        var _this = this;
        var events = Object.keys(this.events);
        events.forEach(function (eventName) {
            try {
                var eventListener = new _this.events[eventName]();
                _this.listeners[eventName] = eventListener;
                eventListener.listen();
            }
            catch (e) {
                _this.Logger.fatal(e);
            }
        });
    };
    ;
    Collector.prototype.isHavePageViewEvent = function () {
        return false;
    };
    return Collector;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModel; });
var AddressModel = (function () {
    function AddressModel(data) {
        if (!data)
            return;
        this.FirstName = data.firstName;
        this.LastName = data.lastName;
        this.Address = data.address;
        this.Phone = data.phone;
        this.AptUnit = data.aptUnit;
        this.Zipcode = data.zipCode;
        this.City = data.city;
        this.State = data.state;
        this.Country = data.country;
        this.Name = data.name;
    }
    return AddressModel;
}());



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationModel; });
var UserInformationModel = (function () {
    function UserInformationModel(data) {
        if (!data)
            return;
        this.Email = data.email;
        this.DisplayName = data.displayName;
    }
    return UserInformationModel;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpEventModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_BugTrackUtil__ = __webpack_require__(21);


var CdpEventModel = (function () {
    function CdpEventModel(data) {
        this.Id = __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].createGUID();
        this.EventData = [];
        __WEBPACK_IMPORTED_MODULE_1__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addExistingGuidLog(this.Id);
        if (!data)
            return;
        this.EventName = data.EventName;
        this.EventType = data.EventType;
        this.EventTimestamp = data.EventTimestamp;
        this.DeviceId = data.DeviceId;
        this.G2Ideviceid = data.G2Ideviceid;
        this.DeviceBrowserSessionId = data.DeviceBrowserSessionId;
        this.PageSessionId = data.PageSessionId;
        this.ConfigCode = data.ConfigCode;
        this.SiteCode = data.SiteCode;
        this.ClientCode = data.ClientCode;
        this.SiteEnvironment = data.SiteEnvironment || "Unknown";
        this.EventSource = data.EventSource || "Unknown";
        this.EventData = data.EventData;
    }
    return CdpEventModel;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DeviceDetector__ = __webpack_require__(11);

var DeviceModel = (function () {
    function DeviceModel() {
        var userMeta = __WEBPACK_IMPORTED_MODULE_0__Utils_DeviceDetector__["a" /* DeviceDetector */].getMetaData();
        this.Browser = userMeta.Browser;
        this.Type = userMeta.DeviceType;
        this.OS = userMeta.OS;
    }
    return DeviceModel;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferTagModel; });
var OfferTagModel = (function () {
    function OfferTagModel(offer) {
        this.Id = this.getOfferId(offer);
        this.PlanName = offer.Name,
            this.TotalPrice = offer.TotalPrice;
        this.Type = this.getOfferType(offer);
    }
    OfferTagModel.prototype.getOfferId = function (offer) {
        if (offer.OfferId) {
            return offer.OfferId.toString();
        }
        else {
            if (offer.PlanId) {
                return offer.PlanId.toString();
            }
            else {
                return "";
            }
        }
    };
    OfferTagModel.prototype.getOfferType = function (offer) {
        if ((offer.IsDigital || offer.IsEedition) && offer.IsPrint) {
            return "Both";
        }
        else if (offer.IsDigital) {
            return "Digital";
        }
        else if (offer.IsPrint) {
            return "Print";
        }
        else {
            return "Unknown";
        }
    };
    return OfferTagModel;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CookiesStorageClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookiesStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__JsCookie__ = __webpack_require__(139);

var CookiesStorageClass = (function () {
    function CookiesStorageClass() {
        this.cookies = __WEBPACK_IMPORTED_MODULE_0__JsCookie__["a" /* JsCookie */].getInstance();
    }
    CookiesStorageClass.prototype.isSupported = function () {
        return true;
    };
    CookiesStorageClass.prototype.get = function (key, converter) {
        if (converter === void 0) { converter = {}; }
        return this.cookies.get(key, converter);
    };
    CookiesStorageClass.prototype.set = function (key, value, options, converter) {
        if (converter === void 0) { converter = {}; }
        if (options && options.daysOfLife) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + options.daysOfLife);
            options.expires = expireDate;
        }
        this.cookies.set(key, value, options, converter);
    };
    CookiesStorageClass.prototype.delete = function (key, options) {
        this.cookies.remove(key, options);
    };
    CookiesStorageClass.prototype.clear = function () {
        return null;
    };
    return CookiesStorageClass;
}());

var CookiesStorage = new CookiesStorageClass();


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextUserState; });
var UserState = {
    "LoggedIn": "Known",
    "Subscriber": "Subscriber",
    "Unknown": "Unknown"
};
var ConnextUserState = {
    "notAuthorized": UserState.Unknown,
    "authorized": UserState.LoggedIn,
    "hasAccess": UserState.Subscriber
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MetaDataService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FailedEventService__ = __webpack_require__(55);






var EventService = (function () {
    function EventService() {
        var _this = this;
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("EventService", "#fb9b25");
        this.collectedEvents = [];
        this.Logger.trace("CTOR");
        this.sessionService = __WEBPACK_IMPORTED_MODULE_3__SessionService__["a" /* SessionService */].Instance;
        this.azureService = __WEBPACK_IMPORTED_MODULE_1__Index__["d" /* AzureService */].Instance;
        this.tagManagerService = __WEBPACK_IMPORTED_MODULE_1__Index__["c" /* TagManagerService */].Instance;
        this.appInsightsService = __WEBPACK_IMPORTED_MODULE_1__Index__["e" /* AppInsightsService */].Instance;
        this.dimensionService = __WEBPACK_IMPORTED_MODULE_2__MetaDataService__["a" /* MetaDataService */].Instance;
        this.failedEventService = __WEBPACK_IMPORTED_MODULE_5__FailedEventService__["a" /* FailedEventService */].Instance;
        var checkQueryEventsInterval = setInterval(function () {
            if (_this.collectedEvents && _this.collectedEvents.length && _this.isReadyDeviceId()) {
                clearInterval(checkQueryEventsInterval);
                _this.sendTagCollectedEvents();
            }
        }, 1000);
    }
    Object.defineProperty(EventService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new EventService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    EventService.prototype.sendEvent = function (eventName, eventPayload, skipCollectedDimensions) {
        if (this.isReadyDeviceId()) {
            if (this.collectedEvents && this.collectedEvents.length) {
                this.collectedEvents.push({
                    eventName: eventName,
                    eventPayload: eventPayload,
                    skipCollectedDimensions: skipCollectedDimensions
                });
                this.sendTagCollectedEvents();
            }
            else {
                this.sendApprovedEvent(eventName, eventPayload, skipCollectedDimensions);
            }
        }
        else {
            this.collectedEvents.push({
                eventName: eventName,
                eventPayload: eventPayload,
                skipCollectedDimensions: skipCollectedDimensions
            });
        }
    };
    EventService.prototype.isReadyDeviceId = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__Utils_DeviceDetector__["a" /* DeviceDetector */].getCalculatedDeviceId()) {
            return true;
        }
        else {
            return false;
        }
    };
    EventService.prototype.sendTagCollectedEvents = function () {
        var _this = this;
        if (!this.collectedEvents) {
            return;
        }
        this.collectedEvents.forEach(function (event) {
            _this.sendApprovedEvent(event.eventName, event.eventPayload, event.skipCollectedDimensions);
        });
        this.collectedEvents = [];
    };
    EventService.prototype.sendApprovedEvent = function (eventName, eventPayload, skipCollectedDimensions) {
        try {
            this.Logger.debug("EventService.sendEvent...", eventName, eventPayload);
            this.azureService.sendData(eventName, eventPayload);
            if (!skipCollectedDimensions) {
                if (!eventPayload) {
                    eventPayload = {};
                }
                if (this.dimensionService && this.dimensionService.analyticsDimensions) {
                    eventPayload = Object.assign(eventPayload, this.dimensionService.analyticsDimensions);
                }
            }
            this.tagManagerService.sendTag(eventName, eventPayload);
            delete eventPayload["gtm.uniqueEventId"];
            this.appInsightsService.trackEvent(eventName, eventPayload);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    EventService.prototype.resendFailedEvents = function () {
        this.failedEventService.clean();
    };
    return EventService;
}());



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataCollectorClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Core_constants_Constants__ = __webpack_require__(6);



var DataCollectorClass = (function () {
    function DataCollectorClass() {
        this.collectedEvents = [];
    }
    DataCollectorClass.prototype.addEventInCollector = function (event) {
        this.collectedEvents.push(event);
        if (event.useInCalculateFirstVisitModel()) {
            __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__["a" /* FirstVisitDataCollector */].collectCdpEvent(event);
        }
    };
    DataCollectorClass.prototype.listenErCode = function () {
        document.addEventListener(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlCdpGetSuccess, function (event) {
            var eventData = event.detail;
            if (eventData && eventData.er == __WEBPACK_IMPORTED_MODULE_2__Core_constants_Constants__["a" /* Constants */].NoErInformation) {
                DataCollector.process();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__["a" /* FirstVisitDataCollector */].clearData();
            }
        });
    };
    DataCollectorClass.prototype.isCollectedFirstVisit = function (collectedByCondition) {
        return __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__["a" /* FirstVisitDataCollector */].isCollectedFirstVisit(collectedByCondition);
    };
    DataCollectorClass.prototype.getCollectedFirstVisitData = function () {
        return __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__["a" /* FirstVisitDataCollector */].getPageLoadCollectedData();
    };
    DataCollectorClass.prototype.process = function () {
        __WEBPACK_IMPORTED_MODULE_0__classes_FirstVisitDataCollector__["a" /* FirstVisitDataCollector */].process();
    };
    return DataCollectorClass;
}());

var DataCollector = new DataCollectorClass();


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DeviceModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_modules_HttpService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_storages_cookies_CookiesStorage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modules_cdpModule_CdpModule__ = __webpack_require__(4);




var DeviceModuleClass = (function () {
    function DeviceModuleClass() {
        this.oldDeviceIdKey = "oldDeviceId";
    }
    DeviceModuleClass.prototype.setup = function () {
        this.deviceIdIsNotChanged();
    };
    DeviceModuleClass.prototype.getDeviceIdToApi = function () {
        var savedOldDeviceId = this.getChangedDeviceId();
        if (savedOldDeviceId) {
            return Promise.resolve(savedOldDeviceId);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId();
        }
    };
    DeviceModuleClass.prototype.deviceIdIsNotChanged = function () {
        var _this = this;
        var savedOldDeviceId = this.getChangedDeviceId();
        if (savedOldDeviceId) {
            return __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId().then(function (deviceId) {
                var notify = {
                    newId: deviceId,
                    id: savedOldDeviceId
                };
                _this.sendDeviceIdNotify(notify);
            });
        }
    };
    DeviceModuleClass.prototype.deviceIChanged = function (notify) {
        this.saveChangedDeviceId(notify.id);
        __WEBPACK_IMPORTED_MODULE_2__Utils_DeviceDetector__["a" /* DeviceDetector */].setCalculatedDeviceId(notify.newId);
        return this.sendDeviceIdNotify(notify);
    };
    DeviceModuleClass.prototype.sendDeviceIdNotify = function (notify) {
        var _this = this;
        return this.sendApiChangeDeviceIdNotify(notify)
            .then(function () {
            _this.deleteChangedDeviceId();
            __WEBPACK_IMPORTED_MODULE_3__Modules_cdpModule_CdpModule__["a" /* CdpModule */].updateDeviceIdInCdpDlStorage(notify.newId);
            return Promise.resolve();
        }).catch(function (error) {
            console.log("changeDeviceId", error);
            return Promise.reject();
        });
    };
    DeviceModuleClass.prototype.sendApiChangeDeviceIdNotify = function (notify) {
        return __WEBPACK_IMPORTED_MODULE_0__Data_modules_HttpService__["a" /* HttpService */].post("user/changedeviceid", {
            new_device_id: notify.newId,
            old_device_id: notify.id
        });
    };
    DeviceModuleClass.prototype.saveChangedDeviceId = function (oldDeviceId) {
        __WEBPACK_IMPORTED_MODULE_1__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].set(this.oldDeviceIdKey, oldDeviceId, { daysOfLife: 36500 });
    };
    DeviceModuleClass.prototype.getChangedDeviceId = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].get(this.oldDeviceIdKey);
    };
    DeviceModuleClass.prototype.deleteChangedDeviceId = function () {
        __WEBPACK_IMPORTED_MODULE_1__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].delete(this.oldDeviceIdKey);
    };
    return DeviceModuleClass;
}());

var DeviceModule = new DeviceModuleClass();


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersEventDataEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_OfferModel__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var OffersEventDataEvent = (function (_super) {
    __extends(OffersEventDataEvent, _super);
    function OffersEventDataEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OffersEventDataEvent.prototype.getEventModel = function () {
        this.eventModel = _super.prototype.getEventModel.call(this);
        this.updateCustomProperties();
        var cdpDataList = this.getEventModelsByOffers(this.eventModel);
        return cdpDataList;
    };
    OffersEventDataEvent.prototype.getEventModelsByOffers = function (shareEventModel) {
        var _this = this;
        var cdpDataList = [];
        var data = this.originalEventData;
        if (data.offers) {
            data.offers.forEach(function (offer) {
                var sendOfferModel = new __WEBPACK_IMPORTED_MODULE_2__models_OfferModel__["a" /* OfferModel */](offer);
                var cloneShareEventModel = Object.assign({}, shareEventModel);
                cloneShareEventModel.Id = __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].createGUID();
                _this.Logger.debug("transformEventData", "offer => ", sendOfferModel);
                var eventData = _this.convertDataValueToString(__WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].objectToArrayDict(sendOfferModel));
                cloneShareEventModel.EventData = cloneShareEventModel.EventData.concat(eventData);
                cdpDataList.push(cloneShareEventModel);
            });
            return cdpDataList;
        }
        return null;
    };
    return OffersEventDataEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferModel; });
var OfferModel = (function () {
    function OfferModel(offer) {
        this.OfferName = offer.Name;
        this.OfferMarketingText = this.getMarketingText(offer),
            this.OfferText = this.getOfferText(offer);
        this.OfferImageDescription = (offer.Image) ? offer.Image.ImageDescription : "";
        this.OfferIsBestPlan = offer.IsBestPlan;
        this.OfferDisplayOrder = offer.DisplayOrder;
        this.OfferIsDigital = offer.IsDigital;
        this.OfferIsEedition = offer.IsEedition;
        this.OfferIsEzPay = offer.IsEzPay;
        this.OfferIsEzPayOptional = offer.IsEzPayOptional;
        this.OfferIsPrint = offer.IsPrint;
        this.OfferPassOrTrialDays = offer.PassOrTrialDays;
        this.OfferAmount = offer.Amount;
        this.OfferQuantity = offer.Quantity;
        this.OfferCityTax = offer.CityTax;
        this.OfferStateTax = offer.StateTax;
        this.OfferCountyTax = offer.CountyTax;
        this.OfferTaxAmount = offer.TaxAmount;
        this.OfferActivationFee = offer.ActivationFee;
        this.OfferPriceSuffix = offer.PriceSuffix;
        this.OfferPremiums = (offer.Premiums && offer.Premiums.length > 0) ? true : false;
        this.OfferTotalPrice = offer.TotalPrice;
        this.OfferAllowPreviousSunday = offer.AllowPreviousSunday || "Unknown";
    }
    OfferModel.prototype.getMarketingText = function (offer) {
        if (offer.Marketing) {
            return offer.Marketing.Body;
        }
        else {
            return offer.MarketingText;
        }
    };
    OfferModel.prototype.getOfferText = function (offer) {
        if (offer.Marketing) {
            return offer.Marketing.Name;
        }
        else {
            return offer.OfferText;
        }
    };
    return OfferModel;
}());



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendOptionsModel; });
var SendOptionsModel = (function () {
    function SendOptionsModel(data) {
        this.IsAsync = false;
        this.IsResend = false;
        if (!data) {
            return;
        }
        this.IsAsync = data.IsAsync;
        this.IsResend = data.IsResend;
    }
    return SendOptionsModel;
}());



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = (function () {
    function LocationModel(data) {
        if (!data)
            return;
        this.City = data.City;
        this.ContinentCode = data.ContinentCode;
        this.CountryCode = data.CountryCode;
        this.Lat = data.Lat;
        this.Long = data.Long;
        this.State = data.State;
        this.Zip = data.Zip;
    }
    return LocationModel;
}());



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DateUtil__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_dimensionsModule_DimensionsModule__ = __webpack_require__(20);


var PageModel = (function () {
    function PageModel(data) {
        if (!data) {
            this.setDynamicProperty();
            return;
        }
        this.Keywords = data.Keywords && Array.isArray(data.Keywords) ? data.Keywords.join(",") : data.Keywords;
        this.Title = data.Title;
        this.Url = data.Url;
        this.Section = data.Section;
        this.Author = data.Author;
        this.Tags = data.Tags && Array.isArray(data.Tags) ? data.Tags.join(",") : data.Tags;
        ;
        this.ContentId = data.ContentId;
        this.PublishDate = __WEBPACK_IMPORTED_MODULE_0__Utils_DateUtil__["a" /* DateUtil */].getISOFormat(data.PublishDate);
        this.ContentType = data.ContentType;
        this.Recommended = data.Recommended;
        this.setDynamicProperty();
    }
    PageModel.prototype.setDynamicProperty = function () {
        var dynamicDimensions = __WEBPACK_IMPORTED_MODULE_1__Modules_dimensionsModule_DimensionsModule__["a" /* DimensionsModule */].getDynamicDimensions();
        this.extendCurrentModel(dynamicDimensions);
    };
    PageModel.prototype.extendCurrentModel = function (dataModel) {
        if (!dataModel)
            return;
        for (var property in dataModel) {
            if (dataModel.hasOwnProperty(property)) {
                this[property] = dataModel[property];
            }
        }
    };
    return PageModel;
}());



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectorTypes; });
/* unused harmony export ColType */
var CollectorTypes = {
    Connext: "Connext",
    SP: "SP",
    Flittz: "Flittz"
};
var ColType = {
    "Connext": "Connext",
    "SP": "SP",
    "Flittz": "Flittz"
};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentTypes; });
var PaymentTypes = {
    "credit_card_completed_e": "Credit Card",
    "bank_account_completed_e": "Bank Account",
    "bill_me_completed_e": "Bill Me",
    "apple_pay_completed_e": "Apple Pay",
    "paypal_completed_e": "Paypal"
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtmTagCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__ = __webpack_require__(7);

var GtmTagCollector = (function () {
    function GtmTagCollector() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("GtmTagCollector start");
    }
    GtmTagCollector.prototype.registerTagEvents = function () {
        var _this = this;
        var events = Object.keys(this.events);
        events.forEach(function (eventName) {
            try {
                var eventListener = new _this.events[eventName]();
                eventListener.listen();
            }
            catch (e) {
                _this.Logger.fatal(e);
            }
        });
    };
    ;
    return GtmTagCollector;
}());



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtmTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_EventService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__ = __webpack_require__(7);


var GtmTagEvent = (function () {
    function GtmTagEvent() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("GtmTagEvent");
        this.eventService = __WEBPACK_IMPORTED_MODULE_0__Data_services_EventService__["a" /* EventService */].Instance;
    }
    GtmTagEvent.prototype.listen = function () { };
    GtmTagEvent.prototype.getSendTagData = function () {
        return {};
    };
    GtmTagEvent.prototype.setOriginalEventData = function (data) {
        this.originalEventData = data;
    };
    GtmTagEvent.prototype.getSendTagName = function () {
        return this.sendTagName;
    };
    GtmTagEvent.prototype.sendTagToAnalitcs = function (tagName, tagData) {
        this.eventService.sendEvent(tagName || this.getSendTagName(), tagData || this.getSendTagData());
    };
    return GtmTagEvent;
}());



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterStartTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MeterStartTagEvent = (function (_super) {
    __extends(MeterStartTagEvent, _super);
    function MeterStartTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sendTagName = "meterStart";
        return _this;
    }
    return MeterStartTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterStopTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MeterStopTagEvent = (function (_super) {
    __extends(MeterStopTagEvent, _super);
    function MeterStopTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sendTagName = "meterStop";
        return _this;
    }
    return MeterStopTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Factory; });
var Factory = (function () {
    function Factory() {
    }
    return Factory;
}());



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
var Http = (function () {
    function Http() {
    }
    Http.prototype.get = function (url, payload, options) {
        return this.call("GET", url, payload, options);
    };
    Http.prototype.post = function (url, payload, options) {
        return this.call("POST", url, payload, options);
    };
    Http.prototype.call = function (method, url, payload, options) {
        options = options || {};
        var fetchURL = new URL(url);
        var fetchOptions = {};
        if (options.headers) {
            var headers = new Headers(options.headers);
            headers.append("Content-Type", options.contentType ? options.contentType : "application/json");
            headers.append("Accept", "application/json");
            fetchOptions["headers"] = headers;
        }
        fetchOptions["method"] = method;
        if (method === "GET") {
            if (payload) {
                Object.keys(payload).forEach(function (key) {
                    fetchURL.searchParams.append(key, payload[key]);
                });
            }
        }
        else {
            fetchOptions["body"] = JSON.stringify(payload);
        }
        return fetch(fetchURL.href, fetchOptions)
            .then(function (response) {
            if (!response.ok) {
                if (response.status == 404 || response.status == 500) {
                }
                else {
                    return response.text().then(function (text) {
                        return Promise.reject(text ? JSON.parse(text) : {});
                    });
                }
            }
            return Promise.resolve(response);
        })
            .then(function (response) {
            return response.text().then(function (text) {
                return text ? JSON.parse(text) : {};
            });
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return Http;
}());



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypeDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
var ActionTypeDict = {
    1: "Banner",
    4: "Inline",
    2: "Modal",
    3: "Paywall",
    6: "SmallInfoBox",
    7: "JS",
    11: "Newsletter"
};
var ActionTypes = {
    "Banner": "Banner",
    "Inline": "Inline",
    "Modal": "Modal",
    "Paywall": "Paywall",
    "SmallInfoBox": "SmallInfoBox",
    "JS": "JS",
    "Newsletter": "Newsletter"
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocalStorageServiceClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core_storages_local_LocalStorage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LocalStorageServiceClass = (function (_super) {
    __extends(LocalStorageServiceClass, _super);
    function LocalStorageServiceClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localStorage = new __WEBPACK_IMPORTED_MODULE_0__Core_storages_local_LocalStorage__["a" /* LocalStorage */]();
        return _this;
    }
    LocalStorageServiceClass.prototype.expandKey = function (key) {
        var siteCode = __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode();
        var clientCode = __WEBPACK_IMPORTED_MODULE_1__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getClientCode();
        if (!siteCode || !clientCode) {
            return key;
        }
        var expandedKey = [
            key,
            siteCode,
            clientCode
        ].join("_");
        return expandedKey;
    };
    LocalStorageServiceClass.prototype.get = function (key) {
        return this.localStorage.get(this.expandKey(key));
    };
    LocalStorageServiceClass.prototype.set = function (key, value) {
        this.localStorage.set(this.expandKey(key), value);
    };
    return LocalStorageServiceClass;
}(__WEBPACK_IMPORTED_MODULE_0__Core_storages_local_LocalStorage__["a" /* LocalStorage */]));

var LocalStorageService = new LocalStorageServiceClass();


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Index__ = __webpack_require__(14);



var AzureService = (function () {
    function AzureService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("AzureService", "#b270df");
        this.OPTIONS = {
            enabled: false
        };
        this.Logger.trace("CTOR");
        this.sessionService = __WEBPACK_IMPORTED_MODULE_2__Index__["f" /* SessionService */].Instance;
    }
    Object.defineProperty(AzureService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new AzureService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    AzureService.prototype.setup = function (opts) {
        try {
            this.Logger.trace("setOptions", opts);
            this.OPTIONS = opts;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    AzureService.prototype.createPayload = function (eventName) {
        try {
            var entity = {
                PartitionKey: eventName,
                RowKey: __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].createGUID(),
                SessionId: this.sessionService.PageSessionId,
                AiAvail: __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].IsAppInsightsAvail(),
                GaAvail: __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].IsGoogleAnalyticsAvail(),
                GtmAvail: __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].IsGTMAvail(),
                CxtAvail: __WEBPACK_IMPORTED_MODULE_1__utils_Utils__["a" /* Utils */].IsConnextAvail()
            };
            return entity;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    AzureService.prototype.sendData = function (eventName, eventData) {
        try {
            if (!this.OPTIONS.enabled) {
                this.Logger.trace("sendData", "NOT ENABLED");
                return;
            }
            this.Logger.info("sendData this.pageService.PageSessionId", this.sessionService.PageSessionId);
            var payload = this.createPayload(eventName);
            this.Logger.debug("sendData", "EventName => ", eventName, "EventData => ", eventData, "Payload => ", payload);
            return;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return AzureService;
}());



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailedEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_models_SendOptionsModel__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_BugTrackUtil__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils_DateUtil__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__ = __webpack_require__(0);







var FailedEventService = (function () {
    function FailedEventService() {
        this.failedEventStoragePrefix = "FailedEvent_";
        this.mutexKey = "FailedEventMutex";
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("FailedEventService");
    }
    Object.defineProperty(FailedEventService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new FailedEventService();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    FailedEventService.prototype.stash = function (data) {
        if (!data)
            return;
        var key = this.getFailedEventKey(data);
        localStorage.setItem(key, JSON.stringify(data));
        this.Logger.debug("stash", key);
    };
    FailedEventService.prototype.drop = function (data) {
        if (!data)
            return;
        var key = this.getFailedEventKey(data);
        localStorage.removeItem(key);
        this.Logger.debug("drop", key);
    };
    FailedEventService.prototype.clean = function () {
        var _this = this;
        var delay = __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__["a" /* Utils */].getRandomIntegerInRange(0, 1000);
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_3__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addRepeatDelay(delay);
            __WEBPACK_IMPORTED_MODULE_3__Utils_BugTrackUtil__["a" /* BugTrackUtil */].createEventsCall();
            try {
                var mutexId = _this.getMutexId();
                if (mutexId && mutexId !== __WEBPACK_IMPORTED_MODULE_4__SessionService__["a" /* SessionService */].Instance.PageSessionId) {
                    if (__WEBPACK_IMPORTED_MODULE_5__Utils_DateUtil__["a" /* DateUtil */].daysDiff(_this.getMutexDate()) > 10) {
                        _this.deleteMutex();
                    }
                    else {
                        return;
                    }
                }
                _this.setMutex();
                _this.getFailedEventKeys().forEach(function (expandedKey) {
                    var data = JSON.parse(localStorage.getItem(expandedKey));
                    var options = new __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_models_SendOptionsModel__["a" /* SendOptionsModel */]({ IsAsync: true, IsResend: true });
                    __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].sendEvent(data, options);
                    _this.drop(data);
                });
            }
            catch (e) {
            }
            finally {
                _this.deleteMutex();
            }
        }, delay);
    };
    FailedEventService.prototype.getMutexId = function () {
        var mutexValue = localStorage.getItem(this.mutexKey);
        if (!mutexValue)
            return null;
        var _a = mutexValue.split("__"), id = _a[0], date = _a[1];
        return id;
    };
    FailedEventService.prototype.getMutexDate = function () {
        var mutexValue = localStorage.getItem(this.mutexKey);
        if (!mutexValue)
            return null;
        var _a = mutexValue.split("__"), id = _a[0], date = _a[1];
        return date;
    };
    FailedEventService.prototype.setMutex = function () {
        localStorage.setItem(this.mutexKey, __WEBPACK_IMPORTED_MODULE_4__SessionService__["a" /* SessionService */].Instance.PageSessionId + "__" + new Date().valueOf());
    };
    FailedEventService.prototype.deleteMutex = function () {
        localStorage.removeItem(this.mutexKey);
    };
    FailedEventService.prototype.getFailedEventKey = function (data) {
        return this.failedEventStoragePrefix + data.Id;
    };
    FailedEventService.prototype.getFailedEventKeys = function () {
        var _this = this;
        return Object.keys(localStorage).filter(function (key) { return key.startsWith(_this.failedEventStoragePrefix); });
    };
    return FailedEventService;
}());



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);

var TagManagerService = (function () {
    function TagManagerService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("TagManagerService", "#d234c3");
    }
    Object.defineProperty(TagManagerService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new TagManagerService();
                this.instance._dataLayer = [];
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    TagManagerService.prototype.getDataLayer = function () {
        return this._dataLayer;
    };
    TagManagerService.prototype.setup = function (containerId) {
        try {
            this.Logger.debug("Initializing TagManager With ContainerId: ", containerId);
            (function (windowArg, documentArg, scriptArg, dataLayerArg, GTMId) {
                var winDataLayer = windowArg["G2Analytics"].DataLayer;
                windowArg[dataLayerArg] = winDataLayer || [];
                windowArg[dataLayerArg].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = documentArg.getElementsByTagName(scriptArg)[0];
                var j = documentArg.createElement(scriptArg);
                var dl = dataLayerArg !== "dataLayer" ? "&l=" + dataLayerArg : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + GTMId + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, "script", "MG2DL", containerId);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    TagManagerService.prototype.sendTag = function (eventName, eventPayload) {
        try {
            eventPayload["event"] = eventName;
            this.Logger.info("Sending Tag.... ", eventName, eventPayload);
            this._dataLayer.push(eventPayload);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    TagManagerService.prototype.setDLV = function (varName, value) {
        try {
            this.Logger.debug("setDLV", varName, value);
            var obj = {};
            obj[varName] = value;
            this._dataLayer.push(obj);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return TagManagerService;
}());



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotDetector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BotModel__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BotList__ = __webpack_require__(142);


var BotDetector = (function () {
    function BotDetector(userAgentInfo) {
        if (window.DeviceDetector && window.DeviceDetector.Device) {
            this.detectBot = window.DeviceDetector.Device.bot;
            return;
        }
        var userAgent = userAgentInfo || navigator.userAgent;
        var botRegExpLength = __WEBPACK_IMPORTED_MODULE_1__BotList__["a" /* BotList */].length;
        for (var i = 0; i < botRegExpLength; i++) {
            if (new RegExp(__WEBPACK_IMPORTED_MODULE_1__BotList__["a" /* BotList */][i].regex).test(userAgent)) {
                this.detectBot = new __WEBPACK_IMPORTED_MODULE_0__BotModel__["a" /* BotModel */](__WEBPACK_IMPORTED_MODULE_1__BotList__["a" /* BotList */][i]);
                return;
            }
        }
    }
    BotDetector.prototype.getDetectBot = function () {
        return this.detectBot || null;
    };
    return BotDetector;
}());



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MISC_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COMMAND_TYPES; });
var MISC_TYPES = {
    Promise: "promise",
    Selector: "selector",
    Javascript: "javascript",
    Command: "command"
};
;
var COMMAND_TYPES = {
    GET_COOKIE_BY_NAME: "get_cookie_by_name"
};


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConversationManagerClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationManager; });
var ConversationManagerClass = (function () {
    function ConversationManagerClass() {
    }
    ConversationManagerClass.prototype.getCurrentConversation = function () {
        if (window.Connext) {
            var currentConversation = void 0;
            if (window.NxtInner) {
                currentConversation = window.NxtInner.Storage.GetCurrentConversation();
                if (currentConversation) {
                    return currentConversation;
                }
            }
            else {
                currentConversation = window.Connext.Storage.GetCurrentConversation();
                if (currentConversation) {
                    return currentConversation;
                }
                else {
                    return window.CnnXt.Storage.GetCurrentConversation();
                }
            }
        }
    };
    ConversationManagerClass.prototype.getVersion = function () {
        var regex = /[+-]?\d+(\.\d+)?/g;
        var findNumbers = window.Connext.GetVersion().match(regex);
        return findNumbers ? findNumbers[0] : null;
    };
    return ConversationManagerClass;
}());

var ConversationManager = new ConversationManagerClass();


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_JavascriptModel__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_PromiseModel__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_SelectorModel__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_CommandModel__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Data_services_Index__ = __webpack_require__(14);






var MiscModuleClass = (function () {
    function MiscModuleClass() {
        this.models = [];
        this.result = {};
    }
    MiscModuleClass.prototype.process = function (options) {
        if (options === void 0) { options = []; }
        if (!(options === null || options === void 0 ? void 0 : options.length))
            return;
        this.models = [];
        this.result = {};
        this.setup(options);
        this.startCollect();
    };
    MiscModuleClass.prototype.getData = function () {
        return this.result;
    };
    MiscModuleClass.prototype.setup = function (options) {
        var _this = this;
        options.forEach(function (option) {
            var model = null;
            switch (option.type) {
                case __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__["a" /* MISC_TYPES */].Javascript:
                    model = new __WEBPACK_IMPORTED_MODULE_1__models_JavascriptModel__["a" /* JavascriptModel */](option);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__["a" /* MISC_TYPES */].Promise:
                    model = new __WEBPACK_IMPORTED_MODULE_2__models_PromiseModel__["a" /* PromiseModel */](option);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__["a" /* MISC_TYPES */].Selector:
                    model = new __WEBPACK_IMPORTED_MODULE_3__models_SelectorModel__["a" /* SelectorModel */](option);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__["a" /* MISC_TYPES */].Command:
                    model = new __WEBPACK_IMPORTED_MODULE_4__models_CommandModel__["a" /* CommandModel */](option);
                    break;
            }
            if (model) {
                _this.models.push(model);
            }
        });
    };
    MiscModuleClass.prototype.startCollect = function () {
        var _this = this;
        this.models.forEach(function (model) {
            model.getData().then(function (data) {
                var value = typeof data.value === "object" ? JSON.stringify(data.value) : String(data.value);
                _this.result[data.miscKey] = value;
                if (data.enableGA) {
                    __WEBPACK_IMPORTED_MODULE_5__Data_services_Index__["c" /* TagManagerService */].Instance.setDLV(data.miscKey, data.value);
                }
            }).catch(function (e) { });
        });
    };
    return MiscModuleClass;
}());
var MiscModule = new MiscModuleClass();


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_logger_Logger_Core__ = __webpack_require__(1);



var PageModuleClass = (function () {
    function PageModuleClass() {
        this.isCheckedArticleInCdp = false;
        this.Logger = __WEBPACK_IMPORTED_MODULE_2__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("PageModule");
    }
    PageModuleClass.prototype.subscribePageLeave = function () {
        var _this = this;
        document.addEventListener(__WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].getPageLeaveEventTrigger(), function () {
            if (!_this.isCheckedArticleInCdp) {
                var articleNotExistApproved = false;
                __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].sendContentInCdp(_this.pageContent, articleNotExistApproved);
            }
        });
    };
    PageModuleClass.prototype.sendContentToCdp = function () {
        var _this = this;
        var articleNotExistApproved = false;
        this.subscribePageLeave();
        this.pageContent = __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].getPageContent();
        if (this.pageContent.isArticle()) {
            if (this.pageContent.ContentId) {
                __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].contentExistsInCdp(this.pageContent.ContentId)
                    .then(function (result) {
                    _this.isCheckedArticleInCdp = true;
                    if (!result.exists) {
                        articleNotExistApproved = true;
                        _this.pageContent["article_id"] = result["article_id"];
                        __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].sendContentInCdp(_this.pageContent, articleNotExistApproved);
                    }
                }).catch(function () {
                    _this.isCheckedArticleInCdp = false;
                });
            }
            else {
                this.isCheckedArticleInCdp = true;
                articleNotExistApproved = true;
                __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].sendContentInCdp(this.pageContent, articleNotExistApproved);
            }
        }
        else {
            this.isCheckedArticleInCdp = true;
        }
    };
    PageModuleClass.prototype.getArticleStats = function () {
        this.pageContent = __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].getPageContent();
        if (this.pageContent.isArticle()) {
            if (this.pageContent.ContentId) {
                return __WEBPACK_IMPORTED_MODULE_0__classes_ContentService__["a" /* ContentService */].getArticleStats(this.pageContent.ContentId);
            }
            else {
                this.Logger.debug("ContentId is not defined");
                return Promise.reject();
            }
        }
        else {
            this.Logger.debug("This page is not article");
            return Promise.reject();
        }
    };
    return PageModuleClass;
}());
var PageModule = new PageModuleClass();


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logger_Core__ = __webpack_require__(1);

var noop = function () { return undefined; };
var Logger = (function () {
    function Logger(className, enabled, logLevel, style) {
        this._logPrefix = "%c<<G2Analytics>>";
        this._className = "General";
        this._enabled = true;
        this._logLevel = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Debug;
        this._style = "";
        this._className = className;
        this._enabled = enabled;
        this._logLevel = logLevel;
        this._style = style;
    }
    Logger.prototype.setEnabled = function (val) {
        var clsName = this._className;
        this._enabled = val;
    };
    Logger.prototype.setLogLevel = function (level) {
        this._logLevel = level;
    };
    Logger.prototype.format = function () {
        return this._logPrefix + "[" + this._className + "] ";
    };
    Logger.prototype.getStyle = function (logLevel) {
        var style;
        var bg = "none";
        if (this._style) {
            style = this._style;
            bg = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["d" /* LOG_LEVEL_STYLE2 */][logLevel].bg;
        }
        else {
            style = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["e" /* LOG_LEVEL_STYLE */][logLevel];
            bg = __WEBPACK_IMPORTED_MODULE_0__Logger_Core__["d" /* LOG_LEVEL_STYLE2 */][logLevel].bg;
        }
        return ["color:" + style + ";font-weight:bold;"];
    };
    Object.defineProperty(Logger.prototype, "debug", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Debug)) {
                return console.debug.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Debug));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "info", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Info)) {
                return console.info.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Info));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "warn", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Warn)) {
                return console.warn.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Warn));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "error", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Error)) {
                return console.error.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Error));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "fatal", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Fatal)) {
                return console.error.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Fatal));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "trace", {
        get: function () {
            if (this.isEnabled(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Trace)) {
                return console.debug.bind(console, this.format(), this.getStyle(__WEBPACK_IMPORTED_MODULE_0__Logger_Core__["b" /* LogLevel */].Trace));
            }
            else {
                return noop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.isEnabled = function (logLevel) {
        if (logLevel >= this._logLevel && this._enabled) {
            return true;
        }
        else {
            return false;
        }
    };
    return Logger;
}());



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_PublicPlugin__ = __webpack_require__(69);

var pluginInstance = new __WEBPACK_IMPORTED_MODULE_0__plugin_PublicPlugin__["a" /* PublicPlugin */]();
window.G2Analytics = pluginInstance;
window.G2Insights = pluginInstance;
window.MG2Insights = pluginInstance;
var MG2DL = window["G2Analytics"].DataLayer;


/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonConfigData; });
var isReplacedByCI = function (replacedCIPattern) { return !replacedCIPattern.startsWith("#") && !replacedCIPattern.endsWith("#"); };
var eventsUrlCI = "https://events.mg2insights.com";
var eventsUrlFallback = "https://events.mg2insights.com";
var eventsUrl = isReplacedByCI(eventsUrlCI) ? eventsUrlCI : eventsUrlFallback;
var apiUrlCI = "https://api.mg2insights.com";
var apiUrlFallback = "https://api.mg2insights.com";
var apiUrl = isReplacedByCI(apiUrlCI) ? apiUrlCI : apiUrlFallback;
var CommonConfigData = {
    eventsUrl: eventsUrl + "/events",
    apiUrl: apiUrl + "/"
};


/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DLCdpPublic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_pageModule_PageModule__ = __webpack_require__(61);


var DLCdpPublic = (function () {
    function DLCdpPublic() {
    }
    DLCdpPublic.prototype.getUserData = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getDlInformation();
    };
    DLCdpPublic.prototype.getArticleStats = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Modules_pageModule_PageModule__["a" /* PageModule */].getArticleStats();
    };
    DLCdpPublic.prototype.getRecommendationsStats = function () {
        var isShowCategory = true;
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getRecommendations(isShowCategory);
    };
    DLCdpPublic.prototype.getRecommendations = function () {
        var isShowCategory = false;
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getRecommendations(isShowCategory);
    };
    DLCdpPublic.prototype.getInterestsStats = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getUserInterestsStats();
    };
    DLCdpPublic.prototype.getErStats = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErInterpretation();
    };
    DLCdpPublic.prototype.getApiVersion = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getApiVersion().then(function (versionData) {
            console.log("The version of the platform -" + versionData.version);
        }).catch(function (error) {
            console.log("The version is not get. Error -" + error);
        });
    };
    return DLCdpPublic;
}());



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PluginClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collectors_cdp_collectors_CdpCollectorModule__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_cdpModule_CdpModule__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collectors_gtmTag_collector_GtmTagModule__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_services_TagManagerService__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_services_Index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_services_AzureService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Core_storages_cookies_CookiesStorage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_constants_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Modules_pageModule_PageModule__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DLCdpPublic__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Modules_deviceModule_DeviceModule__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Modules_miscModule_MiscModule__ = __webpack_require__(60);

















var PluginClass = (function () {
    function PluginClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_4__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("Plugin");
        this.Logger.debug("**** G2Insights Initializing ****");
        this.sessionService = __WEBPACK_IMPORTED_MODULE_8__data_services_SessionService__["a" /* SessionService */].Instance;
        this.azureService = __WEBPACK_IMPORTED_MODULE_7__data_services_AzureService__["a" /* AzureService */].Instance;
        this.tagManagerService = __WEBPACK_IMPORTED_MODULE_5__data_services_TagManagerService__["a" /* TagManagerService */].Instance;
        this.dimensionService = __WEBPACK_IMPORTED_MODULE_6__data_services_Index__["a" /* MetaDataService */].Instance;
    }
    Object.defineProperty(PluginClass.prototype, "DataLayer", {
        get: function () {
            return this.tagManagerService.getDataLayer();
        },
        enumerable: false,
        configurable: true
    });
    PluginClass.prototype.init = function (opts) {
        var _this = this;
        try {
            __WEBPACK_IMPORTED_MODULE_12__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId()
                .then(function (deviceId) {
                _this.tagManagerService.setDLV("fingerPrintId", deviceId);
            }).catch(function () {
                var guid = "guid-" + __WEBPACK_IMPORTED_MODULE_14__Utils_Utils__["a" /* Utils */].createGUID();
                _this.tagManagerService.setDLV("fingerPrintId", guid);
                __WEBPACK_IMPORTED_MODULE_12__Utils_DeviceDetector__["a" /* DeviceDetector */].setCalculatedDeviceId(guid);
                __WEBPACK_IMPORTED_MODULE_6__data_services_Index__["b" /* EventService */].Instance.sendTagCollectedEvents();
            });
            if (!opts) {
                throw "No Options Passed In";
            }
            else {
                this.listenPluginsEvents();
                __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].setInitOptions(opts);
                var initModel = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getInitConfiguration();
                this.Logger.debug("Initializing G2Analytics with options...", opts);
                __WEBPACK_IMPORTED_MODULE_6__data_services_Index__["b" /* EventService */].Instance.resendFailedEvents();
                if (initModel.debug) {
                    __WEBPACK_IMPORTED_MODULE_9__Core_storages_cookies_CookiesStorage__["a" /* CookiesStorage */].set(__WEBPACK_IMPORTED_MODULE_10__core_constants_Constants__["a" /* Constants */].cookies.LogEnabled, initModel.debug.toString());
                }
                if (!initModel.containerId) {
                    throw "No Container Id Set";
                }
                if (!initModel.collectors) {
                    throw "No Collectors Set";
                }
                if (initModel.sessionId) {
                    this.Logger.debug("Has SessionId PageSessionId XXX....", initModel.sessionId);
                    this.sessionService.PageSessionId = initModel.sessionId;
                }
                this.dimensionService.setup(initModel.dimensions);
                if (initModel.analysis) {
                    this.azureService.setup(initModel.analysis);
                }
                if (initModel.collectors) {
                    if (initModel.cdp && initModel.cdp.enabled) {
                        __WEBPACK_IMPORTED_MODULE_15__Modules_deviceModule_DeviceModule__["a" /* DeviceModule */].setup();
                        __WEBPACK_IMPORTED_MODULE_1__collectors_cdp_collectors_CdpCollectorModule__["a" /* CdpCollectorModule */].setup(initModel.collectors);
                        window.g2i_dl = new __WEBPACK_IMPORTED_MODULE_13__DLCdpPublic__["a" /* DLCdpPublic */]();
                        __WEBPACK_IMPORTED_MODULE_2__modules_cdpModule_CdpModule__["a" /* CdpModule */].setDlInformation();
                        __WEBPACK_IMPORTED_MODULE_11__Modules_pageModule_PageModule__["a" /* PageModule */].sendContentToCdp();
                    }
                    __WEBPACK_IMPORTED_MODULE_3__collectors_gtmTag_collector_GtmTagModule__["a" /* GtmTagModule */].setup(initModel);
                }
                if (initModel.misc) {
                    __WEBPACK_IMPORTED_MODULE_16__Modules_miscModule_MiscModule__["a" /* MiscModule */].process(initModel.misc);
                }
                this.tagManagerService.setup(initModel.containerId);
                this.Logger.info("Done Setting Up Collectors");
            }
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    PluginClass.prototype.SetLoggerEnabled = function (val) {
        __WEBPACK_IMPORTED_MODULE_4__utils_logger_Logger_Core__["a" /* LoggerService */].setEnabled(val);
    };
    Object.defineProperty(PluginClass.prototype, "BrowserSessionId", {
        get: function () {
            return this.sessionService.getDeviceSessionId();
        },
        enumerable: false,
        configurable: true
    });
    PluginClass.prototype.SetLogLevel = function (strLogLevel) {
        __WEBPACK_IMPORTED_MODULE_4__utils_logger_Logger_Core__["a" /* LoggerService */].setLevel(strLogLevel);
    };
    PluginClass.prototype.listenPluginsEvents = function () {
        var _this = this;
        window.addEventListener("Loader:Recalculate:SessionId", function (eventData) {
            _this.sessionService.PageSessionId = eventData.detail;
        });
    };
    return PluginClass;
}());

var Plugin = new PluginClass();


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Plugin__ = __webpack_require__(68);

var PublicPlugin = (function () {
    function PublicPlugin() {
    }
    PublicPlugin.prototype.init = function (initOptions) {
        __WEBPACK_IMPORTED_MODULE_0__Plugin__["a" /* Plugin */].init(initOptions);
    };
    Object.defineProperty(PublicPlugin.prototype, "DataLayer", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__Plugin__["a" /* Plugin */].DataLayer;
        },
        enumerable: false,
        configurable: true
    });
    PublicPlugin.prototype.setLoggerEnabled = function (val) {
        __WEBPACK_IMPORTED_MODULE_0__Plugin__["a" /* Plugin */].SetLoggerEnabled(val);
    };
    PublicPlugin.prototype.setLogLevel = function (strLogLevel) {
        __WEBPACK_IMPORTED_MODULE_0__Plugin__["a" /* Plugin */].SetLogLevel(strLogLevel);
    };
    PublicPlugin.prototype.getVersion = function () {
        return "Version: " + ("1.8.0.21" || "local");
    };
    ;
    PublicPlugin.prototype.getVersionInfo = function () {
        return "Version: " + ("1.8.0.21" || "local") + ", Build: " + ("V.1.8.0.21-20201014.2" || "local");
    };
    ;
    return PublicPlugin;
}());



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CdpModuleClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpCollectorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CollectorFactory__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_commonEvents_CommonEventsCollector__ = __webpack_require__(104);



var CdpModuleClass = (function () {
    function CdpModuleClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_1__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("CdpModule");
        this.CollectMetaTags = false;
        this.firedEvents = [];
        this.sendEventsDelay = 0;
    }
    CdpModuleClass.prototype.setup = function (collectors) {
        var _this = this;
        try {
            var isExcludeCommonPageView_1 = false;
            collectors.forEach(function (item) {
                var collectorType = new __WEBPACK_IMPORTED_MODULE_0__CollectorFactory__["a" /* CollectorFactory */](item).createCollector();
                _this.Logger.info("@ forEach.Collector = collectorType", collectorType);
                if (!collectorType)
                    return;
                collectorType.registerEvents();
                if (collectorType.isHavePageViewEvent()) {
                    isExcludeCommonPageView_1 = true;
                }
            });
            var commonEvents = new __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_commonEvents_CommonEventsCollector__["a" /* CommonEventsCollector */](isExcludeCommonPageView_1);
            commonEvents.registerEvents();
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return CdpModuleClass;
}());

var CdpCollectorModule = new CdpModuleClass();


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectorFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collectors_connext_collector_ConnextCollector__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collectors_sp_collector_SpCollector__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Core_base_factory_Factory__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var CollectorFactory = (function (_super) {
    __extends(CollectorFactory, _super);
    function CollectorFactory(collector) {
        var _this = _super.call(this) || this;
        _this.Logger = __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("CollectorFactory");
        _this.collectMetaTags = false;
        _this.collector = collector;
        return _this;
    }
    CollectorFactory.prototype.createCollector = function () {
        try {
            var collector = this.collector;
            this.Logger.trace("Creating Collector: ", collector);
            switch (collector.toUpperCase()) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__["a" /* CollectorTypes */].Connext.toUpperCase():
                    this.collectMetaTags = true;
                    this.collectorType = new __WEBPACK_IMPORTED_MODULE_1__collectors_connext_collector_ConnextCollector__["a" /* ConnextCollector */]();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__["a" /* CollectorTypes */].SP.toUpperCase():
                    this.collectMetaTags = false;
                    this.collectorType = new __WEBPACK_IMPORTED_MODULE_2__collectors_sp_collector_SpCollector__["a" /* SpCollector */]();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__["a" /* CollectorTypes */].Flittz.toUpperCase():
                    this.collectMetaTags = true;
                    break;
                default:
                    throw "Not a valid collector";
            }
            return this.collectorType;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return CollectorFactory;
}(__WEBPACK_IMPORTED_MODULE_3__Core_base_factory_Factory__["a" /* Factory */]));



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_EventService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Data_services_MetaDataService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collector__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(82);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ConnextCollector = (function (_super) {
    __extends(ConnextCollector, _super);
    function ConnextCollector() {
        var _this = _super.call(this) || this;
        _this.metaDataService = __WEBPACK_IMPORTED_MODULE_1__Data_services_MetaDataService__["a" /* MetaDataService */].Instance;
        _this.eventService = __WEBPACK_IMPORTED_MODULE_0__Data_services_EventService__["a" /* EventService */].Instance;
        _this.events = __WEBPACK_IMPORTED_MODULE_3__events__;
        _this.sendMetaData();
        _this.metaDataService.process();
        return _this;
    }
    ConnextCollector.prototype.sendMetaData = function () {
        this.eventService.sendEvent("metaTagsCollected", this.metaDataService.analyticsDimensions);
    };
    ConnextCollector.prototype.isHavePageViewEvent = function () {
        return true;
    };
    return ConnextCollector;
}(__WEBPACK_IMPORTED_MODULE_2__Collector__["a" /* Collector */]));



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionShown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Data_models_connext_ActionModels__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ActionShown = (function (_super) {
    __extends(ActionShown, _super);
    function ActionShown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onActionShown";
        return _this;
    }
    ActionShown.prototype.updateCustomProperties = function () {
        var actionShowEventData = this.originalEventData.EventData;
        this.eventModel.EventType = "ActionShown";
        this.eventModel.EventName = actionShowEventData.Name;
        var eventData = {
            Type: actionShowEventData.ActionType || __WEBPACK_IMPORTED_MODULE_1__Data_models_connext_ActionModels__["b" /* ActionTypeDict */][this.originalEventData.EventData.ActionTypeId],
            UserER: __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode(),
            UserERP: __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode()
        };
        this.transformEventData(eventData);
    };
    return ActionShown;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ActivateSuccess = (function (_super) {
    __extends(ActivateSuccess, _super);
    function ActivateSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onActivationFormClosed";
        return _this;
    }
    ActivateSuccess.prototype.getEventModel = function () {
        this.eventModel = _super.prototype.getEventModel.call(this);
        this.eventModel.EventType = "ActivateSuccess";
        this.eventModel.EventName = "ActivateSuccess";
        if (this.originalEventData.EventData.ActivateStatus === "success") {
            this.transformEventData({});
            return this.eventModel;
        }
        else {
            return null;
        }
    };
    return ActivateSuccess;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Click; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_connextModule_ConnextModule__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var Click = (function (_super) {
    __extends(Click, _super);
    function Click() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.socialType = null;
        return _this;
    }
    Click.prototype.listen = function () {
        var _this = this;
        var eventName = "click";
        document.addEventListener(eventName, function (event) {
            if (event.type !== eventName) {
                return;
            }
            _this.Logger.debug("Click Event", event, "e.target", event.target);
            _this.clickedElement = event.target;
            _this.clearPreviousData();
            _this.originalEventData = event;
            _this.socialType = null;
            _this.actionType = null;
            if (__WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].getAttributeOfDomOrParents(_this.clickedElement, "data-mg2-tester")) {
                _this.Logger.debug("is tester, ignoring");
                return false;
            }
            _this.actionType = __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].getAttributeOfDomOrParents(_this.clickedElement, "data-mg2-action");
            if (!_this.actionType) {
                var parentA = __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].getParentDomByTagName(_this.clickedElement, "a");
                if (parentA) {
                    _this.Logger.debug("Click Event", "parentA", parentA);
                    _this.socialType = _this.checkForSocialLinks(parentA);
                    _this.Logger.debug("Click Event", "socialActionType", _this.socialType);
                    if (_this.socialType) {
                        _this.Logger.debug("HAS SOCIAL", _this.socialType);
                        _this.actionType = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Social;
                    }
                    else {
                        _this.actionType = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Other;
                    }
                }
                else {
                    _this.actionType = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Other;
                }
            }
            else {
                var name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Other;
                switch (_this.actionType) {
                    case "login": {
                        name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Login;
                        break;
                    }
                    case "activation":
                        {
                            name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Activate;
                            break;
                        }
                        ;
                    case "register":
                        {
                            name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Register;
                            break;
                        }
                        ;
                    case "logout":
                        {
                            name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Logout;
                            break;
                        }
                        ;
                    case "upgrade":
                        {
                            name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Upgrade;
                            break;
                        }
                        ;
                    case "click": {
                        if (__WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].checkForNewsletterSignUpClick(event.target)) {
                            name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].SignUp;
                        }
                        break;
                    }
                    default: {
                        name_1 = __WEBPACK_IMPORTED_MODULE_5__Collectors_constants_Events__["b" /* ClickEventName */].Other;
                        break;
                    }
                }
                _this.actionType = name_1;
            }
            _this.Logger.debug("******** Click Event ", "actionType=>", _this.actionType, " el=> ", _this.clickedElement);
            __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
        });
    };
    Click.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "Click";
        var payload = this.createDomTargetPayload(this.clickedElement);
        if (this.socialType) {
            payload["TargetSocialNetwork"] = this.socialType;
        }
        var actionData = __WEBPACK_IMPORTED_MODULE_2__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getActionDataFromElement(this.clickedElement);
        if (actionData) {
            payload["ActionId"] = actionData["ActionId"];
            payload["ActionName"] = actionData["ActionName"];
            payload["IsActionClick"] = true;
        }
        ;
        this.transformEventData(payload);
        this.eventModel.EventName = __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].toTitleCase(this.actionType);
    };
    Click.prototype.createDomTargetPayload = function (target) {
        var tagName = target.tagName.toLowerCase();
        var targetAttribute;
        var targetValue;
        if (target.id && target.id !== "") {
            targetAttribute = "Id";
            targetValue = target.id;
        }
        else if (target.name && target.name !== "") {
            targetAttribute = "Name";
            targetValue = target.name;
        }
        else if (target.className && target.className !== "") {
            targetAttribute = "Class";
            targetValue = target.className;
        }
        else {
            targetAttribute = "Label";
            targetValue = target.textContent || target.innerText;
            switch (tagName) {
                case "img":
                case "audio":
                case "video":
                    targetAttribute = "src";
                    targetValue = target.getAttribute("src");
                    break;
            }
        }
        if (tagName === "html") {
            targetValue = "html";
        }
        var payload = {
            "TargetType": tagName,
            "TargetAttribute": targetAttribute,
            "TargetValue": targetValue
        };
        return payload;
    };
    Click.prototype.checkForSocialLinks = function (el) {
        this.Logger.debug("checkForSocialLinks", "el", el);
        var cls = el.className.toLowerCase();
        if (cls) {
            if (cls.includes("facebook")) {
                return "Facebook";
            }
            else if (cls.includes("twitter")) {
                return "Twitter";
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    Click.prototype.useInCalculateFirstVisitModel = function () {
        return true;
    };
    Click.prototype.getFirstVisitProperty = function () {
        return __WEBPACK_IMPORTED_MODULE_4__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountClick;
    };
    return Click;
}(__WEBPACK_IMPORTED_MODULE_1__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextPageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_models_pageView_ConnextPageViewDataModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ConnextPageView = (function (_super) {
    __extends(ConnextPageView, _super);
    function ConnextPageView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onFinish";
        return _this;
    }
    ConnextPageView.prototype.updateCustomProperties = function () {
        this.eventModel.EventName = __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__["a" /* EventNames */].PageView;
        this.eventModel.EventType = __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__["a" /* EventNames */].PageView;
        __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].setLayoutCode(this.eventModel.SiteCode);
        var eventData = new __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_models_pageView_ConnextPageViewDataModel__["a" /* ConnextPageViewDataModel */](this.originalEventData);
        this.transformEventData(eventData);
    };
    ConnextPageView.prototype.useInCalculateFirstVisitModel = function () {
        return true;
    };
    ConnextPageView.prototype.getFirstVisitProperty = function () {
        return __WEBPACK_IMPORTED_MODULE_2__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountPageview;
    };
    return ConnextPageView;
}(__WEBPACK_IMPORTED_MODULE_1__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CreateAccount = (function (_super) {
    __extends(CreateAccount, _super);
    function CreateAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventNames = ["onActivationAccountCreated", "onRegistrationSuccessRegister"];
        return _this;
    }
    CreateAccount.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "CreateAccount";
        this.eventModel.EventName = "CreateAccount";
        var eventData = {};
        this.transformEventData(eventData);
    };
    CreateAccount.prototype.useInCalculateFirstVisitModel = function () {
        return true;
    };
    CreateAccount.prototype.getFirstVisitProperty = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountCreateAccountEvents;
    };
    return CreateAccount;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrlC; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CtrlC = (function (_super) {
    __extends(CtrlC, _super);
    function CtrlC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "copy";
        return _this;
    }
    CtrlC.prototype.listen = function () {
        var _this = this;
        try {
            this.Logger.trace("addEventListener...", this.originalEventName);
            document.addEventListener(this.originalEventName, function (e) {
                _this.Logger.trace("Firing", _this.eventModel.EventName);
                _this.originalEventData = e;
                __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
            });
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    CtrlC.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "CtrlC";
        this.eventModel.EventName = "CtrlC";
        this.transformEventData({});
    };
    return CtrlC;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onLoginSuccess";
        return _this;
    }
    Login.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "Login";
        this.eventModel.EventName = "Login";
        var eventData = {};
        this.transformEventData(eventData);
    };
    return Login;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterArrival; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextEvent__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NewsletterArrival = (function (_super) {
    __extends(NewsletterArrival, _super);
    function NewsletterArrival() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onNewsletterArrival";
        return _this;
    }
    NewsletterArrival.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "NewsletterArrival";
        this.eventModel.EventName = "NewsletterArrival";
        var eventData = {
            Email: this.originalEventData.EventData.Email
        };
        this.transformEventData(eventData);
        this.fillEventDataByPreferences();
    };
    NewsletterArrival.prototype.fillEventDataByPreferences = function () {
        var _this = this;
        var eventData = this.originalEventData.EventData;
        if (eventData && Array.isArray(eventData.EmailPreferences)) {
            eventData.EmailPreferences.forEach(function (emailPreference) {
                _this.eventModel.EventData.push({ 'Key': 'EmailPreferences', 'Value': __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].objectToBigQueryString(emailPreference) });
            });
        }
    };
    return NewsletterArrival;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSignup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnextEvent__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NewsletterSignup = (function (_super) {
    __extends(NewsletterSignup, _super);
    function NewsletterSignup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onNewsletterSignUp";
        return _this;
    }
    NewsletterSignup.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "NewsletterSignup";
        this.eventModel.EventName = "NewsletterSignup";
        this.fillEventDataByPreferences();
    };
    NewsletterSignup.prototype.fillEventDataByPreferences = function () {
        var _this = this;
        var eventData = Object.assign({}, this.originalEventData.EventData);
        this.eventModel.EventData.push({ "Key": "Email", "Value": eventData.Email });
        if (eventData.EmailPreferences) {
            eventData.EmailPreferences.forEach(function (emailPreference) {
                _this.eventModel.EventData.push({ "Key": "EmailPreferences", "Value": __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].objectToBigQueryString(emailPreference) });
            });
        }
        else {
            return this.fillEventModelNxtV1_7(eventData);
        }
    };
    NewsletterSignup.prototype.fillEventModelNxtV1_7 = function (eventData) {
        var sendEventData = {};
        if (eventData.EmailPreferenceId) {
            sendEventData = {
                PreferenceId: eventData.EmailPreferenceId,
            };
        }
        ;
        this.transformEventData(sendEventData);
        return this.eventModel;
    };
    return NewsletterSignup;
}(__WEBPACK_IMPORTED_MODULE_1__ConnextEvent__["a" /* ConnextEvent */]));



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionShown__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionShown", function() { return __WEBPACK_IMPORTED_MODULE_0__ActionShown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivateSuccess__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateSuccess", function() { return __WEBPACK_IMPORTED_MODULE_1__ActivateSuccess__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Click__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Click", function() { return __WEBPACK_IMPORTED_MODULE_2__Click__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CreateAccount__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccount", function() { return __WEBPACK_IMPORTED_MODULE_3__CreateAccount__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CtrlC__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrlC", function() { return __WEBPACK_IMPORTED_MODULE_4__CtrlC__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Login__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return __WEBPACK_IMPORTED_MODULE_5__Login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NewsletterSignup__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterSignup", function() { return __WEBPACK_IMPORTED_MODULE_6__NewsletterSignup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ConnextPageView__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConnextPageView", function() { return __WEBPACK_IMPORTED_MODULE_7__ConnextPageView__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NewsletterArrival__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterArrival", function() { return __WEBPACK_IMPORTED_MODULE_8__NewsletterArrival__["a"]; });











/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextUserModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__ = __webpack_require__(4);

var ConnextUserModel = (function () {
    function ConnextUserModel() {
        this.Id = this.getConnextUserId();
        this.Status = this.getConnextUserStatus();
        this.ER = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode();
        this.ERP = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode();
        this.Id = this.getConnextUserId();
        this.Status = this.getConnextUserStatus();
        this.ER = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode();
        this.ERP = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode();
    }
    ConnextUserModel.prototype.getConnextUserStatus = function () {
        if (window.CnnXt && window.CnnXt.User) {
            return window.CnnXt.User.getUserState() || "";
        }
        if (window.Connext) {
            return window.Connext.Storage.GetUserState() || "";
        }
        return "";
    };
    ConnextUserModel.prototype.getConnextUserId = function () {
        if (window.CnnXt && window.CnnXt.User) {
            return window.CnnXt.User.getMasterId() || "";
        }
        if (window.Connext) {
            var userData = window.Connext.Storage.GetUserData();
            if (userData) {
                return userData.MasterId || "";
            }
        }
        return "";
    };
    return ConnextUserModel;
}());



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collector__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(95);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SpCollector = (function (_super) {
    __extends(SpCollector, _super);
    function SpCollector() {
        var _this = _super.call(this) || this;
        _this.events = __WEBPACK_IMPORTED_MODULE_1__events__;
        return _this;
    }
    return SpCollector;
}(__WEBPACK_IMPORTED_MODULE_0__Collector__["a" /* Collector */]));



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbandonClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AbandonClosed = (function (_super) {
    __extends(AbandonClosed, _super);
    function AbandonClosed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "abandon_closed_e";
        return _this;
    }
    AbandonClosed.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "AbandonClosed";
        this.eventModel.EventName = "AbandonClosed";
        this.transformEventData({});
    };
    return AbandonClosed;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbandonPresented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AbandonPresented = (function (_super) {
    __extends(AbandonPresented, _super);
    function AbandonPresented() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "abandon_presented_e";
        return _this;
    }
    AbandonPresented.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "AbandonPresented";
        this.eventModel.EventName = "AbandonPresented";
        this.transformEventData({});
    };
    return AbandonPresented;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutStart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CheckoutStart = (function (_super) {
    __extends(CheckoutStart, _super);
    function CheckoutStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "presentation_loaded_e";
        return _this;
    }
    CheckoutStart.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "CheckoutStart";
        this.eventModel.EventName = "CheckoutStart";
        this.transformEventData({
            Url: this.originalEventData.url,
            UserER: __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode(),
            UserERP: __WEBPACK_IMPORTED_MODULE_2__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode()
        });
    };
    CheckoutStart.prototype.useInCalculateFirstVisitModel = function () {
        return true;
    };
    CheckoutStart.prototype.getFirstVisitProperty = function () {
        return __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountCheckoutStartEvents;
    };
    return CheckoutStart;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedNewUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_models_UserInformationModel__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CreatedNewUser = (function (_super) {
    __extends(CreatedNewUser, _super);
    function CreatedNewUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "created_new_user_e";
        return _this;
    }
    CreatedNewUser.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "CreatedNewUser";
        this.eventModel.EventName = "CreatedNewUser";
        var eventData = {
            User: new __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_models_UserInformationModel__["a" /* UserInformationModel */](this.originalEventData.userInformation),
            Offer: new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__["a" /* ShortOfferModel */](this.originalEventData.offer),
            CustomerRegistrationId: this.originalEventData.customerRegistrationId
        };
        this.transformEventData(eventData);
    };
    return CreatedNewUser;
}(__WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCompleted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_AddressModel__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ShortOfferModel__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FormCompleted = (function (_super) {
    __extends(FormCompleted, _super);
    function FormCompleted() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "billing_address_completed_e";
        return _this;
    }
    FormCompleted.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "FormCompleted";
        this.eventModel.EventName = "BillingAddress";
        var eventData = {
            Billing: new __WEBPACK_IMPORTED_MODULE_1__models_AddressModel__["a" /* AddressModel */](this.originalEventData.billingAddress),
            Offer: new __WEBPACK_IMPORTED_MODULE_2__models_ShortOfferModel__["a" /* ShortOfferModel */](this.originalEventData.offer)
        };
        this.transformEventData(eventData);
    };
    return FormCompleted;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCompletedDeliveryAddress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_AddressModel__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FormCompletedDeliveryAddress = (function (_super) {
    __extends(FormCompletedDeliveryAddress, _super);
    function FormCompletedDeliveryAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "delivery_address_completed_e";
        return _this;
    }
    FormCompletedDeliveryAddress.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "FormCompleted";
        this.eventModel.EventName = "DeliveryAddress";
        var eventData = {
            Delivery: new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_AddressModel__["a" /* AddressModel */](this.originalEventData.deliveryAddress),
            Offer: new __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__["a" /* ShortOfferModel */](this.originalEventData.offer)
        };
        this.transformEventData(eventData);
    };
    return FormCompletedDeliveryAddress;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCompletedPayment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_constants_PaymentTypes__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ShortOfferModel__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FormCompletedPayment = (function (_super) {
    __extends(FormCompletedPayment, _super);
    function FormCompletedPayment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventNames = Object.keys(__WEBPACK_IMPORTED_MODULE_1__Collectors_constants_PaymentTypes__["a" /* PaymentTypes */]);
        return _this;
    }
    FormCompletedPayment.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "FormCompleted";
        this.eventModel.EventName = "Payment";
        var eventData = {
            Offer: new __WEBPACK_IMPORTED_MODULE_2__models_ShortOfferModel__["a" /* ShortOfferModel */](this.originalEventData.offer),
            PaymentMethodName: __WEBPACK_IMPORTED_MODULE_1__Collectors_constants_PaymentTypes__["a" /* PaymentTypes */][this.currentEventName]
        };
        this.transformEventData(eventData);
    };
    return FormCompletedPayment;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCompletedUserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_models_UserInformationModel__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FormCompletedUserInfo = (function (_super) {
    __extends(FormCompletedUserInfo, _super);
    function FormCompletedUserInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "user_info_completed_e";
        return _this;
    }
    FormCompletedUserInfo.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "FormCompleted";
        this.eventModel.EventName = "UserInfo";
        if (this.originalEventData) {
            var eventDataObject = {
                User: new __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_collectors_sp_collector_models_UserInformationModel__["a" /* UserInformationModel */](this.originalEventData.userInformation),
                Offer: new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_collectors_sp_collector_models_ShortOfferModel__["a" /* ShortOfferModel */](this.originalEventData.offer)
            };
            this.transformEventData(eventDataObject);
        }
    };
    return FormCompletedUserInfo;
}(__WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_collectors_sp_collector_SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdleClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IdleClosed = (function (_super) {
    __extends(IdleClosed, _super);
    function IdleClosed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "idle_closed_e";
        return _this;
    }
    IdleClosed.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "IdleClosed";
        this.eventModel.EventName = "IdleClosed";
        this.transformEventData({});
    };
    return IdleClosed;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdlePresented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpEvent__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IdlePresented = (function (_super) {
    __extends(IdlePresented, _super);
    function IdlePresented() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "idle_presented_e";
        return _this;
    }
    IdlePresented.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "IdlePresented";
        this.eventModel.EventName = "IdlePresented";
        this.transformEventData({});
    };
    return IdlePresented;
}(__WEBPACK_IMPORTED_MODULE_0__SpEvent__["a" /* SpEvent */]));



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckoutStart__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutStart", function() { return __WEBPACK_IMPORTED_MODULE_0__CheckoutStart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbandonClosed__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AbandonClosed", function() { return __WEBPACK_IMPORTED_MODULE_1__AbandonClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbandonPresented__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AbandonPresented", function() { return __WEBPACK_IMPORTED_MODULE_2__AbandonPresented__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IdleClosed__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IdleClosed", function() { return __WEBPACK_IMPORTED_MODULE_3__IdleClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IdlePresented__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IdlePresented", function() { return __WEBPACK_IMPORTED_MODULE_4__IdlePresented__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__ = __webpack_require__(100);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UpsellRemoved", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormCompletedPayment", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormCompleted", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CreatedNewUser", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormCompletedDeliveryAddress", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormCompletedUserInfo", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OfferSelected", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SubscriptionSuccess", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UpsellSelected", function() { return __WEBPACK_IMPORTED_MODULE_5__offerEventData_index__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offersEventData_index__ = __webpack_require__(103);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OffersPresented", function() { return __WEBPACK_IMPORTED_MODULE_6__offersEventData_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ApplePayPresented", function() { return __WEBPACK_IMPORTED_MODULE_6__offersEventData_index__["b"]; });









/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferSelected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OfferSelected = (function (_super) {
    __extends(OfferSelected, _super);
    function OfferSelected() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "offer_selected_e";
        return _this;
    }
    OfferSelected.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "OfferSelected";
        this.eventModel.EventName = this.originalEventData.offer.Name;
    };
    return OfferSelected;
}(__WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__["a" /* OfferEventDataEvent */]));



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_AddressModel__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_UserInformationModel__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SubscriptionSuccess = (function (_super) {
    __extends(SubscriptionSuccess, _super);
    function SubscriptionSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "add_subscription_success_e";
        return _this;
    }
    SubscriptionSuccess.prototype.updateCustomProperties = function () {
        try {
            this.eventModel.EventType = "SubscriptionSuccess";
            this.eventModel.EventName = "SubscriptionSuccess";
            var subscription = this.originalEventData.subscription || {};
            var eventData = {
                Delivery: new __WEBPACK_IMPORTED_MODULE_1__models_AddressModel__["a" /* AddressModel */](this.originalEventData.deliveryAddress),
                Billing: new __WEBPACK_IMPORTED_MODULE_1__models_AddressModel__["a" /* AddressModel */](this.originalEventData.billingAddress),
                PaymentMethodName: this.originalEventData.paymentOption,
                User: new __WEBPACK_IMPORTED_MODULE_2__models_UserInformationModel__["a" /* UserInformationModel */](this.originalEventData.userInformation),
                UserER: __WEBPACK_IMPORTED_MODULE_3__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode(),
                UserERP: __WEBPACK_IMPORTED_MODULE_3__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode(),
                CustomerRegistrationId: this.getCustomerRegistrationId(),
                SubscriberId: subscription.SubscriberID,
                SubscriptionId: subscription.SubscriptionID,
                AccountNumber: subscription.AccountNumber
            };
            this.transformEventData(eventData);
        }
        catch (error) {
            this.Logger.error("SubscriptionSuccess", error);
        }
    };
    SubscriptionSuccess.prototype.getCustomerRegistrationId = function () {
        if (this.originalEventData.userInformation) {
            return this.originalEventData.userInformation.customerRegistrationId;
        }
        else {
            return this.originalEventData.customerRegistrationId;
        }
    };
    return SubscriptionSuccess;
}(__WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__["a" /* OfferEventDataEvent */]));



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpsellRemoved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UpsellRemoved = (function (_super) {
    __extends(UpsellRemoved, _super);
    function UpsellRemoved() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "upsell_removed_e";
        return _this;
    }
    UpsellRemoved.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "UpsellRemoved";
        this.eventModel.EventName = this.originalEventData.offer.Name;
    };
    return UpsellRemoved;
}(__WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__["a" /* OfferEventDataEvent */]));



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpsellSelected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UpsellSelected = (function (_super) {
    __extends(UpsellSelected, _super);
    function UpsellSelected() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "upsell_selected_e";
        return _this;
    }
    UpsellSelected.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "UpsellSelected";
        this.eventModel.EventName = this.originalEventData.offer.Name;
    };
    return UpsellSelected;
}(__WEBPACK_IMPORTED_MODULE_0__OfferEventDataEvent__["a" /* OfferEventDataEvent */]));



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UpsellRemoved__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__UpsellRemoved__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormCompletedPayment__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__FormCompletedPayment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormCompleted__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__FormCompleted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CreatedNewUser__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__CreatedNewUser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormCompletedDeliveryAddress__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__FormCompletedDeliveryAddress__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FormCompletedUserInfo__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__FormCompletedUserInfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OfferSelected__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__OfferSelected__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SubscriptionSuccess__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__SubscriptionSuccess__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UpsellSelected__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__UpsellSelected__["a"]; });











/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplePayPresented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OffersEventDataEvent__ = __webpack_require__(39);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ApplePayPresented = (function (_super) {
    __extends(ApplePayPresented, _super);
    function ApplePayPresented() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "apple_pay_presented_e";
        return _this;
    }
    ApplePayPresented.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "ApplePayPresented";
        this.eventModel.EventName = "ApplePayPresented";
    };
    return ApplePayPresented;
}(__WEBPACK_IMPORTED_MODULE_0__OffersEventDataEvent__["a" /* OffersEventDataEvent */]));



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPresented; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OffersEventDataEvent__ = __webpack_require__(39);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OffersPresented = (function (_super) {
    __extends(OffersPresented, _super);
    function OffersPresented() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "offers_presented_e";
        return _this;
    }
    OffersPresented.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "OffersPresented";
        this.eventModel.EventName = "OffersPresented";
    };
    return OffersPresented;
}(__WEBPACK_IMPORTED_MODULE_0__OffersEventDataEvent__["a" /* OffersEventDataEvent */]));



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OffersPresented__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__OffersPresented__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApplePayPresented__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ApplePayPresented__["a"]; });




/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonEventsCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collector__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_constants_Events__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CommonEventsCollector = (function (_super) {
    __extends(CommonEventsCollector, _super);
    function CommonEventsCollector(isExcludePageView) {
        var _this = _super.call(this) || this;
        _this.events = [];
        _this.events = __WEBPACK_IMPORTED_MODULE_1__events__;
        _this.isExcludePageView = isExcludePageView;
        return _this;
    }
    CommonEventsCollector.prototype.registerEvents = function () {
        var _this = this;
        var events = Object.keys(this.events);
        if (events && this.isExcludePageView) {
            events = events.filter(function (eventName) { return eventName != __WEBPACK_IMPORTED_MODULE_2__Collectors_constants_Events__["a" /* EventNames */].PageView; });
        }
        events.forEach(function (eventName) {
            try {
                var eventListener = new _this.events[eventName]();
                _this.listeners[eventName] = eventListener;
                eventListener.listen();
            }
            catch (e) {
                _this.Logger.fatal(e);
            }
        });
    };
    ;
    return CommonEventsCollector;
}(__WEBPACK_IMPORTED_MODULE_0__Collector__["a" /* Collector */]));



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceIdChange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Core_constants_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modules_deviceModule_DeviceModule__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DeviceIdChange = (function (_super) {
    __extends(DeviceIdChange, _super);
    function DeviceIdChange() {
        var _this = _super.call(this) || this;
        _this.originalEventName = "onDeviceIdChange";
        return _this;
    }
    DeviceIdChange.prototype.listenEvent = function (eventName) {
        var _this = this;
        try {
            this.Logger.trace("addEventListener...", eventName);
            if (window.Fingerprint !== undefined && typeof window.Fingerprint.onChangedDeviceId == 'function') {
                return window.Fingerprint.onChangedDeviceId()
                    .then(function (deviceInfo) {
                    _this.clearPreviousData();
                    _this.setOriginalEventData(deviceInfo);
                    _this.currentEventName = eventName;
                    __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
                    __WEBPACK_IMPORTED_MODULE_3__Modules_deviceModule_DeviceModule__["a" /* DeviceModule */].deviceIChanged(deviceInfo);
                }).catch(function () {
                    __WEBPACK_IMPORTED_MODULE_3__Modules_deviceModule_DeviceModule__["a" /* DeviceModule */].deviceIdIsNotChanged();
                });
            }
            else {
                this.Logger.warn("Fingerprint is undefined... or version is not support regenerate onChangedDeviceId", eventName);
            }
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    DeviceIdChange.prototype.setOriginalData = function (eventData) {
        this.originalEventData = eventData;
    };
    DeviceIdChange.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "OnDeviceIdChange";
        this.eventModel.EventName = this.eventModel.EventType;
        this.eventModel.EventSource = __WEBPACK_IMPORTED_MODULE_2__Core_constants_Constants__["a" /* Constants */].EventsSources.G2Insights;
        this.eventModel.DeviceId = this.originalEventData.id;
        var eventData = {
            NewDeviceId: this.originalEventData.newId,
            G2iDeviceId: __WEBPACK_IMPORTED_MODULE_4__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getG2iDeviceId()
        };
        this.transformEventData(eventData);
    };
    return DeviceIdChange;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__["a" /* CdpEvent */]));



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Core_constants_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Collectors_cdp_collectors_models_pageView_DeviceModel__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modules_miscModule_MiscModule__ = __webpack_require__(60);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var LeavePage = (function (_super) {
    __extends(LeavePage, _super);
    function LeavePage() {
        var _this = _super.call(this) || this;
        _this.IsAsync = false;
        _this.originalEventName = __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].getPageLeaveEventTrigger();
        return _this;
    }
    LeavePage.prototype.listenEvent = function (eventName) {
        var _this = this;
        try {
            this.Logger.trace("addEventListener...", eventName);
            window.addEventListener(eventName, function (e) {
                _this.Logger.trace("Firing eventName", _this.eventModel.EventName);
                _this.clearPreviousData();
                _this.setOriginalEventData(e.detail);
                _this.currentEventName = eventName;
                __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].setClosePageFlag(true);
                __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
            }, false);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    LeavePage.prototype.setOriginalData = function (eventData) {
        this.originalEventData = eventData;
    };
    LeavePage.prototype.getEndPageSession = function () {
        return Math.floor(Date.now() / 1000);
    };
    LeavePage.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = "PageLeave";
        this.eventModel.EventName = this.eventModel.EventType;
        this.eventModel.EventSource = __WEBPACK_IMPORTED_MODULE_3__Core_constants_Constants__["a" /* Constants */].EventsSources.G2Insights;
        var startPageSession = this.sessionService.getStartPageSession();
        var endPageSession = this.getEndPageSession();
        this.eventModel.EventTimestamp = endPageSession;
        var eventData = {
            StartSession: startPageSession,
            EndSession: endPageSession,
            LengthSession: endPageSession - startPageSession,
            Device: new __WEBPACK_IMPORTED_MODULE_4__Collectors_cdp_collectors_models_pageView_DeviceModel__["a" /* DeviceModel */]()
        };
        eventData = this.addMiscInfo(eventData);
        this.transformEventData(eventData);
    };
    LeavePage.prototype.addMiscInfo = function (eventData) {
        eventData.Misc = __WEBPACK_IMPORTED_MODULE_5__Modules_miscModule_MiscModule__["a" /* MiscModule */].getData();
        return eventData;
    };
    return LeavePage;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__["a" /* CdpEvent */]));



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_models_pageView_PageViewDataModel__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collectors_cdp_collectors_CdpEventsManager__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_DateUtil__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Core_constants_Constants__ = __webpack_require__(6);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var PageView = (function (_super) {
    __extends(PageView, _super);
    function PageView() {
        var _this = _super.call(this) || this;
        _this.IsAsync = false;
        _this.originalEventName = __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].getPageLeaveEventTrigger();
        return _this;
    }
    PageView.prototype.listenEvent = function (eventName) {
        var _this = this;
        if (this.isStopListen)
            return;
        __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].getUserPosition().then(function (position) {
            _this.userPosition = position;
        });
        try {
            this.Logger.trace("addEventListener...", eventName);
            window.addEventListener(eventName, function (e) {
                if (_this.isStopListen)
                    return;
                _this.Logger.trace("Firing eventName", _this.eventModel.EventName);
                _this.clearPreviousData();
                _this.setOriginalEventData(e.detail);
                _this.currentEventName = eventName;
                __WEBPACK_IMPORTED_MODULE_5__Collectors_cdp_collectors_CdpEventsManager__["a" /* CdpEventsManager */].eventFire(_this);
            }, false);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    PageView.prototype.setOriginalData = function (eventData) {
        this.originalEventData = eventData;
    };
    PageView.prototype.updateCustomProperties = function () {
        this.eventModel.EventType = __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__["a" /* EventNames */].PageView;
        this.eventModel.EventName = __WEBPACK_IMPORTED_MODULE_4__Collectors_constants_Events__["a" /* EventNames */].PageView;
        this.eventModel.EventSource = __WEBPACK_IMPORTED_MODULE_7__Core_constants_Constants__["a" /* Constants */].EventsSources.G2Insights;
        this.eventModel.EventTimestamp = __WEBPACK_IMPORTED_MODULE_6__Utils_DateUtil__["a" /* DateUtil */].getTimestamp(this.sessionService.getStartPageSession());
        var eventData = new __WEBPACK_IMPORTED_MODULE_2__Collectors_cdp_collectors_models_pageView_PageViewDataModel__["a" /* PageViewDataModel */]({ Location: this.userPosition });
        this.transformEventData(eventData);
    };
    PageView.prototype.useInCalculateFirstVisitModel = function () {
        return true;
    };
    PageView.prototype.getFirstVisitProperty = function () {
        return __WEBPACK_IMPORTED_MODULE_3__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountPageview;
    };
    PageView.prototype.stopListen = function () {
        this.isStopListen = true;
    };
    return PageView;
}(__WEBPACK_IMPORTED_MODULE_0__Collectors_cdp_collectors_CdpEvent__["a" /* CdpEvent */]));



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LeavePage__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LeavePage", function() { return __WEBPACK_IMPORTED_MODULE_0__LeavePage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageView__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return __WEBPACK_IMPORTED_MODULE_1__PageView__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DeviceIdChange__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceIdChange", function() { return __WEBPACK_IMPORTED_MODULE_2__DeviceIdChange__["a"]; });





/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_connextModule_ConnextModule__ = __webpack_require__(26);

var CampaignModel = (function () {
    function CampaignModel(connextEventData) {
        this.Id = connextEventData.CampaignId;
        this.MeterLevel = connextEventData.MeterLevel;
        this.ConversationId = this.getConversationId(connextEventData);
        this.ConversationName = this.getConversationName(connextEventData);
    }
    CampaignModel.prototype.getConversationId = function (connextEventData) {
        if (connextEventData.Conversation && connextEventData.Conversation.Id) {
            return connextEventData.Conversation.Id;
        }
        else {
            var storageConversation = __WEBPACK_IMPORTED_MODULE_0__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getCurrentConversation();
            if (storageConversation) {
                return storageConversation.Id;
            }
        }
    };
    CampaignModel.prototype.getConversationName = function (connextEventData) {
        if (connextEventData.Conversation && connextEventData.Conversation.Name) {
            return connextEventData.Conversation.Name;
        }
        else {
            var storageConversation = __WEBPACK_IMPORTED_MODULE_0__Modules_connextModule_ConnextModule__["a" /* ConnextModule */].getCurrentConversation();
            if (storageConversation) {
                return storageConversation.Name;
            }
        }
    };
    return CampaignModel;
}());



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextPageViewDataModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageModel__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DeviceModel__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationModel__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_collectors_connext_collector_models_ConnextUserModel__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CampaignModel__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modules_dimensionsModule_DimensionsModule__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__ = __webpack_require__(0);







var ConnextPageViewDataModel = (function () {
    function ConnextPageViewDataModel(data) {
        if (!data)
            return;
        var eventData = data.EventData ? data.EventData : {};
        this.Location = new __WEBPACK_IMPORTED_MODULE_2__LocationModel__["a" /* LocationModel */](eventData.Location);
        this.Device = new __WEBPACK_IMPORTED_MODULE_1__DeviceModel__["a" /* DeviceModel */]();
        this.DeviceBrowserUserAgent = navigator.userAgent;
        this.Page = new __WEBPACK_IMPORTED_MODULE_0__PageModel__["a" /* PageModel */](__WEBPACK_IMPORTED_MODULE_5__Modules_dimensionsModule_DimensionsModule__["a" /* DimensionsModule */].getDimensions());
        this.User = new __WEBPACK_IMPORTED_MODULE_3__Collectors_cdp_collectors_collectors_connext_collector_models_ConnextUserModel__["a" /* ConnextUserModel */]();
        this.Campaign = new __WEBPACK_IMPORTED_MODULE_4__CampaignModel__["a" /* CampaignModel */](data);
        this.LoaderVersionInfo = __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__["a" /* Utils */].getLoaderVersionInfo();
        this.FingerprintVersionInfo = __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__["a" /* Utils */].getFingerprintVersionInfo();
        this.DemoMode = __WEBPACK_IMPORTED_MODULE_6__Utils_Utils__["a" /* Utils */].getDemoMode();
    }
    return ConnextPageViewDataModel;
}());



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageViewDataModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageModel__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DeviceModel__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationModel__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserModel__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modules_dimensionsModule_DimensionsModule__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils_Utils__ = __webpack_require__(0);






var PageViewDataModel = (function () {
    function PageViewDataModel(data) {
        this.Location = new __WEBPACK_IMPORTED_MODULE_2__LocationModel__["a" /* LocationModel */](data.Location);
        this.Device = new __WEBPACK_IMPORTED_MODULE_1__DeviceModel__["a" /* DeviceModel */]();
        this.DeviceBrowserUserAgent = navigator.userAgent;
        this.Page = new __WEBPACK_IMPORTED_MODULE_0__PageModel__["a" /* PageModel */](__WEBPACK_IMPORTED_MODULE_4__Modules_dimensionsModule_DimensionsModule__["a" /* DimensionsModule */].getDimensions());
        this.User = new __WEBPACK_IMPORTED_MODULE_3__UserModel__["a" /* UserModel */]();
        this.LoaderVersionInfo = __WEBPACK_IMPORTED_MODULE_5__Utils_Utils__["a" /* Utils */].getLoaderVersionInfo();
        this.FingerprintVersionInfo = __WEBPACK_IMPORTED_MODULE_5__Utils_Utils__["a" /* Utils */].getFingerprintVersionInfo();
        this.DemoMode = __WEBPACK_IMPORTED_MODULE_5__Utils_Utils__["a" /* Utils */].getDemoMode();
    }
    return PageViewDataModel;
}());



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__ = __webpack_require__(4);

var UserModel = (function () {
    function UserModel() {
        this.ER = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErCode();
        this.ERP = __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].getErpCode();
    }
    return UserModel;
}());



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtmTagCollectorFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_base_factory_Factory__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_collectors_sp_tags_SpGtmTagCollector__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_collectors_connext_tags_ConnextGtmTagCollector__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var GtmTagCollectorFactory = (function (_super) {
    __extends(GtmTagCollectorFactory, _super);
    function GtmTagCollectorFactory(collector) {
        var _this = _super.call(this) || this;
        _this.Logger = __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("CollectorFactory");
        _this.collectMetaTags = false;
        _this.collector = collector;
        return _this;
    }
    GtmTagCollectorFactory.prototype.createCollector = function () {
        try {
            var collector = this.collector;
            this.Logger.trace("Creating Collector: ", collector);
            switch (collector.toUpperCase()) {
                case __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__["a" /* CollectorTypes */].Connext.toUpperCase():
                    this.collectorType = new __WEBPACK_IMPORTED_MODULE_3__tag_collectors_connext_tags_ConnextGtmTagCollector__["a" /* ConnextGtmTagCollector */]();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__constants_CollectorTypes__["a" /* CollectorTypes */].SP.toUpperCase():
                    this.collectorType = new __WEBPACK_IMPORTED_MODULE_2__tag_collectors_sp_tags_SpGtmTagCollector__["a" /* SpGtmTagCollector */]();
                    break;
                default:
                    throw "Not a valid collector";
            }
            return this.collectorType;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return GtmTagCollectorFactory;
}(__WEBPACK_IMPORTED_MODULE_1__Core_base_factory_Factory__["a" /* Factory */]));



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GtmTagClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GtmTagModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GtmTagCollectorFactory__ = __webpack_require__(113);


var GtmTagClass = (function () {
    function GtmTagClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("GtmTagModule");
    }
    GtmTagClass.prototype.setup = function (options) {
        var _this = this;
        try {
            var collectors = options.collectors;
            collectors.forEach(function (item) {
                var collectorType = new __WEBPACK_IMPORTED_MODULE_1__GtmTagCollectorFactory__["a" /* GtmTagCollectorFactory */](item).createCollector();
                _this.Logger.info("@ forEach.Collector = collectorType", collectorType);
                if (!collectorType)
                    return;
                collectorType.registerTagEvents();
            });
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return GtmTagClass;
}());

var GtmTagModule = new GtmTagClass();


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnextGtmTagCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GtmTagCollector__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(125);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConnextGtmTagCollector = (function (_super) {
    __extends(ConnextGtmTagCollector, _super);
    function ConnextGtmTagCollector() {
        var _this = _super.call(this) || this;
        _this.events = __WEBPACK_IMPORTED_MODULE_1__events__;
        return _this;
    }
    return ConnextGtmTagCollector;
}(__WEBPACK_IMPORTED_MODULE_0__GtmTagCollector__["a" /* GtmTagCollector */]));



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionShownTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MeterStopTagEvent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Data_models_connext_ActionModels__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ActionShownTagEvent = (function (_super) {
    __extends(ActionShownTagEvent, _super);
    function ActionShownTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onActionShown";
        _this.sendTagName = "actionShown";
        return _this;
    }
    ActionShownTagEvent.prototype.setOriginalEventData = function (data) {
        this.sendTagName = "actionShown";
        _super.prototype.setOriginalEventData.call(this, data);
        var eventData = this.originalEventData.EventData;
        this.actionType = this.getActionType(eventData ? eventData.ActionTypeId : "");
        this.actionShowTag = this.getActionShowTag();
        if (this.actionType === __WEBPACK_IMPORTED_MODULE_2__Data_models_connext_ActionModels__["a" /* ActionTypes */].Paywall) {
            this.Logger.warn("Is Paywall");
            new __WEBPACK_IMPORTED_MODULE_0__MeterStopTagEvent__["a" /* MeterStopTagEvent */]().sendTagToAnalitcs(null, Object.assign({}, this.actionShowTag));
        }
        this.sendData = this.actionShowTag;
    };
    ;
    ActionShownTagEvent.prototype.getSendTagData = function () {
        return this.sendData;
    };
    ActionShownTagEvent.prototype.getTagName = function () {
        if (this.actionType !== __WEBPACK_IMPORTED_MODULE_2__Data_models_connext_ActionModels__["a" /* ActionTypes */].Paywall) {
            this.Logger.warn("NOT Paywall");
            return this.sendTagName;
        }
        else {
            return null;
        }
    };
    ActionShownTagEvent.prototype.getActionShowTag = function () {
        try {
            var eventData = this.originalEventData.EventData;
            this.Logger.debug("processing...", eventData);
            this.actionType = eventData.ActionType || this.getActionType(eventData.ActionTypeId);
            this.Logger.warn("ActionType", this.actionType);
            var parsedUserDefinedData = __WEBPACK_IMPORTED_MODULE_1__Utils_Utils__["a" /* Utils */].parseJson(eventData.UserDefinedData);
            var userDefinedData = void 0;
            if (parsedUserDefinedData.success) {
                userDefinedData = parsedUserDefinedData.data;
            }
            var baseActionShownTag = {
                actionName: eventData.Name,
                actionDescription: eventData.Description,
                actionType: this.actionType,
                userDefinedData: JSON.stringify(userDefinedData)
            };
            this.Logger.warn("Base Action Shown Tag", baseActionShownTag);
            return baseActionShownTag;
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    ActionShownTagEvent.prototype.getActionType = function (type) {
        try {
            this.Logger.trace("getActionType", type);
            return __WEBPACK_IMPORTED_MODULE_2__Data_models_connext_ActionModels__["b" /* ActionTypeDict */][type];
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return ActionShownTagEvent;
}(__WEBPACK_IMPORTED_MODULE_3__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_models_common_UserModel__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Data_services_UserService__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Collectors_gtmTag_collector_tag_collectors_connext_tags_ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AuthorizedTagEvent = (function (_super) {
    __extends(AuthorizedTagEvent, _super);
    function AuthorizedTagEvent() {
        var _this = _super.call(this) || this;
        _this.originalEventName = "onAuthorized";
        _this.sendTagName = __WEBPACK_IMPORTED_MODULE_0__Data_models_common_UserModel__["a" /* ConnextUserState */].authorized;
        _this.userService = __WEBPACK_IMPORTED_MODULE_1__Data_services_UserService__["a" /* UserService */].Instance;
        return _this;
    }
    AuthorizedTagEvent.prototype.sendTagToAnalitcs = function (tagName, tagData) {
        try {
            this.Logger.debug("handleUserState", "event", "data", this.originalEventData);
            this.userService.setUserState(this.sendTagName, this.originalEventData);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    return AuthorizedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_2__Collectors_gtmTag_collector_tag_collectors_connext_tags_ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationDeterminedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MeterStartTagEvent__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConversationDeterminedTagEvent = (function (_super) {
    __extends(ConversationDeterminedTagEvent, _super);
    function ConversationDeterminedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onConversationDetermined";
        _this.sendTagName = "conversationDetermined";
        return _this;
    }
    ConversationDeterminedTagEvent.prototype.setOriginalEventData = function (data) {
        _super.prototype.setOriginalEventData.call(this, data);
        try {
            this.Logger.debug("processing...", this.originalEventData);
            this.setConversationTag();
            if (this.isMeterStart()) {
                this.sendMeterStartTag();
            }
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    ConversationDeterminedTagEvent.prototype.getSendTagData = function () {
        return this.conversationTag;
    };
    ConversationDeterminedTagEvent.prototype.setConversationTag = function () {
        try {
            this.conversation = this.originalEventData.Conversation;
            this.properties = this.conversation ? (this.conversation.Props || this.conversation.Properties) : {};
            this.Logger.debug("handleConversationDetermined", "conversationData", this.originalEventData);
            var dateStarted = void 0, dateExpiration = void 0;
            var dateProperties = this.properties.Date;
            if (dateProperties) {
                dateStarted = new Date(dateProperties.Started).toISOString().slice(0, -5) + "Z";
                dateExpiration = new Date(dateProperties.Expiration).toISOString().slice(0, -5) + "Z";
            }
            this.conversationTag = {
                conversationName: this.conversation.Name,
                conversationViews: (this.properties.Views === 0) ? 1 : this.properties.Views,
                conversationViewsLeft: this.properties.ArticleLeft,
                conversationPaywallLimit: parseInt(this.properties.PaywallLimit),
                conversationDateStarted: dateStarted,
                conversationDateExpiratation: dateExpiration,
                conversationDateEnded: dateProperties.Ended
            };
            this.Logger.info("ConversationTag", this.conversationTag);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    ConversationDeterminedTagEvent.prototype.isMeterStart = function () {
        try {
            if (this.properties) {
                var views = this.properties.Views;
                return ((views === 1 || views === 0) && this.originalEventData.MeterLevelId === 2) ? true : false;
            }
        }
        catch (e) {
            this.Logger.fatal(e);
            return false;
        }
    };
    ConversationDeterminedTagEvent.prototype.sendMeterStartTag = function () {
        try {
            this.Logger.debug("handleMeterStart");
            new __WEBPACK_IMPORTED_MODULE_1__MeterStartTagEvent__["a" /* MeterStartTagEvent */]().sendTagToAnalitcs();
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return ConversationDeterminedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasAccessTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_models_common_UserModel__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_services_UserService__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var HasAccessTagEvent = (function (_super) {
    __extends(HasAccessTagEvent, _super);
    function HasAccessTagEvent() {
        var _this = _super.call(this) || this;
        _this.originalEventName = "onHasAccess";
        _this.sendTagName = __WEBPACK_IMPORTED_MODULE_0__data_models_common_UserModel__["a" /* ConnextUserState */].hasAccess;
        _this.userService = __WEBPACK_IMPORTED_MODULE_1__data_services_UserService__["a" /* UserService */].Instance;
        return _this;
    }
    HasAccessTagEvent.prototype.sendTagToAnalitcs = function (tagName, tagData) {
        try {
            this.Logger.debug("handleUserState", "event", "data", this.originalEventData);
            this.userService.setUserState(this.sendTagName, this.originalEventData);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    return HasAccessTagEvent;
}(__WEBPACK_IMPORTED_MODULE_2__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterLevelSetTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MeterLevelSetTagEvent = (function (_super) {
    __extends(MeterLevelSetTagEvent, _super);
    function MeterLevelSetTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onMeterLevelSet";
        _this.sendTagName = "meterLevelSet";
        return _this;
    }
    MeterLevelSetTagEvent.prototype.getSendTagData = function () {
        var data = this.originalEventData.EventData;
        try {
            this.Logger.debug("++++ processing...", data);
            return {
                meterLevel: this.originalEventData.MeterLevel,
                meterLevelDetermineMethod: data.Method,
                meterRuleName: (data.Rule) ? data.Rule.Name : "No Rule"
            };
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return MeterLevelSetTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSignUpTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NewsletterSignUpTagEvent = (function (_super) {
    __extends(NewsletterSignUpTagEvent, _super);
    function NewsletterSignUpTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onNewsletterSignUp";
        _this.sendTagName = "newsletterSignup";
        return _this;
    }
    NewsletterSignUpTagEvent.prototype.getSendTagData = function () {
        var data = this.originalEventData;
        try {
            return {
                emailPreferenceId: this.getEmailPreferenceIds(data.EventData)
            };
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    NewsletterSignUpTagEvent.prototype.getEmailPreferenceIds = function (eventData) {
        if (eventData.EmailPreferenceId) {
            return eventData.EmailPreferenceId;
        }
        else {
            var emailPreferencesIds_1 = [];
            if (eventData.EmailPreferences) {
                eventData.EmailPreferences.forEach(function (emailPreference) {
                    emailPreferencesIds_1.push(emailPreference.Id);
                });
            }
            return emailPreferencesIds_1.join(",");
        }
    };
    return NewsletterSignUpTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthorizedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_models_common_UserModel__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_services_UserService__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NotAuthorizedTagEvent = (function (_super) {
    __extends(NotAuthorizedTagEvent, _super);
    function NotAuthorizedTagEvent() {
        var _this = _super.call(this) || this;
        _this.originalEventName = "onNotAuthorized";
        _this.sendTagName = __WEBPACK_IMPORTED_MODULE_0__data_models_common_UserModel__["a" /* ConnextUserState */].notAuthorized;
        _this.userService = __WEBPACK_IMPORTED_MODULE_1__data_services_UserService__["a" /* UserService */].Instance;
        return _this;
    }
    NotAuthorizedTagEvent.prototype.sendTagToAnalitcs = function (tagName, tagData) {
        try {
            this.Logger.debug("handleUserState", "data", this.originalEventData);
            this.userService.setUserState(this.sendTagName, this.originalEventData);
        }
        catch (e) {
            this.Logger.error(e);
        }
    };
    return NotAuthorizedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_2__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnInitTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OnInitTagEvent = (function (_super) {
    __extends(OnInitTagEvent, _super);
    function OnInitTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onInit";
        _this.sendTagName = "onInit";
        return _this;
    }
    return OnInitTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageViewTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PageViewTagEvent = (function (_super) {
    __extends(PageViewTagEvent, _super);
    function PageViewTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "onFinish";
        _this.sendTagName = "pageView";
        return _this;
    }
    return PageViewTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__ConnextGtmTagEvent__["a" /* ConnextGtmTagEvent */]));



/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MeterLevelSetTagEvent__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MeterLevelSetTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__MeterLevelSetTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActionShownTagEvent__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActionShownTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_1__ActionShownTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConversationDeterminedTagEvent__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationDeterminedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__ConversationDeterminedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MeterStartTagEvent__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MeterStartTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_3__MeterStartTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MeterStopTagEvent__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MeterStopTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_4__MeterStopTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__OnInitTagEvent__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OnInitTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_5__OnInitTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PageViewTagEvent__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_6__PageViewTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NewsletterSignUpTagEvent__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterSignUpTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_7__NewsletterSignUpTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HasAccessTagEvent__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HasAccessTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_8__HasAccessTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AuthorizedTagEvent__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_9__AuthorizedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NotAuthorizedTagEvent__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthorizedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_10__NotAuthorizedTagEvent__["a"]; });













/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpGtmTagCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GtmTagCollector__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(136);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SpGtmTagCollector = (function (_super) {
    __extends(SpGtmTagCollector, _super);
    function SpGtmTagCollector() {
        var _this = _super.call(this) || this;
        _this.events = __WEBPACK_IMPORTED_MODULE_1__events__;
        return _this;
    }
    return SpGtmTagCollector;
}(__WEBPACK_IMPORTED_MODULE_0__GtmTagCollector__["a" /* GtmTagCollector */]));



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressCompletedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BillingAddressCompletedTagEvent = (function (_super) {
    __extends(BillingAddressCompletedTagEvent, _super);
    function BillingAddressCompletedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "billing_address_completed_e";
        _this.sendTagName = "sp.BillingAddressCompleted";
        return _this;
    }
    return BillingAddressCompletedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutStartTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckoutStartTagEvent = (function (_super) {
    __extends(CheckoutStartTagEvent, _super);
    function CheckoutStartTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "presentation_loaded_e";
        _this.sendTagName = "sp.CheckoutStart";
        return _this;
    }
    CheckoutStartTagEvent.prototype.getSendTagData = function () {
        var fnName = "getSendTagData";
        var pid;
        var data = this.originalEventData;
        this.Logger.debug(fnName, "event", "data", data);
        if (data.promotionsList) {
            this.Logger.debug(fnName, "Has PromotionsList");
            pid = Array.prototype.map.call(data.promotionsList, function (s) { return s.pid; }).toString();
            this.Logger.debug(fnName, "Has PromotionsList.pidList", pid);
        }
        var tagData = {
            sp_pid: pid
        };
        if (data.params && data.params.presentationName) {
            this.Logger.debug("CreateCheckoutStartTag", "Has Presentation Params");
            tagData["sp_presentationName"] = data.params.presentationName;
        }
        this.Logger.debug(fnName, "tagData =>", tagData);
        return tagData;
    };
    return CheckoutStartTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedNewUsertagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CreatedNewUsertagEvent = (function (_super) {
    __extends(CreatedNewUsertagEvent, _super);
    function CreatedNewUsertagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "created_new_user_e";
        _this.sendTagName = "sp.CreatedNewUser";
        return _this;
    }
    return CreatedNewUsertagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleveryAddressCompleted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DeleveryAddressCompleted = (function (_super) {
    __extends(DeleveryAddressCompleted, _super);
    function DeleveryAddressCompleted() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "delivery_address_completed_e";
        _this.sendTagName = "sp.DeliveryAddressCompleted";
        return _this;
    }
    return DeleveryAddressCompleted;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferSelectedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var OfferSelectedTagEvent = (function (_super) {
    __extends(OfferSelectedTagEvent, _super);
    function OfferSelectedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "offer_selected_e";
        _this.sendTagName = "sp.OfferSelected";
        return _this;
    }
    OfferSelectedTagEvent.prototype.getSendTagData = function () {
        var fnName = "[process...OfferSelected]";
        try {
            this.Logger.debug(fnName, "data", this.originalEventData);
            var offerTagData = new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__["a" /* OfferTagModel */](this.originalEventData.offer);
            return {
                sp_offerId: offerTagData.Id,
                sp_offerPlanName: offerTagData.PlanName,
                sp_offerPrice: offerTagData.TotalPrice,
                sp_offerType: offerTagData.Type
            };
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return OfferSelectedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPresentedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var OffersPresentedTagEvent = (function (_super) {
    __extends(OffersPresentedTagEvent, _super);
    function OffersPresentedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "offers_presented_e";
        _this.sendTagName = "sp.OffersPresented";
        return _this;
    }
    OffersPresentedTagEvent.prototype.getSendTagData = function () {
        var planData = this.getPlanIds(this.originalEventData.offers);
        try {
            return {
                sp_offerIds: planData.planIds,
                sp_offerPlanNames: planData.planNames,
                sp_offerPlanConcat: planData.plansConcat
            };
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    OffersPresentedTagEvent.prototype.getPlanIds = function (offers) {
        var planIds = [], planNames = [], plansConcat = [];
        if (offers) {
            offers.forEach(function (offer) {
                var tagOffer = new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__["a" /* OfferTagModel */](offer);
                planIds.push(tagOffer.Id),
                    planNames.push(tagOffer.PlanName),
                    plansConcat.push(tagOffer.Id + ":" + tagOffer.PlanName);
            });
        }
        return {
            planIds: planIds.toString(),
            planNames: planNames.toString(),
            plansConcat: plansConcat.toString()
        };
    };
    return OffersPresentedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentCompletedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_PaymentTypes__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PaymentCompletedTagEvent = (function (_super) {
    __extends(PaymentCompletedTagEvent, _super);
    function PaymentCompletedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventNames = Object.keys(__WEBPACK_IMPORTED_MODULE_0__constants_PaymentTypes__["a" /* PaymentTypes */]);
        _this.sendTagName = "sp.PaymentCompleted";
        return _this;
    }
    PaymentCompletedTagEvent.prototype.getSendTagData = function () {
        var fnName = "[process...PaymentCompleted]";
        try {
            var paymentMethod = __WEBPACK_IMPORTED_MODULE_0__constants_PaymentTypes__["a" /* PaymentTypes */][this.currentEventName];
            this.Logger.debug(fnName, "paymentMethod", paymentMethod);
            return {
                sp_paymentType: paymentMethod
            };
        }
        catch (e) {
            this.Logger.fatal(e);
            return null;
        }
    };
    return PaymentCompletedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_1__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionSuccessTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SubscriptionSuccessTagEvent = (function (_super) {
    __extends(SubscriptionSuccessTagEvent, _super);
    function SubscriptionSuccessTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "add_subscription_success_e";
        _this.sendTagName = "sp.SubscriptionSuccess";
        return _this;
    }
    SubscriptionSuccessTagEvent.prototype.getSendTagData = function () {
        try {
            var offerTag = new __WEBPACK_IMPORTED_MODULE_1__Collectors_cdp_collectors_models_sp_OfferTagModel__["a" /* OfferTagModel */](this.originalEventData.offer);
            var subscription = this.originalEventData.subscription || {};
            return {
                sp_offerId: offerTag.Id,
                sp_offerPlanName: offerTag.PlanName,
                sp_offerPrice: offerTag.TotalPrice,
                sp_subEventId: subscription.EventId,
                sp_accountNumber: subscription.AccountNumber,
                sp_paymentAuthorizationCode: subscription.PaymentAuthorizationCode,
                sp_subSubscriptionId: subscription.SubscriptionID,
                sp_subSubscriberId: subscription.SubscriberID,
                sp_redirectUrl: subscription.RedirectUrl
            };
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return SubscriptionSuccessTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoCompletedTagEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UserInfoCompletedTagEvent = (function (_super) {
    __extends(UserInfoCompletedTagEvent, _super);
    function UserInfoCompletedTagEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.originalEventName = "user_info_completed_e";
        _this.sendTagName = "sp.UserInfoCompleted";
        return _this;
    }
    return UserInfoCompletedTagEvent;
}(__WEBPACK_IMPORTED_MODULE_0__SpGtmTagEvent__["a" /* SpGtmTagEvent */]));



/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BillingAddressCompletedTagEvent__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressCompletedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__BillingAddressCompletedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CheckoutStartTagEvent__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutStartTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_1__CheckoutStartTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CreatedNewUsertagEvent__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedNewUsertagEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__CreatedNewUsertagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DeleveryAddressCompleted__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DeleveryAddressCompleted", function() { return __WEBPACK_IMPORTED_MODULE_3__DeleveryAddressCompleted__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OfferSelectedTagEvent__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSelectedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_4__OfferSelectedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__OffersPresentedTagEvent__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPresentedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_5__OffersPresentedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PaymentCompletedTagEvent__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCompletedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_6__PaymentCompletedTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SubscriptionSuccessTagEvent__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionSuccessTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_7__SubscriptionSuccessTagEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UserInfoCompletedTagEvent__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoCompletedTagEvent", function() { return __WEBPACK_IMPORTED_MODULE_8__UserInfoCompletedTagEvent__["a"]; });











/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DomClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dom; });
var DomClass = (function () {
    function DomClass() {
    }
    DomClass.prototype.findAncestor = function (element, className) {
        if (!element)
            return;
        if (element.classList.contains(className)) {
            return element;
        }
        while ((element = element.parentElement) && !element.classList.contains(className))
            ;
        return element;
    };
    return DomClass;
}());

var Dom = new DomClass();


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cookieDublicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DeviceDetector__ = __webpack_require__(11);

var CookieDublicator = (function () {
    function CookieDublicator() {
        this.safariCookieMaxAge = 604800000;
        this.prefix = "Cookie_";
    }
    CookieDublicator.prototype.dublicateCookieToLocalStorageIfItNeed = function (key, value, attributes) {
        if (!this.isDublicateToLocalStorage(key, value, attributes) || !value) {
            localStorage.removeItem(this.prefix + key);
            return false;
        }
        var cookie = Object.assign({}, attributes);
        cookie["key"] = key;
        cookie["value"] = value;
        localStorage.setItem(this.prefix + key, JSON.stringify(cookie));
    };
    CookieDublicator.prototype.dublicateLocalStorageToCookieIfItNeed = function (key) {
        if (!this.isDublicateToCookie(key)) {
            return false;
        }
        var cookie, cookieAge;
        try {
            cookie = JSON.parse(localStorage.getItem(this.prefix + key));
            cookieAge = new Date(cookie.expires);
        }
        catch (e) {
            localStorage.removeItem(this.prefix + key);
            return false;
        }
        if (this.isOutDatedLocalStorage(cookieAge)) {
            localStorage.removeItem(this.prefix + key);
            return false;
        }
        document.cookie = this.stringifyAttributes(cookie);
    };
    CookieDublicator.prototype.isDublicateToCookie = function (key) {
        return this.isSafari();
    };
    CookieDublicator.prototype.isDublicateToLocalStorage = function (key, value, attributes) {
        if (this.isSafari()) {
            return this.isDublicateSafari(new Date(attributes.expires));
        }
        return false;
    };
    CookieDublicator.prototype.isDublicateSafari = function (cookieAge) {
        return cookieAge.getTime() > (new Date()).getTime() + this.safariCookieMaxAge;
    };
    CookieDublicator.prototype.stringifyAttributes = function (attributes) {
        var stringifiedAttributes = attributes.key + "=" + attributes.value;
        delete attributes.key;
        delete attributes.value;
        for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += "; " + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            stringifiedAttributes += "=" + attributes[attributeName];
        }
        return stringifiedAttributes;
    };
    CookieDublicator.prototype.isOutDatedLocalStorage = function (cookieAge) {
        return (new Date).getTime() >= cookieAge.getTime();
    };
    CookieDublicator.prototype.isSafari = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Utils_DeviceDetector__["a" /* DeviceDetector */].getBrowser() === "Safari";
    };
    ;
    return CookieDublicator;
}());
;
var cookieDublicator = new CookieDublicator();


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CookieDublicator__ = __webpack_require__(138);

var JsCookie = (function () {
    function JsCookie() {
        this.defaults = {};
    }
    JsCookie.getInstance = function () {
        if (!JsCookie.instance) {
            JsCookie.instance = new JsCookie();
        }
        return JsCookie.instance;
    };
    JsCookie.prototype.extend = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var i = 0;
        var result = {};
        for (; i < args.length; i++) {
            var attributes = args[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    };
    JsCookie.prototype.set = function (key, value, attributes, converter) {
        if (converter === void 0) { converter = {}; }
        var result;
        if (typeof document === "undefined") {
            return;
        }
        attributes = this.extend({
            path: "/"
        }, this.defaults, attributes);
        if (typeof attributes.expires === "number") {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
            attributes.expires = expires;
        }
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
        try {
            result = JSON.stringify(value);
            if (/^[\{\[]/.test(result)) {
                value = result;
            }
        }
        catch (e) { }
        if (!converter.write) {
            value = encodeURIComponent(String(value))
                .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        }
        else {
            value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += "; " + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            stringifiedAttributes += "=" + attributes[attributeName];
        }
        __WEBPACK_IMPORTED_MODULE_0__CookieDublicator__["a" /* cookieDublicator */].dublicateCookieToLocalStorageIfItNeed(key, value, attributes);
        return (document.cookie = key + "=" + value + stringifiedAttributes);
    };
    JsCookie.prototype.get = function (key, converter, json) {
        if (converter === void 0) { converter = {}; }
        if (json === void 0) { json = false; }
        var result;
        if (typeof document === "undefined") {
            return;
        }
        if (!key) {
            result = {};
        }
        __WEBPACK_IMPORTED_MODULE_0__CookieDublicator__["a" /* cookieDublicator */].dublicateLocalStorageToCookieIfItNeed(key);
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var rdecode = /(%[0-9A-Z]{2})+/g;
        var i = 0;
        for (; i < cookies.length; i++) {
            var parts = cookies[i].split("=");
            var cookie = parts.slice(1).join("=");
            if (!json && cookie.charAt(0) === "\"") {
                cookie = cookie.slice(1, -1);
            }
            try {
                var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                cookie = converter.read ? converter.read(cookie, name_1) : cookie.replace(rdecode, decodeURIComponent);
                if (json) {
                    try {
                        cookie = JSON.parse(cookie);
                    }
                    catch (e) { }
                }
                if (key === name_1) {
                    result = cookie;
                    break;
                }
                if (!key) {
                    result[name_1] = cookie;
                }
            }
            catch (e) { }
        }
        return result;
    };
    JsCookie.prototype.getJson = function (key, converter) {
        if (converter === void 0) { converter = {}; }
        return this.get(key, converter, true);
    };
    JsCookie.prototype.remove = function (key, attributes) {
        this.set(key, "", this.extend(attributes, {
            expires: -1
        }));
    };
    ;
    return JsCookie;
}());

;


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
var LocalStorage = (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.isSupported = function () {
        return typeof window.localStorage !== "undefined";
    };
    LocalStorage.prototype.get = function (key) {
        try {
            var data = window.localStorage.getItem(key);
            return JSON.parse(data);
        }
        catch (ex) {
            return null;
        }
    };
    LocalStorage.prototype.set = function (key, object) {
        try {
            localStorage.setItem(key, JSON.stringify(object));
        }
        catch (ex) { }
    };
    LocalStorage.prototype.delete = function (key) {
        try {
            localStorage.removeItem(key);
        }
        catch (ex) { }
    };
    LocalStorage.prototype.clear = function () {
        try {
            localStorage.clear();
        }
        catch (ex) { }
    };
    return LocalStorage;
}());



/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInsightsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MetaDataService__ = __webpack_require__(24);


var AppInsightsService = (function () {
    function AppInsightsService() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("AppInsightsService");
        this.aiAvailable = true;
        this.dimensionService = __WEBPACK_IMPORTED_MODULE_1__MetaDataService__["a" /* MetaDataService */].Instance;
    }
    Object.defineProperty(AppInsightsService, "Instance", {
        get: function () {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new AppInsightsService();
            }
            else {
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    AppInsightsService.prototype.trackEvent = function (eventName, eventPayload) {
        try {
            if (window["g2iAppInsights"]) {
                this.Logger.info("^^^^^^^^^^^^^^^^^^^^^", eventPayload);
                window["g2iAppInsights"].trackEvent(eventName, eventPayload);
            }
            if (this.aiAvailable) {
            }
        }
        catch (e) {
            this.aiAvailable = false;
            this.Logger.fatal(e);
        }
    };
    AppInsightsService.prototype.trackPageView = function (pageName, pageData) {
        try {
            this.Logger.debug("trackPageView", pageName);
        }
        catch (e) {
            this.Logger.fatal(e);
        }
    };
    return AppInsightsService;
}());



/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotList; });
var BotList = [
    {
        regex: "360Spider(-Image|-Video)?",
        name: "360Spider",
        category: "Search bot"
    },
    {
        regex: "Googlebot(-Mobile|-Image|-Video|-News)?|Feedfetcher-Google|Google-Test|Google-Site-Verification|Google Web Preview|AdsBot-Google(-Mobile)?|Google-Adwords-Instant|Mediapartners-Google|Google.*/\+/web/snippet|GoogleProducer|Google[ -]Publisher[ -]Plugin|Google-Shopping-Quality|Google-Adwords-DisplayAds|Google-Assess|Google-AdWords-Express|Google-speakr|GoogleDocs",
        name: "Googlebot",
        category: "Search bot"
    },
    {
        regex: "googleweblight|Google Page Speed Insights|Google PP Default|Google Search Console|Google Web Preview|Google Web Preview Analytics|Google_Analytics_Snippet_Validator|Google-Adwords-DisplayAds-WebRender|Google-AdWords-Express|Google-Adwords-Instant|Google-Calendar-Importer",
        name: "Google",
        category: "Scraping"
    },
    {
        regex: "Google-SearchByImage|Googlebot-Image",
        name: "Google-SearchByImage",
        category: "Scraping"
    },
    {
        regex: "Google-Site-Verification",
        name: "Google-Site-Verification",
        category: "Crawler"
    },
    {
        regex: "Google Desktop",
        name: "Google Desktop",
        category: "Crawler"
    },
    {
        regex: "Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20110814 Firefox/6.0",
        name: "Google Plus Share",
        category: "Service Agent"
    },
    {
        regex: "Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3,gzip(gfe) (via translate.google.com)",
        name: "Google Translate",
        category: "Service Agent"
    },
    {
        regex: "Google-Structured-Data-Testing-Tool",
        name: "Google-Structured-Data-Testing-Tool",
        category: "Scraping"
    },
    {
        regex: "Google Favicon",
        name: "Google Favicon",
        category: "Scraping"
    },
    {
        regex: "Neustar WPM",
        name: "Neustar WPM",
        category: "Scraping"
    },
    {
        regex: "Google Keyword Suggestion",
        name: "Google Keyword Suggestion",
        category: "Scraping"
    },
    {
        regex: "InbyBot",
        name: "InbyBot",
        category: "Scraping"
    },
    {
        regex: "GetLinkInfo",
        name: "GetLinkInfo",
        category: "Scraping"
    },
    {
        regex: "downforeveryoneorjustme",
        name: "downforeveryoneorjustme",
        category: "Site Monitor"
    },
    {
        regex: "DNS-Digger-Explorer",
        name: "DNS-Digger-Explorer",
        category: "Scraping"
    },
    {
        regex: "NetSeer",
        name: "NetSeer",
        category: "Scraping"
    },
    {
        regex: "Blekkobot",
        name: "Blekkobot",
        category: "Search Engine"
    },
    {
        regex: "https://developers.google.com/+/web/snippet",
        name: "Googlebot snippet",
        category: "Scraping"
    },
    {
        regex: "Google-Publisher-Plugin",
        name: "Google",
        category: "Crawler"
    },
    {
        regex: "proximic",
        name: "Comscore Crawler",
        category: "Search bot"
    },
    {
        regex: "SirdataBot",
        name: "SirdataBot",
    },
    {
        regex: "Clickagy Intelligence Bot v2|Clickagy",
        name: "Clickagy Intelligence Bot v2",
        category: "Bad Bot"
    },
    {
        regex: "baiduspider(-image)?|baidu Transcoder|baidu.*spider",
        name: "Baidu Spider",
        category: "Bad Bot"
    },
    {
        regex: "dotbot",
        name: "DotBot",
        category: "Crawler"
    },
    {
        regex: "GiftGhostBot",
        name: "GiftGhostBot",
        category: "Scraping"
    },
    {
        regex: "GrapeshotCrawler|grapeFX|grapeshot",
        name: "Grapeshot",
        category: "Crawler"
    },
    {
        regex: "SeznamBot|SklikBot|Seznam screenshot-generator",
        name: "Seznam Bot",
        category: "Search Engine"
    },
    {
        regex: "MetaURI",
        name: "MetaURI",
        category: "Crawler"
    },
    {
        regex: "PaperLiBot",
        name: "PaperLiBot",
        category: "Crawler"
    },
    {
        regex: "Genieo",
        name: "Genieo Web filter",
        category: "Crawler"
    },
    {
        regex: "a.pr-cy.ru",
        name: "a.pr-cy.ru",
        category: "Crawler"
    },
    {
        regex: "Cliqzbot|Cliqz",
        name: "Cliqzbot",
        category: "Crawler"
    },
    {
        regex: "BomboraBot|bombora",
        name: "BomboraBot",
        category: "Crawler"
    },
    {
        regex: "A6-Indexer|bombora",
        name: "A6-Indexer",
        category: "Crawler"
    },
    {
        regex: "Ahrefs(Bot|SiteAudit)",
        name: "AhrefsBot",
        category: "Search Engine"
    },
    {
        regex: "Genieo",
        name: "Genieo",
        category: "Crawler"
    },
    {
        regex: "Baiduspider",
        name: "Baiduspider",
        category: "Search Engine"
    },
    {
        regex: "bingbot|BingPreview",
        name: "Bing",
        category: "Search Engine"
    },
    {
        regex: "Yandex(SpravBot|ScreenshotBot|MobileBot|AccessibilityBot|ForDomain|Vertis|Market|Catalog|Calendar|Sitelinks|AdNet|Pagechecker|Webmaster|Media|Video|Bot|Images|Antivirus|Direct|Blogs|Favicons|ImageResizer|Verticals|News(links)?|Metrika|\.Gazeta Bot)|YaDirectFetcher",
        name: "YandexBot",
        category: "Search Engine"
    },
    {
        regex: "CCBot",
        name: "CCBot",
        category: "Web Scraper"
    },
    {
        regex: "YisouSpider",
        name: "YisouSpider",
        category: "Search Engine"
    },
    {
        regex: "Slurp|Yahoo!-AdCrawler",
        name: "Yahoo! Slurp",
        category: "Search Engine"
    },
    {
        regex: "Yahoo Pipes",
        name: "Yahoo Pipes",
        category: "Feed Fetcher"
    },
    {
        regex: "Y!J",
        name: "Y!J-BRJ/YATS Crawler",
        category: "Search Engine"
    },
    {
        regex: "008/0.85",
        name: "008/0.85",
        category: "Web Scraper"
    },
    {
        regex: "Sogou",
        name: "Sogou",
        category: "Search Engine"
    },
    {
        regex: "URLAppendBot",
        name: "URLAppendBot",
        category: "Crawler"
    },
    {
        regex: "DomainAppender",
        name: "DomainAppender",
        category: "Scraping"
    },
    {
        regex: "msnbot",
        name: "msnbot",
        category: "Search Engine"
    },
    {
        regex: "DuckDuckBot|DuckDuckGo-Favicons-Bot",
        name: "DuckDuckBot",
        category: "Scraping"
    },
    {
        regex: "acebookexternalhit|facebookexternalhit",
        name: "facebookexternalhit",
        category: "Web Scraper"
    },
    {
        regex: "facebookplatform|Facebot|Visionutils|datagnionbot",
        name: "Facebook",
        category: "Scraping"
    },
    {
        regex: "Exabot|Exabot-Images|Exabot-Thumbnails|Konqueror|ExaleadCloudview",
        name: "ExaLead by Dassault Systemes",
        category: "Search Engine"
    },
    {
        regex: "ia_archiver|alexabot|verifybot",
        name: "Internet Archive",
        category: "Scraping"
    },
    {
        regex: "linkdexbot",
        name: "Linkdex Limited",
        category: "Crawler"
    },
    {
        regex: "contxbot",
        name: "Contxbot",
        category: "Crawler"
    },
    {
        regex: "YodaoBot",
        name: "Youdao ",
        category: "Search Engine"
    },
    {
        regex: "spbot",
        name: "Link Profiler ",
        category: "Crawler"
    },
    {
        regex: "MJ12bot",
        name: "MJ12bot ",
        category: "Search Engine"
    },
    {
        regex: "Mail.RU_Bot",
        name: "Mail.RU_Bot ",
        category: "Search Engine"
    },
    {
        regex: "BUbiNG",
        name: "Universita Delgi Studi Di Milano ",
        category: "Web Scraper"
    },
    {
        regex: "SputnikBot",
        name: "OJSC Rostelecom ",
        category: "Search Engine"
    },
    {
        regex: "NerdyBot",
        name: "NerdyBot",
        category: "Search Engine"
    },
    {
        regex: "NerdyBot",
        name: "NerdyBot",
        category: "Search Engine"
    },
    {
        regex: "Opebot",
        name: "Opebot",
        category: "Crawler"
    },
    {
        regex: "Scrapy",
        name: "Scrapy",
        category: "Crawler"
    },
    {
        regex: "Gigabot",
        name: "Gigabot",
        category: "Search Engine"
    },
    {
        regex: "CatchBot",
        name: "CatchBot",
        category: "Web Scraper"
    },
    {
        regex: "Zeus 32297",
        name: "Zeus 32297",
        category: "Web Scraper"
    },
    {
        regex: "SafetyNet",
        name: "SafetyNet",
        category: "Crawler"
    },
    {
        regex: "linklooker",
        name: "linklooker",
        category: "Crawler"
    },
    {
        regex: "INGRID",
        name: "INGRID",
        category: "Crawler"
    },
    {
        regex: "EnigmaBot",
        name: "EnigmaBot",
        category: "Crawler"
    },
    {
        regex: "adidxbot",
        name: "Advertising",
        category: "Crawler"
    },
    {
        regex: "AMZNKAssocBot",
        name: "Advertising",
        category: "Crawler"
    },
    {
        regex: "YandexDirect",
        name: "Advertising",
        category: "Crawler"
    },
    {
        regex: "aolbuild",
        name: "aolbuild",
        category: "Search Engine"
    },
    {
        regex: "Butterfly",
        name: "Butterfly",
        category: "Search Engine"
    },
    {
        regex: "cg-eye",
        name: "cg-eye",
        category: "Search Engine"
    },
    {
        regex: "changedetection",
        name: "changedetection",
        category: "Search Engine"
    },
    {
        regex: "CligooRobot",
        name: "CligooRobot",
        category: "Search Engine"
    },
    {
        regex: "coccoc",
        name: "coccoc",
        category: "Search Engine"
    },
    {
        regex: "Daumoa",
        name: "Daumoa",
        category: "Search Engine"
    },
    {
        regex: "DealGates",
        name: "DealGates",
        category: "Search Engine"
    },
    {
        regex: "DeuSu",
        name: "DeuSu",
        category: "Search Engine"
    },
    {
        regex: "Elefent",
        name: "Elefent",
        category: "Search Engine"
    },
    {
        regex: "enlle",
        name: "enlle",
        category: "Search Engine"
    },
    {
        regex: "Findxbot",
        name: "Findxbot",
        category: "Search Engine"
    },
    {
        regex: "GigablastOpenSource",
        name: "GigablastOpenSource",
        category: "Search Engine"
    },
    {
        regex: "VoilaBot",
        name: "VoilaBot",
        category: "Crawler"
    },
    {
        regex: "panscient.com",
        name: "panscient.com",
        category: "Search Engine"
    },
    {
        regex: "Pinterest/\d\.\d.*www\.pinterest\.com.*",
        name: "Pinterest",
        category: "Web Scraper"
    },
    {
        regex: "Charlotte",
        name: "Charlotte",
        category: "Search Engine"
    },
    {
        regex: "Twitterbot",
        name: "Twitterbot",
        category: "Search Engine"
    },
    {
        regex: "MonTools",
        name: "Site Monitor",
        category: "Site Monitor"
    },
    {
        regex: "LinkWalker",
        name: "LinkWalker",
        category: "Crawler"
    },
    {
        regex: "Slackbot|Slack-ImgProxy",
        name: "Slackbot",
        category: "Crawler"
    },
    {
        regex: "AdMantX.*admantx\.com",
        name: "ADMantX",
        category: "Crawler"
    },
    {
        regex: "Envolk",
        name: "Envolk",
        category: "Scraping"
    },
    {
        regex: "FlightDeckReportsBot",
        name: "FlightDeckReportsBot",
        category: "Scraping"
    },
    {
        regex: "AddSearchBot",
        name: "AddSearchBot",
        category: "Scraping"
    },
    {
        regex: "findlink",
        name: "findlink",
        category: "Scraping"
    },
    {
        regex: "JikeSpider",
        name: "People's Daily Newspaper",
        category: "Crawler"
    },
    {
        regex: "TelegramBot",
        name: "TelegramBot",
        category: "Crawler"
    },
    {
        regex: "yacybot",
        name: "yacybot",
        category: "Crawler"
    },
    {
        regex: "Caliperbot",
        name: "Caliperbot",
        category: "Crawler"
    },
    {
        regex: "AnyEvent",
        name: "AnyEvent",
        category: "Crawler"
    },
    {
        regex: "awesomecrawler",
        name: "awesomecrawler",
        category: "Crawler"
    },
    {
        regex: "/bot|crawler|spider|crawling/i",
        name: "Generic Bot",
        category: "Generic Bot"
    }
];


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotModel; });
var BotModel = (function () {
    function BotModel(data) {
        if (!data)
            return;
        this.category = data.category;
        this.name = data.name;
    }
    return BotModel;
}());



/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataLayerClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdpDataLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_dataCollector_DataCollector__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Core_constants_PluginInnerEvents__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_DateUtil__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Data_services_Index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Data_modules_LocalStorageService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utils_BugTrackUtil__ = __webpack_require__(21);










var DataLayerClass = (function () {
    function DataLayerClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_1__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("Data Layer");
        this.dlStorageKey = "cdp-dl";
        this.sessionService = __WEBPACK_IMPORTED_MODULE_0__Data_services_SessionService__["a" /* SessionService */].Instance;
    }
    DataLayerClass.prototype.setInformation = function (deviceId) {
        var _this = this;
        return this.getCdpDl(deviceId)
            .then(function (apiDlData) {
            __WEBPACK_IMPORTED_MODULE_2__Modules_dataCollector_DataCollector__["a" /* DataCollector */].listenErCode();
            _this.handleCdpDlResponce(apiDlData, deviceId);
        }).catch(function (error) {
            var customEvent = new CustomEvent(__WEBPACK_IMPORTED_MODULE_3__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlCdpGetFail, { detail: error });
            document.dispatchEvent(customEvent);
        });
    };
    DataLayerClass.prototype.handleCdpDlResponce = function (apiDlData, deviceId) {
        this.dlData = apiDlData;
        this.setCdpDlToStorage(apiDlData, deviceId);
        var customEvent = new CustomEvent(__WEBPACK_IMPORTED_MODULE_3__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlCdpGetSuccess, { detail: apiDlData });
        document.dispatchEvent(customEvent);
        __WEBPACK_IMPORTED_MODULE_7__Data_services_Index__["c" /* TagManagerService */].Instance.setDLV("setCdpDl", apiDlData.er + "");
    };
    DataLayerClass.prototype.getDlData = function () {
        return this.dlData;
    };
    DataLayerClass.prototype.getG2iDeviceId = function () {
        if (this.dlData && this.dlData.g2ideviceid) {
            return this.dlData.g2ideviceid;
        }
        else {
            var localDl = this.getCdpDlFromStorage();
            if (localDl && localDl.apiDl) {
                return localDl.apiDl.g2ideviceid;
            }
            return null;
        }
    };
    DataLayerClass.prototype.isValidLocalInformation = function (localDl) {
        var isInCurrentDeviceSession = localDl && (localDl.browserSession == this.sessionService.getDeviceSessionId());
        if (isInCurrentDeviceSession && this.isActualCdpDlStorage) {
            if (localDl.apiDl && localDl.apiDl.er != __WEBPACK_IMPORTED_MODULE_4__Core_constants_Constants__["a" /* Constants */].NoErInformation) {
                return true;
            }
        }
        return false;
    };
    DataLayerClass.prototype.getCdpDl = function (deviceId) {
        var localDl = this.getCdpDlFromStorage();
        if (this.isValidLocalInformation(localDl)) {
            return Promise.resolve(localDl.apiDl);
        }
        return this.getCdpDlFromApi(deviceId);
    };
    DataLayerClass.prototype.getCdpDlFromStorage = function () {
        return __WEBPACK_IMPORTED_MODULE_8__Data_modules_LocalStorageService__["a" /* LocalStorageService */].get(this.dlStorageKey);
    };
    DataLayerClass.prototype.updateDeviceIdInCdpDlStorage = function (deviceId) {
        var dlData = __WEBPACK_IMPORTED_MODULE_8__Data_modules_LocalStorageService__["a" /* LocalStorageService */].get(this.dlStorageKey);
        if (dlData) {
            dlData.deviceId = deviceId;
            __WEBPACK_IMPORTED_MODULE_8__Data_modules_LocalStorageService__["a" /* LocalStorageService */].set(this.dlStorageKey, dlData);
        }
    };
    DataLayerClass.prototype.setCdpDlToStorage = function (dlInformation, deviceId) {
        if (!dlInformation.er_expire_date) {
            dlInformation.er_expire_date = __WEBPACK_IMPORTED_MODULE_6__Utils_DateUtil__["a" /* DateUtil */].addDays(new Date(), 1);
        }
        var saveDl = {
            apiDl: dlInformation,
            deviceId: deviceId,
            browserSession: this.sessionService.getDeviceSessionId()
        };
        __WEBPACK_IMPORTED_MODULE_8__Data_modules_LocalStorageService__["a" /* LocalStorageService */].set(this.dlStorageKey, saveDl);
    };
    DataLayerClass.prototype.isActualCdpDlStorage = function (cdpStorage) {
        return (Date.now() - __WEBPACK_IMPORTED_MODULE_6__Utils_DateUtil__["a" /* DateUtil */].getDateValueFromTimestamp(cdpStorage.apiDl.er_expire_date) < 0);
    };
    DataLayerClass.prototype.getCdpDlFromApi = function (deviceId) {
        var options = __WEBPACK_IMPORTED_MODULE_9__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addBotInfoHeader();
        options = __WEBPACK_IMPORTED_MODULE_9__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addInitSettingsHeader(options);
        return __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__["a" /* HttpService */].get("user", {}, options);
    };
    return DataLayerClass;
}());

var CdpDataLayer = new DataLayerClass();


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErInterpretationClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErInterpretation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Data_modules_HttpService__ = __webpack_require__(13);



var ErInterpretationClass = (function () {
    function ErInterpretationClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("UserData");
    }
    ErInterpretationClass.prototype.setInformation = function () {
        var _this = this;
        return this.getInformationFromApi()
            .then(function (information) {
            if (information) {
                console.log("Er Interpretation:", information);
                _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].GetErInterpretation, information);
            }
            return Promise.resolve(information);
        });
    };
    ErInterpretationClass.prototype.fireEvent = function (name, data) {
        var customEvent = new CustomEvent(name, { detail: data });
        document.dispatchEvent(customEvent);
    };
    ErInterpretationClass.prototype.getInformationFromApi = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2__Data_modules_HttpService__["a" /* HttpService */].get("user/er/stats")
            .catch(function (error) {
            _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].GetErInterpretationError, error);
        });
    };
    return ErInterpretationClass;
}());

var ErInterpretation = new ErInterpretationClass();


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RecommendationsClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recommendations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modules_dimensionsModule_DimensionsModule__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Data_modules_HttpService__ = __webpack_require__(13);




var RecommendationsClass = (function () {
    function RecommendationsClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("Recommendations");
    }
    RecommendationsClass.prototype.getArticlesWithCategories = function () {
        var _this = this;
        return this.getInformationFromApi("user/recommendations/stats")
            .then(function (information) {
            if (information) {
                console.log("List of recommended articles with user’s categories of interest:", information);
                _this.Logger.info(information);
                window["g2i_dl_recommendations_stats"] = information;
                _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlRecommendationsStatsFinished, information);
            }
            return Promise.resolve(information);
        })
            .catch(function (error) {
            _this.Logger.error(error);
            _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlRecommendationsStatsError, error);
        });
    };
    RecommendationsClass.prototype.getListArticles = function (isAddCategoryInfo) {
        var _this = this;
        if (isAddCategoryInfo) {
            return this.getArticlesWithCategories();
        }
        else {
            return this.getInformationFromApi("user/recommendations")
                .then(function (information) {
                if (information) {
                    console.log("Get a list of recommended articles:", information);
                    _this.Logger.info(information);
                    window["g2i_dl_recommendations"] = information;
                    _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlRecommendationsFinished, information);
                }
                return Promise.resolve(information);
            });
        }
    };
    RecommendationsClass.prototype.fireEvent = function (name, data) {
        var customEvent = new CustomEvent(name, { detail: data });
        document.dispatchEvent(customEvent);
    };
    RecommendationsClass.prototype.getInformationFromApi = function (url) {
        var _this = this;
        var contentId = __WEBPACK_IMPORTED_MODULE_2__Modules_dimensionsModule_DimensionsModule__["a" /* DimensionsModule */].getContentId();
        return __WEBPACK_IMPORTED_MODULE_3__Data_modules_HttpService__["a" /* HttpService */].get(url, { content_id: contentId })
            .catch(function (error) {
            _this.Logger.error(error);
            _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].DlRecommendationsError, error);
        });
    };
    return RecommendationsClass;
}());

var Recommendations = new RecommendationsClass();


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserInterestsClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInterests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Data_modules_HttpService__ = __webpack_require__(13);



var UserInterestsClass = (function () {
    function UserInterestsClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_0__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("InterestsStats");
    }
    UserInterestsClass.prototype.getDebugData = function () {
        var _this = this;
        return this.getInformationFromApi()
            .then(function (information) {
            if (information) {
                console.info("Get debug data for Interests calculation:", information);
                _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].GetInterestsStats, information);
            }
            return Promise.resolve(information);
        });
    };
    UserInterestsClass.prototype.fireEvent = function (name, data) {
        var customEvent = new CustomEvent(name, { detail: data });
        document.dispatchEvent(customEvent);
    };
    UserInterestsClass.prototype.getInformationFromApi = function () {
        var _this = this;
        var fnName = "[getUserInterestsByDeviceId]";
        return __WEBPACK_IMPORTED_MODULE_2__Data_modules_HttpService__["a" /* HttpService */].get("user/interests/stats")
            .catch(function (error) {
            _this.Logger.error(fnName, error);
            _this.fireEvent(__WEBPACK_IMPORTED_MODULE_1__Core_constants_PluginInnerEvents__["a" /* PluginInnerEvents */].GetInterestsStatsError, error);
        });
    };
    return UserInterestsClass;
}());

var UserInterests = new UserInterestsClass();


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsModel; });
var OptionsModel = (function () {
    function OptionsModel(data) {
        this.cdp = {
            enabled: false
        };
        this.detectBot = true;
        this.clientCode = "aim";
        if (!data)
            return;
        this.debug = data.debug;
        this.logLevel = data.logLevel;
        this.containerId = data.containerId;
        this.collectors = data.collectors;
        this.dimensions = data.dimensions;
        this.analysis = data.analysis || true;
        this.cdp = data.cdp;
        this.sessionId = data.sessionId;
        this.detectBot = data.detectBot || true;
        this.layoutCode = data.layoutCode;
        this.environment = data.environment || "Unknown";
        this.siteCode = data.siteCode || null;
        this.misc = data.misc || null;
        this.clientCode = data.clientCode || this.clientCode;
    }
    OptionsModel.prototype.setLayoutCode = function (layoutCode) {
        this.layoutCode = layoutCode;
    };
    OptionsModel.prototype.extendModel = function (object) {
        for (var name_1 in object) {
            if (object.hasOwnProperty(name_1)) {
                this[name_1] = object[name_1];
            }
        }
        return this;
    };
    return OptionsModel;
}());



/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ActionManagerClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConversationManager__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_dom_Dom__ = __webpack_require__(137);


var ActionManagerClass = (function () {
    function ActionManagerClass() {
    }
    ActionManagerClass.prototype.getInfoFromClickedElement = function (clickedElement) {
        var parent = __WEBPACK_IMPORTED_MODULE_1__Core_dom_Dom__["a" /* Dom */].findAncestor(clickedElement, "Mg2-connext"), actionInfo = {};
        if (parent) {
            var elementId = parent.getAttribute("id");
            if (elementId) {
                var actionId = parseInt(elementId.split("-")[1]);
                var actionName = void 0;
                var conversation = __WEBPACK_IMPORTED_MODULE_0__ConversationManager__["a" /* ConversationManager */].getCurrentConversation();
                if (conversation) {
                    var actions = conversation.Actions;
                    var actionLength = actions.length;
                    for (var i = 0; i < actionLength; i++) {
                        var action = actions[i];
                        if (action.Id == actionId) {
                            actionName = action.Name;
                            break;
                        }
                    }
                }
                if (actionId) {
                    actionInfo["ActionId"] = actionId;
                }
                if (actionName) {
                    actionInfo["ActionName"] = actionName;
                }
                return actionInfo;
            }
        }
        return null;
    };
    return ActionManagerClass;
}());

var ActionManager = new ActionManagerClass();


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstVisitDataCollectorClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstVisitDataCollector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_FirstVisitDataModel__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_DataTimerModel__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_Utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Data_modules_LocalStorageService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modules_dataCollector_DataCollector__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Data_modules_HttpService__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utils_DeviceDetector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Utils_logger_LoggerService__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Utils_BugTrackUtil__ = __webpack_require__(21);












var FirstVisitDataCollectorClass = (function () {
    function FirstVisitDataCollectorClass() {
        this.iterationMaxEventCount = 20;
        this.iterationMaxTimeCollect = 3 * 60 * 1000;
        this.collectData = new __WEBPACK_IMPORTED_MODULE_2__models_FirstVisitDataModel__["a" /* FirstVisitDataModel */](null);
        this.collectedEvents = [];
        this.startSaveCollectData = false;
        this.Logger = __WEBPACK_IMPORTED_MODULE_10__Utils_logger_LoggerService__["a" /* LoggerService */].createLogger("FirstVisitDataCollector");
        this.pageLeaveHandler = null;
        this.hasValidEr = false;
    }
    FirstVisitDataCollectorClass.prototype.setCollectData = function (data) {
        this.collectData = new __WEBPACK_IMPORTED_MODULE_2__models_FirstVisitDataModel__["a" /* FirstVisitDataModel */](data);
    };
    FirstVisitDataCollectorClass.prototype.collectCdpEvent = function (event) {
        if (this.startSaveCollectData) {
            this.processCdpEvent(event);
        }
        else {
            this.collectedEvents.push(event);
        }
    };
    FirstVisitDataCollectorClass.prototype.process = function () {
        this.startSaveCollectData = true;
        var savedFirstVisitData = this.getFirstVisitFromStorage();
        if (savedFirstVisitData) {
            this.setCollectData(savedFirstVisitData);
            var restOfTime = this.collectData.IterationNumber * this.iterationMaxTimeCollect - savedFirstVisitData.CollectTime;
            this.setTimer(restOfTime);
        }
        else {
            this.setTimer(this.iterationMaxTimeCollect);
        }
        this.processAlreadyCollectedCdpEvents();
        this.saveTimeVisitIfLeavePage();
    };
    FirstVisitDataCollectorClass.prototype.isCollectedFirstVisit = function (collectedByCondition) {
        var savedFirstVisitData = this.getFirstVisitFromStorage();
        this.setCollectData(savedFirstVisitData);
        if (savedFirstVisitData) {
            if (this.isDataCollected(collectedByCondition)) {
                return true;
            }
        }
        return false;
    };
    FirstVisitDataCollectorClass.prototype.getCollectedData = function () {
        return this.collectData;
    };
    FirstVisitDataCollectorClass.prototype.clearData = function () {
        this.hasValidEr = true;
        this.setCollectData(null);
        this.setFirstVisitToStorage(null);
        this.dispose();
    };
    FirstVisitDataCollectorClass.prototype.processCdpEvent = function (event) {
        var savedFirstVisitData = this.getFirstVisitFromStorage();
        if (savedFirstVisitData) {
            this.setCollectData(savedFirstVisitData);
        }
        if (this.isDataCollected() && !this.hasValidEr) {
            this.sendData();
        }
        var collectAttr = event.getFirstVisitProperty();
        switch (collectAttr) {
            case __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountCreateAccountEvents:
                this.collectData.CountCreateAccountEvents++;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountCheckoutStartEvents:
                this.collectData.CountCheckoutStartEvents++;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountClick:
                this.collectData.CountClick++;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__Core_constants_FirstVisitProperties__["a" /* FirstVisitProperties */].CountPageview:
                this.collectData.CountPageview++;
                break;
        }
        this.setTimerLeft();
        this.setFirstVisitToStorage(this.collectData);
    };
    FirstVisitDataCollectorClass.prototype.processAlreadyCollectedCdpEvents = function () {
        var _this = this;
        this.collectedEvents.forEach(function (cdpEvent) {
            _this.processCdpEvent(cdpEvent);
        });
        this.collectedEvents = [];
    };
    FirstVisitDataCollectorClass.prototype.isDataCollected = function (isPageLoadCondition) {
        return this.isDataCollectedByTime(isPageLoadCondition) || this.isDataCollectedByEvents(isPageLoadCondition);
    };
    FirstVisitDataCollectorClass.prototype.setTimer = function (timerTime) {
        var _this = this;
        if (!this.timer) {
            this.timer = new __WEBPACK_IMPORTED_MODULE_3__models_DataTimerModel__["a" /* DataTimerModel */]({});
        }
        this.timer.IsTimeUp = true;
        this.timer.StartTime = new Date().valueOf();
        this.timer.Id = setTimeout(function () {
            _this.timer.IsTimeUp = true;
            _this.collectData.CollectTime = _this.iterationMaxTimeCollect * _this.collectData.IterationNumber;
            _this.setFirstVisitToStorage(_this.collectData);
            _this.sendData();
        }, timerTime);
    };
    FirstVisitDataCollectorClass.prototype.isDataCollectedByTime = function (isPageLoadCondition) {
        var iterationNumber = isPageLoadCondition ? 1 : this.collectData.IterationNumber;
        return this.collectData.CollectTime >= (this.iterationMaxTimeCollect * iterationNumber);
    };
    FirstVisitDataCollectorClass.prototype.isDataCollectedByEvents = function (isPageLoadCondition) {
        var iterationNumber = isPageLoadCondition ? 1 : this.collectData.IterationNumber;
        return this.collectData.getSumEvents() >= (this.iterationMaxEventCount * iterationNumber);
    };
    FirstVisitDataCollectorClass.prototype.sendData = function () {
        this.setTimerLeft();
        this.collectData.IterationNumber++;
        this.setFirstVisitToStorage(this.collectData);
        this.setDlCollectedInformation(this.collectData);
    };
    FirstVisitDataCollectorClass.prototype.setDlCollectedInformation = function (collectedData) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_9__Utils_DeviceDetector__["a" /* DeviceDetector */].getDeviceId()
            .then(function (deviceId) {
            return _this.getFirstVisitCdpDlFromApi(deviceId, _this.isNeedCollectFirstVisitData(collectedData));
        }).then(function (data) {
            return __WEBPACK_IMPORTED_MODULE_0__Modules_cdpModule_CdpModule__["a" /* CdpModule */].setDlCollectedInformation(data);
        }).catch(function (error) { return _this.Logger.error("setDlCollectedInformation", error); });
    };
    FirstVisitDataCollectorClass.prototype.isNeedCollectFirstVisitData = function (collectedData) {
        return collectedData ? collectedData : __WEBPACK_IMPORTED_MODULE_7__Modules_dataCollector_DataCollector__["a" /* DataCollector */].getCollectedFirstVisitData();
    };
    FirstVisitDataCollectorClass.prototype.getFirstVisitCdpDlFromApi = function (deviceId, fVcollectedData) {
        var collectedData = this.getMappedCollectedData(fVcollectedData);
        collectedData["deviceid"] = deviceId;
        collectedData["sitecode"] = __WEBPACK_IMPORTED_MODULE_6__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode();
        collectedData["clientcode"] = __WEBPACK_IMPORTED_MODULE_6__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getClientCode();
        var options = __WEBPACK_IMPORTED_MODULE_11__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addBotInfoHeader();
        options = __WEBPACK_IMPORTED_MODULE_11__Utils_BugTrackUtil__["a" /* BugTrackUtil */].addInitSettingsHeader(options);
        return __WEBPACK_IMPORTED_MODULE_8__Data_modules_HttpService__["a" /* HttpService */].post("user", collectedData, options);
    };
    FirstVisitDataCollectorClass.prototype.getMappedCollectedData = function (firstVisitData) {
        if (firstVisitData) {
            return {
                "ts_diff": firstVisitData.CollectTime,
                "cnt_pageview": firstVisitData.CountPageview,
                "cnt_click": firstVisitData.CountClick,
                "cnt_checkoutstart": firstVisitData.CountCheckoutStartEvents,
                "cnt_createaccount": firstVisitData.CountCreateAccountEvents
            };
        }
        return {};
    };
    FirstVisitDataCollectorClass.prototype.getFirstVisitFromStorage = function () {
        return __WEBPACK_IMPORTED_MODULE_5__Data_modules_LocalStorageService__["a" /* LocalStorageService */].get(FirstVisitDataCollectorClass.firstVisitKey);
    };
    FirstVisitDataCollectorClass.prototype.setFirstVisitToStorage = function (visitData) {
        __WEBPACK_IMPORTED_MODULE_5__Data_modules_LocalStorageService__["a" /* LocalStorageService */].set(FirstVisitDataCollectorClass.firstVisitKey, visitData);
    };
    FirstVisitDataCollectorClass.prototype.saveTimeVisitIfLeavePage = function () {
        var _this = this;
        if (!this.pageLeaveHandler) {
            this.pageLeaveHandler = function (event) {
                _this.Logger.trace("Event PageLeaveEvent fired");
                _this.clearTimer();
                _this.setTimerLeft();
                _this.setFirstVisitToStorage(_this.collectData);
            };
            this.addPageLeaveEventListener();
        }
    };
    FirstVisitDataCollectorClass.prototype.addPageLeaveEventListener = function () {
        var eventName = __WEBPACK_IMPORTED_MODULE_4__Utils_Utils__["a" /* Utils */].getPageLeaveEventTrigger();
        window.addEventListener(eventName, this.pageLeaveHandler);
    };
    FirstVisitDataCollectorClass.prototype.removePageLeaveEventListener = function () {
        var eventName = __WEBPACK_IMPORTED_MODULE_4__Utils_Utils__["a" /* Utils */].getPageLeaveEventTrigger();
        window.removeEventListener(eventName, this.pageLeaveHandler);
    };
    FirstVisitDataCollectorClass.prototype.clearTimer = function () {
        if (this.timer && this.timer.Id) {
            clearTimeout(this.timer.Id);
        }
    };
    FirstVisitDataCollectorClass.prototype.dispose = function () {
        this.clearTimer();
        this.removePageLeaveEventListener();
    };
    FirstVisitDataCollectorClass.prototype.setTimerLeft = function () {
        var timerWork = new Date().valueOf() - this.timer.StartTime;
        this.collectData.CollectTime = timerWork;
    };
    FirstVisitDataCollectorClass.prototype.getPageLoadCollectedData = function () {
        var savedFirstVisitData = this.getFirstVisitFromStorage();
        this.setCollectData(savedFirstVisitData);
        if (savedFirstVisitData) {
            var isPageLoadCondition = true;
            if (this.isDataCollected(isPageLoadCondition)) {
                return savedFirstVisitData;
            }
        }
        return null;
    };
    FirstVisitDataCollectorClass.firstVisitKey = "frstVisit";
    return FirstVisitDataCollectorClass;
}());

var FirstVisitDataCollector = new FirstVisitDataCollectorClass();


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTimerModel; });
var DataTimerModel = (function () {
    function DataTimerModel(data) {
        if (!data)
            return;
        this.Id = data.Id;
        this.IsTimeUp = data.IsTimeUp;
        this.StartTime = data.StartTime;
    }
    return DataTimerModel;
}());



/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstVisitDataModel; });
var FirstVisitDataModel = (function () {
    function FirstVisitDataModel(data) {
        this.CollectTime = 0;
        this.CountClick = 0;
        this.CountPageview = 0;
        this.CountCreateAccountEvents = 0;
        this.CountCheckoutStartEvents = 0;
        this.IterationNumber = 1;
        if (!data)
            return;
        this.CountClick = data.CountClick;
        this.CollectTime = data.CollectTime;
        this.CountCheckoutStartEvents = data.CountCheckoutStartEvents;
        this.CountPageview = data.CountPageview;
        this.IterationNumber = data.IterationNumber;
        this.CountCreateAccountEvents = data.CountCreateAccountEvents;
    }
    FirstVisitDataModel.prototype.getSumEvents = function () {
        return this.CountCheckoutStartEvents + this.CountClick + this.CountCreateAccountEvents + this.CountPageview;
    };
    return FirstVisitDataModel;
}());



/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommonMetaDataClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonMetaData; });
var CommonMetaDataClass = (function () {
    function CommonMetaDataClass() {
    }
    CommonMetaDataClass.prototype.getKeywords = function () {
        return this.getMetaInformation(["keywords", "og:keywords", "bt:keywords"]);
    };
    CommonMetaDataClass.prototype.getTitle = function () {
        return this.getMetaInformation(["title", "og:title"]);
    };
    CommonMetaDataClass.prototype.getUrl = function () {
        return location.origin + location.pathname;
    };
    CommonMetaDataClass.prototype.getSection = function () {
        return this.getMetaInformation(["section", "og:section"]);
    };
    CommonMetaDataClass.prototype.getAuthor = function () {
        return this.getMetaInformation(["byline", "author", "bt:author"]);
    };
    CommonMetaDataClass.prototype.getTags = function () {
        return this.getMetaInformation(["tags"]);
    };
    CommonMetaDataClass.prototype.getContentId = function () {
        return this.getMetaInformation(["contentid"]);
    };
    CommonMetaDataClass.prototype.getPublishDate = function () {
        return this.getMetaInformation(["publishDate", "pubdate", "og:pers_rec_first_pub_date", "bt:pubDate"]);
    };
    CommonMetaDataClass.prototype.getContentType = function () {
        return this.getMetaInformation(["type", "og:type"]);
    };
    CommonMetaDataClass.prototype.getDefaultMeta = function () {
        var _this = this;
        return {
            Keywords: function () { return _this.getKeywords(); },
            Title: function () { return _this.getTitle(); },
            Url: function () { return _this.getUrl(); },
            Section: function () { return _this.getSection(); },
            Author: function () { return _this.getAuthor(); },
            Tags: function () { return _this.getTags(); },
            ContentId: function () { return _this.getContentId(); },
            PublishDate: function () { return _this.getPublishDate(); },
            ContentType: function () { return _this.getContentType(); },
        };
    };
    CommonMetaDataClass.prototype.getMetaInformation = function (metaData) {
        var metaDataLength = metaData.length;
        for (var i = 0; i < metaDataLength; i++) {
            var metaName = metaData[i];
            var metaValue = this.getMetaContent(metaName);
            if (metaValue) {
                return metaValue;
            }
        }
        return null;
    };
    CommonMetaDataClass.prototype.getMetaContent = function (metaName) {
        var metas = document.querySelectorAll("meta[name ='" + metaName + "'], meta[property='" + metaName + "']");
        var i = 0;
        var mLength = metas.length;
        for (i; i < mLength; i++) {
            var content = metas[i].getAttribute("content");
            if (content) {
                return content;
            }
        }
        return "";
    };
    return CommonMetaDataClass;
}());

var CommonMetaData = new CommonMetaDataClass();


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalculationResultModel__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commandModels_CookieGetterModel__ = __webpack_require__(158);



var CommandModel = (function () {
    function CommandModel(data) {
        if (!data)
            return;
        this.MiscKey = data.key;
        this.EnableGA = data.enableGA;
        this.setup(data.value);
    }
    CommandModel.prototype.setup = function (value) {
        var parsedValue = value;
        switch (parsedValue.name) {
            case __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_options_models_MiscOptionsInterface__["b" /* COMMAND_TYPES */].GET_COOKIE_BY_NAME:
                this.executingModel = new __WEBPACK_IMPORTED_MODULE_2__commandModels_CookieGetterModel__["a" /* CookieGetterModel */](parsedValue.args);
                break;
        }
    };
    CommandModel.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.executingModel)
                reject();
            try {
                _this.executingModel.execute().then(function (value) {
                    var result = new __WEBPACK_IMPORTED_MODULE_1__CalculationResultModel__["a" /* CalculationResultModel */](_this.MiscKey, value, _this.EnableGA);
                    resolve(result);
                }).catch(reject);
            }
            catch (e) {
                reject();
            }
        });
    };
    return CommandModel;
}());



/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JavascriptModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__ = __webpack_require__(27);

var JavascriptModel = (function () {
    function JavascriptModel(data) {
        if (!data)
            return;
        this.MiscKey = data.key;
        this.Expression = data.value;
        this.EnableGA = data.enableGA;
    }
    JavascriptModel.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var value = eval(_this.Expression);
                var result = new __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__["a" /* CalculationResultModel */](_this.MiscKey, value, _this.EnableGA);
                resolve(result);
            }
            catch (e) {
                reject();
            }
        });
    };
    return JavascriptModel;
}());



/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__ = __webpack_require__(27);

var PromiseModel = (function () {
    function PromiseModel(data) {
        if (!data)
            return;
        this.MiscKey = data.key;
        this.PromiseName = data.value;
        this.EnableGA = data.enableGA;
    }
    PromiseModel.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var promise = window[_this.PromiseName];
                promise.then(function (value) {
                    var result = new __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__["a" /* CalculationResultModel */](_this.MiscKey, value, _this.EnableGA);
                    resolve(result);
                }).catch(reject);
            }
            catch (e) {
                reject();
            }
        });
    };
    return PromiseModel;
}());



/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__ = __webpack_require__(27);

var SelectorModel = (function () {
    function SelectorModel(data) {
        if (!data)
            return;
        this.MiscKey = data.key;
        var parsedValue = data.value;
        this.Selector = parsedValue.sel;
        this.Attribute = parsedValue.attr;
        this.EnableGA = data.enableGA;
    }
    SelectorModel.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var element = document.querySelector(_this.Selector);
                var value = null;
                if (_this.Attribute) {
                    value = element.getAttribute(_this.Attribute);
                }
                else {
                    value = element.textContent;
                }
                var result = new __WEBPACK_IMPORTED_MODULE_0__CalculationResultModel__["a" /* CalculationResultModel */](_this.MiscKey, value, _this.EnableGA);
                resolve(result);
            }
            catch (e) {
                reject();
            }
        });
    };
    return SelectorModel;
}());



/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieGetterModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_cookie_Cookie__ = __webpack_require__(162);

var CookieGetterModel = (function () {
    function CookieGetterModel(cookieName) {
        this.cookieName = cookieName;
    }
    CookieGetterModel.prototype.execute = function () {
        var result = __WEBPACK_IMPORTED_MODULE_0__Utils_cookie_Cookie__["a" /* Cookie */].get(this.cookieName) || "";
        return Promise.resolve(result);
    };
    return CookieGetterModel;
}());



/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContentServiceClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modules_dimensionsModule_DimensionsModule__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ApiContentModel__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ContentModel__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__ = __webpack_require__(13);






var ContentServiceClass = (function () {
    function ContentServiceClass() {
        this.Logger = __WEBPACK_IMPORTED_MODULE_4__Utils_logger_Logger_Core__["a" /* LoggerService */].createLogger("ArticleStorage");
    }
    ContentServiceClass.prototype.getPageContent = function () {
        this.pageContent = new __WEBPACK_IMPORTED_MODULE_3__models_ContentModel__["a" /* ContentModel */](__WEBPACK_IMPORTED_MODULE_1__Modules_dimensionsModule_DimensionsModule__["a" /* DimensionsModule */].getDimensions());
        return this.pageContent;
    };
    ContentServiceClass.prototype.contentExistsInCdp = function (contentId) {
        return __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__["a" /* HttpService */].get("article/exists", { content_id: contentId });
    };
    ContentServiceClass.prototype.sendContentInCdp = function (article, articleNotExistApproved) {
        var _this = this;
        var sendData = new __WEBPACK_IMPORTED_MODULE_2__models_ApiContentModel__["a" /* ApiContentModel */](article);
        sendData["article_not_exists_approved"] = articleNotExistApproved;
        sendData["site_code"] = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getSiteCode();
        sendData["client_code"] = __WEBPACK_IMPORTED_MODULE_0__Modules_configModule_ConfigModule__["a" /* ConfigModule */].getClientCode();
        return __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__["a" /* HttpService */].post("article", sendData)
            .catch(function (error) {
            _this.Logger.error(error);
        });
    };
    ContentServiceClass.prototype.getArticleStats = function (contentId) {
        return __WEBPACK_IMPORTED_MODULE_5__Data_modules_HttpService__["a" /* HttpService */].get("article/stats", { content_id: contentId });
    };
    return ContentServiceClass;
}());

var ContentService = new ContentServiceClass();


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiContentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Utils__ = __webpack_require__(0);

var ApiContentModel = (function () {
    function ApiContentModel(data) {
        this.tags = [];
        if (!data)
            return;
        this.content_id = this.toString(data.ContentId);
        this.article_id = this.toString(data.article_id);
        this.title = this.toString(data.Title);
        this.keywords = this.toString(data.Keywords);
        this.section = this.toString(data.Section);
        this.url = data.Url;
        this.author = this.toString(data.Author);
        this.tags = data.Tags ? data.Tags.split(",") : this.tags;
        this.content_type = this.toString(data.ContentType);
        this.publish_date = data.PublishDate;
        this.lead_text = this.toString(data.LeadText);
        this.text = this.toString(data.Text);
        this.description = this.toString(data.Description);
        this.pictures = +data.Pictures;
        this.video = +data.Video;
        this.likes = +data.Likes;
        this.shares = +data.Shares;
        this.breaking_news = data.BreakingNews;
        this.premium = data.Premium;
        this.language = data.Language;
        this.lead_image_url = data.LeadImageUrl;
    }
    ApiContentModel.prototype.toString = function (value) {
        if (__WEBPACK_IMPORTED_MODULE_0__Utils_Utils__["a" /* Utils */].isset(value)) {
            return value.toString();
        }
        return null;
    };
    return ApiContentModel;
}());



/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DateUtil__ = __webpack_require__(17);

var ContentModel = (function () {
    function ContentModel(data) {
        if (!data)
            return;
        this.Title = data.Title;
        this.Keywords = data.Keywords;
        this.Section = data.Section;
        this.Url = data.Url;
        this.ContentType = data.ContentType;
        this.Author = data.Author;
        this.Tags = data.Tags;
        this.ContentId = data.ContentId;
        this.PublishDate = __WEBPACK_IMPORTED_MODULE_0__Utils_DateUtil__["a" /* DateUtil */].getISOFormat(data.PublishDate) || data.PublishDate;
        this.LeadText = data.LeadText;
        this.Text = data.Text;
        this.Description = data.Description;
        this.Pictures = data.Pictures;
        this.Video = data.Video;
        this.Likes = data.Likes;
        this.Shares = data.Shares;
        this.BreakingNews = data.BreakingNews;
        this.Premium = data.Premium;
        this.Language = data.Language;
        this.LeadImageUrl = data.LeadImageUrl;
    }
    ContentModel.prototype.isArticle = function () {
        return /article/i.test(this.ContentType);
    };
    return ContentModel;
}());



/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cookie; });
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Cookie = (function () {
    function Cookie() {
    }
    Cookie.getStoredLogLevel = function () {
        console.log("getStoredLogLevel");
    };
    Cookie.stringifyAttribute = function (name, value) {
        if (!value) {
            return "";
        }
        var stringified = "; " + name;
        if (value === true) {
            return stringified;
        }
        return stringified + "=" + value;
    };
    Cookie.stringifyAttributes = function (attributes) {
        if (typeof attributes.expires === "number") {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
            attributes.expires = expires;
        }
        return this.stringifyAttribute("Expires", attributes.expires ? attributes.expires.toUTCString() : "")
            + this.stringifyAttribute("Domain", attributes.domain)
            + this.stringifyAttribute("Path", attributes.path)
            + this.stringifyAttribute("Secure", attributes.secure)
            + this.stringifyAttribute("SameSite", attributes.sameSite);
    };
    Cookie.encode = function (name, value, attributes) {
        return encodeURIComponent(name)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, "%28").replace(/\)/g, "%29")
            + "=" + encodeURIComponent(value)
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
            + this.stringifyAttributes(attributes);
    };
    Cookie.parse = function (cookieString) {
        var result = {};
        var cookies = cookieString ? cookieString.split("; ") : [];
        var rdecode = /(%[0-9A-Z]{2})+/g;
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split("=");
            var cookie = parts.slice(1).join("=");
            if (cookie.charAt(0) === "\"") {
                cookie = cookie.slice(1, -1);
            }
            try {
                var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                result[name_1] = cookie.replace(rdecode, decodeURIComponent);
            }
            catch (e) {
            }
        }
        return result;
    };
    Cookie.getAll = function () {
        return this.parse(document.cookie);
    };
    Cookie.get = function (name) {
        return this.getAll()[name];
    };
    Cookie.set = function (name, value, attributes) {
        document.cookie = this.encode(name, value, __assign({ path: "/" }, attributes));
    };
    Cookie.remove = function (name, attributes) {
        this.set(name, "", __assign(__assign({}, attributes), { expires: -1 }));
    };
    return Cookie;
}());



/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOG_LEVEL_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOG_LEVEL_STYLE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogLevels; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
})(LogLevel || (LogLevel = {}));
var LOG_LEVEL_STYLE = {
    0: "green",
    1: "#90be90",
    2: "#f1ce7a",
    3: "#009fdf",
    4: "red",
    5: "red"
};
var LOG_LEVEL_STYLE2 = {
    0: { color: "green", bg: "#f7fbf7" },
    1: { color: "green", bg: "#f7fbf7" },
    2: { color: "green", bg: "#f7fbf7" },
    3: { color: "green", bg: "#e5f2e5" },
    4: { color: "green", bg: "#e5f2e5" },
    5: { color: "green", bg: "#e5f2e5" }
};
var LogLevels = (function () {
    function LogLevels() {
    }
    LogLevels.FromString = function (val) {
        if (val == null) {
            throw new Error("LogLevel string must be set.");
        }
        switch (val.toUpperCase()) {
            case "TRACE":
                return LogLevel.Trace;
            case "DEBUG":
                return LogLevel.Debug;
            case "INFO":
                return LogLevel.Info;
            case "WARN":
                return LogLevel.Warn;
            case "ERROR":
                return LogLevel.Error;
            case "FATAL":
                return LogLevel.Fatal;
            default:
                throw new Error("Unsupported Log Level");
        }
    };
    return LogLevels;
}());



/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = "function" === 'function' && __webpack_require__(167);
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return exports;
      }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(165), __webpack_require__(166)))

/***/ }),
/* 165 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 166 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 168 */,
/* 169 */
/***/ (function(module, exports) {

window.g2ExtendInits = {
    default: {
        cdp: {
            enabled: false
        },
        dimensions: {}
    },
};


/***/ }),
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
module.exports = __webpack_require__(63);


/***/ })
/******/ ]);