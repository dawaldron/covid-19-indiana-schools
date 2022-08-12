// HIGH CONTRAST TOGGLE
// AUTHOR: BRENTON KELLY - WEB DEVELOPMENT MANAGER - BLACKBOARD, INC.
// VERSION: 1.28.19

!function(n){n.csHighContrastBar=function(t){var o={show:!1,alternateLogo:{selector:"",src:"",alt:""},alternateImages:[],toggle:function(t){}};t&&n.extend(o,t);var e={HighContrastOn:!1,KeyCodes:{tab:9,enter:13,esc:27,space:32,end:35,home:36,left:37,up:38,right:39,down:40},LogoCheck:0,Init:function(){var t=this;this.HighContrastOn=!!this.ReadCookie("csHighContrast"),this.HighContrastOn&&n("html").addClass("cs-high-contrast"),n(function(){t.BuildStyleSheet(),t.BuildContrastBar(),t.SetAlternateLogo({onDocReady:!0}),t.SetAlternateImages({onDocReady:!0}),t.ContrastBarEvents(),o.toggle.call(this,!!t.HighContrastOn)})},BuildContrastBar:function(){var t='<div id="cs-contrast-bar-outer"><div id="cs-contrast-bar"><p>High Contrast<a href="#" id="cs-contrast-toggle" data-status="'+(this.HighContrastOn?"on":"off")+'" role="button" aria-label="Turn '+(this.HighContrastOn?"Off":"On")+' High Contrast"><span id="cs-contrast-toggle-underlay" aria-hidden="true"></span><span id="cs-contrast-toggle-overlay" aria-hidden="true"><span></span></span></a></p><div id="cs-contrast-bar-feedback" class="cs-ally-hidden" aria-live="polite"></div></div></div>';n(t).insertAfter(".sw-skipnav-outerbar")},SetAlternateLogo:function(t){var e=this;""!=n.trim(o.alternateLogo.selector)&&""!=n.trim(o.alternateLogo.src)&&-1===n.trim(o.alternateLogo.src).indexOf("default-man.jpg")&&(this.HighContrastOn?t.onDocReady?n(o.alternateLogo.selector).length?(n(o.alternateLogo.selector).addClass("cs-contrast-hidden"),n('<img src="'+o.alternateLogo.src+'" alt="'+o.alternateLogo.alt+'" class="cs-contrast-logo" />').insertBefore(o.alternateLogo.selector)):(e.LogoCheck<=500&&setTimeout(function(){e.SetAlternateLogo({onDocReady:!0})},100),e.LogoCheck++):(n(o.alternateLogo.selector).addClass("cs-contrast-hidden"),n('<img src="'+o.alternateLogo.src+'" alt="'+o.alternateLogo.alt+'" class="cs-contrast-logo" />').insertBefore(o.alternateLogo.selector)):(n(".cs-contrast-logo").remove(),n(o.alternateLogo.selector).removeClass("cs-contrast-hidden")))},SetAlternateImages:function(a){var s=this;o.alternateImages.length&&n.each(o.alternateImages,function(t,e){o.alternateImages[t].hasOwnProperty("imageCheck")||(o.alternateImages[t].imageCheck=0),""!=n.trim(e.selector)&&""!=n.trim(e.src)&&-1===n.trim(e.src).indexOf("default-man.jpg")&&-1<n.trim(e.src).indexOf("/cms")&&(s.HighContrastOn?a.onDocReady?s.SetSingleAlternativeImage({imageIndex:t,imageSelector:e.selector,imageSrc:e.src,imageAltText:e.alt}):(n(e.selector).addClass("cs-contrast-hidden"),n('<img src="'+e.src+'" alt="'+e.alt+'" class="cs-contrast-image" />').insertBefore(e.selector)):(n(".cs-contrast-image").remove(),n(e.selector).removeClass("cs-contrast-hidden")))})},SetSingleAlternativeImage:function(t){var e=this;n(t.imageSelector).length?(n(t.imageSelector).addClass("cs-contrast-hidden"),n('<img src="'+t.imageSrc+'" alt="'+t.imageAltText+'" class="cs-contrast-image" />').insertBefore(t.imageSelector)):(o.alternateImages[t.imageIndex].imageCheck<=500&&setTimeout(function(){e.SetSingleAlternativeImage({imageIndex:t.imageIndex,imageSelector:t.imageSelector,imageSrc:t.imageSrc,imageAltText:t.imageAltText})},100),o.alternateImages[t.imageIndex].imageCheck++)},ContrastBarEvents:function(){var e=this;n("#cs-contrast-bar").on("click keydown","#cs-contrast-toggle",function(t){e.AllyClick(t)&&(t.preventDefault(),e.HighContrastOn?(n(this).attr({"aria-label":"Turn On High Contrast","data-status":"off"}),n("html").removeClass("cs-high-contrast"),n("#cs-contrast-bar-feedback").text("Turn On High Contrast"),e.EraseCookie("csHighContrast"),e.HighContrastOn=!1):(n(this).attr({"aria-label":"Turn Off High Contrast","data-status":"on"}),n("html").addClass("cs-high-contrast"),n("#cs-contrast-bar-feedback").text("Turn Off High Contrast"),e.CreateCookie("csHighContrast","on"),e.HighContrastOn=!0),e.SetAlternateLogo({onDocReady:!1}),e.SetAlternateImages({onDocReady:!1}),o.toggle.call(this,!!e.HighContrastOn))})},BuildStyleSheet:function(){var t=document.createElement("style");if(t){t.setAttribute("type","text/css");var e=document.getElementsByTagName("head")[0];e&&e.insertBefore(t,e.childNodes[0]);var a='.cs-contrast-hidden {display: none !important;}.cs-ally-hidden {width: 0 !important;height: 0 !important;display: inline-block !important;padding: 0 !important;margin: 0 !important;border: 0 !important;overflow: hidden !important;}#cs-contrast-bar-outer {background: #000;padding: 0px 20px;position: relative;z-index: 20000;}#cs-contrast-bar {max-width: 1240px;margin: 0 auto;padding: 5px 0px;position: relative;}#cs-contrast-bar-feedback {position: absolute;top: 0px;left: 0px;}#cs-contrast-bar p {display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-align-items: center;-ms-flex-align: center;align-items: center;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;margin: 0px;padding: 0px;color: #FFF;line-height: 1;letter-spacing: .25px;font-size: 10px;font-weight: bold;}#cs-contrast-toggle {width: 70px;height: 18px;display: block;margin-left: 10px;position: relative;border: solid 2px #FFF;box-sizing: border-box;border-radius: 2px;}#cs-contrast-toggle > span {height: 100%;position: absolute;top: 0px;left: 0px;overflow: hidden;font-weight: bold;-ms-transition: all .3s ease 0s;-moz-transition: all .3s ease 0s;-webkit-transition: all .3s ease 0s;transition: all .3s ease 0s;}#cs-contrast-toggle-underlay {width: 100%;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-align-items: flex-start;-ms-flex-align: start;align-items: flex-start;}#cs-contrast-toggle-overlay {background: #FFF;color: #000;border-radius: 2px;}#cs-contrast-toggle[data-status="off"] #cs-contrast-toggle-overlay {right: 50%;border-radius: 0px 2px 2px 0px;}#cs-contrast-toggle[data-status="on"] #cs-contrast-toggle-overlay {right: 0px;left: 50%;border-radius: 2px 0px 0px 2px;}#cs-contrast-toggle-overlay > span {position: absolute;top: 0px;left: 0px;width: 70px;height: 18px;white-space: nowrap;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-align-items: flex-start;-ms-flex-align: start;align-items: flex-start;-ms-transition: all .3s ease 0s;-moz-transition: all .3s ease 0s;-webkit-transition: all .3s ease 0s;transition: all .3s ease 0s;}#cs-contrast-toggle[data-status="on"] #cs-contrast-toggle-overlay > span {left: -35px;}#cs-contrast-toggle-underlay:before {color: #FFF;}#cs-contrast-toggle-underlay:before,#cs-contrast-toggle-overlay > span:before {content: "OFF";width: 35px;display: block;padding: 3px 7px 0px 5px;box-sizing: border-box;}#cs-contrast-toggle-underlay:after {color: #FFF;}#cs-contrast-toggle-underlay:after,#cs-contrast-toggle-overlay > span:after {content: "ON";width: 35px;display: block;padding: 3px 0px 0px 10px;box-sizing: border-box;}',s=document.createTextNode(a);t.styleSheet?t.styleSheet.cssText=a:t.appendChild(s)}},AllyClick:function(t){return"click"==t.type||"keydown"==t.type&&(t.keyCode==this.KeyCodes.space||t.keyCode==this.KeyCodes.enter)},CreateCookie:function(t,e,a){var s;if(a){var o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3),s="; expires="+o.toGMTString()}else s="";document.cookie=escape(t)+"="+escape(e)+s+"; path=/"},ReadCookie:function(t){for(var e=escape(t)+"=",a=document.cookie.split(";"),s=0;s<a.length;s++){for(var o=a[s];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return unescape(o.substring(e.length,o.length))}return null},EraseCookie:function(t){this.CreateCookie(t,"",-1)}};o.show&&e.Init()}}(jQuery);