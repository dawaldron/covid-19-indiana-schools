!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-form",[],t):"object"==typeof exports?exports["wafer-form"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-form"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r=window.webpackJsonpwafer_wafers_wafer_form;window.webpackJsonpwafer_wafers_wafer_form=function(t,n,o){for(var a,s,u=0,c=[];u<t.length;u++)s=t[u],i[s]&&c.push(i[s][0]),i[s]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(r&&r(t,n,o);c.length;)c.shift()()};var n={},i={2:0,3:0};return t.e=function(e){function r(){s.onerror=s.onload=null,clearTimeout(u);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var n=i[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var o=new Promise(function(t,r){n=i[e]=[t,r]});n[2]=o;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+"wf-form-1.28.14-modern-"+{0:"fda4e0f5ba",1:"41d180776e"}[e]+".chunk.js";var u=setTimeout(r,12e4);return s.onerror=s.onload=r,a.appendChild(s),o},t.m=e,t.c=n,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t.oe=function(e){throw e},t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},d=window.wafer,m=d.base,h=d.constants,p=d.utils,v=d.WaferBaseClass,b=h.ATTR_PREFIX,g=p.bindEvent,y=p.clearAndSetInnerHTML,w=p.convertNodeListToArray,_=p.fetchWithCache,E=p.findAncestor,A=p.getElementsByAttrValues,C=p.unbindEvent,O=p.urlify,k=["handleSubmit","handleOnChange","handleOnSubmit"],L=["action","focus"],P="wafer-form-boundary-error",T="function"==typeof document.createElement("input").checkValidity,j=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,a=r.selector,s=r.successClass;n(this,t);var u=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:o,selector:a,successClass:s},{STATE_ATTRS:L})),l=e.getAttribute("action"),f=e.getAttribute(b+"boundary"),d=e.getAttribute(b+"boundary-error-class")||P,m=e.getAttribute(b+"cache"),h=e.getAttribute(b+"credentials"),p=e.getAttribute(b+"critical"),v=e.getAttribute(b+"success-class"),g=e.getAttribute(b+"custom-event"),y=e.getAttribute(b+"form-type"),_=e.getAttribute(b+"mode"),C=w(e.getElementsByTagName("input")),O=(e.getAttribute("method")||"get").toUpperCase(),T=w(e.getElementsByTagName("select")),j=e.getAttribute(b+"result-selector"),S=e.getAttribute(b+"target"),I=e.getAttribute(b+"focus"),V=e.getAttribute(b+"trigger")||"",F=e.getAttribute(b+"timeout"),x=e.getAttribute(b+"form-send-unchecked")||!1,N=f&&E(e,f),W=A("data-wf-trigger",["change","click"],e),B=W.change,q=W.click,U=[];return C.forEach(function(e){var t=e.getAttribute("type");"submit"!==t&&"button"!==t&&U.push(e)}),T.forEach(function(e){U.push(e)}),U=U.concat(w(e.getElementsByTagName("textarea"))),q.forEach(function(e){e.classList.add("trigger-submit")}),u._util=c({},u._util,{action:l,boundary:f,cache:null===m||void 0===m?0:Number(m),critical:p,customSuccessClass:v,targetElem:S&&(N||document.body).querySelector(S),boundaryElem:N,boundaryErrorClass:d,trigger:V,timeout:null===F||void 0===F?6e3:Number(F),type:y,credentials:h,elem:e,elemsWithOnChange:B,elemsWithValues:U,errorClass:o,focus:null===I||void 0===I?0:Number(I),hasCustomEvent:null===g||void 0===g?0:Number(g),includeUncheckedValues:null===x||void 0===x?0:Number(x),inputElems:C,method:O,mode:_,pending:!1,resultSelector:j,selector:a,successClass:s}),u._state={submitAllowed:!0},k.forEach(function(e){u[e]=u[e].bind(u)}),u.addEventListeners(),I&&u.focus(),"onLoad"===V&&u.submitForm(),u}return o(t,e),l(t,[{key:"removeInputEvents",value:function(){var e=this;this._util.inputElems.forEach(function(t){t.hasAttribute("required")&&(C(t,"invalid",e.handleInvalidInput),C(t,"change",e.handleInputChange),C(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addInputEvents",value:function(){var e=this,t=this._util.inputElems;this.handleInvalidInput=this.handleInvalidInput.bind(this),this.handleInputChange=this.handleInputChange.bind(this),t.forEach(function(t){t.hasAttribute("required")&&(g(t,"invalid",e.handleInvalidInput),g(t,"change",e.handleInputChange),g(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addEventListeners",value:function(){var e=this,t=this._util,r=t.elem;t.elemsWithOnChange.forEach(function(t){g(t,"change",e.handleOnChange)}),g(r,"submit",this.handleOnSubmit,{passive:!1}),this.addInputEvents()}},{key:"handleElementWithValue",value:function(e){if("weather"===e.getAttribute(b+"ac-type")||"weather"===e.getAttribute(b+"lp-type")){var t=e.getAttribute("data-user-input"),r=e.getAttribute("data-value"),n=e.value,i=r||n;if(t||i===n){var o=e.getAttribute("data-wf-ac-url")||e.getAttribute("data-wf-lp-url");if(o)return _(o.replace("{term}",n),{cache:1,cacheStrategy:"cacheFirst",useRid:0}).then(function(r){var n=e.getAttribute(b+"lp-saved-url"),o=r[0];if(!o)return e;var a=o.woeid;return a+="",e.setAttribute("data-value",a),e.setAttribute("data-user-input",i),n?_(n,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"create",params:{woeid:a,term:t}}}})}).catch(function(e){}):e}).then(function(){return e}).catch(function(){return e})}}return e}},{key:"focus",value:function(){var e=this;if(!this._util.elementToFocus){var t=w(this._util.elem.getElementsByTagName("input"))[0];if(!t)return null;this._util.elementToFocus=t}this._util.elementToFocus&&setTimeout(function(){e._util.elementToFocus.focus()},100)}},{key:"_handleCustomValidation",value:function(e){var t=this;if(e){if(!this._util.hasCustomEvent)return e;var r=this._util.elem;return new Promise(function(n,i){g(r,"customValidateStatus",function o(a){var s=a.detail;C(r,"customValidateStatus",o),s.success?n(e):(r.classList.add("wafer-form-incomplete"),r.classList.remove("wafer-form-inprogress"),t._util.pending=!1,i())});var o=new CustomEvent("customValidate",{detail:{body:e}});r.dispatchEvent(o)})}}},{key:"submitForm",value:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.forcePreference,a=void 0!==o&&o,s=this._util,u=s.action,c=s.type,l="/"!==u&&!a,f="topicPreference"===c,d="modulePreference"===c||"modulePreferenceClear"===c;if(!l&&d)return d=!0,void new Promise(function(e){r.e(1).then(function(t){e(r("./src/types/preference.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(f)return void new Promise(function(e){r.e(0).then(function(t){e(r("./src/types/topic.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(!this._util.pending&&u){var h=this._util.elem;this._util.pending=!0,this._state.submitAllowed=!0,h.classList.remove("wafer-form-incomplete"),h.classList.add("wafer-form-inprogress"),this.formValues.then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.values;return n._state.submitAllowed?(e&&e.preventDefault(),r):(h.classList.add("wafer-form-incomplete"),h.classList.remove("wafer-form-inprogress"),void(n._util.pending=!1))}).then(function(e){return n._handleCustomValidation(e)}).then(function(r){if(r){var i=n._util,o=i.boundaryElem,a=i.boundaryErrorClass,s=i.cache,c=i.credentials,l=i.customSuccessClass,f=i.errorClass,p=i.method,v=i.mode,b=i.resultSelector,g=i.successClass,w=i.targetElem,E=i.timeout,A=void 0,C=u;if(l&&h.classList.remove(l),h.classList.remove(g),h.classList.remove(f),o&&o.classList.remove(a),"POST"===p)A=JSON.stringify(r);else{var k=!0;if(window.__waferFormGetUrlify)try{var L=window.__waferFormGetUrlify.call(null,C,r,O,h);L&&(C=L,k=!1)}catch(e){k=!0}k&&(C=C+(-1===C.indexOf("?")?"?":"&")+O(r))}_(C,{mode:v,cache:s,timeout:E,body:A,credentials:c}).then(function(t){if(n._util.pending=!1,w){var r=void 0;if(m.destroy(w),b){var i=document.createElement("div");i.innerHTML=t.html;var o=i.querySelector(b);r=o&&o.innerHTML||t.html}else r=t.html;y(w,r),m.syncAssets(t.assets),m.sync(w)}return l&&h.classList.add(l),h.classList.remove("wafer-form-inprogress"),h.classList.add(g),m.emitWaferEvent("form:submit",{elem:h,meta:{data:t}}),!d||n.submitForm(e,{forcePreference:!0})}).catch(function(e){return n._util.pending=!1,m.emitError({name:t.name,elem:h,meta:{url:C,body:A},stack:e.stack}),h.classList.remove("wafer-form-inprogress"),h.classList.add(f),o&&o.classList.add(a),!1})}})}}},{key:"destroy",value:function(){var e=this,r=this._util,n=r.elem,i=r.elemsWithOnChange;this.removeInputEvents(),i.forEach(function(t){C(t,"change",e.onchange)}),C(n,"submit",this.handleOnSubmit,{passive:!1}),f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"stateDidUpdate",value:function(){if("focus"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr)return void this.focus();"stateChange"===this._util.trigger&&this.submitForm()}},{key:"handleInvalidInput",value:function(e){var t=this._util.elem,r=e.target;if(void 0===r.__customError){var n=r.getAttribute(b+"custom-error");n=null===n||void 0===n?0:Number(n),r.__customError=n}t.classList.add("wafer-form-incomplete"),r.classList.add("wafer-form-elem-error"),r.__customError&&r.setCustomValidity(" ")}},{key:"handleInputChange",value:function(e){var t=this._util.elem,r=e.target;t.classList.remove("wafer-form-incomplete"),r.classList.remove("wafer-form-elem-error"),r.setCustomValidity("")}},{key:"handleOnChange",value:function(){var e=this;setTimeout(function(){e.submitForm()},100)}},{key:"handleOnSubmit",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){this.submitForm()}},{key:"formValues",get:function(){var e=this,t=this._util||{},r=t.elemsWithValues,n=void 0===r?[]:r,i=t.includeUncheckedValues,o=t.method;return Promise.all(n.map(function(t){return e.handleElementWithValue(t)})).then(function(t){var r={};return{values:t.reduce(function(t,n){var a=n.getAttribute("data-user-input"),s=n.getAttribute("data-value"),u=n.hasAttribute("required"),c=n.value,l=s||c;if(T&&!n.checkValidity())return e._state.submitAllowed=!1,t;if(u&&!l)return e._state.submitAllowed=!1,t;var f=n.getAttribute(b+"input-format-pattern");if(void 0!==l){var d=n.getAttribute("name"),m=d.split("."),h=n.checked,p=n.type,v=void 0;if("POST"===o&&m.length>1?(d=m.pop(),v=t,m.forEach(function(e){v[e]=v[e]||{},v=v[e]})):v=t,"undefined"===l)return r[d]=!0,t;if(a||l!==c){var g=n.getAttribute("data-assist-src");g&&(v["assist-src"]=g),v[d+"-src"]="assist",v[d+"-term"]=a||c}if(!n.getAttribute("data-wf-on")&&("radio"!==p||h)){if("checkbox"===p){var y=n.getAttribute("data-wf-checkbox-array-key");y?(v[y]=v[y]||(i?{}:[]),h?"on"===l?i?v[y][d]=!0:v[y].push(d):v[y].push(l):i&&(v[y][d]=!1)):"on"===l?v[d]=h:h&&(v[d]=l)}else{var w="",_="";f&&l&&(w=f.replace(/INPUT/g,l)),_=w||l,_&&(v[d]=_)}s&&(v[d+"-dval"]=c,v[d+"-src"]="assist",v[d+"-term"]=a||c)}}return t},{}),undefinedKeyMap:r}})}}]),t}(v);j.events={click:[["trigger-submit","handleSubmit"]]};var S=j,I=window.wafer.controllers.WaferBaseController,V=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,n=void 0===r?"wafer-form-error":r,i=e.root,o=void 0===i?document:i,u=e.selector,c=void 0===u?".wafer-form":u,l=e.successClass,f=void 0===l?"wafer-form-complete":l;a(this,t);var d=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:c,props:{errorClass:n,selector:c,successClass:f},WaferClass:S}));return d.sync(),d}return u(t,e),t}(I),F=V;t.default=new F({selector:".wafer-form"})}})});