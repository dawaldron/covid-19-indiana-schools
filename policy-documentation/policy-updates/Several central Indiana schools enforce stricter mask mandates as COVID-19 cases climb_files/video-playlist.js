!function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={18:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/wp-content/themes/nexstar/client/build/";var s=window.wpJsonpNxsApp=window.wpJsonpNxsApp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([243,0]),n()}({243:function(e,t,n){e.exports=n(260)},244:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var i=n(3),r={name:"videoPlaylistFactory",class:n(21).a,querySelector:{playerWrapper:".video-playlist__player"},querySelectorAll:{articles:".article-list__article",articleTitles:".article-list__article-title"},options:{playingClass:"now-playing",upNextClass:"up-next",iconTextClass:"article-list__article-mediaicon-text"}};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={mobileFirst:!0,adaptiveHeight:!0,dots:!1,arrows:!0,infinite:!1,speed:300,slidesToScroll:1},l={name:"videoPlaylist",class:n(78).a,querySelector:{articleContent:".article-list__content",playerEl:'.video-playlist__player [id^="player"]',playerWrapper:".video-playlist__player"},querySelectorAll:{articles:".article-list__article",articleTitles:".article-list__article-title"},options:{playingClass:"now-playing",upNextClass:"up-next",iconTextClass:"article-list__article-mediaicon-text",slickOptions:a({},c,{responsive:[{breakpoint:900,settings:{slidesToShow:3}},{breakpoint:1,settings:{slidesToShow:2.25}}]}),slickOptionsSidebar:a({},c,{responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:1,settings:{slidesToShow:2.25}}]})}},u=(n(244),n(24));function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mutePrefKey="nxsAnvMutePref",this.eventNameMute="USER_MUTE",this.eventNameUnMute="USER_UNMUTE",this.anvInstance=t}var t,n,i;return t=e,(n=[{key:"setUserPreference",value:function(e,t){localStorage.setItem(e,t)}},{key:"getUserPreference",value:function(e){return localStorage.getItem(e)}},{key:"setMutePreference",value:function(){switch(this.getUserPreference(this.mutePrefKey)){case this.eventNameMute:this.anvInstance.mute();break;case this.eventNameUnMute:this.anvInstance.unmute();break;default:this.anvInstance.mute()}}}])&&p(t.prototype,n),i&&p(t,i),e}();function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w,b,g,m,P=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.categories=[],this.tags="",this.pageType="",this.autoplay=!1,this.anvInstance=t,this.bobPixel=n,this.pageAttributes=i||{},this.pageType=this.pageAttributes.page_type||"",this.userPreferences=new d(this.anvInstance),this.listener=this.listener.bind(this),this.anvInstance.setListener(this.listener)}var t,n,i;return t=e,(n=[{key:"promiseAnvFunc",value:function(e){var t=this;return new Promise((function(n,i){t.anvInstance[e]||i(e),t.anvInstance[e]((function(e){return n(e)}))}))}},{key:"listener",value:function(e){var t=this;if(e&&e.name){try{var n=new CustomEvent("nsAnvatoPlayerEvent",{detail:{name:e.name,pInstance:this.anvInstance.mergedConfig.pInstance,time:e.time,args:e.args}});window.dispatchEvent(n)}catch(e){}switch(e.name){case"METADATA_LOADED":e.args&&(this.categories=e.args[2].categories,this.tags=e.args[2].tags,this.updateBobPixel({vid_cr:0}));try{this.autoplay=this.anvInstance.mergedConfig.autoplay}catch(e){}break;case"AUTOPLAY_STATUS":this.autoplay&&("MUTED"===e.args[0]?this.anvInstance.mute():this.userPreferences.setMutePreference());break;case"AD_STARTED":this.promiseAnvFunc("getAdDuration").then((function(e){t.updateBobPixel({vid_duration:":".concat(e),vid_type:"pre-roll",vid_cr:0})}));break;case"AD_COMPLETED":this.updateBobPixel({vid_type:"pre-roll",vid_cr:100});break;case"VIDEO_COMPLETED":this.updateBobPixel({vid_cr:100});break;case"USER_MUTE":this.autoplay&&this.userPreferences.setUserPreference(this.userPreferences.mutePrefKey,this.userPreferences.eventNameMute);break;case"USER_UNMUTE":this.autoplay&&this.userPreferences.setUserPreference(this.userPreferences.mutePrefKey,this.userPreferences.eventNameUnMute);break;case"CAPTION_DETECTED":this.anvInstance.setCaptionStyle({override:!0,bgAlpha:3,textColor:0,fontType:0,fontSize:2,textEdgeStyle:4,presetLevel:3})}}}},{key:"updateBobPixel",value:function(e){var t=this,n=[];this.tags&&n.push(this.tags),this.categories&&n.push.apply(n,h(this.categories));var i=this.anvInstance.mergedConfig,r=(i=void 0===i?{}:i).autoplay,o=i.nxs,a=(o=void 0===o?{}:o).mp4Url,s=void 0===a?"":a,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{vid_pageurl:this.pageAttributes.page_url,vid_keywords:n.join(","),vid_playinit:r?"Auto":"Manual",vid_type:"video",vid_asset_url:s},{},e);Promise.all([this.promiseAnvFunc("getTitle"),this.promiseAnvFunc("getDescription"),this.promiseAnvFunc("getWidth"),this.promiseAnvFunc("getHeight"),this.promiseAnvFunc("getDuration")]).then((function(e){var n=e[0],i=e[1],r=e[2],o=e[3],a=e[4];c.vid_title=n,c.vid_desc=i,c.vid_dim="".concat(r,"x").concat(o);var s=new Date(1e3*a);c.vid_duration="".concat(s.getMinutes(),":").concat(s.getSeconds()),t.bobPixel.updatePixel(c)}))}}])&&y(t.prototype,n),i&&y(t,i),e}(),O=!1,_=!1,E={},A={};function T(){if(window.anvp[g.id].config.nxs.enableFloatingPlayer){var e=b.getBoundingClientRect(),t=(e.bottom+e.top)/2;t<window.innerHeight&&0<t&&(document.addEventListener("scroll",S),document.removeEventListener("scroll",T),_=!0)}else document.removeEventListener("scroll",T)}function S(){var e="static"===b.style.position,t=b.getBoundingClientRect(),n=t.top<window.innerHeight&&m<t.bottom,i=window.anvp.getAll()[0],r=window.anvp[i].mergedConfig;window.anvatoVideoAssetId=r.video,window.anvatoVideoTitle=r.title?r.title:r.openGraphInfo.title,e&&n?j(b,g,"automatic"):!O||e||n||C(b,g)}function C(e,t){window.anvatofloatCount+=1,E=new CustomEvent("anvatoPlayerFloat",{detail:{floatCount:window.anvatofloatCount,videoTitle:window.anvatoVideoTitle,videoAssetId:window.anvatoVideoAssetId}}),window.dispatchEvent(E);var n=e.getBoundingClientRect();e.style.setProperty("position","static","important"),e.style.width="".concat(n.width,"px"),e.style.height="".concat(n.height,"px"),t.style="";var i=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=document.createElementNS("http://www.w3.org/2000/svg","circle"),r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("cx","9"),i.setAttribute("cy","9"),i.setAttribute("r","8"),r.setAttribute("d","M5.5,5.5,12.5,12.5"),o.setAttribute("d","M5.5,12.5,12.5,5.5"),n.appendChild(i),n.appendChild(r),n.appendChild(o),n.addEventListener("click",(function(){window.anvp[t.id].pause(),j(e,t,"manual")})),n}(e,t);if(Object(u.a)()){var r=document.createElement("div");r.className="mobile-cross-bar",r.appendChild(i),e.insertBefore(r,t),t.classList.add("mobile-floating-player")}else i.classList.add("cross-sign"),e.insertBefore(i,t),t.classList.add("desktop-floating-player")}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";window.anvatoUnfloatTrigger=n,A=new CustomEvent("anvatoPlayerUnFloat",{detail:{unFloatTrigger:window.anvatoUnfloatTrigger,videoTitle:window.anvatoVideoTitle,videoAssetId:window.anvatoVideoAssetId}}),window.dispatchEvent(A),e.style="",t.style=w?"":"position: relative;",t.classList.remove("mobile-floating-player"),t.classList.remove("desktop-floating-player");var i=e.getElementsByClassName("mobile-cross-bar");i[0]&&i[0].remove();var r=e.getElementsByClassName("cross-sign");r[0]&&r[0].remove()}function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}window.anvatofloatCount=0,window.anvatoUnfloatTrigger=null,window.anvatoVideoTitle="",window.anvatoVideoAssetId="",window.addEventListener("nsAnvatoPlayerEvent",(function(e){!function(e){if("KEY_VALUE_SET"===e.name){w="video"===window.NXSTdata.content.pageType;var t=document.querySelector("#primary").querySelector(".article-header");b=w?document.querySelector(".video-playlist__player-intrinsic-sizer"):t.querySelector(".ns-block-embed__wrapper"),w||!window.location.href.includes("newsnation")||b||(b=document.querySelector(".ns-block-embed__wrapper")).parentElement.setAttribute("style","z-index: 4 !important"),g=b.querySelector("iframe"),document.querySelector('script[data-type="s2nScript"]')||!b||"article"!==window.NXSTdata.content.pageType&&"video"!==window.NXSTdata.content.pageType||Object(u.a)()&&w&&!window.location.href.includes("newsnation")||window.location.href.includes("newsnation")&&void 0!==window.anvp[g.id].config.video&&window.anvp[g.id].config.video.includes("ads")||document.addEventListener("scroll",T),m=Object(u.a)()?65:70;var n="fixed"===g.style.position,i=b.getBoundingClientRect(),r=i.top<window.innerHeight&&0<i.bottom;n||r||!_||C(b,g)}else"STATE_CHANGE"===e.name?"pausedVideoContent"!==e.args[0]&&"pausedAdContent"!==e.args[0]||!w&&g.id!==e.pInstance?"playingVideoContent"!==e.args[0]&&"playingAdContent"!==e.args[0]||(w||g.id===e.pInstance?O=!0:(window.anvp[g.id].pause(),j(b,g,"automatic"))):O=!1:"BUFFER_START"===e.name&&g.id===e.pInstance?O=!0:w&&"PLAYER_EXIT"===e.name&&j(b,g,"automatic")}(e.detail)}));var k=function(){function e(t,n,i,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentEl=t,this.id=n,this.src=new URL("https://".concat(r,"/bob_003.gif")),i&&(this.appendPixelToParent(),this.updatePixel(i))}var t,n,i;return t=e,(n=[{key:"appendPixelToParent",value:function(){if(!this.pixel){var e=document.createElement("div");e.classList.add("screen-reader-text"),this.parentEl.appendChild(e),this.pixel=document.createElement("img"),this.pixel.id=this.id,this.pixel.alt="",this.pixel.style.width="1px",e.appendChild(this.pixel)}}},{key:"updatePixel",value:function(e){var t=this;this.pixel||this.appendPixelToParent(),Array.from(this.src.searchParams.keys()).forEach((function(e){t.src.searchParams.delete(e)})),Object.keys(e).forEach((function(n){t.src.searchParams.append(n,e[n])})),this.pixel.src=this.src.toString()}}])&&x(t.prototype,n),i&&x(t,i),e}();function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var I=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ids={},this.anvp=t,this.pageAttributes=n,this.bobBaseHost=i,this.setUpVideo=this.setUpVideo.bind(this)}var t,n,i;return t=e,(n=[{key:"getAndSetUpAll",value:function(){var e=this;this.anvp.getAll&&this.anvp.getAll().forEach((function(t){return e.setUpVideo(t)}))}},{key:"setUpVideo",value:function(e){this.ids[e]||(this.ids[e]=new P(this.anvp[e],new k(document.body,"bob_anvp_".concat(e),null,this.bobBaseHost),this.pageAttributes))}}])&&U(t.prototype,n),i&&U(t,i),e}(),M=new i.ComponentManager("nexstar");document.addEventListener("DOMContentLoaded",(function(){M.initComponents([r,l])})),window.anvp=window.anvp||{};var D=new I(window.anvp,window.amScripts.page_attributes,window.amScripts.bob.base_host);window.anvp.onReady=function(){D.getAndSetUpAll()}},7:function(e,t){e.exports=jQuery},78:function(e,t,n){"use strict";(function(e){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return l}));var l=function(t){function n(t){var r,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(r=!(c=s(n).call(this,t))||"object"!==i(c)&&"function"!=typeof c?o(a):c).isCarousel=!0;var l=r.children,u=l.articles,p=l.articleContent,d=r.element.dataset.context;return r.isCarousel=r.element.classList.contains("video-playlist--carousel"),r.setCarouselArrowPosition=r.setCarouselArrowPosition.bind(o(r)),r.isCarousel&&("carousel_sidebar--video"===d?e(p).slick(r.options.slickOptionsSidebar):e(p).on("setPosition",r.setCarouselArrowPosition).slick(r.options.slickOptions)),2>u.length&&r.isCarousel&&(p.style.display="none"),r}var l,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t),l=n,(u=[{key:"setCurrentVideo",value:function(t,i){a(s(n.prototype),"setCurrentVideo",this).call(this,t,i);var r=this.children.articleContent,o=e(r);this.isCarousel&&o.slick("slickGoTo",i)}}])&&r(l.prototype,u),p&&r(l,p),n}(n(21).a)}).call(this,n(7))}});
//# sourceMappingURL=video-playlist.bundle.min.js.map