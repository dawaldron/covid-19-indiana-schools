(function(c){var d=function(V){var b={};var M={};var I={};var W=80;var P=80;var U=0;var K=0;var S=0;var L=0;var D=c("body");var G=0;var a=0;var aa=0;var R=c("body").css("font-family");var Y=null;var Z=function(e,f){for(i=e.length-1;i>=0;i--){if(f!=e.charAt(i)){e=e.substring(0,i+1);break}}return e};var X=function(){c(b.fontsizeSelector).filter(function(j){var g=this.nodeName.toLowerCase();var k=false;var h=0;var e=1;switch(g){case"h1":h=100;k=true;break;case"h2":h=80;e=0.8;k=true;break;case"h3":h=40;e=0.6;k=true;break;case"h4":h=20;e=0.4;k=true;break}if(k){var f=c(this).attr("style")||"";c(this).attr("style",f+";font-size:"+(parseInt(P)+(b.fontSizeHeadersIncrement*e)+h)+"%")}})};var E=function(f){L=parseInt(M.getItem("scr_highcontrast_alternate"))||0;var e=function(){D.removeClass("scr_highcontrast");S=0;M.setItem("scr_highcontrast",S);if(Y===null){Y=D.attr("style")||""}var j="";if(c(this).data("rotate")){j=" hue-rotate("+parseInt(c(this).data("rotate"))+"deg)"}var h="";if(c(this).data("brightness")){h=" brightness("+parseInt(c(this).data("brightness"))+")"}D.attr("style",Z(Y,";")+";filter: invert(100%)"+j+h)};if(!L){e.bind(this)();L=c(this).data("alternate")}else{if(L&&typeof(f)!=="undefined"){var g=c(this).data("alternate");if(g==L){D.attr("style",Y);L=0}else{L=g;e.bind(this)()}}else{if(L&&typeof(f)==="undefined"){e.bind(this)()}}}M.setItem("scr_highcontrast_alternate",L)};var O=function(h,j){h=h.toUpperCase();var k=h.split("");var l="";var m="FEDCBA9876".split("");var f=new Array();f.A="5";f.B="4";f.C="3";f.D="2";f.E="1";f.F="0";for(i=0;i<6;i++){if(!isNaN(k[i])){l+=m[k[i]]}else{if(f[k[i]]){l+=f[k[i]]}else{return false}}}if(j&&b.ieHighContrast){var e=parseInt(h,16);var g=parseInt(l,16);if(g<e){return h}}return l};var N=function(j){var e=/rgba? *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3})(, *[0-9]{1,3}[.0-9]*)? *\)/;var k=e.exec(j);if(!k){return"FFFFFF"}var f=Math.round(parseFloat(k[1]));var g=Math.round(parseFloat(k[2]));var l=Math.round(parseFloat(k[3]));var h=(f+65536).toString(16).substring(3).toUpperCase()+(g+65536).toString(16).substring(3).toUpperCase()+(l+65536).toString(16).substring(3).toUpperCase();return h};var J=function(e){var f=" -webkit- -moz- -o- -ms- ".split(" ");var g=document.createElement("div");g.style.cssText=f.join("filter:invert(100%); ");return !!g.style.length&&((document.documentMode===undefined||document.documentMode>9))};var Q=function(f){var e=c(f);c.fn.skipElement=function(g){var h=this.css(g);this.css(g,"inherit");var j=this.css(g);if(h!=j&&N(j)!="000000"){this.css(g,j);return true}else{this.css(g,h);return false}};c(f).each(function(k,h){if(c.inArray(h.nodeName.toLowerCase(),["script","embed","object"])==-1){if(b.ieHighContrastAdvanced){var m=c(h).css("background-color");var n=c(h).css("color");if(m&&n){var o=O(N(m));var g=O(N(n),true);var l=c(h).attr("style")||"";var j=l+" background-color:#"+o+" !important; color:#"+g+" !important";c(h).attr("style",j)}}else{if(!c(h).skipElement("background-color")){var m=c(h).css("background-color");var n=c(h).css("color");if(m&&n){var o=O(N(m));var g=O(N(n),true);c(h).css("background-color","#"+o);c(h).css("color","#"+g)}}}}})};var F=function(e){var f=c(b.skipToContentsSelector);if(f.length){c("html, body").animate({scrollTop:f.offset().top},500)}};this.buildInterface=function(){var q=c("<div/>").attr("id","accessibility-links").addClass(b.position+" "+b.scrolling+" "+b.templateOrientation);if(b.targetAppendMode=="bottom"){q.appendTo(b.targetAppendto)}else{if(b.targetAppendMode=="top"){q.prependTo(b.targetAppendto)}}var B=c("<div/>").attr("id","text_plugin").attr("title"," - "+(b.labeltext||fr_screenreader)+" - ").addClass("scbasebin screenreader text");if(!b.showlabel){B.addClass("scr_nolabel")}if(b.screenreaderIcon=="wheelchair"){B.addClass("scr_wheelchair")}if(b.screenreaderIcon=="custom"){B.addClass("scr_customicon")}q.append(B);if(b.screenreader){var t=c("<div/>").attr("id","volume_plugin").addClass("scbasebin");q.append(t)}var r=c("<div/>").attr("id","speaker_plugin").addClass("scbasebin speaker");q.append(r);var s=c("<div/>").css("clear","both").attr("id","scr_clearer");q.append(s);if(b.showlabel){var ar=c("<span/>").addClass("fr_label startapp").text(b.labeltext||fr_screenreader);B.append(ar)}if(b.screenreader){var o=c("<button/>").attr({id:"fr_screenreader_play",title:" - "+fr_screenreader_play+" - ",role:"button",accesskey:b.accesskey_play}).addClass("pinnable").text(fr_screenreader_play);r.append(o);var ao=c("<button/>").attr({id:"fr_screenreader_pause",title:" - "+fr_screenreader_pause+" - ",role:"button",accesskey:b.accesskey_pause}).addClass("pinnable").text(fr_screenreader_pause);r.append(ao);var e=c("<button/>").attr({id:"fr_screenreader_stop",title:" - "+fr_screenreader_stop+" - ",role:"button",accesskey:b.accesskey_stop}).addClass("pinnable").text(fr_screenreader_stop);r.append(e)}if(b.fontsize){var f=c("<button/>").attr({id:"fr_screenreader_font_increase",title:" - "+fr_increase+" - ",role:"button",accesskey:b.accesskey_increase,"data-value":"1"}).addClass("sizable").text(fr_increase);r.append(f);var ap=c("<button/>").attr({id:"fr_screenreader_font_decrease",title:" - "+fr_decrease+" - ",role:"button",accesskey:b.accesskey_decrease,"data-value":"-1"}).addClass("sizable").text(fr_decrease);r.append(ap);var m=c("<button/>").attr({id:"fr_screenreader_font_reset",title:" - "+fr_reset+" - ",role:"button",accesskey:b.accesskey_reset,"data-value":"0"}).addClass("resizable").text(fr_reset);r.append(m)}if(b.dyslexicFont){var z=c("<button/>").attr({id:"fr_screenreader_font_family",title:" - "+fr_dyslexic_title+" - ",role:"button",accesskey:b.accesskey_dyslexic,"data-value":"0"}).text(fr_dyslexic_title);r.append(z)}if(b.grayHues){var am=c("<button/>").attr({id:"fr_screenreader_gray_hues",title:" - "+fr_gray_hues+" - ",role:"button",accesskey:b.accesskey_grayhues}).text(fr_gray_hues);r.append(am)}if(b.bigCursor){var au=c("<button/>").attr({id:"fr_screenreader_bigcursor",title:" - "+fr_big_cursor+" - ",role:"button",accesskey:b.accesskey_bigcursor}).text(fr_big_cursor);r.append(au)}if(b.showSkipToContents){var w=c("<button/>").attr({id:"fr_screenreader_skiptocontents",title:" - "+fr_showskiptocontents_title+" - ",role:"button",accesskey:b.accesskey_skiptocontents}).text(fr_showskiptocontents_title);r.append(w)}if(b.spacingSize){var av=c("<button/>").attr({id:"fr_screenreader_spacing_increase",title:" - "+fr_spacing_increase+" - ",role:"button",accesskey:b.accesskey_spacingsize_increase,"data-value":"1"}).addClass("spacingsizable").text(fr_spacing_increase);r.append(av);var x=c("<button/>").attr({id:"fr_screenreader_spacing_decrease",title:" - "+fr_spacing_decrease+" - ",role:"button",accesskey:b.accesskey_spacingsize_decrease,"data-value":"-1"}).addClass("spacingsizable").text(fr_spacing_decrease);r.append(x)}var aw=0;if(!b.screenreader){aw=100}if(!b.dyslexicFont){aw+=35}if(!b.grayHues){aw+=35}if(!b.bigCursor){aw+=35}if(!b.showSkipToContents){aw+=35}if(!b.spacingSize){aw+=70}if(b.highcontrast){var p=c("<button/>").attr({id:"fr_screenreader_highcontrast",title:" - "+fr_highcontrast+" - ",role:"button",accesskey:b.accesskey_highcontrast,"data-value":"0"}).text(fr_highcontrast);r.append(p);var A=b.highcontrastAlternate&&J();if(A){var g=c("<button/>").attr({id:"fr_screenreader_highcontrast2",title:" - "+fr_highcontrast+" - ",role:"button",accesskey:b.accesskey_highcontrast2,"data-alternate":"1","data-rotate":b.colorHue}).text(fr_highcontrast);r.append(g);var h=c("<button/>").attr({id:"fr_screenreader_highcontrast3",title:" - "+fr_highcontrast+" - ",role:"button",accesskey:b.accesskey_highcontrast3,"data-alternate":"2","data-rotate":b.colorHue,"data-brightness":b.colorBrightness}).text(fr_highcontrast);r.append(h);L=parseInt(M.getItem("scr_highcontrast_alternate"))||0;if(L){var v=c("button[data-alternate="+L+"]");E.call(v)}}if(b.fontsize&&A){c("#speaker_plugin").css("width",parseInt(520-aw)+"px")}else{if(b.fontsize){c("#speaker_plugin").css("width",parseInt(455-aw)+"px")}else{if(!b.fontsize&&A){c("#speaker_plugin").css("width",parseInt(425-aw)+"px")}}}}else{if(b.fontsize){c("#speaker_plugin").css("width",parseInt(425-aw)+"px")}else{c("#speaker_plugin").css("width",parseInt(315-aw)+"px")}}if(b.template=="custom.css"){c("#speaker_plugin button").css("background-color",b.toolbarBgcolor);c("#accessibility-links").css("background","transparent")}else{c("#accessibility-links").css("background-color",b.toolbarBgcolor)}if(b.templateOrientation=="vertical"&&b.template!="custom.css"){c("#text_plugin").css("background-color",b.toolbarBgcolor)}if(screenReaderConfigOptions.useMinimizedToolbar&&(screenReaderConfigOptions.mobileDeviceDetected||(!screenReaderConfigOptions.mobileDeviceDetected&&!screenReaderConfigOptions.minimizedToolbarOnlyMobile))){var y=c("#volume_plugin").width();var al=c("#speaker_plugin").width();var k=parseInt(y+al);if(b.templateOrientation=="vertical"){k=parseInt(al)}var aq=0;var j="+";var an=c(window).width();if(an<k){k=an-80}c("#text_plugin").attr("accesskey",screenReaderConfigOptions.accesskey_minimized);if(b.fontsizeMinimizedToolbar&&screenReaderConfigOptions.statusMinimizedToolbar=="closed"){c("#text_plugin").on("click",function(ab){c("body").css("font-size",P+"%");if(b.fontsizeSelector){fontSizeInline=";font-size:100%";X()}var ac=c(b.fontsizeSelector);c.each(ac,function(af,ae){if(c.inArray(ae.nodeName.toLowerCase(),["h1","h2","h3","h4"])!=-1){fontSizeInline=""}else{fontSizeInline=";font-size:100%"}var ad=c(ae).attr("style")||"";c(ae).attr("style",Z(ad,";")+fontSizeInline)})})}switch(b.position){case"bottomright":case"topright":c("#text_plugin span.fr_label").css({cursor:"pointer"});if(screenReaderConfigOptions.statusMinimizedToolbar=="closed"){c("#accessibility-links").css({right:"-"+(k+2)+"px"})}else{c("#speaker_plugin, #volume_plugin").css({opacity:1});aq=k+2;j="-"}c("#text_plugin").css({cursor:"pointer"}).on("click",function(ab){if(aq){c("#speaker_plugin, #volume_plugin").animate({opacity:0},300)}c("#accessibility-links").animate({right:(j+aq)},500,function(){aq=aq?0:k+2;j="+"?"-":"+"});if(!aq){setTimeout(function(){c("#speaker_plugin, #volume_plugin").animate({opacity:1},300)},300)}});break;case"topleft":case"bottomleft":if(screenReaderConfigOptions.statusMinimizedToolbar=="closed"){c("#volume_plugin,#speaker_plugin").hide()}c("#text_plugin span.fr_label").css({cursor:"pointer"});c("#text_plugin").css({cursor:"pointer"}).on("click",function(ab){c("#volume_plugin,#speaker_plugin").fadeToggle()});break}}else{switch(b.position){case"bottomright":case"topright":c("#speaker_plugin, #volume_plugin").css({opacity:1});break}}if(b.templateOrientation=="vertical"){var n=c("#text_plugin");var at=c("#volume_plugin");var C=n.clone(true,true);var l=at.clone(true,true);var u=c("#scr_clearer").before(C).before(l);n.remove();at.remove()}};this.startTTSEngine=function(){I=new jQuery.frTTSEngine(b);return true};var H=function(){c(document).on("click",".sizable",function(e){var f=parseInt(c(this).data("value"));P=parseInt(P)+parseInt(f*5);if(P>b.fontsizeMax){P=b.fontsizeMax}else{if(P<b.fontsizeMin){P=b.fontsizeMin}}c("body").css("font-size",P+"%");if(b.fontsizeSelector){X()}M.setItem("scr_fontsize",P)});c(document).on("click",".resizable",function(j){if(b.resetButtonBehavior=="all"){var m=!!parseInt(M.getItem("scr_highcontrast"))||0;if(m){c("#fr_screenreader_highcontrast").trigger("click")}else{var e=parseInt(M.getItem("scr_highcontrast_alternate"))||0;if(e==1){c("#fr_screenreader_highcontrast2").trigger("click")}if(e==2){c("#fr_screenreader_highcontrast3").trigger("click")}}var k=!!parseInt(M.getItem("scr_dyslexicfont"))||0;if(k){c("#fr_screenreader_font_family").trigger("click")}var g=!!parseInt(M.getItem("scr_grayhues"))||0;if(g){c("#fr_screenreader_gray_hues").trigger("click")}var f=!!parseInt(M.getItem("scr_bigcursor"))||0;if(f){c("#fr_screenreader_bigcursor").trigger("click")}}P=W;c("body").css("font-size",W+"%");var h=!!parseInt(M.getItem("scr_spacingsize"))||!!parseInt(M.getItem("scr_final_lineheight"))||0;var l="";if(h){c("body").css({"word-spacing":"inherit","letter-spacing":"inherit","line-height":M.getItem("scr_initial_lineheight")});l=";word-spacing:inherit;letter-spacing:inherit;line-height:inherit";M.setItem("scr_spacingsize",0);U=0;M.removeItem("scr_final_lineheight")}if(b.fontsizeSelector){X()}M.setItem("scr_fontsize",W)});c(document).on("click",".spacingsizable",function(f){var g=parseInt(c(this).data("value"));var e=c("body").css("line-height");U=parseInt(U)+parseInt(g);if(parseFloat(e)){K=parseFloat(e)+parseInt(g)}else{K=16+parseInt(g)}if(U>b.spacingSizeMax){U=b.spacingSizeMax;return}else{if(U<b.spacingSizeMin){U=b.spacingSizeMin;return}}if(!M.getItem("scr_initial_lineheight")){M.setItem("scr_initial_lineheight",e)}c("body").css({"word-spacing":(U*2)+"px","letter-spacing":U+"px","line-height":K+"px"});M.setItem("scr_spacingsize",U);M.setItem("scr_final_lineheight",K)});c(document).on("click","#fr_screenreader_highcontrast",function(e){S=!!parseInt(M.getItem("scr_highcontrast"))||0;if(!S){if(L){D.attr("style",Y);L=0;M.setItem("scr_highcontrast_alternate",L)}D.addClass("scr_highcontrast");if("ActiveXObject" in window){Q("body, body *:not(#accessibility-links, #accessibility-links *, div.shapes)")}S=1}else{D.removeClass("scr_highcontrast");if("ActiveXObject" in window){S=0;window.location.reload()}S=0}M.setItem("scr_highcontrast",S)});c(document).on("click","#fr_screenreader_font_family",function(e){G=!!parseInt(M.getItem("scr_dyslexicfont"))||0;if(!G){c("body").addClass("scr_dyslexic");if(b.fontsizeSelector){var f=c(b.fontsizeSelector);c.each(f,function(j,h){var g=c(h).attr("style")||"";c(h).attr("style",g+";font-family:OpenDyslexic")})}G=1}else{c("body").removeClass("scr_dyslexic");if(b.fontsizeSelector){var f=c(b.fontsizeSelector);c.each(f,function(j,h){var g=c(h).attr("style")||"";c(h).attr("style",g.replace(";font-family:OpenDyslexic",""))})}G=0}M.setItem("scr_dyslexicfont",G)});c(document).on("click","#fr_screenreader_gray_hues",function(e){a=!!parseInt(M.getItem("scr_grayhues"))||0;if(!a){D.addClass("scr_grayhues");a=1}else{D.removeClass("scr_grayhues");a=0}M.setItem("scr_grayhues",a)});c(document).on("click","#fr_screenreader_bigcursor",function(e){aa=!!parseInt(M.getItem("scr_bigcursor"))||0;if(!aa){c("body").addClass("scr_bigcursor");aa=1}else{c("body").removeClass("scr_bigcursor");aa=0}M.setItem("scr_bigcursor",aa)});c(document).on("click","#fr_screenreader_highcontrast2, #fr_screenreader_highcontrast3",E);if(b.showSkipToContents){c(document).on("click","#fr_screenreader_skiptocontents",F)}};(function T(){c.extend(b,V);if(b.selectedStorage=="session"){M=window.sessionStorage}else{if(b.selectedStorage=="local"){M=window.localStorage}}if(b.rootTarget&&!navigator.mozGetUserMedia){D=c("html")}if(jQuery.frTTSEngine===undefined){jQuery('script[src*="tts.js"]').clone().appendTo("body")}if(b.autoBackgroundColor){var e=c("body").css("background-color");c("html").css("background-color",e)}W=P=b.fontsizeDefault;var g=M.getItem("scr_fontsize");if(g){P=g}var h="";if(b.spacingSize){U=parseInt(M.getItem("scr_spacingsize"))||0;if(U>0){c("body").css({"word-spacing":(U*2)+"px","letter-spacing":U+"px"})}K=parseFloat(M.getItem("scr_final_lineheight"))||0;if(K>0){c("body").css({"line-height":K+"px"})}if(b.fontsizeSelector){h=";word-spacing:inherit;letter-spacing:inherit;line-height:inherit"}}var f="";var j=!!screenReaderConfigOptions.useMinimizedToolbar&&!!b.fontsizeMinimizedToolbar&&screenReaderConfigOptions.statusMinimizedToolbar=="closed";if(b.fontsize&&!j){c("body").css("font-size",P+"%");if(b.fontsizeSelector){f=";font-size:100%";X()}}if(b.fontsize||b.spacingSize){var k=c(b.fontsizeSelector);c.each(k,function(n,m){if(c.inArray(m.nodeName.toLowerCase(),["h1","h2","h3","h4"])!=-1||j){f=""}else{f=";font-size:100%"}var l=c(m).attr("style")||"";c(m).attr("style",Z(l,";")+f+h)})}S=!!parseInt(M.getItem("scr_highcontrast"))||0;if(S){D.addClass("scr_highcontrast");if("ActiveXObject" in window){Q("body, body *:not(#accessibility-links, #accessibility-links *, div.shapes)")}}G=!!parseInt(M.getItem("scr_dyslexicfont"))||0;if(G){c("body").addClass("scr_dyslexic");if(b.fontsizeSelector){var k=c(b.fontsizeSelector);c.each(k,function(n,m){var l=c(m).attr("style")||"";c(m).attr("style",l+";font-family:OpenDyslexic")})}}a=!!parseInt(M.getItem("scr_grayhues"))||0;if(a){D.addClass("scr_grayhues")}aa=!!parseInt(M.getItem("scr_bigcursor"))||0;if(aa){c("body").addClass("scr_bigcursor")}if(b.removeLinksTarget){c("a").removeAttr("target")}H()}).call(this)};c(function(){function a(){var h=!!("ontouchstart" in window);var k=!!(navigator.msMaxTouchPoints);var j=h||k;return j}var b=a();if(screenReaderConfigOptions.hideOnMobile&&b){return}if(b&&screenReaderConfigOptions.useMobileReaderEngine){if(screenReaderConfigOptions.readerEngine!=screenReaderConfigOptions.mobileReaderEngine){screenReaderConfigOptions.readerEngine=screenReaderConfigOptions.mobileReaderEngine}if(screenReaderConfigOptions.readerEngine=="proxy"&&parseInt(screenReaderConfigOptions.chunkLength)>100){screenReaderConfigOptions.chunkLength=90}if(screenReaderConfigOptions.readerEngine=="proxy_virtual"&&parseInt(screenReaderConfigOptions.chunkLength)>=300){screenReaderConfigOptions.chunkLength=280}}screenReaderConfigOptions.mobileDeviceDetected=b?true:false;window.ScreenReaderMainController=new d(screenReaderConfigOptions);ScreenReaderMainController.buildInterface();ScreenReaderMainController.startTTSEngine()})})(jQuery);