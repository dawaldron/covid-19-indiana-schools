define("article",["module","jquery","page","utils","storage","header","jquery-utils"],function(e,t,n,l,d){const u={name:e.id,class:"."+e.id};l.broadcast(u.name,"loaded"),l.createModule(u.name,function(i){const a=this;a.$el=i,a.module=u,a.init=function(){a.broadcast("init"),e(),i.observeIntersections((e,t)=>{!0===e.isIntersecting?(document.title=o.seoTitle+" | "+n.model.primarydomain,r?(a.broadcast("enteredViewport",{dataset:o,_trackView:s,_trackTags:["comscore","googleanalytics"]}),r=!1):a.broadcast("enteredViewport",{dataset:o}),a.broadcast("gainedFocus"),a.focused=!0):a.broadcast("leftViewport")}),l.listen(u.name,"enteredViewport",function(e,t,i){!1===c(i.$el)&&a.broadcast("lostFocus")}),a.broadcast("ready")};var o=i[0].dataset,s={section:o.section,subsection:o.subsection,topic:o.topic,subtopic:o.subtopic,page_url:o.url,gpt_network_code:o.gptNetworkCode,content_type:"article",pathname:`https://${o.url}`,related_topics:null,video_milestone:null,event_name:null,item_number:t(".article").length,asset_id:o.articleId,content_title:o.title,content_categories:o.categories,article_byline:o.author,topics_included:"false",video_included:o.hasVideo,video_autoplay:o.hasVideo,article_keywords:o.keywords.replace(/(\r\n|\n|\r)/gm,""),t1_publisher:o.t1Publisher},r=1<t(".article").length,c=e=>e.is(i),e=()=>{var e=d.get("viewedArticles")||[],t=i[0].dataset.articleId;e.pushIfUnique(t,30),d.set("viewedArticles",e)}})});
//# sourceMappingURL=article_5.8.4.js.map