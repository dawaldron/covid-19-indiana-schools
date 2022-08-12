"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),Storage=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"storeItem",/*
            :: Local Storage
        */
value:function(a,b){this.localStorageIsSupported()&&localStorage.setItem(a,b)}},{key:"getItem",value:function(a){if(this.localStorageIsSupported())return localStorage.getItem(a)}},{key:"setCookie",value:function(a,b,c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="expires="+d.toUTCString();document.cookie=a+"="+b+";"+e+";path=/"}},{key:"getCookie",value:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return""}},{key:"localStorageIsSupported",value:function(){var a=window.sessionStorage;try{return a.setItem("test","1"),a.removeItem("test"),!0}catch(a){return!1}}}]),a}(),_storageKey="text_sizer_value",TextSizeChanger=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"main",value:function(){var a=this;$(".text-size-button.increase").on("click",function(b){b.preventDefault(),a.increaseFontSize()}),$(".text-size-button.decrease").on("click",function(b){b.preventDefault(),a.decreaseFontSize()}),this.getSetting()}},{key:"increaseFontSize",value:function(){var a=$("html");a.hasClass("text-large")?(a.removeClass("text-large"),a.addClass("text-larger"),this.saveSetting("text-larger")):a.hasClass("text-larger")?(a.removeClass("text-larger"),a.addClass("text-largest"),this.saveSetting("text-largest")):a.hasClass("text-largest")||(a.addClass("text-large"),this.saveSetting("text-large"))}},{key:"decreaseFontSize",value:function(){var a=$("html");a.hasClass("text-large")?(a.removeClass("text-large"),localStorage.removeItem(_storageKey)):a.hasClass("text-larger")?(a.removeClass("text-larger"),a.addClass("text-large"),this.saveSetting("text-large")):a.hasClass("text-largest")&&(a.removeClass("text-largest"),a.addClass("text-larger"),this.saveSetting("text-larger"))}},{key:"saveSetting",value:function(a){Storage.storeItem(_storageKey,a)}},{key:"getSetting",value:function(a){var b=Storage.getItem(_storageKey);b&&$("html").addClass(b)}}]),a}(),StCore=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"main",value:function(a){a.initialize.TextResizer&&TextSizeChanger.main()}}]),a}(),Menu=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"menuHandler",
// Desktop Menus
value:function(){
// Desktop Menu Hander
function a(){b>=991?(
// console.log('inside desktop Menu Handler');
// Main Menu... on focus open submenu and close all other submenus including School megamenu
$(document).on("focus",".st-mainMenu a.topLevel",function(){$(".st-schoolNav li").removeClass("active"),// close school nav first
$(this).closest("li").addClass("active"),$(this).closest("li").siblings("li").removeClass("active")}),
// Main Menu... if mouse leaves submenu, close them
$(document).on({mouseleave:function(){$(".st-mainMenu li.hasUL").removeClass("active")}},".st-submenu"),
// Our School MegaMenu... if mouse leaves megamenu, close it
$(document).on({mouseleave:function(){$(".st-schoolNav li.active").removeClass("active")}},".st-megaMenu"),
// if any link has focus on site, if it's not in a submenu, then close schoolNav and mainNav
$(document).on("focus",".st-utilityNav a",function(){$(".st-schoolNav li.active").removeClass("active")})):(
// console.log('inside Mobile Menu Handler');
// Open Mobile Menu on Click
$(".mobileMenuToggle").on("keypress click",function(a){if(a.preventDefault(),"click"===a.type||13===a.which)// close school nav first
return $(this).find("svg").toggleClass("fa-bars fa-times"),$(".st-schoolNav li").removeClass("active"),$(".st-menuWrapper").toggleClass("open"),!1}),
// Mobile Menu... on focus or click open submenu and close all other submenus including School megamenu
$(document).on("focus, click",".st-mainMenu a.topLevel",function(a){$(this).parent("li").hasClass("hasUL")&&(a.preventDefault(),$(".st-schoolNav li").removeClass("active"),// close school nav first
$(".st-mainMenu li.hasUL").removeClass("active"),$(".st-submenu.open").removeClass("open"),$(this).closest(".st-menuWrapper").addClass("submenuOpen"),$(this).siblings(".st-submenu").addClass("open"))}),
// Submenu Back Button... Opens main menu
$(document).on("click",".st-submenu .backBtn",function(a){a.preventDefault(),$(this).closest(".st-menuWrapper").removeClass("submenuOpen"),$(".mainMenu li.active").removeClass("active"),$(this).closest(".st-submenu").removeClass("open"),$(this).parent("li").siblings("li").children(".st-submenu").removeClass("open")}),
// School Nav... Toggle submenu on click or enter key
$(".st-schoolNav .mobileHeadlineToggle").on("keypress click",function(a){if(a.preventDefault(),"click"===a.type||13===a.which)return $(this).siblings(".st-submenu").toggleClass("open"),$(this).find("svg").toggleClass("fa-caret-down fa-caret-up"),!1}))}var b=$(window).outerWidth();a(),
// Open School Nav MegaMenu For both Desktop & Mobile
function(){$(".st-schoolNav a.topLevel.hasUL").on("keypress click",function(a){
// mouse click
// mouse click
// close main menu first if open & reset schoolNav
// Open submenu now 
// close main menu first if open
return"click"===a.type?(a.preventDefault(),$(".st-menuWrapper").removeClass("open"),$(".st-mainMenu li.hasUL").removeClass("active"),$(".st-submenu.open").removeClass("open"),$(".st-schoolNav .headline svg").removeClass("fa-caret-up").addClass("fa-caret-down"),$(this).closest("li").toggleClass("active"),!1):13===a.which?($(".st-mainMenu li.hasUL").removeClass("active"),$(".st-submenu.open").removeClass("open"),$(".st-schoolNav a.topLevel.hasUL:focus").closest("li").toggleClass("active"),!1):void 0})}(),$(window).resize(function(){b=$(window).outerWidth(),a()})}}]),a}(),Tabs=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"tabHandler",value:function(){/* Tabs */
// Open First Tab by default
$(".st-tabContainer .tabs .tab").first().addClass("active"),$(".st-tabContainer .tabContent .component").first().addClass("active").slideDown(),$(document).on("click",".tabs .tab",function(){var a=$(this).attr("data-tab");
// close all tabs first
$(".st-tabContainer .tabs .tab").removeClass("active"),$(".st-tabContainer .tabContent .component").removeClass("active").slideUp(),
// open clicked tab
$('.st-tabContainer .tabs .tab[data-tab="'+a+'"]').addClass("active"),$('.st-tabContainer .tabContent .component[data-tab="'+a+'"]').slideDown()})}}]),a}(),Site=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"main",value:function(){Tabs.tabHandler(),Menu.menuHandler()}}]),a}(),MainScripts=function(){/*
        :: Initialize core st boilerplate modules
    */
StCore.main({initialize:{TextResizer:!0}}),/*
        :: Initialize website/project specific modules
    */
Site.main(),/*
        :: Initialize third party plugins
    */
// SVG <use> polyfill for IE and Edge
"function"==typeof svg4everybody&&svg4everybody()}();