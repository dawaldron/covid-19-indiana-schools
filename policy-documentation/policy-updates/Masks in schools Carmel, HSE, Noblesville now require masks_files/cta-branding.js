!function(){try{var t="1.0.77",e="cta-branding",r=24,a=r+7,n=4,i=2,o=8,s="10px",l=10,d=.98,f=22,u=.1,c={},m=0,g=Math.random()<.05,v=null,_=document.createElement("canvas"),h=g?(window.location.href||"").slice(0,200):"";if("cta-test"===e){var b={};try{for(var p=window.location.href.split("?")[1].split("&"),D=0;D<p.length;D++){var x=p[D],T=x.split("=")[0],w=x.split("=")[1];b[T]=w}}catch(t){console.error("*** had issues while reading url parameters")}}function A(t){return t.offsetHeight+E(t,"margin-top",0)+E(t,"margin-bottom",0)}function y(t){var e=0;if(["border-bottom-width","border-top-width","padding-bottom","padding-top"].forEach(function(r){e+=E(t,r)||0}),t.hasChildNodes())for(var r=t.childNodes,a=0;a<r.length;a++){var n=r[a];if(!n.classList.contains("video-cta-href")){var i=A(n);e+=i}}return e}function E(t,e,r){var a=window.getComputedStyle(t);if(!a[e])return r||null;var n=parseInt(a[e]);return isNaN(n)?a[e]:n}c.globalConfig={},c.hooks={"item-renderer":function(r,a,n){if(!v){var i,o=r.rbox;o.formatsData=o.formatsData||{},r.formatsData=r.formatsData||{},r.formatsData.sendAbTestEvent=function(r,a,n){"cta-test"===e&&console.log("cta-test",r,a,n,this.innerText);if(!g)return;var i=this.formatsData.style||{},o={location:h,itemId:this.formatsData.itemId,rating:this.formatsData.rating,price:this.formatsData.price,text:this.formatsData.actionText,type:null!=a?a:"event",description:n,module:e,version:t,event:r,cardIndexOnPage:this.formatsData.cardIndex,index:this.formatsData.index,placement:this.formatsData.placement,innerText:this.innerText,config:{borderColor:i.borderColor,color:i.color,fontSize:i.fontSize,isInheritTitleColor:this.formatsData.isInheritTitleColor}};window.TRCImpl.sendAbTestEvent("CTA",JSON.stringify(o))}.bind(r),r.formatsData.cardIndex=m++,r.formatsData.index=a.itemIndex,r.formatsData.placement=o.placement,r.formatsData.itemId=g?(a["item-id"]||a.id||"").slice(0,40):"";try{var s=a["cta-text"],f=a.fpr||a["cta-price"],_=a["stars-rating"];if(null==v){var p=C("disable-cta-on-custom-module",n);r.formatsData.sendAbTestEvent(p?"disable_custom":"enable_custom");var D=window.TRCImpl&&window.TRCImpl.global&&window.TRCImpl.global["disable-cta-on-custom-module"];if(r.formatsData.sendAbTestEvent(D?"disable_global":"enable_global"),D||p)return void(v=!0);v=!1}if("cta-test"===e){g="true"===b["cta-report"];var x="true"===b["cta-rating"],T="true"===b["cta-always"];if("false"===b["cta-always"])return;var w=Math.random(),A=2+(x?1:0);x&&w>2/A||f||_?(s=s||"Download Today Today",_=parseFloat(_)||5*Math.random(),f=f||"4$"):(w>1/A||T)&&(s=decodeURIComponent(b["cta-text"])||s||"Learn More")}if(!s)return;if(r.formatsData.sendAbTestEvent("has_cta_text"),!function(t,e,r){if(!e.isSyndicated||e["is-in-network"])return t.formatsData.sendAbTestEvent("filtered_non_sc"),!1;if(r.options&&r.options.trcResponse&&r.options.trcResponse.nup)return t.formatsData.sendAbTestEvent("filtered_next_up"),!1;var a=!window.TRCImpl||!window.TRCImpl.global||function(t,e){if(null==t)return e;return t}(window.TRCImpl.global["enable-cta-with-description"],!0);if(e.description&&!a)return t.formatsData.sendAbTestEvent("filterd_item_with_description"),!1;var n=t.detail_order;if(n&&n.length&&"branding"===n[0])return t.formatsData.sendAbTestEvent("filterd_item_branding_before_title"),!1;if(!t.link)return t.formatsData.sendAbTestEvent("filtered_no_title"),!1;var i=t.querySelector(".video-label-box");if(!i)return t.formatsData.sendAbTestEvent("filtered_no_video_label_box"),!1;var o=i.querySelector(".branding");if(!o)return t.formatsData.sendAbTestEvent("filtered_no_branding"),!1;var s=o.getBoundingClientRect();if(s&&s.width>0){var f=parseFloat(E(o,"margin-left",0))/s.width;if(f>u)return t.formatsData.sendAbTestEvent("filtered_high_margin_left"),!1;var c=parseFloat(E(o,"margin-right",0))/s.width;if(c>u)return t.formatsData.sendAbTestEvent("filtered_high_margin_right"),!1}var m=E(o,"position");if(m&&"absolute"===m)return t.formatsData.sendAbTestEvent("filtered_branding_absolute_position_item_renderer"),!1;var g=o.querySelector(".branding-inner");if(g){var v=E(g,"position");if(v&&"absolute"===v)return t.formatsData.sendAbTestEvent("filtered_branding_inner_absolute_position"),!1}var _=o.querySelector("div.logoDiv");if(_){var h=E(_,"position");if(h&&"absolute"===h)return t.formatsData.sendAbTestEvent("filtered_branding_logo_div_inner_absolute_position"),!1}var b=t.getBoundingClientRect().width;if(b>0&&b<170)return t.formatsData.sendAbTestEvent("filtered_below_min_width"),!1;if(t.rbox.mode_name&&t.rbox.mode_name.indexOf("hero")>-1)return t.formatsData.sendAbTestEvent("filtered_item_in_hero_widget"),!1;if(t.rbox.container.querySelector(".story-widget"))return t.formatsData.sendAbTestEvent("filterd_item_in_reco_reel_story_widget"),!1;if(t.classList.contains("tbl-next-up-widget-item"))return t.formatsData.sendAbTestEvent("filterd_item_next_up"),!1;if(t.querySelector(".added-icon-svg"))return t.formatsData.sendAbTestEvent("filterd_item_branding_has_icon"),!1;var p=E(i,"height");if(p){var D=y(i);if(p+l<D)return t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_children"),!1}var x=E(i,"boxSizing",null);if(!x||"border-box"!==x){var T=i.getBoundingClientRect();if(T&&T.width>0){var w=parseFloat(E(i,"width",0))/T.width;if(w>d){var A=E(i,"paddingLeft",0),C=E(i,"paddingRight",0);if(A>0||C>0)return t.formatsData.sendAbTestEvent("filtered_padding_on_full_width"),!1}}}return!0}(r,a,n))return;if(r.formatsData.style={borderColor:C("border-color",n,!0),color:C("title-color",n,!0),fontSize:C("cta-font-size",n,!0),fontWeight:C("font-weight",n,!0)},r.formatsData.isInheritTitleColor=C("inherit-title-color",n,!0),r.formatsData.shouldRenderAsCTA=!0,r.formatsData.actionText=TRC.util.getHtmlDecodeText(s).slice(0,15),r.formatsData.price=f,_&&(r.formatsData.rating=(i=_,Math.round(2*i)/2)),r.formatsData.isAppInstall=function(t){if(!t.formatsData.rating&&!t.formatsData.price)return!1;return!0}(r),r.formatsData.isAppInstall?r.formatsData.sendAbTestEvent("cta_app_render_candidate"):r.formatsData.sendAbTestEvent("cta_render_candidate"),o.formatsData.isInit)return;o.formatsData.isInit=!0,o.formatsData.hasCTAItem=!0,o.formatsData.isStream=function(t){return"autowidget-template-stream"===t.trc.getProperty(t.mode_name,"widget-creator-layout",t.propertiesOverride)}(o),o.formatsData.shouldAdjustAllItemsHeight=!o.formatsData.isStream&&!function(t){var e=t.getEffectiveResponsiveRule();if(e&&1===e.cells)return!0;return!1}(o)}catch(t){throw r.formatsData.sendAbTestEvent(t.message,"error",t.stack.split("\n",2)[1].trim()),t}}function C(t,e,r){var a=e&&e.globalTrcResponseJSON&&e.globalTrcResponseJSON.dcga&&e.globalTrcResponseJSON.dcga.pubConfigOverride,n=a&&a[t];return n&&r&&(c.globalConfig[t]=n),n||c.globalConfig[t]}},"list-suffix":function(t,e){if(!v){var c=e.boxes,m=!1,h=0;c.forEach(function(t){try{var r=t.rbox.formatsData;if(!r||!r.hasCTAItem)return;if(!t.formatsData.shouldRenderAsCTA&&!r.shouldAdjustAllItemsHeight)return;var a=t.querySelector(".video-label-box");if(!a)return void t.formatsData.sendAbTestEvent("filtered_no_videoLabelBox_list_suffix");if(t.rbox.container.querySelector(".story-widget"))return void t.formatsData.sendAbTestEvent("filterd_item_in_reco_reel_story_widget_list_suffix");var f=a.querySelector(".branding");if(f&&t.formatsData.shouldRenderAsCTA&&t.formatsData.isAppInstall&&function(t,e,r){t.formatsData.sendAbTestEvent("renderedAppInstall");var a=function(t){var e=document.createElement("span");if(e.classList.add("video-branding-flex-cta-rating"),t.formatsData.price){var r=document.createElement("span");r.innerText=t.formatsData.price,r.classList.add("video-branding-flex-cta-price-wrapper"),e.appendChild(r)}if(t.formatsData.price&&t.formatsData.rating){var a=document.createElement("span");a.classList.add("video-branding-flex-cta-oval-wrapper");var n='<svg class="cta-rating-oval"  width="3px" height="3px" viewBox="0 0 3 3" version="1.1" xmlns="http://www.w3.org/2000/svg">    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g transform="translate(-172.000000, -485.000000)" fill="#666666" fill-rule="nonzero">            <circle cx="173.5" cy="486.5" r="1.5"></circle>        </g>    </g></svg>';a.insertAdjacentHTML("beforeend",n),e.appendChild(a)}if(t.formatsData.rating){for(var i=t.formatsData.cardIndex,o=document.createElement("span"),s=0;s<5;s++){var l=Math.min(Math.max(t.formatsData.rating-s,0),1),d=D(i,s,l);o.insertAdjacentHTML("beforeend",d)}o.classList.add("video-branding-flex-cta-stars-wrapper"),e.appendChild(o)}return e}(t);e.insertBefore(a,r)}(t,a,f),r.shouldAdjustAllItemsHeight&&(h=Math.max(h,x(t,a,f))),!f)return void t.formatsData.sendAbTestEvent("filtered_no_branding_list_suffix");var c=f.getBoundingClientRect();if(c&&c.width>0){if(parseFloat(E(f,"margin-left",0))/c.width>u)return void t.formatsData.sendAbTestEvent("filtered_high_margin_left_list_suffix");if(parseFloat(E(f,"margin-right",0))/c.width>u)return void t.formatsData.sendAbTestEvent("filtered_high_margin_right_list_suffix");if(g)if(t.formatsData.brandingHeightBefore=c.height,B=a.getBoundingClientRect()){var v;if(!window.TRCImpl.direction||"ltr"===window.TRCImpl.direction)(v=(c.left-B.left)/B.width)<.15&&(t.formatsData.brandingDirection="ltr",t.formatsData.brandingLocation=v);if("rtl"===window.TRCImpl.direction)(v=(B.right-c.right)/B.width)<.15&&(t.formatsData.brandingDirection="rtl",t.formatsData.brandingLocation=v)}}var _=E(a,"height"),T=E(a,"max-height");if(h>T)return void t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_max_height_list_suffix");if(_){var w=y(a);if(_+l<w)return void t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_children_list_suffix")}if(t.formatsData.shouldRenderAsCTA){var A=E(f,"position");if(A&&"absolute"===A)return void t.formatsData.sendAbTestEvent("filtered_branding_absolute_position_list_suffix");var C=f.querySelector("div.logoDiv");if(C){var R=E(C,"position");if(R&&"absolute"===R)return void t.formatsData.sendAbTestEvent("filtered_branding_logo_div_inner_absolute_position_list_suffix")}var I=function(t,e,r){var a=E(function(t,e){if(t.rbox.formatsData.isStream)return e.querySelector(".video-label")||e;return e}(t,e),"width"),l=t.formatsData.style.fontWeight||"400",d=p(t,t.formatsData.actionText,l,s,E(r,"font-family"))||0;return a-d-n-i-o}(t,a,f)||0;if(function(t,e){var r=E(t,"font-weight"),a=E(t,"font-size"),n=E(t,"font-family"),i=b(t,":before",e),o=b(t,":after",e),s=p(e,e.video_data["branding-text"],r,a,n)||0;return i+s+o}(f,t)>=I)return void t.formatsData.sendAbTestEvent("filtered_large_branding_width_list_suffix");if((function(t){var e=t.querySelector(".branding-inner"),r=t.querySelector(".branding-separator"),a=t.querySelector(".logoDiv"),n=e&&TRC.dom.getOuterWidth(e)||0,i=r&&TRC.dom.getOuterWidth(r)||0,o=a&&TRC.dom.getOuterWidth(a)||0;return n+i+o}(f)||0)>=I)return void t.formatsData.sendAbTestEvent("filtered_large_branding_parts_width_list_suffix");var B,q=E(a,"boxSizing",null);if(!q||"border-box"!==q)if((B=a.getBoundingClientRect())&&B.width>0)if(parseFloat(E(a,"width",0))/B.width>d){var k=E(a,"paddingLeft",0),H=E(a,"paddingRight",0);if(k>0||H>0)return void t.formatsData.sendAbTestEvent("filtered_padding_on_full_width_list_suffix")}m=!0,function(t,e,r){t.formatsData.sendAbTestEvent("rendered");var a=function(t,e){var r=document.createElement("a"),a=function(t,e){var r=document.createElement("Button");return r.type="button",r.classList.add("video-cta-button","video-cta-style"),r.innerText=t.formatsData.actionText,L(e,r,"color"),L(e,r,"font-family"),r}(t,e);return r.classList.add("video-cta-href"),r.target="_blank",r.href=function(t){var e,r=t.link,a=t.rbox;if(a.shiftRedirOnclick)e=r.logger_url;else{var n=a.attachHeatMapDataToLink(r.logger_url,null);e=n}return e+="&cta=true"}(t),r.ctaButton=a,function(t,e){if(Object.keys(t.formatsData.style).forEach(function(r){t.formatsData.style[r]&&(e.style[r]=t.formatsData.style[r])}),t.formatsData.isInheritTitleColor){var r=t.querySelector(".video-title"),a=E(r,"color");a.indexOf("rgb(0, 0, 0)")<0&&window.TRCImpl.sendAbTestEvent("CTA_Title_Not_Black",t.formatsData.itemId),L(r,e,"color")}}(t,a),r.appendChild(a),r}(t,r);(function(t,e,r,a){var n=function(t){var e=S(t);return!e||!t.link||t.link===e}(e)?e.link:S(e);n&&n.classList.add("video-cta-style"),!e.rbox.isFeedCard&&n&&n.classList.add("non-feed-cta-item"),r&&r.classList.add("video-label-box-cta"),r&&!TRC.Browser.ie&&r.classList.add("video-label-box-cta-non-ie");var i=r.querySelectorAll(".video-label");if(i)for(var o=0;o<i.length;o++){var s=i[o];s.classList.add("video-label-flex-cta-item")}a&&function(t,e,r){if(e.classList.add("video-branding-flex-cta-item"),t.rbox.formatsData.isStream){var a=E(e,"margin-top");a?r.style.marginTop=a+1+"px":e.classList.add("video-branding-flex-cta-item-no-stream")}else e.classList.add("video-branding-flex-cta-item-no-stream");e.style.order=1}(e,a,t),r.appendChild(t)})(a,t,e,r),function(t,e){e.onclick=function(){t.formatsData.sendAbTestEvent("cta_button_clicked")}}(t,a.ctaButton),t.formatsData.renderedCtaButton=!0}(t,a,f),a.classList.contains("video-label-box-cta")&&function(t,e){if(t.fixResponsiveBoxTitleAndDesc(e),window.TRC.dom.on(window,"resize",function(){t.fixResponsiveBoxTitleAndDesc(e)}),e.video_data){var r=t.getDetailSpansFromLabelsBoxes("branding",e);r.length&&setTimeout(function(){for(var a=0;a<r.length;a++)t.fixBoxOverflow(r[a],e.video_data["branding-text"],!0,!0)},0)}}(e,t)}}catch(e){throw t.formatsData.sendAbTestEvent(e.message,"error",e.stack.split("\n",2)[1].trim()),e}}),m&&c.forEach(function(t){!function(t,e){var r=t.querySelector(".video-label-box");if(t.rbox.formatsData.shouldAdjustAllItemsHeight){if(e<=0)return;return void(r.style.height=e+"px")}var a=r.querySelector(".branding"),n=x(t,r,a);if(n<=0)return;r.style.height=n+"px";var i=E(r,"max-height",0);i>0&&i<n&&(r.style.maxHeight=n+"px")}(t,h)}),function(t){if(!g)return;var e=[];if(t.forEach(function(t){t.formatsData.renderedCtaButton&&e.push(t)}),e.length<=0)return;var a=!1;window.TRC.dom.on(window,"scroll",function(){if(!a){var t=e[0];try{var n=!1;if(e.forEach(function(t){var e,r,i,o;n||(r=(e=t).getBoundingClientRect(),i=e.ownerDocument,o=i.defaultView||i.parentWindow,r.top>=0&&r.left>=0&&r.bottom<=(o.innerHeight||i.clientHeight)&&r.right<=(o.innerWidth||i.clientWidth)&&(n=!0,a=!0))}),!n)return;setTimeout(function(){try{e.forEach(function(t){var e=t.formatsData;e.sendAbTestEvent("visible","report");var a=t.querySelector(".video-label-box"),n=a?a.querySelector(".video-cta-href"):null,i=n?n.querySelector(".video-cta-button"):null,o=a?a.querySelector(".branding"):null,s=C(a,"videoLabelBox")||C(n,"ctaAnchor")||C(i,"ctaButton")||C(o,"branding")||R(n,"ctaAnchor")||R(i,"ctaButton")||B(n,t,"ctaAnchor","videoCube")||B(n,a,"ctaAnchor","videoLabelBox")||B(i,n,"ctaButton","ctaAnchor")||I(n,o,"ctaAnchor","branding")||function(t,e,r,a){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect();if(0===n.width||0===n.height||0===i.width||0===i.height)return null;if(n.left>i.right||n.right<i.left||n.top>i.bottom||n.bottom<i.top)return null;return r+"_intersects_with_"+a}(n,o,"ctaAnchor","branding")||w(i,"ctaButton",r+5,"too")||w(n,"ctaAnchor",r+5,"too")||T(n,o,"ctaAnchor","branding",4)||T(o,n,"branding","ctaAnchor",4)||function(t,e,r,a,n,i){if(null==n||!i)return null;var o=t.getBoundingClientRect(),s=e.getBoundingClientRect();if(o&&s){if("ltr"===i){var l=(o.left-s.left)/s.width;if(l>n+.1)return r+"_moved_from_left"}if("rtl"===i){var l=(s.right-o.right)/s.width;if(l>n+.1)return r+"_moved_from_right"}}return null}(o,a,"branding",0,e.brandingLocation,e.brandingDirection)||w(o,"branding",1.9*e.brandingHeightBefore,"became");s&&e.sendAbTestEvent(s,"report")})}catch(e){t.formatsData.sendAbTestEvent("error_reporting_with_timeout","report",e.message)}},3e3)}catch(e){t.formatsData.sendAbTestEvent("error_reporting","report",e.message)}}})}(c)}function b(t,e,r){var a=0,n=window.getComputedStyle(t,e,r);return n&&"none"!==n.content&&(r.formatsData.sendAbTestEvent("has_pseudo_el"),a=function(t,e){var r=parseInt(t.width),a=t.content;isNaN(r)&&a.length>0&&(r=p(e,a,t.fontWeight,t.fontSize,t.fontFamily),e.formatsData.sendAbTestEvent("has_text_pseudo_el"));return r}(n,r)),a}function p(t,e,r,a,n){try{if(null==e||""===e)return null;if(null==a&&(null==n||""===n))return null;if(null==_)return t.formatsData.sendAbTestEvent("measureText_no_canvas"),null;var i=_.getContext("2d");if(null==i)return t.formatsData.sendAbTestEvent("measureText_no_canvas_context"),null;var o=[];if(null!=r&&o.push(r.toString()),null!=a&&o.push(parseInt(a)+"px"),null!=n&&o.push(n),0===o.length)return t.formatsData.sendAbTestEvent("measureText_no_font_parts"),null;var s=o.join(" ");if(null==s||""===s)return t.formatsData.sendAbTestEvent("measureText_empty_font_value"),null;i.font=s;var l=i.measureText(e);return null==l?(t.formatsData.sendAbTestEvent("measureText_no_metrics"),null):l.width}catch(e){return t.formatsData.sendAbTestEvent("filtered_error_measure_text_list_suffix"),null}}function D(t,e,r){return'<svg class="cta-rating-star" height="9px" version="1.1" viewBox="0 0 9 9" width="9px" xmlns="http://www.w3.org/2000/svg">    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">        <linearGradient id="lg'+e+"-"+t+'" x1="0" x2="1" y1="0.5" y2="0.5">            <stop offset="0" stop-color="#737373" stop-opacity="1"/>            <stop offset="'+r+'" stop-color="#737373" stop-opacity="1"/>            <stop offset="'+r+'" stop-color="#737373" stop-opacity="0.5"/>            <stop offset="1" stop-color="#737373" stop-opacity="0.5"/>        </linearGradient>        <g fill="url(#lg'+e+"-"+t+')" fill-rule="nonzero" transform="translate(-21.000000, -19.000000)">            <polygon points="25.5 26.4626165 22.7188471 28 23.25 24.7437694 21 22.4376941 24.1094235 21.9626165 25.5 19 26.8905765 21.9626165 30 22.4376941 27.75 24.7437694 28.2811529 28"></polygon>        </g>    </g></svg>'}function x(t,e,r){var n=y(e);if((!n||0===n)&&(n=E(e,"height"))<=0)return 0;if(!t.formatsData.shouldRenderAsCTA||!r)return t.rbox.formatsData.shouldAdjustAllItemsHeight?n:0;var i=t.formatsData.isAppInstall?f:0,o=A(r),s=n+i-o+Math.max(a,o);return s<=n?t.rbox.formatsData.shouldAdjustAllItemsHeight?n:0:s}function T(t,e,r,a,n){return A(t)-A(e)>n?r+"_is_larger_by_"+n+"_than_"+a:null}function w(t,e,r,a){return t.getBoundingClientRect().height>r?e+"_"+a+"_large":null}function C(t,e){return t?null:e+"_not_exists"}function R(t,e){return"none"===E(t,"display","unknown")?e+"_display_none":null}function I(t,e,r,a){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return n.top>i.bottom?r+"_below_"+a:n.bottom<i.top?r+"_above_"+a:null}function B(t,e,r,a){var n=I(t,e,r,a);if(n)return n;var i=t.getBoundingClientRect(),o=e.getBoundingClientRect();return i.left<o.left?r+"_left_border_outside_of_"+a:i.right>o.right?r+"_right_border_outside_of_"+a:i.bottom>o.bottom?r+"_bottom_border_outside_of_"+a:i.top<o.top?r+"_top_border_outside_of_"+a:null}function S(t){return t.querySelector(".item-label-href")}function L(t,e,r){if(e&&t){var a=E(t,r);a&&(e.style[r]=a)}}}},window.TRC.customHooks[e]=c}catch(t){window.__trcError("Error in CTA module: "+t.message)}}();
