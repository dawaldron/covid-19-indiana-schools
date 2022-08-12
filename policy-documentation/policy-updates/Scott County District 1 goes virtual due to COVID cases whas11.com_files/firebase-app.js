!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=h(e[r],t[r]));return e}function d(e,t,r){e[t]=r}var n,e,p=(n=Error,r(e=o,m=n),e.prototype=null===m?Object.create(m):(i.prototype=m.prototype,new i),o),v=(t.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n,o=t[0]||{},i=this.service+"/"+e,e=this.errors[e],e=e?(n=o,e.replace(u,function(e,t){var r=n[t];return null!=r?r.toString():"<"+t+"?>"})):"Error",e=this.serviceName+": "+e+" ("+i+").",s=new p(i,e),a=0,c=Object.keys(o);a<c.length;a++){var l=c[a];"_"!==l.slice(-1)&&(l in s&&void 0,s[l]=o[l])}return s},t);function t(e,t,r){this.service=e,this.serviceName=t,this.errors=r}function o(e,t){t=n.call(this,t)||this;return t.code=e,t.name="FirebaseError",Object.setPrototypeOf(t,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(t,v.prototype.create),t}function i(){this.constructor=e}var u=/\{\$([^}]+)}/g;function b(e,t){t=new a(e,t);return t.subscribe.bind(t)}var s,a=(c.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},c.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},c.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},c.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e){if("object"==typeof e&&null!==e)for(var t=0,r=["next","error","complete"];t<r.length;t++){var n=r[t];if(n in e&&"function"==typeof e[n])return 1}}(e)?e:{next:e,error:t,complete:r}).next&&(n.next=l),void 0===n.error&&(n.error=l),void 0===n.complete&&(n.complete=l);r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),r},c.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},c.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},c.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&void 0}})},c.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},c);function c(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}function l(){}(E=s=s||{})[E.DEBUG=0]="DEBUG",E[E.VERBOSE=1]="VERBOSE",E[E.INFO=2]="INFO",E[E.WARN=3]="WARN",E[E.ERROR=4]="ERROR",E[E.SILENT=5]="SILENT";function y(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel)){var o=(new Date).toISOString();switch(t){case s.DEBUG:case s.VERBOSE:console.log.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case s.INFO:console.info.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case s.WARN:console.warn.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;case s.ERROR:console.error.apply(console,["["+o+"]  "+e.name+":"].concat(r));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}}}var g=s.INFO,m=(Object.defineProperty(k.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in s))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),k.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,s.DEBUG].concat(e))},k.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,s.VERBOSE].concat(e))},k.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,s.INFO].concat(e))},k.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,s.WARN].concat(e))},k.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logHandler.apply(this,[this,s.ERROR].concat(e))},k),E=((E={})["no-app"]="No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",E["bad-app-name"]="Illegal App name: '{$name}",E["duplicate-app"]="Firebase App named '{$name}' already exists",E["app-deleted"]="Firebase App named '{$name}' already deleted",E["duplicate-service"]="Firebase service named '{$name}' already registered",E["invalid-app-argument"]="firebase.{$name}() takes either no argument or a Firebase App instance.",E),_=new v("app","Firebase",E),O="[DEFAULT]",N=[],w=(Object.defineProperty(A.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(A.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),A.prototype.delete=function(){var a=this;return new Promise(function(e){a.checkDestroyed_(),e()}).then(function(){a.firebase_.INTERNAL.removeApp(a.name_);for(var e=[],t=0,r=Object.keys(a.services_);t<r.length;t++)for(var n=r[t],o=0,i=Object.keys(a.services_[n]);o<i.length;o++){var s=i[o];e.push(a.services_[n][s])}return Promise.all(e.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}))}).then(function(){a.isDeleted_=!0,a.services_={}})},A.prototype._getService=function(e,t){var r;return void 0===t&&(t=O),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),this.services_[e][t]||(r=t!==O?t:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),r),this.services_[e][t]=r),this.services_[e][t]},A.prototype.extendApp=function(e){var t=this;h(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(N.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),N=[])},A.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw _.create("app-deleted",{name:this.name_})},A);function A(e,t,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=h(void 0,e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){N.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(t){N=N.filter(function(e){return e!==t})}}}function k(e){this.name=e,this._logLevel=g,this._logHandler=y}w.prototype.name&&w.prototype.options||w.prototype.delete||void 0;function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var T=new m("@firebase/app");"object"==typeof self&&self.self===self&&"firebase"in self&&(T.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "),(j=self.firebase.SDK_VERSION)&&0<=j.indexOf("LITE")&&T.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));var j=function e(){var s,n,a,c,l,t=(s=w,n={},c={},d(l={__esModule:!0,initializeApp:function(e,t){var r=t="object"!=typeof(t=void 0===t?{}:t)||null===t?{name:t}:t;void 0===r.name&&(r.name=O);t=r.name;if("string"!=typeof t||!t)throw _.create("bad-app-name",{name:String(t)});if(R(n,t))throw _.create("duplicate-app",{name:t});r=new s(e,r,l);return o(n[t]=r,"create"),r},app:p,apps:null,SDK_VERSION:"6.1.1",INTERNAL:{registerService:function(r,e,t,n,o){if(void 0===o&&(o=!1),a[r])throw _.create("duplicate-service",{name:r});function i(e){if("function"!=typeof(e=void 0===e?p():e)[r])throw _.create("invalid-app-argument",{name:r});return e[r]()}return a[r]=e,n&&(c[r]=n,u().forEach(function(e){n("create",e)})),void 0!==t&&h(i,t),l[r]=i,s.prototype[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,r).apply(this,o?e:[])},i},removeApp:function(e){o(n[e],"delete"),delete n[e]},factories:a={},useAsService:i}},"default",l),Object.defineProperty(l,"apps",{get:u}),d(p,"App",s),l);function p(e){if(!R(n,e=e||O))throw _.create("no-app",{name:e});return n[e]}function u(){return Object.keys(n).map(function(e){return n[e]})}function o(e,t){for(var r=0,n=Object.keys(a);r<n.length;r++){var o=i(0,n[r]);if(null===o)return;c[o]&&c[o](t,e)}}function i(e,t){return"serverAuth"===t?null:t}return t.INTERNAL=f({},t.INTERNAL,{createFirebaseNamespace:e,extendNamespace:function(e){h(t,e)},createSubscribe:b,ErrorFactory:v,deepExtend:h}),t}(),I=j.initializeApp;return j.initializeApp=function(){return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return}}()&&T.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),I.apply(void 0,arguments)},j});
//# sourceMappingURL=firebase-app.js.map