window.__tnt||(window.__tnt={}),function(t,e){var n=e.regions||(e.regions={}),i={};n.stickyAnchor={hasContent:!1,init:function(){i.closeBtnRendered=!1,i.div=t("#sticky-anchor"),i.region=t("#tncms-region-page_sticky_anchor"),i.icon="fas tnt-minus",n.stickyAnchor.checkContent(),!0===n.stickyAnchor.hasContent&&n.stickyAnchor.renderClose(),n.stickyAnchor.observer.observe(i.region[0],{childList:!0,subtree:!0})},checkContent:function(){var t=i.region[0];if(t.hasChildNodes())for(var e=t.children,s=0;s<e.length;s++)if(e[s].querySelector(".tnt-ads-container, .tnt-ads")){var o=e[s].querySelector(".tnt-ads-container, .tnt-ads");o.offsetHeight>1&&o.firstElementChild&&null!==o.firstElementChild.offsetParent&&(o.firstElementChild.firstElementChild&&null!==o.firstElementChild.firstElementChild.offsetParent||"IMG"==o.firstElementChild.tagName)&&(n.stickyAnchor.hasContent=!0,n.stickyAnchor.observer.disconnect())}else e[s].firstElementChild&&null!==e[s].firstElementChild.offsetParent&&(n.stickyAnchor.hasContent=!0,n.stickyAnchor.observer.disconnect())},renderClose:function(){!1===i.closeBtnRendered&&(i.div.prepend('<div class="sticky-anchor-close" data-toggle="collapse" data-target="#tncms-region-page_sticky_anchor"><i class="'+i.icon+'"></i></div>'),i.region.on("hide.bs.collapse",function(){t(this).siblings(".sticky-anchor-close").find("[data-fa-i2svg]").attr("data-icon","plus")}),i.region.on("show.bs.collapse",function(){t(this).siblings(".sticky-anchor-close").find("[data-fa-i2svg]").attr("data-icon","minus")}),i.closeBtnRendered=!0)},observer:new MutationObserver(function(t,e){for(var i=0;i<t.length;i++)"childList"==t[i].type&&(n.stickyAnchor.checkContent(),!0===n.stickyAnchor.hasContent&&n.stickyAnchor.renderClose())})};var s={};n.stickySide={init:function(t,e,i,s){var o=t.getElementsByClassName("tncms-block");if(o.length>0){for(var r=!1,c=0;c<o.length;c++)if(o[c].hasChildNodes()){r=!0;break}r&&(n.stickySide.getOffset(),n.stickySide.determineStick(t,e,i,s),window.addEventListener("resize",function(){n.stickySide.determineStick(t,e,i,s)}))}},getClosest:function(t,e){for(;t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},getOffset:function(){s.offset=30,(document.body.classList.contains("fixed-nav")||document.body.classList.contains("fixed-scroll-nav"))&&(s.offset+=document.getElementById("main-navigation").offsetHeight)},determineStick:function(t,e,i,o){if(n.stickySide.getOffset(),"siderail"==i&&window.innerWidth>=992||"aside"==i&&(window.innerWidth>=1200||window.innerWidth>=768&&window.innerWidth<992)){var r=this.getClosest(t,o),c=e.parentElement.offsetWidth==r.offsetWidth?this.getClosest(r.parentNode,o):r;window.stick_in_parent(t,{parent:c,offset_top:s.offset,spacer:e})}else{var a;window.CustomEvent?a=new CustomEvent("sticky_kit:detach"):(a=document.createEvent("CustomEvent"),event.initCustomEvent("sticky_kit:detach",!0,!0)),t.dispatchEvent(a)}}};n.stickySideBreakout={init:function(){window.innerWidth>=992&&document.querySelectorAll(".fixed-sticky-rail").forEach(function(t){var e=t.dataset.pos,n=t.parentElement,i=document.querySelector('.text-row[data-breakout="'+e+'"]');window.stick_in_parent(t,{parent:i,offset_top:75,spacer:n})})}}}(jQuery,__tnt);
//# sourceMappingURL=tnt.regions.54d9f15b0d238de6bb20ec82ed8307ac.js.map