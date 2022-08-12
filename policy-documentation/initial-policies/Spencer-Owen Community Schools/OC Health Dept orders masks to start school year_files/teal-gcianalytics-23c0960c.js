window.Teal=window.Teal||{};class Gcianalytics{constructor(e){this.parent=e,this.loadStrategy=!1,this.parent.settings.gcianalytics.load&&!window.gciAnalytics?this.load():this.init(),this.eventQueue=[],this._resetmilestone();const t=()=>{for(document.removeEventListener("gciAnalyticsReady",t);this.eventQueue.length;){let e=this.eventQueue.shift();window.gciAnalytics.view(this._getVideoData(e))}};document.addEventListener("gciAnalyticsReady",t)}async load(){try{this.init(),await Teal.Utils.loadScript("tealplayer_gcianalytics",this.parent.settings.gcianalytics.scriptUrl)}catch(e){}}init(){this.parent.sm.subscribe(this,{EVENT:this._onEvent,META:this._onMetaChange,STATE:this._onStateChange})}_onStateChange(e){e.controller===this.parent.sm.controllers.VIDEO?this._onStateChangeVideo(e.state):e.controller===this.parent.sm.controllers.PREROLL&&this._onStateChangePreroll(e.state)}_onMetaChange(e){switch(e){case this.parent.sm._fullscreen.name:this._makeViewCall("video-resize")}}_onEvent(e){switch(e){case this.parent.sm.EVENTS.muteClick:this._makeViewCall("video-mute");break;case this.parent.sm.EVENTS.unmuteClick:this._makeViewCall("video-unmute");break;case this.parent.sm.EVENTS.skip:this._makeViewCall("video-ad-skip");break;case this.parent.sm.EVENTS.pauseClick:this._makeViewCall("video-pause");break;case this.parent.sm.EVENTS.playClick:this._makeViewCall("video-resume");break;case this.parent.sm.EVENTS.playBackError:break;case this.parent.sm.EVENTS.timeChange:this._trackMilestone()}}_onStateChangePreroll(e){switch(e){case this.parent.sm.states.DONE:break;case this.parent.sm.states.STARTED:this._makeViewCall("video-ad-start")}}_onStateChangeVideo(e){switch(e){case this.parent.sm.states.DONE:this._makeViewCall("video-complete"),this._resetmilestone();break;case this.parent.sm.states.STARTED:let t;t=this.parent.sm.playbackIndex>0?"video-continuous-play":"auto-first"===this.parent.settings.base.startedBy?"video-autoplay":"video-play",this._makeViewCall(t)}}_resetmilestone(){this.betweenmilestonetime=0,this.previousmilestonemark=0,this.currentmilestone="",this.milestone={10:{eventname:"10% progress",fired:!1},25:{eventname:"25% progress",fired:!1},50:{eventname:"50% progress",fired:!1},75:{eventname:"75% progress",fired:!1},95:{eventname:"95% progress",fired:!1}}}_trackMilestone(){let e=Math.floor(this.parent.elements.video.currentTime/this.parent.capiDuration*100);switch(e){case 10:case 25:case 50:case 75:case 95:this.milestone[e].fired||this._callmilestone(this.milestone[e]);break;default:this.currentmilestone=""}}_callmilestone(e){this.currentmilestone=e.eventname,e.fired=!0,this.betweenmilestonetime=(this.parent.elements.video.currentTime-this.previousmilestonemark).toFixed(0),this.previousmilestonemark=this.parent.elements.video.currentTime,this._makeViewCall("video-milestone")}_makeViewCall(e){window.gciAnalytics&&window.gciAnalytics.isReady?window.gciAnalytics.view(this._getVideoData(e)):this.eventQueue.push(e)}_getVideoData(e){return{"client-action":"video-milestone"===e?this.currentmilestone:this.parent._playbackState,"event-type":e,"content-type":"video","content-id":this.parent.data.id,"content-byline":this.parent.data.byline,"content-cst":this.parent.data.awsPath,"content-keywords":this.parent.data.keywords,"content-source":this.parent.data.origin,"content-ssts-section":this.parent.data.ssts.section,"content-ssts-subsection":this.parent.data.ssts.subsection,"content-ssts-subtopic":this.parent.data.ssts.subtopic,"content-ssts-topic":this.parent.data.ssts.topic,"content-keywords":this.parent.data.keywords,"content-video-3p-tracking-id":this.parent.data.gannettTracking,"content-video-ad-name":"video-ad-start"===e&&this.parent.ima.adData?this.parent.ima.adData.adId:"","content-video-duration":this.parent.capiDuration,"content-video-market-name":this.parent.data.propertyName,"content-video-name":this.parent.data.title,"content-video-play-status":this.parent._playbackState,"content-video-player-rail-state":"","content-video-player-type":"teal","content-video-provider":this.parent.data.origin,"content-video-size":"","content-video-seconds-watched":"video-milestone"===e?this.betweenmilestonetime:0,"content-video-type":this.parent.settings.base.placement.replace(/teal-/g,""),"page-experience-type":this.parent.settings.base.platform||"desktop"}}}window.Teal.Gcianalytics=Gcianalytics;