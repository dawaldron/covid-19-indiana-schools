window.TNCMS||(window.TNCMS={}),window.TNCMS.Tracking=function(){"use strict";function e(e){console.warn&&console.warn(e)}function n(e){var n="?";if(u[e]&&window.JSON&&(n+="d=",n+=encodeURIComponent(JSON.stringify(u[e])),n+="&"),document.referrer){var t=document.referrer.match(/:\/\/(.[^/]+)/)[1];n+="rd="+encodeURIComponent(t)+"&"}return n+"i="}function t(t){for(var r=["app","url","metric","bucket","id"],a=0;a<r.length;a++)if(!t[r[a]])return void e("Missing required parameter: "+r[a]);var i=n(t.bucket),c=t.domain||document.domain;return i+=escape(t.id)+"&r="+escape(t.url).replace("%3A",":"),"//"+c+"/tncms/tracking/"+t.app+"/"+t.metric+"/"+i}function r(){var e=o;o={},d=null;for(var t in e){var r=t.split(":",2),a=r[0].split("|",2),i=n(a[1]),c=!1;navigator.sendBeacon&&(c=!0);for(var u="//"+a[0]+"/tncms/tracking/"+r[1]+"/"+i;e[t].length;){var m=e[t].pop();u.length+m.length>2e3&&(c?navigator.sendBeacon(u):(new Image).src=u,u="//"+a[0]+"/tncms/tracking/"+r[1]+"/"+i),u+=m+","}c?navigator.sendBeacon(u):(new Image).src=u}}function a(n){if(!n.app)return void e("Missing required parameter: app");if(!n.metric)return void e("Missing required parameter: metric");if(!n.id)return void e("Missing required parameter: id");var t=n.domain||document.domain,a=t+"|"+n.bucket+":"+n.app+"/"+n.metric;o[a]||(o[a]=[]),o[a]=o[a].concat(n.id),d&&window.clearTimeout(d),d=window.setTimeout(r,1e3)}function i(e){u[e.bucket]||(u[e.bucket]={}),u[e.bucket][e.name]=e.value}function c(e){u[e.bucket]&&delete u[e.bucket][e.name]}var o={},u={},d=null,m=0;return{addEvent:function(e){e.bucket="global",a(e)},getRedirectURL:function(e){return e.bucket="global",t(e)},addData:function(e){e.bucket="global",i(e)},removeData:function(e){e.bucket="global",c(e)},trackDeclarativeEvents:function(n){n=n||{};var t=n.root||document.body,r=n.domain||document.domain;if("undefined"==typeof jQuery)throw"Declarative event tracking requires jQuery";jQuery(t).find("[data-tncms-tracking]").filter(":visible").each(function(){var n=jQuery(this),t=n.data("tncmsTracking").split("/",3);t.length>=3&&TNCMS.Tracking.addEvent({domain:r,id:t[2],metric:t[1],app:t[0]}),e("Removing tncms tracking: "+n.data("tncmsTracking")),n.removeData("tncmsTracking")})},createBucket:function(e){var n=e.app||null,r=e.metric||null,o=e.domain||document.domain,u="bucket"+m++,d=e.data||{};for(var l in d)i({bucket:u,name:l,value:d[l]});return{addEvent:function(e){a({domain:o,bucket:u,id:e,app:n,metric:r})},addData:function(e){e.bucket=u,i(e)},removeData:function(e){e.bucket=u,c(e)},getRedirectURL:function(e){return e.bucket=u,e.domain=o,t(e)}}}}}();
//# sourceMappingURL=tracking.js.map