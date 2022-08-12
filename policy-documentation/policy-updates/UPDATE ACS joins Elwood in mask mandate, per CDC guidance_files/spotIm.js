var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t){for(var o=0,i=t.length,n=e.length;o<i;o++,n++)e[n]=t[o];return e};!function(){var e="navigate",t="scroll-lock",o="scroll-release",i="spotim_error",n="spotim_event",s="sso_api_ready",a="sso_code_a",r="sso_login_error",c="sso_login_success",d="storage_update",p="spot-im-share-type",m="spot-im-conversation-failed",l="ow-error-event",u="spot-im-launcher-failed",h="ow-performance-event",g="spot-im-recirculation-item-clicked",f="spot-im-recirculation-viewed",v="spot-im-recirculation-left-clicked",w="spot-im-recirculation-right-clicked",I="spot-im-show-more-replies-clicked",_="spot-im-show-more-comments-clicked",S="spot-im-sort-by-select",C="spot-im-clicked-like-thumbs-down",O="spot-im-clicked-like-thumbs-up",y="spot-im-clicked-settings",E="spot-im-login-start",b="spot-im-clicked-mute-user",k="spot-im-user-clicked-reply",A="spot-im-clicked-privacy",T="spot-im-clicked-flag",N="spot-im-current-user-sent-message",P="logout",J="startSafeframeSso",M="completeSSOCallback",R="modal",x="deeplink",D="conversation",L="pitc",j=function(){function j(e){var t,o,i;if(this.CONVERSATIONS_POSITION_NAME="OpenWebWidget",this.PITC_POSITION_NAME="OpenWebPitcWidget",this.CONVERSATIONS_NODE_ID="spotIm-conversations-module-wrapper",this.PITC_ROOT_NODE_ID="spotIm-pitc-module-root-wrapper",this.UPDATE_STORAGE_THROTTLE_MS=500,this.SPOT_IM_QUERY_PREFIXES=["openweb_","ow_","spot_im","spot_reset_password","spot_ticket","spotim_","tenant_config"],this.NAVIGATE_ALLOWED_LIST=["https://www.yahoo.com","https://api-2-0.spot.im","mailto:"],this.isDebug=!1,this.isStaging=!1,this.devJACVersion="",this.modalJacPositionsMap={},e){this.spotImConfiguration=e,void 0===this.spotImConfiguration.conversationEnabled&&(this.spotImConfiguration.conversationEnabled=!0),this.pageContext=__assign(__assign({},null===(t=window.YAHOO)||void 0===t?void 0:t.context),null===(i=null===(o=window.vzm)||void 0===o?void 0:o.getPageContext)||void 0===i?void 0:i.call(o));try{this.isDebug="1"===localStorage.getItem("SPOTIM_JAC_DEBUG");var n=/[?&]ref=spot-im-pitc-jac-stage(&.*)?$/gi.test(document.location.search),s="1"===localStorage.getItem("SPOTIM_JAC_STAGE");(n||s)&&(this.isStaging=!0);var a=localStorage.getItem("SPOTIM_JAC_VERSION")||"";a&&/^(\d+)\.(\d+)\.(\d+)$/.test(a)&&(this.devJACVersion=a)}catch(e){}this.updateStorageThrottled=window.wafer.utils.throttle(this.updateStorage,this.UPDATE_STORAGE_THROTTLE_MS,this);try{this.initialize()}catch(e){console.error(e),this.sendBeacon("spotIm-init-error",{message:e.message})}}else console.error("SpotImJAC: invalid configuration")}return j.prototype.getIsOpenWebParam=function(){var e=this;return window.location.search.slice(1).split("&").some((function(t){return e.SPOT_IM_QUERY_PREFIXES.some((function(e){return 0===t.split("=")[0].indexOf(e)}))}))},j.prototype.injectJAC=function(){var e=this,t=this.spotImConfiguration.jacUrl;return new Promise((function(o,i){var n=document.createElement("script");n.async=!0,n.src=t,e.devJACVersion&&(n.src="https://jac.yahoosandbox.com/"+e.devJACVersion+"/jac.js"),n.onerror=function(t){console.error(t),e.sendBeacon("spotIm-jac-inject-fail",{message:t}),i(t)};window.JAC_CONFIG={client:{positions:{},onReady:function(){o(),window.JAC.on("AD_MESSAGE",(function(t){var o=t.meta;try{var i=o.message,n=void 0===i?"":i,s=o.positionName,a=JSON.parse(n),r=a.type,c=a.messages,d=void 0===c?[]:c;if("spotim"!==String(r).toLowerCase())return;d.forEach((function(t){return e.onMessageFromJAC(s,t)}))}catch(t){console.error(t),e.sendBeacon("spotIm-on-ad-message-fail")}}))}}},document.body.appendChild(n)}))},j.prototype.initialize=function(){var e=this,t=this.spotImConfiguration,o=t.useCase,i=t.device,n=void 0===i?"":i,s=this.pageContext.device,a="smartphone"===(void 0===s?n:s);switch(o){case x:this.injectJAC().then((function(){a?e.initForDeeplinkMobile():e.initForDeeplink()}));break;case R:this.initForModal();break;default:throw new Error("Unknown useCase '"+o+"' given")}},j.prototype.initForDeeplink=function(){var e=this.spotImConfiguration,t=e.conversationEnabled;if(e.pitcEnabled||t){t&&this.scrollToCommentsIfNeeded();var o=t?D:L,i=document.getElementById(this.CONVERSATIONS_NODE_ID),n=this.getJACPositionConfig({spotImConfig:this.spotImConfiguration,spotImType:o,targetElement:i,useCase:x});window.JAC.createPosition(this.CONVERSATIONS_POSITION_NAME,{client:n,service:{}}),window.JAC.render([this.CONVERSATIONS_POSITION_NAME])}},j.prototype.initForDeeplinkMobile=function(){var e=this.spotImConfiguration,t=e.conversationEnabled,o=e.pitcEnabled;if(t&&(this.openMobileModalIfNeeded(),this.initForLightbox()),o){var i=document.getElementById(this.PITC_ROOT_NODE_ID),n=this.getJACPositionConfig({spotImConfig:this.spotImConfiguration,spotImType:L,targetElement:i,useCase:x});window.JAC.createPosition(this.PITC_POSITION_NAME,{client:n,service:{}}),window.JAC.render([this.PITC_POSITION_NAME])}},j.prototype.initForModal=function(){var e=this,t=this.spotImConfiguration,o=t.conversationEnabled,i=t.showSuspendedCommentsMessage,n=this.injectJAC(),s=function(){for(var t=Object.keys(e.modalJacPositionsMap);t.length;){var o=t.pop();window.JAC.destroyPosition(o)}e.modalJacPositionsMap={}};window.addEventListener("initSpotImComments",(function(t){var s=t.detail,a=s.elem,r=s.config,c=s.isMain;if(o&&n.then((function(){return e.initCommentsInModal(a,r,c)})),i){var d=document.getElementById("suspended-commenting-message-template");d&&(a.innerText=d.content.textContent,a.className=d.className)}})),window.addEventListener("initSpotImPitc",(function(t){var o=t.detail,i=o.elem,s=o.config;n.then((function(){return e.initPitcInModal(i,s)}))})),window.addEventListener("viewerContentChanged",s),window.addEventListener("viewerClosed",s)},j.prototype.initForLightbox=function(){var e=this;window.wafer.on("lightbox:open",(function(){if(document.getElementById(e.CONVERSATIONS_NODE_ID)){var t=document.getElementById(e.CONVERSATIONS_NODE_ID),o=e.getJACPositionConfig({spotImConfig:e.spotImConfiguration,spotImType:D,targetElement:t,useCase:x});window.JAC.createPosition(e.CONVERSATIONS_POSITION_NAME,{client:o,service:{}}),window.JAC.render([e.CONVERSATIONS_POSITION_NAME])}})),window.wafer.on("lightbox:close",(function(){document.getElementById(e.CONVERSATIONS_NODE_ID)&&window.JAC.destroyPosition(e.CONVERSATIONS_POSITION_NAME)}));var t=document.getElementById("view-comments-wrapper"),o=document.getElementById("spot-im-wafer-lightbox");t&&o&&t.addEventListener("click",(function(){o.click()}))},j.prototype.initCommentsInModal=function(e,t,o){var i=o?this.CONVERSATIONS_POSITION_NAME:this.CONVERSATIONS_POSITION_NAME+"-"+t.uuid,n=this.getJACPositionConfig({spotImConfig:t,spotImType:D,targetElement:e,useCase:R});window.JAC.createPosition(i,{client:n,service:{}}),window.JAC.render([i]),this.modalJacPositionsMap[i]=t},j.prototype.initPitcInModal=function(e,t){var o=this.PITC_POSITION_NAME,i=this.getJACPositionConfig({spotImConfig:t,spotImType:L,targetElement:e,useCase:R});window.JAC.createPosition(o,{client:i,service:{}}),window.JAC.render([o]),this.modalJacPositionsMap[o]=t},j.prototype.getJACPositionConfig=function(e){var t,o,i,n,s=this,a=e.spotImConfig,r=e.targetElement,c=e.spotImType,d=e.useCase;if(["spotImConfig","targetElement","spotImType","useCase"].forEach((function(t){if(!e[t])throw new Error("getJACPositionConfig: param '"+t+"' is missed")})),!r.id)throw new Error("getJACPositionConfig: targetElement doesn't have required DOM id attribute");var p=a.device,m=void 0===p?"":p,l=(a.jacUrl,a.launcherUrl),u=a.messages_cnt,h=a.passiveReactionEnabled,g=a.pitcAdEnabled,f=a.pitcEnabled,v=a.stageSpotId,w=a.url,I=a.uuid,_=(a.xhrPathPrefix,a.spotId);this.isStaging&&v&&(_=v);var S,C=l+_,O=this.pageContext,y=O.device,E=void 0===y?m:y,b=O.contentSite,k=void 0===b?"":b,A=O.site,T=void 0===A?"":A,N=O.lang,P=void 0===N?"":N,J=O.meta,M=void 0===J?{}:J,R=M.contentType,j=void 0===R?"story":R,B=M.siteAttribute,V=void 0===B?"":B,F="smartphone"===E,U=d===x&&F,W=F&&c===D?window.innerWidth:r.offsetWidth,G=F?window.innerHeight-57:330,q=(null===(t=document.querySelector("#Masterwrap .caas-share-section, #content-articles-wrapper .caas-share-section"))||void 0===t?void 0:t.clientWidth)||0,H=(null===(o=document.querySelector(".caas-content-wrapper"))||void 0===o?void 0:o.clientWidth)||0,Y=w+"?ref="+(f?"spot-im-pitc-jac":"spot-im-jac"),z=__spreadArray([],/rs="lmsid:([\w]+);?/gi.exec(V)||[])[1],Q=void 0===z?"yahoo":z,X="";try{X=localStorage.getItem("OW_STORAGE")||""}catch(e){console.error("SpotIm(JAC) OW_STORAGE LS read error: ",e),this.sendBeacon("spotIm-ow-storage-LS-read-error")}var $=window.location.search.slice(1).split("&").filter((function(e){return s.SPOT_IM_QUERY_PREFIXES.some((function(t){var o=e.split("="),i=o[0],n=o[1];return"ref"===i&&0===(void 0===n?"":n).indexOf("spot-im")||0===i.indexOf(t)}))})).join("&"),K=window.location.href.split("?")[0]+($?"?"+$:""),Z=null===(n=null===(i=window.YAHOO)||void 0===i?void 0:i.subscriptions)||void 0===n?void 0:n.adLite,ee=g&&!window.dpDarlaProxyExclusive&&!Z,te="fp"===T?k:T,oe=h?"data-labels-section="+te:"",ie="news"===te||"fp"===te?'data-categories="news, sports, entertainment, finance, lifestyle, money"':"data-categories="+te;switch(c){case D:S="\n                        "+(ee?"":'<meta name="spotim-ads" content="disable-all" />')+"\n                        <style>\n                            #fc_align {\n                                width: 100%;\n                                "+(F?"overflow-y: auto; height: 100%;":"")+"\n                            }\n                            #spotIm-in-jac-conversations.deeplink-desktop {\n                                width: calc(85% - 300px);\n                                margin-left: "+q+"px;\n                            }\n                            #spotIm-in-jac-conversations.deeplink-desktop.news-en-US {\n                                width: 85%;\n                                position: relative;\n                                left: 9%;\n                                margin-left: "+q+"px;\n                            }\n                            #spotIm-in-jac-conversations.deeplink-smartphone {\n                                width: calc(100% - 20px);\n                                margin: 0 auto;\n                            }\n                            #spotIm-in-jac-conversations.modal-desktop {\n                                width: "+H+"px;\n                                margin-left: "+q+'px;\n                                padding-right: 10%;\n                            }\n                        </style>\n                        <div id="spotIm-in-jac-conversations" class="'+d+"-"+E+" "+te+"-"+P+'">\n                            <script\n                                async\n                                type="text/javascript"\n                                src="'+C+'"\n                                data-safeframe-height="'+G+'"\n                                data-safeframe-width="'+W+'"\n                                data-spotim-module="spotim-launcher"\n                                data-spot-id="'+_+'"\n                                data-post-id="'+I+'"\n                                data-post-url="'+Y+'"\n                                data-article-tags="'+te+'"\n                                data-is-full-screen="'+F+'"\n                                data-messages-count="'+u+'"\n                                data-custom-partner-id="'+Q+'"\n                                data-custom-page-type="'+j+'"\n                                data-custom-product-id="yahoo_'+te+'"\n                                '+oe+"\n                            >\n                            <\/script>\n                        </div>\n                        "+(f&&!U?'<div data-spotim-module="pitc" '+ie+"></div>":"")+"\n                    ";break;case L:S="\n                        "+(ee?"":'<meta name="spotim-ads" content="disable-all" />')+'\n                        <style>\n                            #fc_align {\n                                width: 100%;\n                            }\n                        </style>\n                        <div>\n                            <script\n                                async\n                                type="text/javascript"\n                                src="'+C+'"\n                                data-post-id="'+I+'"\n                                data-safeframe-height="'+G+'"\n                                data-safeframe-width="'+W+'"\n                                data-spotim-module="spotim-launcher"\n                                data-custom-partner-id="'+Q+'"\n                                data-custom-page-type="'+j+'"\n                                data-custom-product-id="yahoo_'+te+'"\n                                data-article-tags="'+te+'"\n                                data-spotim-autorun="false"\n                            >\n                            <\/script>\n                            <div data-spotim-module="pitc"  '+ie+"></div>\n                        </div>\n                    ";break;default:throw new Error("Unexpected spotImType: "+c)}return{safeFrame:{enabled:!0,features:{resize:{enabled:!0}}},meta:{OpenWeb:{hostUrl:K,localStorage:X}},content:{markup:S,size:{width:W,height:G}},targetElement:r.id}},j.prototype.onMessageFromJAC=function(p,m){var l=m.action,u=m.args;this.debugLog("onMessageFromJAC",{action:l,args:u,positionName:p});var h=p===this.CONVERSATIONS_POSITION_NAME,g=this.modalJacPositionsMap[p]||this.spotImConfiguration;if(h)switch(l){case s:this.onSSOReady();break;case a:this.startSSOFlow(u.code_a,g);break;case r:this.sendBeacon("spotIm-sso-fail");break;case c:this.sendBeacon("spotIm-sso-success")}switch(l){case n:var f=u.params,v=u.type;this.onSpotImEvent(v,f,g);break;case d:var w=u.storage;this.updateStorageThrottled(w);break;case e:var I=u.url;this.openLinkFromSpotIm(I);break;case i:var _=u.type,S=u.error;this.sendBeacon("spotIm-inner-error",{type:_,error:S});break;case t:window.document.body.classList.add("ow-modal-opened");break;case o:window.document.body.classList.remove("ow-modal-opened")}},j.prototype.onSpotImEvent=function(e,t,o){var i=this;this.debugLog("onSpotImEvent",{eventName:e,params:t});var n=function(e){i.sendRapid(e,o)};switch(e){case E:this.goToAuth();break;case b:n({slk:"mute",elm:"cmmt_mute",outcm:"close"});break;case p:var s=t.type;n({slk:void 0===s?"":s,elm:"cmmt_share",outcm:"open"});break;case S:var a=t.sortedBy;n({slk:void 0===a?"":a,elm:"cmmt_sort_btn",outcm:"sort"});break;case N:n({slk:"post",elm:"cmmt_post",outcm:"post"});break;case k:n({slk:"reply",elm:"cmmt_reply"});break;case I:n({slk:"open reply",elm:"cmmt_more",elmt:"showreply",outcm:"show",sec:"cmmts"});break;case T:n({slk:"abuse",elm:"cmmt_abuse",outcm:"open"});break;case A:n({slk:"privacy",elm:"cmmt_username",sec:"cmmt_his"});break;case y:n({slk:"your settings",elm:"cmmt_username",sec:"cmmt_his"});break;case O:n({slk:"vote thumb_up",elm:"cmmt_vote",outcm:"rate"});break;case C:n({slk:"vote thumb_down",elm:"cmmt_vote",outcm:"rate"});break;case _:this.updateUser(o),n({slk:"load more",elm:"cmmt_more",outcm:"more"});break;case g:var r=t.title,c=void 0===r?"":r,d=t.url,P=new URL(void 0===d?"https://www.yahoo.com":d);n({sec:"pitc",slk:c,tar:P.origin,tar_uri:P.pathname,elm:"hdln",outcm:"clicked",itc:0});break;case f:n({sec:"pitc",slk:"deeplink",elm:"hdln",outcm:"",itc:0,eventType:"view"});break;case v:n({sec:"pitc",slk:"prev",elm:"arrow",noContent:!0,outcm:"clicked"});break;case w:n({sec:"pitc",slk:"next",elm:"arrow",noContent:!0,outcm:"clicked"});break;case m:case u:this.sendBeacon("spotIm-inner-fail:"+e);break;case h:this.reportPerformance(t);break;case l:this.reportError(t)}},j.prototype.goToAuth=function(){var e=this.pageContext.lang,t=void 0===e?"en-US":e,o=window.location.href+(window.location.search?"&":"?")+"a20_comeback_from_auth=1",i="https://login.yahoo.com/?.lang="+t+"&.done="+encodeURIComponent(o);window.location.href=i},j.prototype.onSSOReady=function(){var e=this.pageContext,t=e.authed,o=void 0===t?"0":t,i=e.guid;"1"===o?this.sendMessageToJAC({action:J,args:{userId:i}}):this.sendMessageToJAC({action:P})},j.prototype.sendMessageToJAC=function(e){var t=Math.random().toString(36).substring(2,15)+Date.now();this.debugLog("sendMessageToJAC",e),window.JAC.updateMeta([this.CONVERSATIONS_POSITION_NAME],"openWeb",JSON.stringify(__assign({type:"SPOTIM",id:t},e)))},j.prototype.startSSOFlow=function(e,t){var o=this;this.debugLog("startSSOFlow",{codeA:e});var i=t.xhrPathPrefix,n=t.useStageToken,s=void 0!==n&&n;fetch(i+"?m_id=spotIm&ctrl=SpotImSSO&m_mode=json",{body:JSON.stringify({m_id:"spotIm",ctrl:"SpotImSSO",m_mode:"json",code_a:e,useStageToken:Boolean(s||this.isStaging)}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){if(200!==e.status)throw new Error("Request error");return e.json()})).then((function(e){var t=e.html;if(!t)throw new Error("SpotIm: codeB getting error");o.sendMessageToJAC({action:M,args:t})})).catch((function(e){o.sendBeacon("spotIm-sso-fail")}))},j.prototype.updateStorage=function(e){try{localStorage.setItem("OW_STORAGE",JSON.stringify(e))}catch(e){this.sendBeacon("spotIm-storage-update-fail")}},j.prototype.openLinkFromSpotIm=function(e){void 0===e&&(e=""),this.NAVIGATE_ALLOWED_LIST.some((function(t){return 0===e.indexOf(t)}))&&(window.location.href=e)},j.prototype.sendBeacon=function(e,t){var o,i,n,s,a;void 0===t&&(t={});var r=this.pageContext,c=["browserName","device","lang","region","rid","site"].reduce((function(e,t){return e+"&"+t+"="+(r[t]||"")}),""),d=Object.keys(t).reduce((function(e,o){return e+"&"+o+"="+t[o]}),""),p=(null===(i=null===(o=window.YAHOO)||void 0===o?void 0:o.errBeaconConfig)||void 0===i?void 0:i.beaconPath)||"_td_api/beacon/error";null===(a=null===(s=null===(n=window.wafer)||void 0===n?void 0:n.utils)||void 0===s?void 0:s.fireBeacon)||void 0===a||a.call(s,"/"+p+"?beaconName="+e+d+c)},j.prototype.sendRapid=function(e,t){var o=e.elm,i=void 0===o?"":o,n=e.elmt,s=void 0===n?"":n,a=e.eventType,r=void 0===a?"click":a,c=e.itc,d=void 0===c?1:c,p=e.noContent,m=void 0!==p&&p,l=e.outcm,u=void 0===l?"":l,h=e.pos,g=void 0===h?0:h,f=e.sec,v=void 0===f?"cmmts":f,w=e.slk,I=void 0===w?"":w,_=e.subsec,S=void 0===_?"openweb":_,C=e.tar,O=void 0===C?"":C,y=e.tar_uri,E=void 0===y?"":y,b=t.uuid;if(window.rapidInstance){var k={elm:i,elmt:s,g:"",itc:d,outcm:u,subsec:S,tar:O,tar_uri:E};k.g=m?"":b,"view"===r?window.rapidInstance.beaconLinkViews([{sec:v,_links:[{slk:I,elm:i,itc:d}]}]):"click"===r&&window.rapidInstance.beaconClick(v,I,g,k)}},j.prototype.scrollToCommentsIfNeeded=function(){var e=document.getElementById(this.CONVERSATIONS_NODE_ID);if(e){var t=this.getIsOpenWebParam(),o=function(){var t=function(){return e.scrollIntoView({behavior:"smooth",block:"center"})};t(),setTimeout(t,1e3)};t&&o();var i=document.querySelector(".caas-share-buttons .caas-comment");i&&i.addEventListener("click",(function(){o()}))}},j.prototype.openMobileModalIfNeeded=function(){var e=document.getElementById("spot-im-wafer-lightbox");if(e){var t=this.getIsOpenWebParam(),o=/(\?|&)a20_comeback_from_auth=1/gi.test(window.location.search);(t||o)&&e.click()}},j.prototype.updateUser=function(e){var t=this,o=this.pageContext,i=o.authed,n=void 0===i?"0":i;o.guid;if("1"===n){this.debugLog("updateUser",e);var s=e.xhrPathPrefix,a=e.useStageToken,r=void 0!==a&&a;fetch(s+"?m_id=spotIm&ctrl=SpotImSSO&m_mode=json",{body:JSON.stringify({action:"update",m_id:"spotIm",ctrl:"SpotImSSO",m_mode:"json",useStageToken:Boolean(r||this.isStaging)}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){if(200!==e.status)throw new Error("Request error")})).catch((function(e){t.debugLog("SpotIm updateUser fetch error",{error:e}),t.sendBeacon("spotIm-update-user-failure")}))}},j.prototype.debugLog=function(e,t){this.isDebug&&console.warn("[SpotIm-JAC-Debug]: ",e,t)},j.prototype.reportPerformance=function(e){var t=e.source,o=e.time,i=e.type;this.sendBeacon("spotIm-perf",{source:t,time:o,type:i})},j.prototype.reportError=function(e){var t=e.source,o=e.type;this.sendBeacon("spotIm-ow-error",{source:t,type:o})},j}();"undefined"!=typeof process&&(window.__SpotImJAC=j),window.wafer&&window.wafer.ready((function(){var e=document.getElementById("spotim-config"),t=window.wafer.base.state.spotIm||e&&window.wafer.utils.getConfigFromJSONScriptNode(e).config;new j(t)}),window)}();