(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{48:function(t,n,e){"use strict";e.r(n);var i=e(0),o=e(30),r=e(6),a=e(4),u=e(13),c=e(17),l=e(28),d=function(t){var n=Object(r.b)(),e=Object(u.b)(n.width,n.height),i=Object(u.a)(),c=Object(o.a)(n.width,n.height,Object(a.e)(window.ADAPT.ad.layouts)).id,l=p({platform:i,orientation:e,layout:c});return t.map(l)},f=function(t){var n=!1;Object(l.a)((function(e){e&&function(){var e,i;if(!n){var o=null===(i=null===(e=t.find((function(t){return"stage"===t.key&&"impression"===t.type})))||void 0===e?void 0:e.value[0])||void 0===i?void 0:i.tags;if(o){var r=document.createElement("div");r.style.position="absolute",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.zIndex="-1",r.innerHTML=Object(c.a)(o),s(r),n=!0}}}()}))},s=function(t,n){var e;if(void 0===n&&(n=document.body),v(t)){var i=document.createElement("script");i.async=t.async,i.src=t.src,e=i}else e=t.cloneNode(!1);for(var o=0;o<t.childElementCount;o++)s(t.children[o],e);n.appendChild(e)},v=function(t){return"script"===t.tagName.toLowerCase()},p=function(t){return function(n){return Object(i.a)(Object(i.a)({},n),{value:m(t,n.value)})}},m=function(t,n){var e=t.orientation,i=t.platform,o=t.layout,r=y(t),a=n.filter((function(t){return!(t.platform&&t.platform!==i||t.orientation&&t.orientation!==e||t.layout&&t.layout!==o)})).reduce((function(t,n){return void 0===t?n:r(t)>=r(n)?t:n}),void 0);return a?[a]:[]},y=function(t){return function(n){var e=t.layout,i=t.orientation;return+(t.platform===n.platform)+ +(i===n.orientation)+ +(e===n.layout)}};e.d(n,"injectImpressionTracking",(function(){return f})),e.d(n,"matchTracking",(function(){return d}))}}]);
//# sourceMappingURL=adapt-2-5-0-tracking.js.map