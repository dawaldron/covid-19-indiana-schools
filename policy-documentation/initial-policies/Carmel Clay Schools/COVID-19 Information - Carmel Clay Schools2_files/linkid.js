var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){var e=window,h=document,k="replace";var m=function(a,c,d,b,g){c=encodeURIComponent(c)[k](/\(/g,"%28")[k](/\)/g,"%29");a=a+"="+c+"; path="+(d||"/")+"; ";g&&(a+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");b&&"none"!=b&&(a+="domain="+b+";");b=h.cookie;h.cookie=a;return b!=h.cookie},p=function(a){var c=h.body;try{c.addEventListener?c.addEventListener("click",a,!1):c.attachEvent&&c.attachEvent("onclick",a)}catch(d){}};var q=function(a,c,d,b){this.get=function(){for(var b=void 0,c=[],d=h.cookie.split(";"),l=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),f=0;f<d.length;f++){var n=d[f].match(l);n&&c.push(decodeURIComponent(n[1][k](/%28/g,"(")[k](/%29/g,")")))}for(d=0;d<c.length;d++)c[d]&&(b=c[d]);return b};this.set=function(g){return m(a,g,b,c,1E3*d)};this.remove=function(){return m(a,"",b,c,-100)}};var t=function(a,c){var d=void 0;if("function"==typeof a.get&&"function"==typeof a.set){var b=c||{},g=b.hasOwnProperty("cookieName")?b.cookieName:"_gali",r=b.hasOwnProperty("cookieTimeout")?b.cookieTimeout:30,s=b.hasOwnProperty("levels")?b.levels:3,b=a.get("cookieDomain"),l=a.get("cookiePath"),f=new q(g,b,r,l);d||(d=f.get());d&&a.set("&linkid",d);p(function(a){a=a||e.event;a=a.target||a.srcElement;for(var b,c=0;a&&c<=s;c++){if(b=a.getAttribute("id")){a=b;100<a.length?f.remove():a?f.set(a):f.remove();
return}a=a.parentElement}f.remove()})}};(function(){e.gaplugins=e.gaplugins||{};e.gaplugins.LinkId=t;var a=e.GoogleAnalyticsObject||"ga";e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)};e[a]("provide","linkid",t)})();})();


}
/*
     FILE ARCHIVED ON 02:01:50 Jul 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:23:27 Aug 18, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 237.759 (6)
  CDXLines.iter: 29.271 (3)
  exclusion.robots: 0.205
  exclusion.robots.policy: 0.185
  RedisCDXSource: 93.262
  PetaboxLoader3.datanode: 128.322 (7)
  esindex: 0.016
  load_resource: 128.522
  PetaboxLoader3.resolve: 29.843
*/