﻿!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,n){"use strict";var r=n(1),i=n(3),s=function(t){this.type="script",this.crossOrigin="anonymous",this.cache=!0,this.async=!0,t&&(this.type=t.type||this.type,this.defaultURL=t.defaultURL,this.version=t.version,this.predefinedURLs=t.predefinedURLs,this.crossOrigin=t.crossOrigin||this.crossOrigin,this.cache=t.cache||this.cache,this.async=t.async||this.async,this.xCode=t.xCode,this.isMain=t.isMain||!1)},a=function(t){if(this.name="",this.initMethodName="",this.isInitMethodPromise=!1,this.initOrder=0,this.predefinedInitSettings=null,this.flyCalculatedInitSettings=null,this.resources=[],t){this.name=t.name||this.name,this.initMethodName=t.initMethodName||this.initMethodName,this.globalObjectName=t.globalObjectName,this.isInitMethodPromise=t.isInitMethodPromise||this.isInitMethodPromise,this.predefinedInitSettings=t.predefinedInitSettings||this.predefinedInitSettings,this.flyCalculatedInitSettings=t.flyCalculatedInitSettings||this.flyCalculatedInitSettings,this.initOptions=t.initOptions||this.initOptions,this.initOrder=t.initOrder||this.initOrder;for(var e=t.resources.length,n=0;n<e;n++)this.resources.push(new s(t.resources[n]))}},u="prod",c="8241cbc2-50a5-47c4-b91f-462506490fad",l="aim",p=!1,o="[\"https://cdn.sbgsodufuosmmvsdf.info/prod/aim/loader-config.json\", \"https://loader-cdn.azureedge.net/prod/aim/loader-config.json\"]",d="[\"FP\", \"DL\", \"NXT\"]",h=(f.prototype.getPropertyValueFromClientInits=function(t,e){if(!t)return null;for(var n=t.length,o=0;o<n;o++){var r=t[o].initOptions;if(r&&r.hasOwnProperty(e))return r[e]}return null},f);function f(t,e){if(this.blockAttempts=2,this.loadAttempts=2,this.environment="prod",this.resources=[],this.loadPlugins=[],this.excludedLoadingURLMasks=[],this.overrides=[],t){this.appInsightsKey=t.appInsightsKey||c,this.blockAttempts=t.blockAttempts||this.blockAttempts,this.loadAttempts=t.loadAttempts||this.loadAttempts,this.randomURLChoosing=t.randomURLChoosing||p||!1,this.excludedLoadingURLMasks=t.excludedLoadingURLMasks||this.excludedLoadingURLMasks,this.initCondition=t.initCondition,this.clientCode=t.clientCode||l,this.siteCode=t.siteCode||this.getPropertyValueFromClientInits(e,"siteCode"),this.layoutCode=t.layoutCode||this.getPropertyValueFromClientInits(e,"layoutCode")||this.siteCode,this.environment=t.environment||u||this.environment;for(var n=t.resources.length,o=0;o<n;o++)this.resources.push(new s(t.resources[o]));for(var r=t.loadPlugins.length,i=0;i<r;i++)this.loadPlugins.push(new a(t.loadPlugins[i]));this.overrides=t.overrides;try{this.pluginsInitOrder=t.pluginsInitOrder||JSON.parse(d)}catch(t){this.pluginsInitOrder=[]}}}function g(){}n.d(e,"a",function(){return y});var y=new(g.prototype.getDataFromJSON=function(t,e){this.loader=t;var n=e||JSON.parse(o);return Array.isArray(n)||(n=[n]),this.getDataFromJSONAjax(n,0)},g.prototype.getDataFromJSONAjax=function(e,n){var o=this;return e.length==n?(i.a.isInit()&&i.a.trackEvent(r.a.EVENTS.ConfigFileNotFound,{configUrl:e}),Promise.resolve({})):fetch(e[n],{method:"GET",mode:"cors",cache:"no-cache"}).then(function(t){return t.json()}).then(function(t){return o.options=new h(t,o.loader.initOptions.plugins),o.options},function(t){return o.getDataFromJSONAjax(e,++n)})},g.prototype.getPlugins=function(){return this.options.loadPlugins},g.prototype.getResources=function(){return this.options.resources},g.prototype.mergeClientInits=function(t){var r=this;t.plugins.forEach(function(t){var e=r.options.loadPlugins;if(e&&0<e.length)for(var n=e.length,o=0;o<n;o++)if(t.name==e[o].name){r.options.loadPlugins[o].initOptions=t.initOptions;break}})},g.prototype.mergeFlyCalculatedInitSettings=function(){this.options.loadPlugins.forEach(function(t){})},g.prototype.excludePluginsByRules=function(t){this.applyRules(t)||(this.options.loadPlugins=[])},g.prototype.applyRules=function(t){var e=this;return t.every(function(t){return!e[t]()})},g.prototype.getExcludingRules=function(){return[this.isNotFoundPage,this.inIframe,this.isLoadedByBot]},g.prototype.isNotFoundPage=function(){var t=document.querySelector("head > title");if(!t)return!1;var e=t.innerHTML;return/page not found|404/i.test(e)},g.prototype.inIframe=function(){try{return window.self!==window.top}catch(t){return!0}},g.prototype.isLoadedByBot=function(){return/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|sogou|exabot|facebook|ia_archiver/i.test(window.navigator.userAgent)},g.prototype.isMatchesUrlMask=function(){var t=!1;if(this.options.excludedLoadingURLMasks&&0<this.options.excludedLoadingURLMasks.length){var n=window.location.href;t=this.options.excludedLoadingURLMasks.every(function(t){var e=this.regExpLike(t);return null===new RegExp(e).exec(n)})}return t},g.prototype.regExpLike=function(t){var e=this.regExpEscape(t).replace(/\*/g,".*").replace(/_/g,".");return new RegExp("^"+e+"$")},g.prototype.regExpEscape=function(t){return arguments.callee.sRE||(arguments.callee.sRE=new RegExp("(\\"+["/","\\",".","+","?","|","(",")","[","]","{","}"].join("|\\")+")","g")),t.replace(arguments.callee.sRE,"\\$1")},g.prototype.isRandomURLChoosing=function(){return this.options.randomURLChoosing},g.prototype.getEnvironment=function(){return this.options.environment},g.prototype.getUrlParsedProperties=function(){return this.options?{environment:this.options.environment,clientCode:this.options.clientCode}:{}},g.prototype.checkInitCondition=function(){return!this.options.initCondition||"boolean"!=typeof this.options.initCondition()||this.options.initCondition()},g.prototype.getLoadAttempts=function(){return this.options.loadAttempts},g.prototype.getBlockAttempts=function(){return this.options.blockAttempts},g.prototype.getOverrides=function(){return this.options.overrides},g.prototype.getSiteCode=function(){return this.options.siteCode},g.prototype.getLayoutCode=function(){return this.options.layoutCode},g.prototype.getPlaginsInitOrder=function(){return this.options.pluginsInitOrder},g)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=(r.ENVIRONMENTS={localhost:"localhost",dev:"dev",test:"test",test20:"test20",demo:"demo",stage:"stage",preprod:"preprod",prod:"prod"},r.MODES={default:1,dynamic:2,predefined:3},r.ImportantPostfix="_important",r.EVENTS={ResourceValidationError:"ResourceValidationError",ResourceWasNotLoaded:"ResourceWasNotLoaded",OptionsHaveDuplicateURLs:"OptionsHaveDuplicateURLs",ConfigFileNotFound:"ConfigFileNotFound",JsValidationError:"JsValidationError",PluginNotLoaded:"PluginNotLoaded"},r.TYPES={script:"script",style:"style"},r);function r(){}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=(a.generateGuid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+t()+t()+t()+t()+t()+t()},a.hexEncode=function(t){var e,n="";for(e=0;e<t.length;e++)n+=t.charCodeAt(e).toString(16);return n},a.hexDecode=function(t){var e,n="";for(0<t.length%2&&(t="0"+t),e=0;e<t.length;e+=2)n+=String.fromCharCode(parseInt(t.charAt(e)+t.charAt(e+1),16));return n},a.parseVariables=function(n,o){return this.getMatches(n,/{([\w]+)}/g,1).forEach(function(t){if(o.hasOwnProperty(t)){var e=o[t]||"";n=n.replace(new RegExp("{"+t+"}","g"),e)}else n=n.replace(new RegExp("{"+t+"}","g"),"")}),n},a.getMatches=function(t,e,n){n=n||1;for(var o,r=[];o=e.exec(t);)r.push(o[n]);return r},a.isObject=function(t){return t&&"object"==typeof t&&!Array.isArray(t)},a.mergeDeep=function(t){for(var e,n,o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];if(!o.length)return t;var i=o.shift();if(a.isObject(t)&&a.isObject(i))for(var s in i)a.isObject(i[s])?(t[s]||Object.assign(t,((e={})[s]={},e)),a.mergeDeep(t[s],i[s])):Object.assign(t,((n={})[s]=i[s],n));return a.mergeDeep.apply(a,[t].concat(o))},a);function a(){}},function(t,e,n){"use strict";function o(){this.appInsightsKey="8241cbc2-50a5-47c4-b91f-462506490fad",this.APP_INSIGHTS=null}n.d(e,"a",function(){return r});var r=new(o.prototype.init=function(t){if(t||this.appInsightsKey)try{this.APP_INSIGHTS=function(t){function e(e){u[e]=function(){var t=arguments;u.queue=u.queue||[],u.queue.push(function(){u[e].apply(u,t)})}}var s,a,u={config:t},n=document,o=window,r="AuthenticatedUserContext",i="TrackEvent",c="TrackPage",l=n.createElement("script");l.src=t.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",n.getElementsByTagName("script")[0].parentNode.appendChild(l);try{u.cookie=n.cookie}catch(t){}for(u.queue=[],u.version="1.0",s=["Event","Exception","Metric","PageView","Trace","Dependency"];s.length;)e("track"+s.pop());return e("set"+r),e("clear"+r),e("start"+i),e("stop"+i),e("start"+c),e("stop"+c),e("flush"),t.disableExceptionTracking||(e("_"+(s="onerror")),a=o[s],o[s]=function(t,e,n,o,r){var i=a&&a(t,e,n,o,r);return!0!==i&&u["_"+s](t,e,n,o,r),i}),u}({instrumentationKey:t||this.appInsightsKey,disableExceptionTracking:!0,disableAjaxTracking:!0,maxAjaxCallsPerView:0}),window.appInsights=this.APP_INSIGHTS}catch(t){this.APP_INSIGHTS=null}else this.APP_INSIGHTS=null},o.prototype.isInit=function(){return!!this.APP_INSIGHTS},o.prototype.trackEvent=function(t,e){this.APP_INSIGHTS&&this.APP_INSIGHTS.trackEvent(t,e)},o)},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=(r.prototype.setFail=function(t){console.log("<<Loader>>",t.status),this.isLoaded=!1,this.reason=t.status,this.isAdblocked=t.isAdBlock||!1},r.prototype.setResourceAsMainScript=function(){this.isMainScript=!0},r.prototype.setSuccess=function(){this.isLoaded=!0},r);function r(t,e,n){void 0===n&&(n=!1),this.isLoaded=!0,this.isMainScript=!1,this.isAdblocked=!1,this.path=t,this.type=e.type,this.isDefault=n}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(2);function o(){this.storageKey="nxt_ldr_rsrc_rls",this.migrationDone=!1,this.supported=void 0,this.cashe={}}var i=new(o.prototype.getDefaultLoaderData=function(){return Object.assign({},{cRs:{},bRs:{},xC:null})},o.prototype.get=function(t){try{if(this.isSupported())return JSON.parse(localStorage.getItem(t));var e=this.cashe[t];return void 0!==e?JSON.parse(e):e}catch(t){console.error(t)}},o.prototype.getStoredData=function(){var t=this.get(this.storageKey);return(t=this.migrateOldData(t))||this.getDefaultLoaderData()},o.prototype.migrateOldData=function(t){if(!t)return t;var e=Object.assign({},t);try{if(!this.migrationDone){var n=e&&e.cRs||{};for(var o in n)"string"==typeof(i=e.cRs[o])&&(e.cRs[o]={script:i});this.set(this.storageKey,e);var r=e&&e.bRs||{};for(var o in r){var i=e.bRs[o];Array.isArray(i)||delete e.bRs[o]}}}catch(t){e=this.getDefaultLoaderData()}finally{return this.migrationDone=!0,this.set(this.storageKey,e),e}},o.prototype.set=function(t,e){try{var n=JSON.stringify(e);if(!this.isSupported())return void(this.cashe[t]=n);localStorage.setItem(t,n)}catch(t){console.error(t)}},o.prototype.storeData=function(t){return this.set(this.storageKey,t)},o.prototype.getStoredUrl=function(t,e){var n=this.getStoredData();return n.cRs&&n.cRs[t]&&n.cRs[t][e]?r.a.hexDecode(n.cRs[t][e]):null},o.prototype.checkUpdates=function(t){var e=this.getStoredData();e.xC!==t&&((e=this.getDefaultLoaderData()).xC=t,this.storeData(e))},o.prototype.deleteCurrentResource=function(t,e){var n=this.getStoredData();n.cRs&&n.cRs[t]&&n.cRs[t][e]&&(delete n.cRs[t][e],this.storeData(n))},o.prototype.isAlreadyBlockedUrl=function(t,e){var n=this.getStoredData();return n.bRs&&n.bRs[t]&&Array.isArray(n.bRs[t])&&-1!=n.bRs[t].indexOf(r.a.hexEncode(e))},o.prototype.saveAsCurrent=function(t,e,n){var o=this.getStoredData();o.cRs[t]||(o.cRs[t]={}),o.cRs[t][n]=r.a.hexEncode(e),this.storeData(o)},o.prototype.saveAsBlocked=function(t,e){var n=this.getStoredData(),o=r.a.hexEncode(e);n.bRs[t]||(n.bRs[t]=[]),-1!=n.bRs[t].indexOf(o)?console.log(">>Loader<< | Already save as blocked"):n.bRs[t].push(o),this.storeData(n)},o.prototype.removeFromBlocked=function(t,e){var n=this.getStoredData(),o=r.a.hexEncode(e);n.bRs[t]&&n.bRs[t][o]&&(n.bRs[t]=n.bRs[t].filter(function(t,e,n){return t!=o}),this.storeData(n))},o.prototype.isSupported=function(){var e=this.supported;if("boolean"==typeof e)return e;try{if(void 0===window.localStorage)e=!1;else{var t="StorageAvialable";window.localStorage.setItem(t,"true"),e="true"===window.localStorage.getItem(t)&&(window.localStorage.removeItem(t),!0)}}catch(t){e=!1}finally{return this.supported=e}},o)},function(t,e,n){"use strict";var o=n(4),r=n(1),i=n(5),s=n(2),a=n(0);function u(){this.defaults={testNodeClasses:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",testNodeStyle:"height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;",testInterval:51,testRuns:4}}var c=new(u.prototype.detect=function(){var s=this;return new Promise(function(t,e){s.options=s.merge(s.defaults,s.options||{});var n=s.createNode(s.options.testNodeClasses,s.options.testNodeStyle),o=0,r=!1,i=setInterval(function(){o++,!(r=s.isNodeBlocked(n))&&o!==s.options.testRuns||(clearInterval(i),n.parentNode&&n.parentNode.removeChild(n)),t(r)},s.options.testInterval)})},u.prototype.createNode=function(t,e){var n=window.document,o=n.createElement("div");return o.innerHTML="&nbsp;",o.setAttribute("class",t),o.setAttribute("style",e),n.body.appendChild(o),o},u.prototype.isNodeBlocked=function(t){return 0===t.offsetHeight||!document.body.contains(t)||"none"===t.style.display||"hidden"===t.style.visibility},u.prototype.merge=function(t,e){var n={};for(var o in t)n[o]=t[o],e.hasOwnProperty(o)&&(n[o]=e[o]);return n},u);n.d(e,"a",function(){return l});var l=(p.prototype.getUrl=function(){var t=!!this.resourceModel.defaultURL||0===this.resourceModel.predefinedURLs.length;return new o.a(this.getCurrentUrl(),this.resourceModel,t)},p.prototype.getCurrentUrl=function(){return this.resourceModel.defaultURL||this.resourceModel.predefinedURLs[this.usedLoadAttempts]},p.prototype.load=function(){var e=this,n=this.getFullUrl();return this.loadResourcePromise(n).then(function(){return e.successLoad(n),n.setSuccess(),Promise.resolve(n)}).catch(function(t){return console.log(">>Loader<< | Resource is not load",t),e.errorLoad(n)})},p.prototype.loadCallback=function(){var t=this.getFullUrl();this.loadResourceCallback(t)},p.prototype.getFullUrl=function(){var t=this.getUrl();return this.resourceModel.cache?t.path=this.setCacheByVersion(t.path):t.path=t.path+"?"+Date.now(),t},p.prototype.setCacheByVersion=function(t){return this.resourceModel.version?t+"?"+this.resourceModel.version:t},p.prototype.successLoad=function(t){t.isDefault||i.a.saveAsCurrent(this.plugin.data.name,t.path,t.type)},p.prototype.errorLoad=function(e){var n=this;return i.a.deleteCurrentResource(this.plugin.data.name,e.type),i.a.saveAsBlocked(this.plugin.data.name,e.path),this.getResourceStatus(e.path).then(function(t){return e.setFail(t),e.isDefault?Promise.resolve(e):n.loadNextResource(e)})},p.prototype.loadNextResource=function(t){return this.usedLoadAttempts++,this.load()},p.prototype.loadResourcePromise=function(t){switch(this.resourceModel.type){case r.a.TYPES.script:return this.loadScriptHandler(t);case r.a.TYPES.style:return this.loadStyleHandler(t);default:console.warn(">>Loader<< | Unknown resource type. we used only script and type ")}},p.prototype.loadResourceCallback=function(t){switch(this.resourceModel.type){case r.a.TYPES.script:return this.loadScript(t,this.onResolve,this.onReject);case r.a.TYPES.style:return this.loadStyle(t,this.onResolve,this.onReject);default:console.warn(">>Loader<< | Unknown resource type. we used only script and type ")}},p.prototype.getResourceStatus=function(t){return c.detect().then(function(e){return fetch(t,{method:"HEAD",mode:"no-cors"}).then(function(t){return Promise.resolve({status:t.status,isAdBlock:e})}).catch(function(t){return Promise.resolve({status:t.message,isAdBlock:e})})})},p.prototype.loadScriptHandler=function(n){var o=this;return this.resourceModel.isMain&&n.setResourceAsMainScript(),new Promise(function(t,e){o.loadScript(n,t,e)})},p.prototype.loadScript=function(t,e,n){var o=document.createElement("script");o.src=t.path,o.async=this.resourceModel.async,o.setAttribute("crossorigin",this.resourceModel.crossOrigin),document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){console.log("onload",t.path),e()},o.onerror=function(){console.log("onerror",t.path),n()}},p.prototype.loadStyleHandler=function(n){var o=this;return new Promise(function(t,e){o.loadStyle(n,t,e)})},p.prototype.loadStyle=function(t,e,n){var o=document.createElement("link");o.href=t.path,o.type="text/css",o.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){e()},o.onerror=function(){n()}},p);function p(t,e,n,o){this.loadAttempts=1,this.blockAttempts=1,this.usedLoadAttempts=0,this.usedBlockAttempts=0,this.callbackMode=!1,this.resourceModel=e,this.plugin=t,this.resourceModel.defaultURL=s.a.parseVariables(this.resourceModel.defaultURL,a.a.getUrlParsedProperties()),this.onResolve=n,this.onReject=o,this.callbackMode=!(!n&&!o)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Plugin});var _ResourceFactory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),_Constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_Configuration__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_AppInsight__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_PluginInitOverride__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_LoaderStorage__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_Utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),Plugin=function(){function Plugin(t,e){this.initOptions={},this.data=t,this.loader=e,this.setScriptMain()}return Plugin.prototype.load=function(){var e=this;return this.loadResources().then(function(t){return e.trackResourceStatuses(t),t.every(function(t){return t.isLoaded})?(e.mainScript=t.find(function(t){return t.isMainScript}),Promise.resolve(e)):Promise.resolve(null)})},Plugin.prototype.trackResourceStatuses=function(t){var e=this;t&&0<t.length&&t.forEach(function(t){t.isLoaded?console.log(">>Loader<< |",e.data.name,"loaded by path -",t.path):(console.log(">>Loader<< |",e.data.name," was not loaded by path -",t.path,"reason",t.reason),_AppInsight__WEBPACK_IMPORTED_MODULE_3__.a.trackEvent(_Constants__WEBPACK_IMPORTED_MODULE_1__.a.EVENTS.ResourceWasNotLoaded,{plugin:e.data.name,path:t.path,reason:t.reason,adBlock:t.isAdblocked}))})},Plugin.prototype.setScriptMain=function(){var t=this.data.resources.filter(function(t){return t.type==_Constants__WEBPACK_IMPORTED_MODULE_1__.a.TYPES.script&&t.isMain});if(!(t&&0<t.length)){var n=0;this.data.resources.find(function(t,e){return n=e,t.type==_Constants__WEBPACK_IMPORTED_MODULE_1__.a.TYPES.script}),this.data.resources[n].isMain=!0}},Plugin.prototype.loadResources=function(){var n=this,t=this.data.resources,o=[];return t.forEach(function(t){var e=new _ResourceFactory__WEBPACK_IMPORTED_MODULE_0__.a(n,t).create();o.push(e.load())}),Promise.all(o)},Plugin.prototype.init=function(){if(!this.data.globalObjectName||!this.data.initMethodName)return Promise.reject("Plugin is not has init methods");this.mergeInitOptions(),this.initCustomOptions(),this.mergeClientOptions(),this.mergePredefinedInitSettings(),this.overrideInits();try{var t=void 0,e=window[this.data.globalObjectName];return t="function"==typeof e?e()[this.data.initMethodName]:window[this.data.globalObjectName][this.data.initMethodName],this.data.isInitMethodPromise?t(this.initOptions):(t(this.initOptions),Promise.resolve(!0))}catch(t){return Promise.reject(t)}},Plugin.prototype.overrideInits=function(){var t=_Configuration__WEBPACK_IMPORTED_MODULE_2__.a.getOverrides();if(t&&0<t.length){var e=new _PluginInitOverride__WEBPACK_IMPORTED_MODULE_4__.a(t,this).getCustomInits();_Utils__WEBPACK_IMPORTED_MODULE_6__.a.mergeDeep(this.initOptions,e)}},Plugin.prototype.mergeClientOptions=function(){var e=this,t=this.loader.initOptions.plugins.find(function(t){return t.name.toLowerCase()===e.data.name.toLowerCase()});t?(this.initOptions=Object.assign(this.initOptions,t.initOptions),this.initOptions.siteCode=this.initOptions.siteCode||_Configuration__WEBPACK_IMPORTED_MODULE_2__.a.getSiteCode(),this.initOptions.layoutCode=this.initOptions.layoutCode||_Configuration__WEBPACK_IMPORTED_MODULE_2__.a.getLayoutCode()):console.log(">>Loader<< |",this.data.name,"client options is not set")},Plugin.prototype.initCustomOptions=function(){this.initEnvironment(),this.initSessionId(),this.initResourceUrl()},Plugin.prototype.initResourceUrl=function(){var t=document.createElement("a");t.href=this.mainScript.path,this.initOptions.resourceUrl=t.protocol+"//"+t.hostname},Plugin.prototype.mergeInitOptions=function(){this.mergeFromFlyInitSettings();var t=_LoaderStorage__WEBPACK_IMPORTED_MODULE_5__.a.get(this.data.name+"_settings");if(t)try{this.mergeInitPropWithLocalStorage(this.initOptions,t)}catch(t){console.warn("error of overriding settings",t)}},Plugin.prototype.mergePredefinedInitSettings=function(){null!==this.data.predefinedInitSettings&&"object"==typeof this.data.predefinedInitSettings&&this.mergeInitPropWithConfig(this.data.predefinedInitSettings,this.initOptions)},Plugin.prototype.mergeFromFlyInitSettings=function(){if(this.data.flyCalculatedInitSettings&&"object"==typeof this.data.flyCalculatedInitSettings)try{for(var property in this.data.flyCalculatedInitSettings){var calculateProperty=this.data.flyCalculatedInitSettings[property];if("function"==typeof calculateProperty&&(this.initOptions[property]=calculateProperty.call()),"string"==typeof calculateProperty){var sFunction=eval("("+calculateProperty+")");this.initOptions[property]=sFunction.call()}}}catch(t){console.log(">>Loader<< |","flyCalculatedInitSettings calculate has errors",t)}},Plugin.prototype.mergeInitPropWithLocalStorage=function(t,e){if(e)for(var n in e)t[n]=e[n]},Plugin.prototype.mergeInitPropWithConfig=function(t,e){for(var n in t){var o=n,r=!1;n.endsWith(_Constants__WEBPACK_IMPORTED_MODULE_1__.a.ImportantPostfix)&&(r=!0,o=n.replace(_Constants__WEBPACK_IMPORTED_MODULE_1__.a.ImportantPostfix,"")),void 0===e[o]?e[o]=t[n]:r?e[o]=t[n]:"object"==typeof t[n]&&"object"==typeof e[o]&&this.mergeInitPropWithConfig(t[n],e[o])}},Plugin.prototype.initEnvironment=function(){this.initOptions.environment||(this.initOptions.environment=_Configuration__WEBPACK_IMPORTED_MODULE_2__.a.getEnvironment())},Plugin.prototype.initSessionId=function(){this.initOptions.sessionId=this.loader.sessionId},Plugin.prototype.processLoadInitCode=function(){var initCode;if(this.data.loadInitCode&&("function"==typeof this.data.loadInitCode&&(initCode=this.data.loadInitCode.call()),"string"==typeof this.data.loadInitCode)){var sFunction=eval("("+this.data.loadInitCode+")");initCode=sFunction.call()}initCode?this.data.loadCodeInitSettings&&this.data.loadCodeInitSettings[initCode]?this.initOptions=Object.assign(this.initOptions,this.data.loadCodeInitSettings[initCode]):console.warn(">>Loader<< |","There is no calculate init settings for code",initCode):console.log(">>Loader<< |","there is no calculate init code",this.data.loadInitCode)},Plugin}()},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(0),i=n(2),r=(s.prototype.findCurrentPlugin=function(t){if(t&&t.plugins)for(var e=t.plugins.length,n=0;n<e;n++){var o=t.plugins[n];if(o.name==this.plugin.data.name)return o.initOptions}return null},s.prototype.getTypeInits=function(t,e,n){var o={};if(t&&t[e]&&t[e][n]){var r=this.findCurrentPlugin(t[e][n]);r&&i.a.mergeDeep(o,r)}return o},s.prototype.getCustomInits=function(){var o={},r=this;return this.overrides.forEach(function(t){var e=r.getTypeInits(t,"siteCodes",r.siteCode),n=r.getTypeInits(t,"customLayouts",r.layoutCode);i.a.mergeDeep(o,e,n)}),o},s);function s(t,e){this.overrides=[],this.plugin=e,this.overrides=t,this.siteCode=o.a.getSiteCode(),this.layoutCode=o.a.getLayoutCode()}},function(t,e,n){"use strict";var o,r,i=n(1),s=n(0),a=n(6),u=n(5),c=n(4),l=n(3),p=n(2),d=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=(r=a.a,d(f,r),f.prototype.getUrl=function(){var t=u.a.getStoredUrl(this.plugin.data.name,this.resourceModel.type);if(0==this.usedLoadAttempts&&t&&this.isActualUrl(t))return new c.a(t,this.resourceModel);var e=this.calculateNextUrl();return e||new c.a(this.resourceModel.defaultURL,this.resourceModel,!0)},f.prototype.calculateNextUrl=function(){var t=this.getAvailableUrls();return this.isRandomUrlSelect()?this.getRandomUrl(t.length):this.getNextUrl(this.currentIndex)},f.prototype.isRandomUrlSelect=function(){return s.a.isRandomURLChoosing()},f.prototype.getRandomUrl=function(t){if(0<t){var e=this.getRandomIndex(0,this.resourceURLs.length-1),n=this.resourceURLs[e];return this.isValidUrl(n)?new c.a(n,this.resourceModel):this.getRandomUrl(t--)}return null},f.prototype.getNextUrl=function(t){if(t<this.resourceURLs.length){var e=this.resourceURLs[t];return this.isValidUrl(e)?new c.a(e,this.resourceModel):this.getNextUrl(t++)}return null},f.prototype.isValidUrl=function(t){return!!t&&(u.a.isAlreadyBlockedUrl(this.plugin.data.name,t)||f.isValidURL(t))},f.prototype.getAvailableUrls=function(){return[]},f.prototype.isActualUrl=function(t){return-1!==this.resourceURLs.indexOf(t)},f.prototype.getRandomIndex=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},f.prototype.validateUniqueURLs=function(){var e=this.resourceURLs.map(function(t){return{count:1,url:t}}).reduce(function(t,e){return t[e.url]=(t[e.url]||0)+e.count,t},{}),t=Object.keys(e).filter(function(t){return 1<e[t]});0<t.length&&l.a.trackEvent(i.a.EVENTS.OptionsHaveDuplicateURLs,{plugin:this.plugin.data.name,duplicates:t.toString()})},f.isValidURL=function(t){return new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).test(t)},f);function f(t,e){var n=r.call(this,t,e)||this;return n.resourceURLs=[],n.currentIndex=0,n.resourceURLs=n.getAvailableUrls(),n.loadAttempts=n.resourceURLs.length,n.blockAttempts=s.a.getBlockAttempts(),s.a.getUrlParsedProperties().version=n.resourceModel.version,n.resourceURLs=n.resourceURLs.map(function(t){return p.a.parseVariables(t,s.a.getUrlParsedProperties())}),n.validateUniqueURLs(),n}var g,y,_=((g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(m,y=h),m.prototype.getAvailableUrls=function(){return this.resourceModel.predefinedURLs},m.prototype.loadNextResource=function(t){return this.usedLoadAttempts++,this.usedLoadAttempts<this.totalAttempts?(this.currentIndex=this.resourceURLs.indexOf(t.path)+1,this.currentIndex>=this.resourceURLs.length&&(this.currentIndex=0),this.load()):(t.setFail({status:"try to load predefined url but usedLoadAttempts > loadAttempts or usedBlockAttempts > blockAttempts"}),Promise.resolve(t))},m);function m(t,e){var n=y.call(this,t,e)||this;return n.totalAttempts=n.loadAttempts*n.blockAttempts,n}var C="0123456789ABCDEFGHIJKLMNOPQabcdefghijklmnopqrstuvwxyz",v=[function(t){return btoa(t).replace(/[^a-z0-9]/gi,"")},function(t){for(var e,n,o,r,i="",s=0;s<t.length;s++)e=t.substring(s,s+1),n=C.indexOf(e),r=C.substring(o=1^n,1+o),i+=r;return i},function(t){for(var e=0,n=0,o=0,r="Secret key",i="",s=0;s<r.length;s++)e+=r.charCodeAt(s);var a=e;for(s=0;s<t.length;s++){o==r.length&&(o=0),a<1&&(a=e+n);var u=a%r.charCodeAt(o),c=t.charCodeAt(s)+u;n+=a%r.charCodeAt(o),a-=r.charCodeAt(o),o++,i+=parseInt(""+c/52)+C.charAt(parseInt(""+c%52))}return i},function(t){return t[0]+t[t.length-1]+t.length+t[t.length-1]+t[0]+"rr"+t.length+"j"},function(t){var e="";if(t.split("").forEach(function(t){e+=String.fromCharCode(t.charCodeAt()+2)+t+String.fromCharCode(t.charCodeAt()-2)}),(e=e.replace(/[^a-z0-9]/gi,"")).length<8)for(var n=e.length;n<8;n++)e+=String.fromCharCode(96+2*n);return e}];function P(){}var O,E,R=new(P.prototype.generate=function(n){return v.forEach(function(t){var e="https://cdn."+t(n)+".com/";this.xCodeCDNs.push(e)}.bind(this)),[]},P),S=((O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}O(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(I,E=h),I.prototype.getAvailableUrls=function(){return R.generate(this.resourceModel.xCode)},I.prototype.loadNextResource=function(t){return this.usedLoadAttempts<=this.loadAttempts?this.load():(t.setFail({status:"try to load dynamic url but usedLoadAttempts > loadAttempts"}),Promise.resolve(t))},I);function I(t,e){return E.call(this,t,e)||this}var L,b,A=(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}L(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),M=(b=a.a,A(U,b),U.prototype.getUrl=function(){return new c.a(this.resourceModel.defaultURL,this.resourceModel,!0)},U.prototype.loadNextResource=function(t){return t.setFail({status:"The second try to load default url"}),Promise.resolve(t)},U);function U(t,e){return b.call(this,t,e)||this}n.d(e,"a",function(){return D});var D=(N.prototype.create=function(){switch(this.mode){case i.a.MODES.predefined:return new _(this.plugin,this.data);case i.a.MODES.dynamic:return new S(this.plugin,this.data);default:return new M(this.plugin,this.data)}},N.prototype.getMode=function(){return this.data.predefinedURLs&&Array.isArray(this.data.predefinedURLs)&&0<this.data.predefinedURLs.length?i.a.MODES.predefined:!this.data.predefinedURLs&&this.data.xCode?i.a.MODES.dynamic:i.a.MODES.default},N);function N(t,e){this.plugin=t,this.data=e,this.mode=this.getMode()}},function(t,e,n){"use strict";n.r(e),e.default='{\r\n    "appInsightsKey": "8241cbc2-50a5-47c4-b91f-462506490fad",\r\n    "blockAttempts": 2,\r\n    "clientCode": "aim",\r\n    "loadAttempts": null,\r\n    "environment": "prod",\r\n    "randomURLChoosing": false,\r\n    "xCode": "",\r\n\t"resources": [\r\n          {\r\n            "type": "script",\r\n            "defaultURL": "https://polyfill.io/v3/polyfill.min.js?flags=gated&features=es5%2CCustomEvent%2CArray.from%2CArray.isArray%2CArray.prototype.filter%2CArray.prototype.find%2CArray.prototype.findIndex%2CArray.prototype.forEach%2CArray.prototype.indexOf%2CArray.prototype.keys%2CArray.prototype.lastIndexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CDate.prototype.toISOString%2CDocumentFragment%2CDocumentFragment.prototype.append%2CDocumentFragment.prototype.prepend%2CElement%2CElement.prototype.after%2CElement.prototype.append%2CElement.prototype.before%2CElement.prototype.classList%2CElement.prototype.cloneNode%2CElement.prototype.closest%2CElement.prototype.dataset%2CElement.prototype.matches%2CElement.prototype.placeholder%2CElement.prototype.prepend%2CElement.prototype.remove%2CElement.prototype.replaceWith%2CElement.prototype.toggleAttribute%2CEvent%2CJSON%2CMap%2CNumber.parseInt%2CNumber.parseFloat%2CObject.assign%2CObject.create%2CObject.defineProperties%2CObject.defineProperty%2CObject.entries%2CObject.getOwnPropertyDescriptor%2CObject.getOwnPropertyNames%2CObject.is%2CObject.keys%2CObject.values%2CPromise%2CPromise.prototype.finally%2CSet%2CString.prototype.trim%2CXMLHttpRequest%2Cdocument.getElementsByClassName%2Cdocument.currentScript%2Cdocument.querySelector%2Cfetch%2CgetComputedStyle%2ClocalStorage%2CArray.prototype.some%2CDate.now%2CEvent.focusin%2CEventSource%2CFunction.prototype.bind%2CFunction.prototype.name%2CHTMLDocument%2CNodeList.prototype.forEach%2CNodeList.prototype.%40%40iterator%2CNode.prototype.contains%2CObject.getPrototypeOf%2CObject.setPrototypeOf%2CRegExp.prototype.flags%2CString.prototype.%40%40iterator%2CString.prototype.startsWith%2CString.prototype.endsWith%2Cconsole%2Cconsole.debug%2Cconsole.error%2Cconsole.info%2Cconsole.log%2Cdocument%2Cdocument.head%2Cdocument.visibilityState%2Clocation.origin%2CrequestIdleCallback%2Cscreen.orientation%2CmatchMedia%2CURL",\r\n            "predefinedURLs": [],\r\n            "crossOrigin": true,\r\n            "cache": true,\r\n            "async": true\r\n          }\r\n        ],\r\n    "loadPlugins":[\r\n        {\r\n          "name":"FP",\r\n          "initOrder":1,\r\n          "initMethodName": "init",\r\n          "globalObjectName": "Fingerprint",\r\n          "isInitMethodPromise": true,\r\n          "resources":[\r\n            {\r\n              "type": "script",\r\n              "predefinedURLs": ["https://fp-cdn.azureedge.net/prod/aim/fp.min.js", "https://cdn.q20jqurls0y7gk8.info/prod/aim/fp.min.js"]\r\n            }\r\n          ]\r\n      },\r\n      {\r\n        "name":"NXT",\r\n        "initMethodName": "init",\r\n        "initOrder":3,\r\n        "globalObjectName": "Connext",\r\n        "isInitFnPromise": true,\r\n        "resources":[\r\n          {\r\n            "type": "script",\r\n            "predefinedURLs": ["https://cdn.ayc0zsm69431gfebd.xyz/prod/aim/t8y9347t.min.js","https://cdn.czx5eyk0exbhwp43ya.biz/prod/aim/t8y9347t.min.js", "https://cdn.ayc0zsm69431gfebd.info/prod/aim/t8y9347t.min.js","https://connext-cdn.azureedge.net/prod/aim/t8y9347t.min.js"]\r\n          },\r\n          {\r\n            "type": "style",\r\n            "predefinedURLs": ["https://cdn.ayc0zsm69431gfebd.xyz/prod/aim/t8y9347t.min.css","https://cdn.czx5eyk0exbhwp43ya.biz/prod/aim/t8y9347t.min.css", "https://cdn.ayc0zsm69431gfebd.info/prod/aim/t8y9347t.min.css","https://connext-cdn.azureedge.net/prod/aim/t8y9347t.min.css"]\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        "name":"DL",\r\n        "initMethodName": "init",\r\n        "initOrder":2,\r\n        "globalObjectName": "G2Analytics",\r\n        "resources":[\r\n          {\r\n            "type": "script",\r\n            "predefinedURLs": ["https://g2insights-cdn.azureedge.net/prod/aim/g2i.min.js", "https://cdn.nxakpj4ac8gkd53.info/prod/aim/g2i.min.js"]\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  }'},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(3),i=n(0),s=n(7);function a(){this.pendingPlugins=[]}var u=new(a.prototype.loadAndInitPlugins=function(t){var n=this;this.loader=t;var e=this.sortPluginsByOrder(i.a.getPlugins()),o=this.loader.initOptions.plugins.map(function(t){return t.name});return e.filter(function(t){return-1!==o.indexOf(t.name)}).forEach(function(t){var e=new s.a(t,n.loader);n.pendingPlugins.push(e.load())}),Promise.all(this.pendingPlugins).then(function(t){return n.initializeSequentially(t.filter(function(t){return t}))}).catch(function(t){return console.log(">>Loader<< | Some from plugins is not loaded",t),Promise.resolve()})},a.prototype.initializeSequentially=function(e){var n=this,o=e[0],t=o.init();return e.shift(),t.then(function(){return console.log(">>Loader<< | Plugin "+o.data.name,"is initialized"),n.initNextPlugin(e)}).catch(function(t){return console.warn(">>Loader<< | Plugin "+o.data.name,"is NOT initialized. ",t),n.initNextPlugin(e)})},a.prototype.initNextPlugin=function(n){var o=this;return new Promise(function(t,e){0!=n.length?o.initializeSequentially(n).then(function(){t()}).catch(function(t){e(t)}):t()})},a.prototype.sortPluginsByOrder=function(n){var t=i.a.getPlaginsInitOrder(),o=[];return t.forEach(function(e){var t=n.find(function(t){return t.name==e});t&&o.push(t)}),n.forEach(function(e){t.some(function(t){return e.name==t})||o.push(e)}),o},a),c=n(6),l=n(10);function p(){this.pendingResources=[]}var d=new(p.prototype.loadDefaultResources=function(t,e){void 0===e&&(e=!1);var n=l.default.replace(/(?:\\[rn]|[\r\n])/g,"").match(/"resources":\s+(\[.+\]),/)[1],o=JSON.parse(n);return this._loadResources(o,t,e)},p.prototype.loadConfigurationResources=function(t,e){void 0===e&&(e=!1);var n=i.a.getResources();return this._loadResources(n,t,e)},p.prototype._loadResources=function(n,o,r){var i=this;function s(t,e){return function(){void 0===i.pendingResources[e]&&(i.pendingResources[e]=t,(++a===n.length||r&&!t)&&o(i.pendingResources))}}void 0===r&&(r=!1);var a=0;n.forEach(function(t,e){new c.a(null,t,s(!0,e),s(!1,e)).loadCallback()})},p),h=(f.prototype.init=function(t){var e=this,n=Date.now();if(!t||!t.plugins||!t.plugins.length)throw{name:"nxtError",message:"Plugins are required for loader. Please, specify at least one plugin for downloading. "};d.loadDefaultResources(function(){return e.initOptions=t,e.listenIsNeedReCalculateSessionId(),t.appInsightsKey&&r.a.init(t.appInsightsKey),i.a.getDataFromJSON(e,t.CONFIG_URL).then(function(t){return i.a.checkInitCondition()?(r.a.isInit()||r.a.init(t.appInsightsKey),i.a.excludePluginsByRules(["isNotFoundPage","inIframe","isLoadedByBot","isMatchesUrlMask"]),u.loadAndInitPlugins(e).then(function(t){var e=Date.now()-n;return console.log("<<Loader>> | Init time ",e," ms"),Promise.resolve(t)})):(console.warn(">>Loader<< | initCondition failed !!!!"),!1)})})},f.prototype.GetVersionInfo=function(){return"Version: 1.3, Build: V.1.3-20210407.2"},f.prototype.reCalculateSessionId=function(){var t=new CustomEvent("Loader:Recalculate:SessionId",{detail:o.a.generateGuid()});window.dispatchEvent(t)},f.prototype.listenIsNeedReCalculateSessionId=function(){var e=this;window.addEventListener("Loader:NeedRecalculate:SessionId",function(t){e.reCalculateSessionId()})},f);function f(){this.sessionId=o.a.generateGuid(),this.initOptions={}}window.MG2Loader=new h}]);
