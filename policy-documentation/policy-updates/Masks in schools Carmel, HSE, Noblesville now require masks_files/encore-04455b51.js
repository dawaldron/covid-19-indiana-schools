window.Teal=window.Teal||{};class Encore{constructor(t){this.parent=t,this.q=t.upNext||[],this.sponsorLockedTags=[]}async processQueue(){const t=this.parent.sm.playbackIndex;if(this.q.length>t){if("object"!=typeof this.q[t]){let e=await this._fetchData(this.q[t]);this.q[t]=e}return}if(this.parent.settings.continuousPlay.finitePlaylist)return;const e=await this._fetchData();this.q=this.q.concat(e)}getNext(){return this.q[this.parent.sm.playbackIndex]}hasNext(){return!!this.q[this.parent.sm.playbackIndex]}addVideo(t){this._isValid(t)&&this.q.push(t)}setNextPlaylist(t=[]){t.filter(t=>this._isValid(t)),this.q=this.q.concat(t)}_isValid(t){return["string","object","number"].indexOf(typeof t)>-1}async _fetchData(t){try{let e;if(t){e=await fetch(this._buildAssetByIdURL(t));let s=await e.json();return s.errors?{}:s.data&&s.data.asset}return e=await fetch(this._buildEncoreURL()),(await e.json()).map(t=>t.asset?t.asset:t)}catch(t){}}_buildEncoreURL(){if(this.parent.settings.continuousPlay.encoreURL)return this.parent.settings.continuousPlay.encoreURL;let t=this.parent.pageData,e=`sections=${t.section}&subsections=${t.subsection}&topics=${t.topic}&subtopics=${t.subtopic}`,s=`site-code=${this.parent.pageData.siteCode}&size=${this.parent.settings.continuousPlay.countToRetrieve}&notIds=${this._getNotIds()}&types=video&backfill=${this.parent.settings.continuousPlay.backfill}&noOlderThan=${this.parent.settings.continuousPlay.noOlderThan}&sortByPageViews=true&maxVideoLength=${this.parent.settings.continuousPlay.maxVideoLength}`,i=`apiKey=${this.parent.settings.continuousPlay.encoreKey}`;return this._setLockoffTags(),this._isSponsorLocked&&(s=`${s}&tagIds=${this.sponsorLockedTags}&excludedAssets=${this._getNotIds()}`),`https://api.gannett-cdn.com/argon/encore/?${e}&${s}&${i}`}_getNotIds(){return Teal.History.join(",")}_setLockoffTags(){if(0!==this.parent.data.tags.length)return this._isSponsorLocked?this.sponsorLockedTags:void(this.sponsorLockedTags=this.parent.data.tags.filter(t=>t.name&&t.name.toLowerCase().indexOf("sponsoredlockoff")>-1).map(t=>t.id).join(","))}get _isSponsorLocked(){return this.sponsorLockedTags.length>0}_buildAssetByIdURL(t){return this.parent.settings.continuousPlay.assetURL?this.parent.settings.continuousPlay.assetURL:`https://api.gannett-cdn.com/argon/video/${t}?apiKey=${this.parent.settings.continuousPlay.assetKey}&site-code=${this.parent.pageData.siteCode}&url=${location.href}`}showUpNext(){let t=this.getNext();t&&this._createUpNextCard(t.videoStill,t.title)}_createUpNextCard(t,e){let s=document.createDocumentFragment(),i=document.createElementNS("http://www.w3.org/2000/svg","svg");this.upNextCard=document.createElement("div"),i.setAttribute("width",12),i.setAttribute("height",12),i.setAttribute("viewBox","0 0 12 12"),i.classList.add("up-next-close"),i.innerHTML='<path fill="#FFF" fill-rule="evenodd" d="M7 .2l1 1-3.001 2.999L8 7.2l-1 1-3.001-3.001L1 8.2l-1-1 3-3.001L0 1.2l1-1 2.999 3L7 .2z"/>',i.addEventListener("click",t=>{t.stopImmediatePropagation(),this.parent.sm.notifyEvent(this.parent.sm.EVENTS.upNextClosed),this.closeUpNext()});let n="height=70&format=pjpg&quality=30&auto=webp";t=t.indexOf("?")>-1?`${t}&${n}`:`${t}?${n}`,this.upNextCard.innerHTML=`\n            <img class="up-next-thumbnail" src="${t}">\n            <div class="up-next-content"><span class="up-next-header">NEXT VIDEO</span><div class="up-next-title">${e}</div></div>\n        `,this.upNextCard.classList.add("up-next-card-container"),this.upNextCard.prepend(i),this.upNextCard.addEventListener("click",()=>{this.parent.sm.notifyEvent(this.parent.sm.EVENTS.upNextClicked),this.parent._onEnded()}),s.appendChild(this.upNextCard),this.parent.elements.video.parentNode.insertBefore(s,this.parent.elements.video)}closeUpNext(){this.upNextCard&&(this.upNextCard.parentElement.removeChild(this.upNextCard),this.upNextCard=null)}_supportsUpNextCard(){let t=this.parent.settings.continuousPlay;return t.upNextCardEnabled&&this.parent.capiDuration>=t.upNextCardRequiredLength}}window.Teal.Encore=Encore;