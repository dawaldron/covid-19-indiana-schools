define("live-video-banner",["module","jquery","page","utils","storage","jquery-utils"],function(e,t,i,o,r){"use strict";var c={name:e.id,class:"."+e.id};o.broadcast(c.name,"loaded"),o.createModule(c.name,function(a){const l=this;this.$el=a,this.module=c,this.init=function(){l.broadcast("init"),o.listen("mini-live-video","started",function(e,t,i){let s=r.get("dismissedLiveVideos")||[];var d=s.includes(i.id);let n=i.title;100<n.length&&(n=n.substring(0,100)+"…"),d?l.broadcast("suppressingDismissedVideo"):(l.getElements("title").text(n),"false"===a.attr("data-watch-enabled")?(l.getElements("video-link").attr("href",i.url),l.getElements("meta").attr("href",i.url)):(l.getElements("video-link").attr("href",`/watch?vid=${i.id}`),l.getElements("meta").attr("href",`/watch?vid=${i.id}`)),a.getBlock(c.name).setModifier("active",!0)),l.getElements("close").on("click",function(){a.remove();let e=r.get("dismissedLiveVideos")||[];e.pushIfUnique(i.id),r.set("dismissedLiveVideos",e)}),o.listen("mini-live-video","stopped",function(e,t,i){a.getBlock(c.name).setModifier("active",!1)})}),l.broadcast("ready")}})});
//# sourceMappingURL=live-video-banner_5.8.4.js.map