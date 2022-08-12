!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=window.wafer,u=f.constants,c=f.utils,d=c.getUrlParameterValueByName,p=u.ATTR_PREFIX,v=window.wafer.controllers.WaferLazyController,w=window.DARLA||null,y=c.bindEvent,h=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root;void 0===r&&document;o(this,t);var a=t.prototype.configs,i=a.selector,l=a.successClass,f=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{selector:i,successClass:l}));return f._options=s({},f._options,{defaultOffsetY:1200,defaultOffsetX:0}),f.sync(),f}return a(t,e),l(t,[{key:"makeDarlaCall",value:function(e,t,r,o,n){var a=r.authed,s=void 0===a?"0":a,l=r.rotateAds,f=void 0!==l&&l,u=r.rotateTime,c=void 0===u?3e4:u,p=r.maxRetry,v=void 0===p?5:p,y=r.width,h=void 0===y?300:y,b=r.height,m=void 0===b?250:b,g=r.device,O=void 0===g?"smartphone":g,_=r.intl,x=void 0===_?"us":_,j=r.site,P=void 0===j?"fp":j,A=r.rid,C=void 0===A?"testRid":A,E=r.bucket,T=void 0===E?"testBucket":E,k=r.npv,S=void 0===k||k,z=r.ssl,R=void 0===z||z,D=r.metaSize,L=r.siteAttribute,Y=r.supports,B=r.flex,H=r.meta,I=void 0===H?{}:H,M=r.waitDelay,N=void 0===M?350:M;if(e&&t&&w){var U=w.inProgress(),X=w.prefetched();if((window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{}).ynet&&(t=d("_spaceid",window.location.href)||t),(U||X&&X.length>0)&&N>0)return o||(o=0),U&&o===v&&w.abort(),o>v?void(n&&n.style&&(n.style.display="none")):void setTimeout(this.makeDarlaCall.bind(this,e,t,r,o+1,n),o===v?2*N:N);var q={pg:{device:O,intl:x,property:P,rid:C,test:T}},F='Y-BUCKET="'+T+'"';if(L){var J="lu:"+s,K=L.split("pct"),V=i(K,2),W=V[0],G=V[1];F+=W&&G?" "+W+J+";pct"+G:" "+L}else"tw"===x&&(F+=' rs="lu:'+s+'"');var Q=e.replace(",","_"),Z="wafer_darla_fetch_"+Q;w.add({name:Z,autoStart:f,autoRT:c,ps:e,sa:F,sp:t,npv:S,ssl:R,ult:q});e.split(",").forEach(function(e){var t=I[e]||{},r=t.width||h,o=t.height||m,n=t.metaSize||D,a=t.supports||Y,i=t.flex||B,s=t.css,l={pos:e,dest:"wafer-darla-"+e,w:r,h:o};n&&(l.metaSize=n),a&&(l.supports=a),i&&(l.flex=i),s&&(l.css=s),w.addPos(l)}),w.event(Z)}}},{key:"loadElement",value:function(e){if(this._shouldLoadElement(e)){var t={};try{t=JSON.parse(e.getAttribute(p+"darla-config"))}catch(e){return}var r=t,o=r.pos,n=r.spaceid;if(o&&n&&w){var a=w.inProgress(),i=t,s=i.abortDarlaCalls,l=void 0===s?[]:s;a&&Array.isArray(l)&&l.length&&-1!==l.indexOf(a)&&w.abort(),this.makeDarlaCall(o,n,t,0,e)}}y(e,"load",this._itemLoaded(e))}}]),t}(v);h.prototype.configs={selector:".wafer-darla",successClass:"wafer-darla-done"};var b=h;t.default=new b({selector:b.prototype.configs.selector})}})});