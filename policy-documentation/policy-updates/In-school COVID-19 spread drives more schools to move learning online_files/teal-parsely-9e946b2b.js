window.Teal=window.Teal||{};class Parsely{constructor(t,a){this.parent=t,this.ready=a,this.loadStrategy=!1,this.parent.settings.parsely.load&&!window.Parsely?this.load():this.init()}async load(){try{this.init(),await Teal.Utils.loadScript("tealplayer_parsely",this.parent.settings.parsely.scriptUrl)}catch(t){}}init(){if(window.PARSELY)this.loadStrategy||this._addStrategy();else{const t=window.PARSELY=window.PARSELY||{autotrack:this.parent.settings.parsely.autoTrack},a=t.onload;t.onload=(()=>{if(a)try{a()}catch(t){}this._addStrategy()})}}_addStrategy(){if(!PARSELY.video)return;let t=this._buildStrategy(this.parent.elements.container);PARSELY.video.addStrategy(t),this.loadStrategy=!0}_buildStrategy(t){return{platform:this.parent.settings.parsely.platform,searchTags:["DIV"],verify:t=>-1!==(" "+t.className+" ").indexOf("teal-video-wrap"),subscribe:()=>{this.parent.sm.subscribe(this,{STATE:this._onStateChange})}}}_onStateChange(t){if(t.controller===this.parent.sm.controllers.VIDEO)switch(t.state){case this.parent.sm.states.PLAYING:this.parselyOnPlay();break;case this.parent.sm.states.PAUSED:this.parselyOnPause()}}parselyOnPlay(){let t={duration:this.parent.data.duration,image_url:this.parent.data.videoStill,pub_date_tmsp:this.parent.data.createDate,title:this.parent.data.title,author:this.parent.data.byline,section:this.parent.data.ssts.section,tags:this._fetchTags(),video_platform:this.parent.settings.parsely.platform};PARSELY.video.onPlay(void 0,this.parent.data.id,t)}parselyOnPause(){PARSELY.video.onPause(void 0,this.parent.data.id)}_fetchTags(){let t=[];return this.parent.data.tags&&this.parent.data.tags.forEach(a=>{t.push(`tag:${a.name}`)}),this.parent.data.ssts&&t.push(`ssts:${this.parent.data.ssts.section}:${this.parent.data.ssts.subsection}`),t}}window.Teal.Parsely=Parsely;