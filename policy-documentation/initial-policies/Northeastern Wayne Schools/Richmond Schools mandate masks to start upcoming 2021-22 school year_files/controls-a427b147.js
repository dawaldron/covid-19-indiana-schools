window.Teal=window.Teal||{};class Controls{constructor(e){this.parent=e,this.svg={airplay:{title:"Airplay",path:'<path d="M0 1.9v14.5h6l.9-1.1H1.1V3h21.8v12.3H17l1 1.1h5.9V1.9z"/><path d="M3.3 22.1h17.4L12 12z"/>'},closedCaption:{title:"ClosedCaption",path:'<path d="M22 3a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h20zm-1 2H3a1 1 0 00-.993.883L2 6v12a1 1 0 00.883.993L3 19h18a1 1 0 00.993-.883L22 18V6a1 1 0 00-1-1zM9.22 8.75c.54 0 1.027.109 1.46.327.37.186.695.444.973.773l.135.17-1.352.8-.124-.143a1.813 1.813 0 00-.415-.335c-.2-.117-.43-.175-.695-.175-.435 0-.788.164-1.058.493-.27.328-.405.771-.405 1.33 0 .558.135 1.004.405 1.338.27.335.623.502 1.058.502.27 0 .51-.066.718-.198.157-.099.294-.21.413-.336l.112-.129 1.343.8-.133.173c-.274.334-.6.594-.976.78a3.226 3.226 0 01-1.458.327c-.638 0-1.198-.138-1.68-.414a2.966 2.966 0 01-1.131-1.146C6.137 13.2 6 12.633 6 11.99c0-.644.137-1.208.41-1.693a2.94 2.94 0 011.131-1.136c.482-.273 1.042-.41 1.68-.41zm6.213 0c.54 0 1.026.109 1.458.327.37.186.695.444.974.773l.135.17-1.353.8-.123-.143a1.834 1.834 0 00-.415-.335 1.349 1.349 0 00-.695-.175c-.435 0-.788.164-1.058.493-.27.328-.405.771-.405 1.33 0 .558.135 1.004.405 1.338.27.335.623.502 1.058.502.27 0 .51-.066.718-.198.156-.099.294-.21.412-.336l.112-.129 1.344.8-.133.173c-.275.334-.6.594-.976.78a3.232 3.232 0 01-1.458.327c-.639 0-1.198-.138-1.68-.414a2.961 2.961 0 01-1.132-1.146c-.273-.488-.41-1.054-.41-1.698 0-.644.137-1.208.41-1.693.273-.485.65-.863 1.132-1.136.482-.273 1.041-.41 1.68-.41z"/>'},exitFullscreen:{title:"Exit Full Screen",path:'<path d="M18.02 15.982L18.006 20 16 19.999v-6h6l-.02 1.996-3.96-.013zm-.038-8l4.019.011-.002 2.008h-6V4l1.997.02-.014 3.96zM6.018 16.018l-4.019-.012.002-2.008h6v6l-1.997-.02.014-3.96zm-.037-8L5.993 4 8 4.001v6H2l.02-1.996 3.96.013z"/>'},fullscreen:{title:"Enter Full Screen",path:'<path d="M19.98 18.017l.013-4.018L22 14v6h-7l.02-1.996 4.96.013zm.038-11.997l-5.019-.012L15.001 4h7v6l-1.997-.021.014-3.96zM3.982 17.98l5.019.012L8.999 20H2v-6l1.997.021-.014 3.96zM4.02 5.983l-.012 4.018L2 10V4h7l-.02 1.996-4.96-.013z"/>'},mute:{title:"Sound On",path:'<path mute d="M15 6a6 6 0 1 1 0 12v-2a4 4 0 1 0 0-8V6zM3 8h4v8H3V8zm4 0l6-4v16l-6-4V8z"/>'},pause:{title:"Pause",path:'<path d="M7 6h3v12H7V6zm7 0h3v12h-3V6z"/>'},play:{title:"Play",path:'<polygon points="18 12 8 18 8 6"></polygon>'},share:{title:"Open Share",path:'<path d="M14.913 15.845l-5.058-2.92a2.998 2.998 0 0 0 .002-1.842l5.061-2.923a3 3 0 1 0-.896-1.792L8.63 9.481a3 3 0 1 0-.007 5.042l5.398 3.117a3 3 0 1 0 .892-1.795z"/>'},shareIOS:{title:"Open Share",path:'<path d="M18 18v-5h2v7H4v-7h2v5h12zM13 7.828V15h-2V7.828l-2.586 2.793L7 9.207 12 4l5 5.207-1.5 1.414L13 7.828z"/>'},unmute:{title:"Sound Off",path:'<path d="M19.414 12l2.122-2.121-1.415-1.415L18 10.586l-2.121-2.122-1.415 1.415L16.586 12l-2.122 2.121 1.415 1.415L18 13.414l2.121 2.122 1.415-1.415L19.414 12zM3 8h4v8H3V8zm4 0l6-4v16l-6-4V8z"/>'}},this._init()}_init(){this.parent.settings.controls.svg&&(this.svg=Object.assign(this.svg,this.parent.settings.controls.svg)),this.parent.sm.subscribe(this,{EVENT:this._onEvent,META:this._onMetaChange,STATE:this._onStateChange}),this._createControlBar(),this._createWrapPlayToggle(),this._createSpinner(),this._controlsHidden()}_onStateChange(e){e.state&&this._onStateChangeAll(e.state),e.controller===this.parent.sm.controllers.PREROLL?this._onStateChangePreroll(e.state):e.controller===this.parent.sm.controllers.VIDEO&&this._onStateChangeVideo(e.state)}_onEvent(e){switch(e){case this.parent.sm.EVENTS.metadata:this._setDuration();break;case this.parent.sm.EVENTS.subtitletrackadded:let t=this.parent.elements.video.textTracks;t&&t[0]&&(this._showClosedCaptionText(),this._showClosedcaptionIcon());break;case this.parent.sm.EVENTS.timeChange:this._onTimeChange()}}_onMetaChange(e){e===this.parent.sm._currentVolume.name&&this._updateVolumeSlider()}_onStateChangeAll(e){switch(-1===[this.parent.sm.states.LOADING,this.parent.sm.states.BUFFERING].indexOf(e)&&this._spinnerHide(),e){case this.parent.sm.states.LOADING:case this.parent.sm.states.BUFFERING:this._setDisplay(),this._spinnerShow();break;case this.parent.sm.states.STARTED:this._setDisplay(),this._showControls();break;case this.parent.sm.states.PAUSED:this._setPauseBtn();break;case this.parent.sm.states.PLAYING:this._setPlayBtn(),this._onTimeChange()}}_onStateChangePreroll(e){switch(e){case this.parent.sm.states.DONE:this._skipHide();break;case this.parent.sm.states.PLAYING:this._disableProgressScrubber();break;case this.parent.sm.states.STARTED:this._hideEl(this.shareBtn),Teal.Utils.UA.isMobile&&(this._isFullscreen()&&this._exitFullscreen(),this._hideEl(this.fullscreenBtn))}}_onStateChangeVideo(e){switch(e){case this.parent.sm.states.DONE:this._reset();break;case this.parent.sm.states.PLAYING:this._enableProgressScrubber();break;case this.parent.sm.states.STARTED:this._showEl(this.shareBtn),this._showEl(this.fullscreenBtn)}}_createWrapPlayToggle(){this.playToggle=this._createDiv("tealplayer-play-toggle"),this.parent.settings.controls.enableBigPlayButton&&(this.bigPlayBtn=this._createDiv("tealplayer-big-play-btn"),this.bigPlayBtn.innerHTML=`<svg class="tealplayer-btn-icon tealplayer-btn" view-box="0 0 80 80" role="img" aria-labelledby="big_play_tealplayer_svg_tealplayer_svg"><title id="big_play__tealplayer_svg">Click to Play</title>${this.svg.play.path}</svg>`,this.playToggle.appendChild(this.bigPlayBtn),this._controlsHidden()),this.parent.elements.video.parentNode.insertBefore(this.playToggle,this.controlBar),Teal.Utils._registerEvents(this,[{event:"click",handler:this._onplay}],this.playToggle),this._controlsVisibleMousemove(this.parent.elements.container)}_addControlBarListeners(){this._controlsVisibleMousemove(this.controlBar),this._controlsVisibleMousemove(this.progressEl)}_createBtn(e,t=this,s=!0){let i=document.createElement(s?"button":"div");return e.forEach((e,a)=>{0===a&&(i.classList.add(`tealplayer-${e}-btn`),i.classList.add("tealplayer-btn"),i.setAttribute("aria-live","polite"),s&&Teal.Utils._registerEvents(t,[{event:"click",handler:t[`_on${e}`]}],i),t[`${e}Btn`]=i);let r=1===a?" tealplayer-vis-hidden":"";i.innerHTML+=`<svg id="${e}TealSvg" class="tealplayer-btn-icon ${r} btn-index-${a}" view-box="0 0 24 24" aria-labelledby="${e}_tealplayer_svg"><title id="${e}_tealplayer_svg">${t.svg[e].title}</title>${t.svg[e].path}</svg>`}),i}_createControlBar(){let e=document.createDocumentFragment();this.controlBar=this._createDiv("tealplayer-control-wrap"),e.appendChild(this.controlBar);let t=this.parent.settings.controls.controlbarLeft,s=this.parent.settings.controls.controlbarRight;this.controlBar.appendChild(this._createProgressBar()),t&&t.length&&this.controlBar.appendChild(this._createControlBarSection("tealplayer-left-controls",t)),s&&s.length&&this.controlBar.appendChild(this._createControlBarSection("tealplayer-right-controls",s)),this.parent.elements.video.parentNode.insertBefore(e,this.parent.elements.video),this._addControlBarListeners()}_createControlBarSection(e,t){let s=this._createDiv(e);return t.forEach(e=>{switch(e){case"airplay":Teal.Utils.UA.isIOS&&s.appendChild(this._createBtn([e]));break;case"closedCaption":Teal.Utils.UA.isIE11||(this.closedcaption=s.appendChild(this._createBtn([e])),this._resetClosedCaption());break;case"fullscreen":s.appendChild(this._createBtn([e,"exitFullscreen"])),this._addFullscreenListeners();break;case"mute":this._createVolumeWrap(s),this.volumeWrap.appendChild(this._createBtn([e,"unmute"]));break;case"play":s.appendChild(this._createBtn([e,"pause"]));break;case"share":if(!window.Teal.Share)break;Teal.Utils.UA.isIOS&&(e="shareIOS"),s.appendChild(this._createBtn([e]));break;case"skip":try{let e=this._createSkip();s.appendChild(e)}catch(e){}break;case"timer":let t=this._createTimeDisplay();s.appendChild(t);break;case"volumeSlider":if(!Teal.Utils.UA.isMobile){let e=this._createVolumeSliderInput();this._createVolumeWrap(s),this.volumeWrap.appendChild(e)}}}),s}_createDiv(e){let t=document.createElement("div");return t.classList.add(e),t}_reset(){this.parent.encore&&this.parent.encore.hasNext()&&!this.parent.sm.docHidden?(this.activeUser=!1,this._resetClosedCaption()):(this._displaySet=!1,this.bigPlayBtn&&this.bigPlayBtn.classList.remove("tealplayer-vis-hidden"),this._controlsHidden())}_toggleDisplayBtn(e,t){let s=e.children;for(let e=0;e<s.length;e++)e===t?s[e].classList.remove("tealplayer-vis-hidden"):s[e].classList.add("tealplayer-vis-hidden")}_onclosedCaption(e){this.parent._onClickEvent(e),"showing"===this.parent.elements.video.textTracks[0].mode?this._hideClosedCaptionText():this._showClosedCaptionText()}_showClosedCaptionText(){this.parent.elements.video.textTracks&&this.parent.elements.video.textTracks[0]&&(this.parent.elements.video.textTracks[0].mode="showing")}_hideClosedCaptionText(){this.parent.elements.video.textTracks&&this.parent.elements.video.textTracks[0]&&(this.parent.elements.video.textTracks[0].mode="hidden")}_showClosedcaptionIcon(){this.closedcaption.classList.remove("tealplayer-vis-hidden"),this.parent.settings.base.startMuted||this._hideClosedCaptionText()}_hideClosedcaptionIcon(){this.closedcaption.classList.add("tealplayer-vis-hidden")}_resetClosedCaption(){this._hideClosedcaptionIcon(),this._hideClosedCaptionText()}_onairplay(e){this.parent._onClickEvent(e),this.parent.elements.video.webkitShowPlaybackTargetPicker()}_onfullscreen(e){this.parent._onClickEvent(e),this.parent.sm.fullscreen?this._exitFullscreen():this._fullscreen()}_onplay(e){this.parent._onClickEvent(e),this.parent.togglePlayback(),this.activeUser=!1}_setPlayBtn(){this.playBtn&&this._toggleDisplayBtn(this.playBtn,1)}_setPauseBtn(){this.playBtn&&this._toggleDisplayBtn(this.playBtn,0),this.activeUser=!0,this._controlsVisible()}_onmute(e){this.parent._onClickEvent(e),this.parent.isMuted?(this.parent.sm.notifyEvent(this.parent.sm.EVENTS.unmuteClick),this.parent.unmute()):(this.parent.sm.notifyEvent(this.parent.sm.EVENTS.muteClick),this.parent.mute())}_onshare(e){this.parent._onClickEvent(e),this.share?this._displayShare():(this.share=new window.Teal.Share(this.parent),this._displayShare())}_onshareIOS(e){this._onshare(e)}_displayShare(){this.parent.sm.state===this.parent.sm.states.PLAYING&&(this.share.wasPlaying=!0,this.parent.pause()),this.share._showOverlay(),this._controlsHidden()}_activityCheck(){this.activeUser?this._controlsVisible():(this._controlsMinimal(),this.collapseControlTimeout&&clearTimeout(this.collapseControlTimeout))}_clearControlTimer(){this.collapseControlTimeout&&clearTimeout(this.collapseControlTimeout),this.collapseControlTimeout=null}_controlsHidden(){this.controlBar.classList.add("tealplayer-hidden"),this.hideControls=!0}_controlsMinimal(){this.controlBar.classList.remove("tealplayer-hidden"),this.controlBar.classList.add("tealplayer-minimal")}_controlTimer(){this._clearControlTimer(),this.collapseControlTimeout=setTimeout(()=>{this._activityCheck()},this.parent.settings.controls.activeUserTimeout)}_controlsVisible(){this.parent.sm.hasStarted&&!this.hideControls&&(this.controlBar.classList.remove("tealplayer-hidden"),this.controlBar.classList.remove("tealplayer-minimal"),this._controlTimer())}_controlsVisibleMousemove(e){Teal.Utils.UA.isMobile||Teal.Utils._registerEvents(this,[{event:"mousemove",handler:this._controlsVisible}],e)}_showControls(){this.hideControls=!1,this._controlsVisible()}_setDisplay(){this._displaySet||(this.bigPlayBtn&&this.bigPlayBtn.classList.add("tealplayer-vis-hidden"),this._displaySet=!0)}_addFullscreenListeners(){let e=[{event:"fullscreenchange",handler:this._onFullScreenChange},{event:"mozfullscreenchange",handler:this._onFullScreenChange},{event:"webkitfullscreenchange",handler:this._onFullScreenChange},{event:"msfullscreenchange",handler:this._onFullScreenChange}];Teal.Utils._registerEvents(this,e,document)}_exitFullscreen(){if(this.parent.elements.video.webkitDisplayingFullscreen)this.parent.elements.video.webkitExitFullscreen();else{let e=document.exitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen;e&&e.call(document)}}_fullscreen(){let e=Teal.Utils.UA.isIOS?this.parent.elements.video:this.parent.elements.video.parentElement;if(Teal.Utils.UA.isIOS)e.webkitEnterFullscreen();else{let t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.call(e)}}_isFullscreen(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement||this.parent.elements.video.webkitDisplayingFullscreen}_onFullScreenChange(e){e.target.classList&&e.target.classList.contains("teal-video-wrap")&&(this._isFullscreen()?(this.parent.sm.fullscreen=!0,this.parent.elements.video.parentElement.classList.add("tealplayer-fullscreen"),this._toggleDisplayBtn(this.fullscreenBtn,1),this.parent.enterFullscreen()):(this.parent.sm.fullscreen=!1,this.parent.elements.video.parentElement.classList.remove("tealplayer-fullscreen"),this._toggleDisplayBtn(this.fullscreenBtn,0),this.parent.exitFullscreen()))}_addProgressBarListeners(){Teal.Utils._registerEvents(this,[{event:"click",handler:this._progressPosition}],this.progressEl),Teal.Utils._registerEvents(this,[{event:"drag",handler:Teal.Utils.throttle(e=>{this._progressPosition(e)},25)}],this.progressHitbox)}_createProgressBar(){let e=document.createDocumentFragment(),t=this._createDiv("tealplayer-progress"),s=this._createDiv("tealplayer-progress-bar"),i=this._createDiv("tealplayer-progress-thumb"),a=this._createDiv("tealplayer-progress-hitbox");return t.appendChild(s),s.appendChild(i),a.setAttribute("draggable",!0),s.appendChild(a),e.appendChild(t),this.progressEl=t,this.progressBar=s,this.progressHitbox=a,this._addProgressBarListeners(),e}_enableProgressScrubber(){this.progressEl.classList.remove("tealplayer-progress-disable-user")}_disableProgressScrubber(){this.progressEl.classList.add("tealplayer-progress-disable-user")}_progressPosition(e){this.parent._onClickEvent(e);let t=this.progressEl.getBoundingClientRect(),s=100*(e.clientX-t.left)/t.width;s>=0&&s<=100&&this._seek(.01*s*this.parent.duration)}_seek(e){isFinite(e)&&(this.parent.elements.video.currentTime=e,this._setProgressBar(this.parent.elements.video.currentTime,this.parent.duration))}_setProgressBar(e,t){let s=e/t*100;this.progressBar.style.width=s+"%"}_createTimeDisplay(){return this.timer=this._createDiv("tealplayer-time"),this.currentTimeContainer=this._createDiv("tealplayer-time-container"),this.currentTimeDuration=this._createDiv("tealplayer-current-time-duration"),this.timer.appendChild(this.currentTimeContainer),this.currentTime=this._createDiv("tealplayer-current-time"),this.currentTime.textContent="0:00",this.currentTimeContainer.appendChild(this.currentTime),this._setDuration(),this.currentTimeContainer.appendChild(this.currentTimeDuration),this.parent.ima&&(this.adTimeContainer=this._createDiv("tealplayer-time-ad-container"),this.timer.appendChild(this.adTimeContainer),this.adText=this._createDiv("tealplayer-ad-time"),this.adText.textContent="AD",this.adTimeContainer.appendChild(this.adText),this.currentAdTime=this._createDiv("tealplayer-ad-time-left"),this.adTimeContainer.appendChild(this.currentAdTime)),this.timer}_formatTime(e){if(!e)return"0:00";let t=Math.floor(e/3600),s=Math.floor(e/60%60),i=Math.floor(e%60);return i<10&&(i="0"+i),t>0?(s<10&&(s="0"+s),t+":"+s+":"+i):s+":"+i}_setTimeDisplay(e,t){this.progressBar&&this._setProgressBar(e,t),this.parent.sm.hasStarted&&(this.parent.sm.isVideo?(this.currentTimeContainer.classList.remove("tealplayer-vis-hidden"),this.currentTime.textContent=this._formatTime(Math.round(e)),this.adTimeContainer&&this.adTimeContainer.classList.add("tealplayer-vis-hidden")):this.parent.sm.isPreroll&&(this.currentTimeContainer.classList.add("tealplayer-vis-hidden"),this.adTimeContainer&&(this.adTimeContainer.classList.remove("tealplayer-vis-hidden"),this.currentAdTime.textContent=this._formatTime(Math.round(t-e))),this.skip&&this.parent.ima._setSkipState()&&(this._skipShow(),this._controlsVisible())))}_setDuration(){if(this.parent.sm.durationSet||!this.timer)return;let e="0:00";const t=this.parent.capiDuration;t?(e=this._formatTime(t),this.parent.sm.durationSet=!0):this.parent.duration&&(e=this._formatTime(this.parent.duration),this.parent.sm.durationSet=!0),this.currentTimeDuration.innerHTML=`<div>${e}</div>`}_onTimeChange(){this.timer&&(this.parent.sm.isVideo?this._setTimeDisplay(this.parent.elements.video.currentTime,this.parent.duration):this.parent.sm.isPreroll&&this._setTimeDisplay(this.parent.ima.duration-this.parent.ima.remainingTime,this.parent.ima.duration))}_createVolumeSliderInput(){return this.slider=this._createDiv("tealplayer-volume-slider"),this.sliderInput=document.createElement("INPUT"),this.sliderInput.classList.add("tealplayer-volume-input"),this.sliderInput.setAttribute("type","range"),this.sliderInput.setAttribute("min","0"),this.sliderInput.setAttribute("max","1"),this.sliderInput.setAttribute("step","0.1"),this.sliderInput.setAttribute("aria-label","Volume slider"),this.sliderInput.setAttribute("value",this.parent.sm.currentVolume),this.inputVolumeBar=this._createDiv("tealplayer-volume-bar"),this.slider.appendChild(this.sliderInput),Teal.Utils.UA.isIE11?this.sliderInput.style.position="relative":this.slider.appendChild(this._createDiv("tealplayer-volume-container")).appendChild(this.inputVolumeBar),Teal.Utils._registerEvents(this,[{event:"change",handler:this._inputVolume},{event:"focus",handler:this._persistVolumeSlider}],this.sliderInput),this.slider}_inputVolume(e){this.parent._onClickEvent(e);let t=e.target.value;t>=.1&&t<=1?this.parent.setVolumeLevel(t):t<.1&&this.parent.mute(),this._persistVolumeSlider()}_createVolumeWrap(e){this.volumeWrap||(this.volumeWrap=this._createDiv("tealplayer-volume-wrap"),e.appendChild(this.volumeWrap))}_persistVolumeSlider(){this.volumeSliderActive||(this.slider.classList.add("tealplayer-volume-slider-visible"),this.volumeSliderActive=!0)}_showMuteBtn(){this._toggleDisplayBtn(this.muteBtn,1)}_showUnmuteBtn(){this._toggleDisplayBtn(this.muteBtn,0)}_updateVolumeSlider(){this.sliderInput&&(this.sliderInput.value=this.parent.sm.currentVolume),this.inputVolumeBar&&(this.inputVolumeBar.style.width=100*this.parent.sm.currentVolume+"%"),this.parent.isMuted?this._showMuteBtn():this._showUnmuteBtn()}_createSpinner(){this.spinner=this._createDiv("tealplayer-spinner"),this._spinnerHide(),this.parent.elements.video.parentNode.appendChild(this.spinner)}_spinnerHide(){this.spinner.classList.add("tealplayer-spinner-hidden")}_spinnerShow(){this.spinner.classList.remove("tealplayer-spinner-hidden")}_hideEl(e){e&&e.classList.add("tealplayer-vis-hidden")}_showEl(e){e&&e.classList.remove("tealplayer-vis-hidden")}_createSkip(){if(!this.parent.ima)return;this.skip=this._createDiv("tealplayer-ad-skip");let e=this._createDiv("tealplayer-ad-skip-text");return e.textContent="SKIP",this.skip.appendChild(e),Teal.Utils._registerEvents(this,[{event:"click",handler:this._skip}],this.skip),this._skipHide(),this.skip}_skip(){this.parent.skip()}_skipHide(){this.skip&&this.skip.classList.add("tealplayer-vis-hidden")}_skipShow(){this.skip&&this.skip.classList.remove("tealplayer-vis-hidden")}}window.Teal.Controls=Controls;