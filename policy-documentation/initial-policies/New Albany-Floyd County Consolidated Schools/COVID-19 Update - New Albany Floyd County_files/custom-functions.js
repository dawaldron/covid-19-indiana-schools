jQuery(document).ready(function(e){"use strict";var t=e(window),a=e(".header-top");e(window).on("load resize",function(){t.width()<1024?a.addClass("mobile"):a.removeClass("mobile").addClass("header-top")}),e(function(){var t=e(".header-top");e(window).on("scroll",function(){e(window).scrollTop()>=50?t.removeClass("header-top").addClass("header-top-dark"):t.removeClass("header-top-dark").addClass("header-top")})}),e(".grid").fitVids(),e(window).width()>1024&&e(window).scroll(function(){var t=e(".custom-headings, .custom-header-image"),a=e(this).scrollTop();t.css({"margin-top":-a/0+"px",opacity:1-a/720})})}),function(e){"use strict";e.fn.fitVids=function(t){var a={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',n.appendChild(i.childNodes[1])}return t&&e.extend(a,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];a.customSelector&&t.push(a.customSelector);var n=".fitvidsignore";a.ignore&&(n=n+", "+a.ignore);var i=e(this).find(t.join(","));(i=(i=i.not("object object")).not(n)).each(function(){var t=e(this);if(!(t.parents(n).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var a=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+e.fn.fitVids._count;t.attr("name",i),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e,t){function a(){var e=f.elements;return"string"==typeof e?e.split(" "):e}function n(e){var t=m[e[u]];return t||(t={},h++,e[u]=h,m[h]=t),t}function i(e,a,i){return a||(a=t),s?a.createElement(e):(i||(i=n(a)),!(o=i.cache[e]?i.cache[e].cloneNode():c.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e)).canHaveChildren||l.test(e)||o.tagUrn?o:i.frag.appendChild(o));var o}function o(e){e||(e=t);var o,d,l,c,u,h,m=n(e);return!f.shivCSS||r||m.hasCSS||(m.hasCSS=(c="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",u=(l=e).createElement("p"),h=l.getElementsByTagName("head")[0]||l.documentElement,u.innerHTML="x<style>"+c+"</style>",!!h.insertBefore(u.lastChild,h.firstChild))),s||(o=e,(d=m).cache||(d.cache={},d.createElem=o.createElement,d.createFrag=o.createDocumentFragment,d.frag=d.createFrag()),o.createElement=function(e){return f.shivMethods?i(e,o,d):d.createElem(e)},o.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-:]+/g,function(e){return d.createElem(e),d.frag.createElement(e),'c("'+e+'")'})+");return n}")(f,d.frag)),e}var r,s,d=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,u="_html5shiv",h=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",r="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){r=!0,s=!0}}();var f={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==d.shivCSS,supportsUnknownElements:s,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:o,createElement:i,createDocumentFragment:function(e,i){if(e||(e=t),s)return e.createDocumentFragment();for(var o=(i=i||n(e)).frag.cloneNode(),r=0,d=a(),l=d.length;l>r;r++)o.createElement(d[r]);return o},addElements:function(e,t){var a=f.elements;"string"!=typeof a&&(a=a.join(" ")),"string"!=typeof e&&(e=e.join(" ")),f.elements=a+" "+e,o(t)}};e.html5=f,o(t),"object"==typeof module&&module.exports&&(module.exports=f)}("undefined"!=typeof window?window:this,document),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,a=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||a)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&((e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus(),window.scrollBy(0,-53)))},!1)}(),function(e){function t(){window.innerWidth<910?(o.hasClass("toggled-on")?o.attr("aria-expanded","true"):o.attr("aria-expanded","false"),d.hasClass("toggled-on")?(r.attr("aria-expanded","true"),s.attr("aria-expanded","true")):(r.attr("aria-expanded","false"),s.attr("aria-expanded","false")),o.attr("aria-controls","site-navigation social-navigation")):(o.removeAttr("aria-expanded"),r.removeAttr("aria-expanded"),s.removeAttr("aria-expanded"),o.removeAttr("aria-controls"))}function a(t){n.hasClass("page")||n.hasClass("search")||n.hasClass("single-attachment")||n.hasClass("error404")||e(".entry-content").find(t).each(function(){var a,n=e(this),i=n.offset().top,o=n.closest("article").find(".entry-footer"),r=o.offset().top+(o.height()+28),s=n.closest("figure");i>r?"img.size-full"===t?((a=new Image).src=n.attr("src"),e(a).on("load.molecule",function(){a.width>=840&&(n.addClass("below-entry-meta"),s.hasClass("wp-caption")&&(s.addClass("below-entry-meta"),s.removeAttr("style")))})):n.addClass("below-entry-meta"):(n.removeClass("below-entry-meta"),s.removeClass("below-entry-meta"))})}var n,i,o,r,s,d,l,c,u;c=e(".main-navigation"),u=e("<button />",{class:"dropdown-toggle","aria-expanded":!1}).append(e("<span />",{class:"screen-reader-text",text:screenReaderText.expand})),c.find(".menu-item-has-children > a").after(u),c.find(".current-menu-ancestor > button").addClass("toggled-on"),c.find(".current-menu-ancestor > .sub-menu").addClass("toggled-on"),c.find(".menu-item-has-children").attr("aria-haspopup","true"),c.find(".dropdown-toggle").click(function(t){var a=e(this),n=a.find(".screen-reader-text");t.preventDefault(),a.toggleClass("toggled-on"),a.next(".children, .sub-menu").toggleClass("toggled-on"),a.attr("aria-expanded","false"===a.attr("aria-expanded")?"true":"false"),n.text(n.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand)}),i=e("#masthead"),o=i.find("#menu-toggle"),d=i.find("#site-header-menu"),r=i.find("#site-navigation"),s=i.find("#social-navigation"),o.length&&(o.add(r).add(s).attr("aria-expanded","false"),o.on("click.molecule",function(){e(this).add(d).toggleClass("toggled-on"),e(this).add(r).add(s).attr("aria-expanded","false"===e(this).add(r).add(s).attr("aria-expanded")?"true":"false")})),function(){function t(){window.innerWidth>=910?(e(document.body).on("touchstart.molecule",function(t){e(t.target).closest(".main-navigation li").length||e(".main-navigation li").removeClass("focus")}),r.find(".menu-item-has-children > a").on("touchstart.molecule",function(t){var a=e(this).parent("li");a.hasClass("focus")||(t.preventDefault(),a.toggleClass("focus"),a.siblings(".focus").removeClass("focus"))})):r.find(".menu-item-has-children > a").unbind("touchstart.molecule")}r.length&&r.children().length&&("ontouchstart"in window&&(e(window).on("resize.molecule",t),t()),r.find("a").on("focus.molecule blur.molecule",function(){e(this).parents(".menu-item").toggleClass("focus")}))}(),e(document).ready(function(){n=e(document.body),e(window).on("load.molecule",t).on("resize.molecule",function(){clearTimeout(l),l=setTimeout(function(){a("img.size-full"),a("blockquote.alignleft, blockquote.alignright")},300),t()}),a("img.size-full"),a("blockquote.alignleft, blockquote.alignright")})}(jQuery);