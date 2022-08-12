(function(e){e.fn.extend({menufication:function(a,f){if(k[a])return k[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return k.init.apply(this,arguments);e.error("Method "+a+" does not exist for menufication")},hasClasses:function(a){a=a.replace(/\s/g,"").split(",");for(var f in a)if(jQuery(this).hasClass(a[f]))return!0;return!1},addClasses:function(a){a=a.replace(/\s/g,"").split(",");for(var f in a)jQuery(this).addClass(a[f])}});var q,s,c,t=!1,u=!1,r=!1,d="menufication",
v,h,n,p,g=0,j,l;s={toggleElement:null,enableSwipe:!0,hideDefaultMenu:!1,showHeader:!0,customFixedHeader:null,menuText:"",triggerWidth:null,addHomeLink:!0,addHomeText:"Home",childMenuSupport:!0,childMenuSelector:null,activeClassSelector:"active-class",supportAndroidAbove:3.5,onlyMobile:!1,transitionDuration:600,scrollSpeed:0.6,allowedTags:"DIV, NAV, UL, LI, A, P, H1, H2, H3, H4, SPAN",wrapTagsInList:""};var k={init:function(a){if(!u&&(!b.utils.isBB()&&!b.utils.isOldIE(9))&&(q=e(this),a||(a={}),c=e.extend({},
s,a),!c.onlyMobile||b.utils.isMobile())){if(!b.utils.hasTranslate3d()||b.utils.androidVersionIsBelow(c.supportAndroidAbove))d+="-non-css3";c.gestures=b.utils.isMobile()&&!b.utils.isIE()?{start:"touchstart",move:"touchmove",end:"touchend",click:"click",fastClick:"touchend"}:b.utils.isIE()&&b.utils.isMobile()?{start:"MSGestureStart",move:"MSGestureChange",end:"MSGestureEnd",click:"click",fastClick:"MSGestureEnd"}:{start:"mousedown",move:"mousemove",end:"mouseup",click:"click",fastClick:"click"};b.utils.androidVersionIsBelow(c.supportAndroidAbove)&&
(c.gestures.fastClick="click");b.scrolling.setScrollHandlers();c.triggerWidth?(e(window).on("resize",function(){b.utils.checkTriggerWidth(e(window).width())}),b.utils.checkTriggerWidth(e(window).width())):b.init()}},openMenu:function(){h.addClass(d+"-transition-in");t=!0;v.bind(c.gestures.move,function(a){a.preventDefault()})},closeMenu:function(){h.removeClass(d+"-transition-in");t=!1;v.unbind()},toggleMenu:function(){t?k.closeMenu():k.openMenu()}},b={init:function(){b.utils.wrapBody([d+"-page-holder",
d+"-inner-wrap",d+"-outer-wrap"]);c.customFixedHeader?b.buildCustomFixedHeader():c.showHeader&&b.buildHeader();b.buildMenu();b.addEvents();b.utils.isMobile()?b.scrolling.addBouncyScroll():p.addClass(d+"-scroll");u=!0;e(document).trigger("menufication-done",["done"])},buildHeader:function(){var a=e('<div id="'+d+'-top" />').append('<div id="'+d+'-btn"><p>'+c.menuText+"</p></div>");h.prepend(a).addClass(d+"-add-padding");c.toggleElement="#"+d+"-btn"},buildCustomFixedHeader:function(){e(c.customFixedHeader).hide().addClass(d+
"-original-custom-fixed-header");var a=e(c.customFixedHeader).clone();a.css("position","relative");var f=e('<div class="'+d+'-custom-top" />');a.show().removeClass(d+"-original-custom-fixed-header");h.prepend(f.append(a)).addClass(d+"-add-padding")},buildMenu:function(){c.hideDefaultMenu&&q.hide();var a=q.clone().removeAttr("id class"),f=c.activeClassSelector?c.activeClassSelector:"",m=c.childMenuSelector?c.childMenuSelector:"";a.find("*").each(function(){var a=e(this),b=c.allowedTags?c.allowedTags.replace(/\s/g,
"").split(","):s.allowedTags,g=a.prop("tagName");-1===b.indexOf(g)||a.hasClass("skip-link")?a.remove():("A"===g&&(b=a.text().toLowerCase(),b=b.charAt(0).toUpperCase()+b.slice(1),a.text(b)),c.wrapTagsInList===g&&a.wrap("li"),a.hasClasses(m)?(a.removeAttr("class id"),a.addClasses(m)):a.hasClasses(f)?(a.removeAttr("class id"),a.addClass(d+"-active-class")):a.removeAttr("class id"))});c.addHomeLink&&a.prepend('<li><a href="http://'+window.location.hostname+'">'+c.addHomeText+"</a></li>");c.childMenuSelector&&
c.childMenuSupport?b.buildChildMenus(a):b.removeChildMenus(a);"UL"===a.prop("tagName")?a.addClass(d+"-menu-level-0"):a.find("ul").first().addClass(d+"-menu-level-0").siblings("ul").addClass(d+"-menu-level-0");h.prepend(a);a.wrap('<div id="'+d+'-scroll-container" />');(b.utils.isIOS()||!b.utils.isMobile())&&a.wrap('<div id="'+d+'-transform-container" />');a.wrap('<nav id="'+d+'-nav" />').show();n=e("#"+d+"-nav");p=e("#"+d+"-scroll-container")},buildChildMenus:function(a){var f=c.childMenuSelector.replace(/\s/g,
"").split(","),m;for(m in f)a.find("."+f[m]).each(function(){var a=e(this);a.removeAttr("id class");a.addClass(d+"-child-menu");a.parent().addClass(d+"-has-child-menu").bind(c.gestures.click,function(f){"A"!==f.target.nodeName&&(f.preventDefault(),e(this).toggleClass(d+"-child-menu-open"),a.toggle(),f.stopPropagation())})}),c.activeClassSelector&&b.toggleActiveClasses(a);b.countMenuLevel(a)},countMenuLevel:function(a){a.find("."+d+"-child-menu").each(function(){var a=e(this),c=a.parents("."+d+"-child-menu").length+
1;a.addClass(d+"-menu-level-"+c)})},removeChildMenus:function(a){if(c.childMenuSelector){var f=c.childMenuSelector.replace(/\s/g,"").split(","),b;for(b in f)a.find("."+f[b]).each(function(){e(this).remove()})}},toggleActiveClasses:function(a){a.find("."+d+"-has-child-menu").each(function(){var a=e(this);0<a.find("*").children("."+d+"-active-class").length&&(a.toggleClass(d+"-child-menu-open"),setTimeout(function(){a.addClass(d+"-child-menu-open");a.find("."+d+"-child-menu").first().show()},c.transitionDuration))})},
addEvents:function(){c.toggleElement&&e(c.toggleElement).bind(c.gestures.fastClick,function(a){a.preventDefault();a.stopPropagation();k.toggleMenu()});c.enableSwipe&&b.utils.isMobile()&&b.enableSwipeEvent()},removeEvents:function(){e(c.toggleElement).unbind();p.unbind()},enableSwipeEvent:function(){var a,b,m,g,h,j=e("#"+d+"-outer-wrap");j.bind(c.gestures.start,function(c){m=(new Date).getTime();a=c.originalEvent.touches[0].pageX;b=c.originalEvent.touches[0].clientY});j.bind(c.gestures.move,function(a){g=
a.originalEvent.touches[0].pageX;h=a.originalEvent.touches[0].clientY});j.bind(c.gestures.end,function(){var c=g>a?"right":"left",d=40<h-b||-40>h-b,e=90<g-a||-90>g-a;if(!(600<(new Date).getTime()-m||d)&&e)switch(c){case "left":k.closeMenu();break;case "right":k.openMenu()}})},prevDefault:function(a){a.preventDefault();a.stopPropagation()},scrolling:{addBouncyScroll:function(){j=document.getElementById(d+"-nav");var a=b.scrolling.checkTouchMove,f=b.scrolling.scrollHandlers;p.bind(c.gestures.start,
function(a){g=b.scrolling.scrollHandlers.getTop(j);l=a.originalEvent.touches[0].pageY});p.bind(c.gestures.move,function(c){c.preventDefault();a(c,f)});p.bind(c.gestures.end,function(){b.scrolling.checkScrollEffect()})},checkTouchMove:function(a,c){var b=a.originalEvent.touches[0].pageY;g=c.getTop();c.setTop(b);l=b},checkScrollEffect:function(){var a=n.height(),c=e(window).height(),d=b.utils.isAndroid()?15:40;b.scrolling.scrollHandlers.bounceBack(a,c,d)},setScrollHandlers:function(){b.scrolling.scrollHandlers=
b.utils.hasTranslate3d()&&!b.utils.androidVersionIsBelow(c.supportAndroidAbove)?{getTop:function(){return(new WebKitCSSMatrix(window.getComputedStyle(j).webkitTransform)).m42},setTop:function(a){j.style.webkitTransform=l>=a?"translateY("+(g+(a-l)*c.scrollSpeed)+"px)":"translateY("+(g-(l-a)*c.scrollSpeed)+"px)"},bounceBack:function(a,f,e){if(a+g<f&&a>f)n.addClass(d+"-add-transition"),j.style.webkitTransform="translateY("+-(a-f-e)+"px)",b.scrolling.removeTransitionClass(c.transitionDuration);else if(0<
g||0>g&&a<f)n.addClass(d+"-add-transition"),j.style.webkitTransform="translateY(0px)",b.scrolling.removeTransitionClass(c.transitionDuration)}}:{getTop:function(){return parseInt(getComputedStyle(j).top,10)},setTop:function(a){j.style.top=l>=a?g+1.1*(a-l)+"px":g-1.1*(l-a)+"px"},bounceBack:function(a,b,d){a+g<b&&a>b?n.animate({top:-(a-b-d)},c.transitionDuration):(0<g||0>g&&a<b)&&n.animate({top:0},c.transitionDuration)}}},removeTransitionClass:function(a){setTimeout(function(){n.removeClass(d+"-add-transition")},
a)}},utils:{reset:function(){e("."+d+"-custom-top").hide();e("#"+d+"-top").hide();h.removeClass(d+"-add-padding");q.show();b.removeEvents();k.closeMenu();e("."+d+"-original-custom-fixed-header").show();e(document).trigger("menufication-reset",["done"])},reapply:function(){e("."+d+"-custom-top").show();e("#"+d+"-top").show();h.addClass(d+"-add-padding");c.hideDefaultMenu&&q.hide();b.addEvents();e("."+d+"-original-custom-fixed-header").hide();e(document).trigger("menufication-reapply",["done"])},checkTriggerWidth:function(a){a<=
c.triggerWidth&&!r?(u?b.utils.reapply():b.init(),r=!0):a>c.triggerWidth&&r&&(r=!1,b.utils.reset())},wrapBody:function(a){for(var c in a){var b=document.createElement("div");for(b.id=a[c];document.body.firstChild;)b.appendChild(document.body.firstChild);document.body.appendChild(b)}v=e("#"+d+"-inner-wrap");h=e("#"+d+"-outer-wrap")},hasTranslate3d:function(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",
transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b},isMobile:function(){return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)},isAndroid:function(){return navigator.userAgent.match(/Android/i)},isIOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},
isIE:function(){return navigator.userAgent.match(/IEMobile/i)||-1!=navigator.appVersion.indexOf("MSIE")},isBB:function(){return navigator.userAgent.match(/BlackBerry|BB10|RIM/i)},isOldIE:function(a){return-1!=navigator.appVersion.indexOf("MSIE")&&parseFloat(navigator.appVersion.split("MSIE")[1])<a},androidVersionIsBelow:function(a){var b=navigator.userAgent;return 0<=b.indexOf("Android")&&parseFloat(b.slice(b.indexOf("Android")+8))<a?!0:!1}}}})(jQuery);