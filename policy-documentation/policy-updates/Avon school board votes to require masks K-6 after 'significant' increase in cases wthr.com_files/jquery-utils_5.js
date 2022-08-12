define("jquery-utils",["module","utils","jquery"],function(t,i,o){o.getMultiScripts=function(t,e){o.ajaxSetup({cache:!0});t=o.map(t,function(t){return o.getScript((e||"")+t)});return t.push(o.Deferred(function(t){o(t.resolve)})),o.when.apply(o,t)},o.fn.extend({getBlock:function(t){return i.currentBEM={block:t,element:null,$el:this},this},getElements:function(t,e,n){return void 0!==e&&"boolean"!=typeof e||(n=e,e=t,t=i.currentBEM.block),i.currentBEM.block=t,i.currentBEM.element=e,!0===n?o(this):i.currentBEM.$el.find("."+t+"__"+e)},getModifier:function(t){var e=this.first(),n=void 0===i.currentBEM.element||null===i.currentBEM.element?i.currentBEM.block+"_"+t+"_":i.currentBEM.block+"__"+i.currentBEM.element+"_"+t+"_";o.each(e.getClasses(),function(t,e){if(0===e.indexOf(n))return e.replace(n,"")})},removeModifier:function(t){var n=this,r=void 0===i.currentBEM.element||null===i.currentBEM.element?i.currentBEM.block+"_"+t+"_":i.currentBEM.block+"__"+i.currentBEM.element+"_"+t+"_";return n.each(function(){o.each(n.getClasses(),function(t,e){0===e.indexOf(r)&&n.removeClass(e)})}),this},setElement:function(t){return i.currentBEM.element=t,this},setModifier:function(t,e){var n=this;return n.removeModifier(t),null!==i.currentBEM.element?n.addClass(i.currentBEM.block+"__"+i.currentBEM.element+"_"+t+"_"+e.toString()):n.addClass(i.currentBEM.block+"_"+t+"_"+e.toString()),this},withModifier:function(t,e){return this.filter("."+i.currentBEM.block+"__"+i.currentBEM.element+"_"+t+"_"+e)},hasModifier:function(t,e){return null!==i.currentBEM.element?this.hasClass("."+i.currentBEM.block+"__"+i.currentBEM.element+"_"+t+"_"+e.toString()):this.hasClass("."+i.currentBEM.block+"_"+t+"_"+e.toString())},observeIntersections:function(n,r){var t,e="IntersectionObserver"in window&&"IntersectionObserverEntry"in window;return(r=r||{}).threshold=r.threshold||0,e&&(t=new window.IntersectionObserver(function(t,e){t.forEach(function(t){"true"===t.target.dataset.firstObservation&&(t.isInitialObservation=!0,t.target.removeAttribute("data-first-observation")),t.isIntersectingThreshold=t.intersectionRatio>=r.threshold,n(t,e)})},r),this.each(function(){o(this).attr("data-first-observation","true"),tegna.log("utils","observingIntersections",{$el:o(this),options:r}),t.observe(this)})),t},getAutoHeight:function(){var t=this,e=t.clone(!1);e.attr("id","utils__auto-height").css({opacity:"0","pointer-events":"none",position:"fixed",left:"-9001px",top:"-9001px",bottom:"auto",right:"auto",height:"auto",width:t.width()}),t.parent().append(e);t=e.height();return e.remove(),t},getClasses:function(){return this.first().attr("class").split(/\s+/)},getModelData:function(){var n={};return o.each(this[0].dataset,function(t,e){"true"===e?n[t]=!0:"false"===e?n[t]=!1:"null"===e?n[t]=null:isNaN(Number(e.toString()))||""===e?n[t]=i.tryParseJSON(e):n[t]=Number(e.toString())}),n}})});
//# sourceMappingURL=jquery-utils_5.8.4.js.map