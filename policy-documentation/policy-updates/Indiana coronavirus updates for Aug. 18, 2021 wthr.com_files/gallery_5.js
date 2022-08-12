define("gallery",["module","jquery","page","utils","jquery-utils"],function(e,o,t,c){const g={name:e.id,class:"."+e.id};c.broadcast(g.name,"loaded"),c.createModule(g.name,function(i){const l=this;this.$el=i,this.module=g,this.init=function(){l.broadcast("init"),l.getElements("more").on("click",function(){l.getElements("description").css("height",n),l.getElements("more").hide(),l.getElements("close").setModifier("visible",!0),window.setTimeout(function(){},2e3)}),l.getElements("close").on("click",function(){r()}),require(["swiper"],function(e){var t;t=l.getElements("slider")[0],(s=new window.Swiper(t,{loop:!0,slidesPerView:1,initialSlide:parseInt(i[0].dataset.initialSlide),containerModifierClass:"gallery__slider_swiper-",slideClass:"gallery__slide",slideActiveClass:"gallery__slide_active_true",slideDuplicateActiveClass:"gallery__slide_duplicate_true",slideVisibleClass:"gallery__slide_visible_true",wrapperClass:"gallery__slides",on:{init:function(){l.getElements("controls").setModifier("visible",!0),l.getElements("initial-image").hide(),l.broadcast("ready")}}})).on("slideChange",function(){var e=l.getElements("slides").find('[data-swiper-slide-index="'+s.realIndex+'"]');r(),s.realIndex!==a&&(d&&(l.broadcast("firstSlideChange",{_trackView:{content_type:"gallery"}}),d=!1),e.find(".lazy-image__placeholder").hide(),e.find(".lazy-image__image").css("opacity",1),l.broadcast("slideChanged",{$slide:e,slide:s.realIndex+1,_trackEvent:{event:"media-gallery/arrowsClicked"},_trackView:{content_type:"gallery",item_number:s.realIndex+1}}),a=s.realIndex),l.getElements("current-slide-number").text(s.realIndex+1),l.getElements("description-text-inner").text(e[0].dataset.caption),l.getElements("credit").text(e[0].dataset.credit),45<l.getElements("description-text").height()?l.getElements("more").show():l.getElements("more").hide(),n=l.getElements("description").getAutoHeight(),l.$el.find(".swiper-slide-duplicate, .swiper-slide-duplicate-prev, .swiper-slide-duplicate-next").each(function(){"true"!==o(this).attr("data-lazy-load-ready")&&(c.broadcast("grid","addedSection",{$el:l.getElements("slides")}),o(this).attr("data-lazy-load-ready","true"))})}),l.getElements("arrow").withModifier("type","previous").on("click",function(){s.slidePrev(500)}),l.getElements("arrow").withModifier("type","next").on("click",function(){s.slideNext(500)})})};var s=null,n="auto",a=parseInt(i[0].dataset.initialSlide),d=!0;function r(){l.getElements("description").css("height","45px"),l.getElements("more").show(),l.getElements("close").setModifier("visible",!1)}})});
//# sourceMappingURL=gallery_5.8.4.js.map