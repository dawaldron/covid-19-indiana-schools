(window.webpackJsonp=window.webpackJsonp||[]).push([[165,155],{ACNv:function(e,t,n){"use strict";n.r(t);var o=n("KEM+"),i=n.n(o),a=(n("kYxP"),n("ERkP")),c=n("3XMw"),s=n.n(c),r=n("oQhu"),l=n("mjJ+"),d=n("eb3s");const m=s.a.cfd2f35d;class h extends a.Component{constructor(...e){super(...e),i()(this,"state",{activeConfirmation:null}),i()(this,"_handleConfirm",(e=>{this.setState({activeConfirmation:e})})),i()(this,"_handleConfirmed",(()=>{this.state.activeConfirmation&&this.state.activeConfirmation.callback(),this.setState({activeConfirmation:null}),this.props.onClose()})),i()(this,"_handleCancelConfirm",(()=>{this.setState({activeConfirmation:null})}))}render(){const{onClose:e}=this.props,{activeConfirmation:t}=this.state;return t?this._renderConfirmation(t):a.createElement(l.a,{cancelButtonLabel:m,items:this._getProcessedActionItems(),onCloseRequested:e})}_renderConfirmation(e){if(e&&e.render)return e.render(this._handleConfirmed,this._handleCancelConfirm);{const{headline:t,label:n,confirmButtonType:o,text:i,withCancelButton:c}=e||{};return a.createElement(d.a,{confirmButtonLabel:n,confirmButtonType:o,headline:t,onCancel:this._handleCancelConfirm,onConfirm:this._handleConfirmed,text:i,withCancelButton:c})}}_getProcessedActionItems(){const{actionItems:e,dividerIndices:t,onClose:n}=this.props;return u(e,t,n,this._handleConfirm)}}const u=Object(r.a)(((e,t,n,o)=>e.reduce(((e,{clientEventContext:i,disabled:a,text:c,subText:s,testID:r,onClick:l,confirmation:d,isEmphasized:m,link:h,Icon:u,excludeFromActionMenu:p,withCancelButton:b},v)=>{if(!p){const p=l?()=>{d?d.render?o({callback:l,render:d.render}):o({callback:l,text:d.text,headline:d.headline,label:d.label,confirmButtonType:d.confirmButtonType,withCancelButton:d.withCancelButton}):(l(),n())}:n;e.push({clientEventContext:i,disabled:a,Icon:u,isEmphasized:m,testID:r,subText:s,text:c,onClick:p,link:h,withBottomBorder:t&&t.includes(v)})}return e}),[])));t.default=h},MzK7:function(e,t,n){"use strict";n.r(t),n.d(t,"CONVERSATION_CONTROLS_ANALYTICS",(function(){return Ot})),n.d(t,"TweetCurationActionMenu",(function(){return zt}));var o=n("KEM+"),i=n.n(o),a=(n("kYxP"),n("ERkP")),c=n("d4kb"),s=n("3XMw"),r=n.n(s),l=n("SNyS");const d=r.a.fb4ee11c;var m=n("xrkw");const h=r.a.g1fa869c;var u=n("2qZs");const p=r.a.h3ab37c7;var b=(e,{scribeAction:t,tweetId:n})=>({text:e.isTrue("responsive_web_birdwatch_hcomp_user")?"Write a note [research]":p,onClick:()=>{t({element:"contribute_to_birdwatch"})},link:{pathname:`/i/birdwatch/contribute/${n}`},Icon:u.a}),v=n("EbOo"),w=n("xZGM"),_=n("dFWS");const f=r.a.bae0cbcf,y=r.a.f8393bda;const C={defaultToast:{text:r.a.ae0c5fbe},showToast:!0};var E=n("j7tW"),T=n("1YZw"),g=n("rxPX"),k=n("0KEI"),x=n("0pUJ"),I=n("XOJV"),A=n("G6rE"),S=n("ymux"),M=n("RqPI");const R=(e,t)=>Object(w.m)(e,w.g),L=(e,t)=>Object(w.m)(e,w.f),O=e=>Object(w.m)(e,w.c),z=e=>(t,n,{featureSwitches:o})=>Promise.all([t(I.a.delete(e)),t(Object(S.a)({focalTweetId:e,featureSwitches:o}).deleteTimeline())]);var H=Object(g.a)().propsFromState((()=>({userCountry:M.t,userLanguage:M.l,shouldShowMuteEducationTip:R,shouldShowHideReplyTip:L,shouldShowConversationControlsTip:O}))).propsFromActions((()=>({addFlag:w.k,addToast:T.b,block:A.e.block,changeConversationControls:I.a.changeConversationControls,createLocalApiErrorHandler:Object(k.d)("TWEET_CURATION_ACTION_SHEET_CONTAINER"),deleteTweet:z,dismissUserFromConversation:S.b,follow:A.e.follow,hideReply:I.a.hideReply,mute:x.a,muteTweet:I.a.mute,ouch:I.a.ouch,pin:E.a,removeConversationControls:I.a.removeConversationControls,removeTag:I.a.removeTag,unblock:A.e.unblock,unfollow:A.e.unfollow,unhideReply:I.a.unhideReply,unmute:A.e.unmute,unmuteTweet:I.a.unmute,unpin:E.c}))).withAnalytics(),D=n("H7Rt"),B=n("v6aA");const j=e=>Object(w.m)(e,w.c);var U=Object(g.a)().propsFromState((()=>({shouldShowConversationControlsTip:j}))).propsFromActions((()=>({addFlag:w.k})));var F=n("MWbm"),N=n("4zmP"),P=n("rHpw");const V=r.a.bae0cbcf,$=P.a.create((e=>({inlineCallout:{position:"absolute",right:e.spaces.space32,marginTop:e.spaces.space2,zIndex:1},textStyle:{whiteSpace:"nowrap"}})));var W=U((({addFlag:e,shouldShowConversationControlsTip:t})=>{const n=a.useRef(),o=function(e){const[t,n]=a.useState(!1),o=new IntersectionObserver((([e])=>n(e.isIntersecting)));return a.useEffect((()=>(o.observe(e.current),()=>{o.disconnect()})),[]),t}(n),i=a.useRef(!1),{featureSwitches:c}=a.useContext(B.a),s=c.isTrue("conversation_controls_change_tooltip_enabled"),r=t&&s;return a.useEffect((()=>{o&&(i.current=!0)}),[o]),a.useEffect((()=>()=>{i.current&&e(w.c)}),[]),a.createElement(F.a,{ref:n,style:$.inlineCallout},o&&r?a.createElement(N.a,{text:V,textStyle:$.textStyle,withPrimaryBackground:!0,withRightArrow:!0}):null)})),K=n("yZqq"),Z=n("hiGS");const q=r.a.d96cf7cd,J=r.a.dd211107,G=r.a.c55d72d0,Y=r.a.a1aa840e,X=r.a.c189f2dd;var Q=n("Lsrn"),ee=n("k/Ka");const te=(e={})=>Object(ee.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[Q.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"})));te.metadata={width:24,height:24};var ne=te;const oe=r.a.e6c84638;var ie=n("pwey"),ae=n("PSpH");const ce=r.a.c66afdc2,se=r.a.hbe4feb4,re=r.a.e1618e48;const le=Object.freeze({all:r.a.baffe39a,community:r.a.af293dc2,by_invitation:r.a.cf7f7e39});var de=e=>{const t=le[e];return a.createElement(r.a.I18NFormatMessage,{$i18n:"f8ea2809",selection:t})},me=n("F3pd"),he=n("VjLy"),ue=n("n5fo"),pe=n("fz3c");const be=r.a.f20b040d;var ve=n("jQy5"),we=n("feu+"),_e=n("NTtI"),fe=n("qz6Z"),ye=n("w02m");const Ce=r.a.e2d6c17e,Ee=r.a.cd1942f4,Te=r.a.bbd8bed6,ge=r.a.c13af432,ke=r.a.gf5e9ea6,xe=r.a.df744bd9,Ie=r.a.j9552760,Ae=r.a.cfd2f35d,Se=r.a.d751694c;var Me=({addFlag:e,addToast:t,clientEventEntityToken:n,createLocalApiErrorHandler:o,muteTweet:i,scribeAction:c,shouldShowMuteEducationTip:s,tweet:r,unmuteTweet:l})=>{const d=()=>{e(w.g)},m=()=>{l(r.id_str).then((()=>{t({text:ge,clientEventEntityToken:n})}),(e=>{o({showToast:!0})(e),c({element:"unmute_conversation_error"})})),c({element:"unmute_conversation"})},h={clientEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!0}},text:Ce,onClick:()=>{i(r.id_str).then((()=>{t({action:{label:ke,onAction:m,clientEventViewType:"unmute_conversation"},clientEventEntityToken:n,text:Te})}),(e=>{o({showToast:!0})(e),c({element:"mute_conversation_error"})})),c({element:"mute_conversation"})},confirmation:s?{render:(e,t)=>a.createElement(we.a,{actionLabel:xe,graphic:_e.a,graphicDisplayMode:"illustration",headline:Ie,onAction:e,onClose:t,onImpression:d,onTertiaryAction:t,subtext:Se,supportUrl:"https://support.twitter.com/articles/20175032",tertiaryActionLabel:Ae})}:void 0,Icon:fe.a},u={clientEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!1}},text:Ee,onClick:m,Icon:ye.a};return r.conversation_muted?u:h},Re=n("bAIc"),Le=n("yrzJ");const Oe=r.a.i42c39a8,ze=r.a.a93c1f3c,He=e=>a.createElement(r.a.I18NFormatMessage,{$i18n:"e602f705"},a.createElement(Le.a,{color:"gray700",screenName:e}));var De=n("ShJ/"),Be="block",je="pin",Ue="unpin",Fe="report";const Ne=r.a.ha35a1d2,Pe=r.a.afac3b9d,Ve=r.a.e2d44ce9,$e=r.a.c5d23126,We=r.a.aaef1b48;const Ke=r.a.f5cdcc2b;var Ze=n("Rp9C"),qe=n("mqpi"),Je=n("4bW+"),Ge=n("u0B7"),Ye=n("SJ11"),Xe=n("tJZD");const Qe=r.a.ja66a2b4,et=r.a.c2423b7a;const tt=(e={})=>Object(ee.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[Q.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z"}),a.createElement("path",{d:"M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z"})));tt.metadata={width:24,height:24};var nt=tt;const ot=r.a.i31dfa4c,it=r.a.j8e56ba1;const at=r.a.ic030337,ct=r.a.j1b8c867,st=r.a.eb2d59f3,rt=r.a.j44ec61f,lt=r.a.i0086d6b;var dt=n("5cUs");const mt=r.a.f9478972;var ht=n("TnY3"),ut=n("4hQ9"),pt=n("ACNv"),bt=n("24HD"),vt=n("zIWA"),wt=n("6s7X");const _t=r.a.f1824804,ft=r.a.ff9bd692,yt=r.a.e3fd237d,Ct=r.a.d1e2161f,Et=({analytics:e,history:t,isAppealTweetWarning:n=!1,promotedContent:o,scribeAction:i,tweet:a})=>{let c={element:"report_tweet"},s="/i/report/status",r=vt.a,l=o?yt:ft;n&&(c={element:"appeal_tweet_warning"},s="/i/report/appeal_tweet_warning",r=wt.a,l=_t);return{clientEventContext:{viewType:"report"},Icon:r,onClick:()=>{var n,r,l;const d=e.contextualScribeData,m=((null==a||null==(n=a.extended_entities)||null==(r=n.media)?void 0:r.length)||0)>0,h=d.items&&d.items[0]&&(null==(l=d.items[0].conversation_details)?void 0:l.conversation_section);i(c),t.push({pathname:`${s}/${a.id_str}`,state:{clientReferer:window.location.pathname,conversationSection:h,isMedia:m,promotedContent:o,scribeNamespace:e.contextualScribeNamespace}})},testID:Fe,text:l}};var Tt=n("IG7M");const gt=(e={})=>Object(ee.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[Q.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M2.03 23.75c-.19 0-.383-.073-.53-.22-.292-.293-.292-.768 0-1.06l20-20c.294-.294.77-.294 1.062 0s.293.767 0 1.06l-20 20c-.147.147-.338.22-.53.22zM19.75 22H7.958c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H19.75c.413 0 .75-.337.75-.75V8.07c0-.415.336-.75.75-.75s.75.335.75.75v11.68c0 1.24-1.01 2.25-2.25 2.25zm-17-3.118c-.414 0-.75-.336-.75-.75v-10.8c0-1.24 1.01-2.25 2.25-2.25h2.188C7.633 3.17 9.722 2 12 2c1.896 0 3.7.82 4.945 2.253.272.312.24.786-.073 1.058-.31.273-.785.242-1.058-.072C14.854 4.134 13.464 3.5 12 3.5c-1.883 0-3.598 1.035-4.475 2.702-.16.302-.504.46-.834.38H4.25c-.413 0-.75.338-.75.75v10.8c0 .414-.336.75-.75.75z"}),a.createElement("path",{d:"M7.89 13.777c-.415 0-.75-.336-.75-.75 0-2.68 2.18-4.86 4.86-4.86.414 0 .75.336.75.75s-.336.75-.75.75c-1.854 0-3.36 1.508-3.36 3.36 0 .414-.337.75-.75.75zM12 17.89c-.414 0-.75-.337-.75-.75s.336-.75.75-.75c1.854 0 3.36-1.51 3.36-3.362 0-.414.337-.75.75-.75s.75.336.75.75c0 2.68-2.18 4.86-4.86 4.86z"})));gt.metadata={width:24,height:24};var kt=gt,xt=n("1wVr");const It=r.a.e68b09b4,At=r.a.g9425e3f,St=r.a.jfc76958;const Mt=r.a.e133be4e,Rt=r.a.a9fd20be,Lt=["hideTweet","delete","appealTweetWarning","pinOrUnpin","promotedTweetDismiss","adInfo","removeTag","feedbackOptions","followOrUnfollow","addOrRemoveFromList","muteOrUnmute","muteOrUnmuteConversation","changeConversationControls","blockOrUnblock","hideReply","unhideReply","embed","report","reportNetzDG","ouch","analytics","viewHiddenReplies","birdwatch"],Ot=Object.freeze({all:"change_conversation_control_to_everyone",community:"change_conversation_control_to_community",by_invitation:"change_conversation_control_to_mentioned",followers:"change_conversation_control_to_followers",community_members:"change_conversation_control_to_community_members"});class zt extends a.Component{constructor(...e){super(...e),i()(this,"_dividerIndices",[]),i()(this,"state",{showModerationBlockConfirmation:!1}),i()(this,"_shouldDisable",qe.a.bind(null,this.context.featureSwitches)),i()(this,"_birdwatchAction",b.bind(null,this.context.featureSwitches)),i()(this,"_shouldRenderSectionDividers",this.context.featureSwitches.isTrue("responsive_web_menu_section_divider_enabled")),i()(this,"_authorModeratedReplies",this.context.featureSwitches.isTrue("author_moderated_replies_urt_container_enabled")),i()(this,"_birdwatchContributionEnabled",this.context.featureSwitches.isTrue("responsive_web_birdwatch_contribution_enabled")),i()(this,"_convoSafetyOuchEnabled",this.context.featureSwitches.isTrue("conversational_safety_ouch_enabled")),i()(this,"_convoControlsEnabled",this.context.featureSwitches.isTrue("conversation_controls_change_enabled")),i()(this,"_c9sModerationEnabled",this.context.featureSwitches.isTrue("c9s_moderation_enabled")),i()(this,"_onMenuClick",(()=>{const{onMenuClick:e,addFlag:t,shouldShowConversationControlsTip:n,withChangeConversationControlsTooltip:o}=this.props;n&&o&&t(w.c),e&&e()})),i()(this,"_handleOnChangeConversationControls",(e=>{const{addToast:t,clientEventEntityToken:n,createLocalApiErrorHandler:o,tweet:i,changeConversationControls:a,removeConversationControls:c,analytics:s}=this.props,r=de(e);var l;e===D.a.all?c&&c(i.id_str).then((()=>{t({text:r,clientEventEntityToken:n}),s.scribe({element:Ot.all,action:"click",data:{items:[Ze.a.getChangeConversationControlsItem(i,e)]}})}),o(C)):a&&a(i.id_str,{policy:e,screenName:null==(l=i.user)?void 0:l.screen_name}).then((()=>{t({text:r,clientEventEntityToken:n}),s.scribe({element:Ot[e],action:"click",data:{items:[Ze.a.getChangeConversationControlsItem(i,e)]}})}),o(C))})),i()(this,"_renderCurationActionMenu",(e=>t=>{const n=this._getActionItems(e);return a.createElement(pt.default,{actionItems:n,dividerIndices:this._shouldRenderSectionDividers?this._dividerIndices:void 0,onClose:t})})),i()(this,"_getMuteOrUnmuteAction",(()=>{const{addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,dismissUserFromConversation:o,mute:i,unmute:a,tweet:c,promotedContent:s}=this.props,{user:r}=c,l={addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:this._scribeAction},d={promotedContent:this.context.featureSwitches.isTrue("responsive_web_add_impression_id_to_mute_engagement_enabled")?s:void 0};return Object(ve.a)({...l,mute:i,unmute:a,user:r,dismissUserFromConversation:o,...d})})),i()(this,"_getActionItems",(e=>{const{deleteTweet:t,follow:n,hideReply:o,muteTweet:i,ouch:a,pin:s,removeTag:r,unmuteTweet:u,unpin:p}=this.props,{addFlag:b,addToast:v,analytics:w,clientEventEntityToken:C,createLocalApiErrorHandler:E,feedbackItems:T,history:g,isPinned:k,onDeleteTweet:x,onTweetDismiss:I,promotedContent:A,shouldShowHideReplyTip:S,shouldShowMuteEducationTip:M,tweet:R,userCountry:L,withHideReply:O,withHideTweet:z,withMuteConversation:H,withUnhideReply:D,withViewHiddenReplies:B,withChangeConversationControls:j}=this.props,{loggedInUserId:U}=this.context,{user:F}=R,N=[],P=A&&"earned"!==Object(me.a)(A),V={},$=[],W=this._scribeAction,K={addToast:v,clientEventEntityToken:C,createLocalApiErrorHandler:E,scribeAction:W},Q=this._c9sModerationEnabled&&R.community_id_str&&z;if(P&&(V.adInfo=(({promotedContent:e})=>{if(!e||!e.impression_id)return;const{impression_id:t}=e;return{clientEventContext:{viewType:"ad_info"},text:d,Icon:l.a,link:{pathname:`/i/about-this-ad/${t}`}}})({promotedContent:A})),F.id_str!==U||this._shouldDisable(R,"view_tweet_activity")||(V.analytics=(({tweet:e,scribeAction:t})=>({text:h,onClick:()=>{t({element:"analytics"})},link:`/${e.user.screen_name}/status/${e.id_str}/analytics`,Icon:m.a}))({tweet:R,scribeAction:W})),F.protected||(V.embed=(({permalink:e,scribeAction:t})=>({clientEventContext:{viewType:"embed"},text:oe,onClick:()=>{const n=`https://publish.twitter.com/?url=https://twitter.com${e}`;window.open(n,"_blank"),t({element:"embed_tweet"})},Icon:ne}))({permalink:R.permalink,scribeAction:W})),B&&R.conversation_id_str===R.id_str&&(V.viewHiddenReplies=(({permalink:e,scribeAction:t})=>({text:mt,link:`${e}/hidden`,onClick:()=>{t({element:"view_moderated_replies"})},Icon:dt.a}))({permalink:R.permalink,scribeAction:W})),((e,t)=>{var n,o,i;const a=(null==(n=t.extended_entities)?void 0:n.media)&&t.extended_entities.media[0]&&(null==(o=t.extended_entities.media[0].features)||null==(i=o.all)?void 0:i.tags);return!!a&&Object(xt.a)(a,(t=>t.user_id===e))})(U,R)&&(V.removeTag=(({createLocalApiErrorHandler:e,loggedInUserId:t,removeTag:n,tweet:o})=>({clientEventContext:{viewType:"remove_tag"},confirmation:{label:It,headline:At},text:St,onClick:()=>{var i,a;const c=null==(i=o.extended_entities)||null==(a=i.media)?void 0:a.map((e=>e.id_str)).join(",");n(o.id_str,{status_id:o.id_str,media_ids:c,tagged_user_ids:t}).catch(e({showToast:!0}))},Icon:kt}))({createLocalApiErrorHandler:E,loggedInUserId:U,removeTag:r,tweet:R})),U)if(F.blocking||(V.addOrRemoveFromList=(({user:e,scribeAction:t})=>Object(c.a)(e,(()=>{t({element:"add_to_list"})})))({user:F,scribeAction:W})),this._birdwatchContributionEnabled&&(V.birdwatch=this._birdwatchAction({scribeAction:W,tweetId:R.id_str})),F.id_str!==U){if(Q){const e=w.contextualScribeNamespace;V.hideTweet=((e,t)=>({text:be,Icon:ue.a,link:{pathname:`/i/report/${pe.a.HideCommunityTweet}/${e}`,state:{scribeNamespace:t}}}))(R.id_str,{...e,element:"hide_tweet"})}I&&P&&(V.promotedTweetDismiss=(({onTweetDismiss:e})=>({text:Ke,onClick:e,Icon:l.a}))({onTweetDismiss:I})),F.blocking||(V.followOrUnfollow=F.following?(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,promotedContent:o,scribeAction:i,unfollow:a,user:c})=>({clientEventContext:{viewType:"follow",viewState:{type:"toggleable",toggledTo:!1}},text:Qe({screenName:c.screen_name}),onClick:()=>{a(c.id_str,{promotedContent:o}).then((n=>{e({clientEventEntityToken:t,text:et({screenName:c.screen_name})})}),n(Xe.a)),i({element:"unfollow"})},Icon:Ye.a}))({...K,unfollow:this.props.unfollow,promotedContent:A,user:F}):(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,follow:o,promotedContent:i,scribeAction:a,user:c})=>({clientEventContext:{viewType:"follow",viewState:{type:"toggleable",toggledTo:!0}},text:ce({screenName:c.screen_name}),onClick:()=>{o(c.id_str,{promotedContent:i}).then((n=>{a({element:"follow"}),n&&n.protected?e({text:se({screenName:c.screen_name}),clientEventEntityToken:t}):e({text:re({screenName:c.screen_name}),clientEventEntityToken:t})}),n({...ae.a,showToast:!0})),a({element:"follow_attempt"})},Icon:ie.a}))({...K,follow:n,promotedContent:A,user:F}),V.muteOrUnmute=this._getMuteOrUnmuteAction()),H&&(V.muteOrUnmuteConversation=Me({...K,addFlag:b,muteTweet:i,shouldShowMuteEducationTip:M,tweet:R,unmuteTweet:u})),O&&!this._authorModeratedReplies&&(V.hideReply=Object(he.b)({...K,addFlag:b,hideReply:o,onBlock:this._handleBlock,onTweetDismiss:I,shouldShowHideReplyTip:S,tweet:R})),D&&(V.unhideReply=(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:o,tweet:i,unhideReply:a})=>({text:ot,onClick:()=>{a(i.id_str,{conversation_id:i.conversation_id_str}).then((n=>{e({ariaOnly:!0,text:it,clientEventEntityToken:t})}),n({showToast:!0})),o({element:"unmoderate_reply"})},Icon:nt}))({...K,tweet:R,unhideReply:this.props.unhideReply}));const e={user:F,source:bt.f.TWEET_CARET,testID:Be,blockAction:this._handleBlock,unblockAction:this._handleUnblock};V.blockOrUnblock=Object(bt.c)(e),F.followed_by&&F.following&&this._convoSafetyOuchEnabled&&(V.ouch=(({addToast:e,authorId:t,authorScreenName:n,clientEventEntityToken:o,createLocalApiErrorHandler:i,ouch:a,scribeAction:c,tweetId:s})=>({clientEventContext:{viewType:"ouch_tweet"},text:Oe,subText:He(n),onClick:()=>{a(s,{authorUserId:t}).then((()=>{e({text:ze,clientEventEntityToken:o})}),i({showToast:!0})),c({element:"ouch_tweet"})},Icon:Re.a}))({...K,authorScreenName:R.user.screen_name,authorId:R.user.id_str,ouch:a,tweetId:R.id_str}))}else k?V.pinOrUnpin=(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,scribeAction:o,tweetId:i,unpin:a})=>({confirmation:{text:st,headline:ct,label:rt},testID:Ue,text:at,onClick:()=>{a(i).then((()=>{e({text:lt,clientEventEntityToken:t})}),n({showToast:!0})),o({element:"unpin"})},Icon:De.a}))({...K,tweetId:R.id_str,unpin:p}):this._shouldDisable(R,"pin_to_profile")||(V.pinOrUnpin=(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,pin:o,scribeAction:i,tweetId:a})=>({confirmation:{text:Ve,headline:Pe,label:$e},testID:je,text:Ne,onClick:()=>{o(a).then((()=>{e({text:We,clientEventEntityToken:t})}),n({showToast:!0})),i({element:"pin"})},Icon:De.a}))({...K,pin:s,tweetId:R.id_str})),this._shouldIncludeTweetAppealOption()&&(V.appealTweetWarning=Et({analytics:w,history:g,isAppealTweetWarning:!0,promotedContent:A,scribeAction:W,tweet:R})),H&&(V.muteOrUnmuteConversation=Me({...K,addFlag:b,muteTweet:i,shouldShowMuteEducationTip:M,tweet:R,unmuteTweet:u})),j&&this._convoControlsEnabled&&(V.changeConversationControls=(({onChangeConversationControls:e,tweet:t})=>{const n=!!t.exclusivity_info;return{disabled:n,onClick:n?void 0:e,subText:n?y:void 0,text:f,Icon:_.a}})({tweet:R,onChangeConversationControls:e})),V.delete=(({addToast:e,clientEventEntityToken:t,createLocalApiErrorHandler:n,deleteTweet:o,onDeleteTweet:i,scribeAction:a,tweet:c})=>({confirmation:{label:q,headline:J,text:G,confirmButtonType:"destructive"},isEmphasized:!0,text:q,onClick:()=>{o(c.id_str).then((()=>{e({text:Y,clientEventEntityToken:t})}),n({defaultToast:{text:X},showToast:!0})),a({element:"delete"}),i&&i(c.id_str)},Icon:Z.a}))({...K,deleteTweet:t,onDeleteTweet:x,tweet:R});const ee=U&&U!==F.id_str;var te;return ee?V.report=Et({analytics:w,history:g,promotedContent:A,scribeAction:W,tweet:R}):!U&&L&&(e=>"DE"===e.toUpperCase())(L)&&(V.report=(({promotedContent:e,scribeAction:t})=>({clientEventContext:{viewType:"report"},Icon:vt.a,link:"https://help.twitter.com/forms",onClick:()=>{t({element:"report_tweet"})},testID:Fe,text:e?yt:ft}))({promotedContent:A,scribeAction:W}),V.reportNetzDG=(te=R.id_str,{Icon:vt.a,link:`https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id=${te}`,text:Ct})),Lt.forEach((e=>{if("feedbackOptions"===e){const e=T?T.filter((e=>!e.excludeFromActionMenu)):[];N.push(...e);ee&&N.length&&$.push(N.length-1)}else if(V[e]){ee&&("embed"===e||"report"===e&&!V.embed)&&$.push(N.length-1),N.push(V[e])}})),this._dividerIndices=$,N})),i()(this,"_handleBlock",(()=>{const{addToast:e,block:t,clientEventEntityToken:n,createLocalApiErrorHandler:o,dismissUserFromConversation:i,promotedContent:a,tweet:c}=this.props;t(c.user.id_str,{promotedContent:a}).then((()=>{i({userId:c.user.id_str,feedbackKeys:["UnfollowEntity"]}),e({action:{label:Mt,onAction:this._handleUnblock,clientEventViewType:"unblock"},text:Rt,clientEventEntityToken:n})}),o(v.a)),this._scribeAction({element:"block"})})),i()(this,"_handleUnblock",(()=>{const{createLocalApiErrorHandler:e,promotedContent:t,tweet:n,unblock:o}=this.props;o(n.user.id_str,{promotedContent:t}).catch(e(Ge.a)),this._scribeAction({element:"unblock"})})),i()(this,"_scribeAction",(({element:e,action:t,additionalData:n})=>{const{promotedContent:o,analytics:i,tweet:a}=this.props,c=i.contextualScribeData;let s=null!=c&&c.items?c:{...c||{},items:[Ze.a.getTweetItem(a,o)]};return n&&(s={...s,...n}),i.scribe({element:e,action:t||"click",data:s})}))}render(){var e;const{isDisabled:t,tweet:n,withChangeConversationControlsTooltip:o}=this.props,i=(null==(e=n.conversation_control)?void 0:e.policy)||D.a.all;return a.createElement(F.a,{style:Ht.overflowMenu},o?a.createElement(W,null):null,a.createElement(K.a,{controlled:!0,isMidConversation:!0,onChange:this._handleOnChangeConversationControls,value:i},(({openPopover:e})=>a.createElement(Tt.a,{isDisabled:t,onClick:this._onMenuClick,renderActionMenu:this._renderCurationActionMenu(e),testID:Je.a.caret}))))}_shouldIncludeTweetAppealOption(){const{forwardPivotDisplayType:e,isNsfwUser:t,tweet:n,userCountry:o,userLanguage:i}=this.props,{loggedInUserId:a,featureSwitches:c}=this.context;return Object(ut.b)({loggedInUserId:a,featureSwitches:c,forwardPivotDisplayType:e,tweet:n,userCountry:o,userLanguage:i})||Object(ut.a)({loggedInUserId:a,featureSwitches:c,isNsfwUser:t,tweet:n,userCountry:o,userLanguage:i})}}i()(zt,"defaultProps",{withRemoveFromBookmarks:!1}),i()(zt,"contextType",B.a);t.default=Object(ht.a)(H(zt));const Ht=P.a.create((e=>({overflowMenu:{display:"flex",flexDirection:"row",alignItems:"center"}})))},NTtI:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const c=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 200 200"},o.createElement("g",null,o.createElement("circle",{cx:"100",cy:"100",fill:"#97E3FF",r:"100"}),o.createElement("path",{d:"M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z",fill:"#005FD1"}),o.createElement("path",{d:"M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z",fill:"#1DA1F2"}),o.createElement("ellipse",{cx:"123.283",cy:"100.225",fill:"#97E3FF",rx:"6.567",ry:"45.075"}),o.createElement("path",{d:"M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z",fill:"#71C9F8"}),o.createElement("path",{d:"M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267",fill:"#005FD1"}),o.createElement("path",{d:"M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z",fill:"#1DA1F2"})));c.metadata={width:200,height:200},t.a=c},SNyS:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const c=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"}),o.createElement("path",{d:"M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"})));c.metadata={width:24,height:24},t.a=c},VjLy:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n("ERkP"),i=n("xZGM"),a=n("3XMw"),c=n.n(a),s=n("feu+"),r=n("eb3s"),l=n("lUZE"),d=n("5cUs");const m=c.a.ge5067bb,h=c.a.ea626ab3,u=c.a.fc716886,p=`${c.a.f2a2a06e}\n\n${c.a.f82c0bbf}`,b=c.a.b2615c6d,v=c.a.i62a03aa,w=c.a.cfd2f35d,_=c.a.a6450e83,f=c.a.hb279a11,y=({onConfirm:e,onCancel:t,onHideReplyImpression:n=(()=>{})})=>o.createElement(s.a,{actionLabel:m,graphic:l.a,headline:u,onAction:e,onClose:t,onImpression:n,onTertiaryAction:t,subtext:p,supportUrl:"https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply",tertiaryActionLabel:w});t.b=({addFlag:e,addToast:t,clientEventEntityToken:n,createLocalApiErrorHandler:a,hideReply:c,onBlock:s,onTweetDismiss:l,scribeAction:u,shouldShowHideReplyTip:p,tweet:w})=>{const C=()=>{u({element:"moderated_replies_prompt",action:"impression"})};return{confirmation:p?{render:(e,t)=>y({onConfirm:e,onCancel:t,onHideReplyImpression:C})}:{render:(e,t)=>{const{user:{screen_name:n}}=w;return o.createElement(r.a,{cancelButtonLabel:v,confirmButtonLabel:_,confirmButtonType:"destructive",headline:b({screenName:n}),onCancel:e,onConfirm:()=>{s(),e()},text:f({screenName:n})})}},text:m,onClick:()=>{e(i.f),c(w.id_str,{conversation_id:w.conversation_id_str}).then((e=>{l&&l(),t({text:h,clientEventEntityToken:n})}),a({showToast:!0})),u({element:"moderate_reply"})},Icon:d.a}}},Zg3A:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const c=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z"})));c.metadata={width:24,height:24},t.a=c},hiGS:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const c=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"}),o.createElement("path",{d:"M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"})));c.metadata={width:24,height:24},t.a=c},n5fo:function(e,t,n){"use strict";var o=n("ERkP"),i=n("Lsrn"),a=n("k/Ka");const c=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M7.625 12.004c0 .15.03.292.044.438l4.777-4.778c-.147-.018-.294-.036-.447-.036-2.416 0-4.375 1.96-4.375 4.376zm8.752 0c0-.156-.018-.306-.037-.456l-4.786 4.787c.15.015.293.045.446.045 2.418 0 4.377-1.96 4.377-4.376z"}),o.createElement("path",{d:"M20.806 11.893c.036.064.036.138-.034.274-.025.06-2.592 6.033-8.772 6.033-.745 0-1.433-.088-2.073-.237l-1.284 1.284c.998.333 2.108.543 3.357.543 7.228 0 10.12-6.724 10.205-6.94.29-.536.29-1.175.035-1.64-.057-.136-.747-1.72-2.216-3.346L18.897 8.99c1.246 1.397 1.844 2.755 1.91 2.903zm-17.616.203c-.035-.065-.035-.138.033-.273.104-.246 2.618-6.033 8.772-6.033.748 0 1.44.088 2.082.24l1.283-1.284c-1-.335-2.113-.546-3.365-.546-7.228 0-10.12 6.723-10.205 6.938-.29.537-.29 1.176-.035 1.642.057.136.748 1.722 2.22 3.35l1.128-1.126c-1.25-1.398-1.848-2.76-1.913-2.908zm-.778 10.242c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L21.058 1.882c.293-.294.768-.294 1.06 0s.294.767 0 1.06L2.942 22.12c-.146.145-.338.22-.53.218z"})));c.metadata={width:24,height:24},t.a=c},yZqq:function(e,t,n){"use strict";var o=n("97Jx"),i=n.n(o),a=(n("kYxP"),n("ERkP")),c=n("H7Rt"),s=n("3XMw"),r=n.n(s),l=n("MWbm"),d=n("t62R"),m=n("CKsB"),h=n("/yvb"),u=n("rHpw"),p=n("Zg3A"),b=n("Lsrn"),v=n("k/Ka");const w=(e={})=>Object(v.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[b.a.root,e.style],viewBox:"0 0 24 24"},a.createElement("g",null,a.createElement("path",{d:"M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z"}),a.createElement("path",{d:"M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z"})));w.metadata={width:24,height:24};var _=w,f=n("EweD");const y=r.a.g6185a9e,C=r.a.g2d04222,E=r.a.baffe39a,T=r.a.af293dc2,g=r.a.h1053f7e,k=r.a.cf7f7e39,x=r.a.cfd2f35d,I=u.a.create((e=>({root:{flexDirection:"column",paddingTop:e.spaces.space16,paddingBottom:e.spaces.space4,borderRadius:e.borderRadii.xLarge},popover:{maxWidth:5*e.spacesPx.space64},modal:{borderRadius:e.borderRadii.none},title:{flexDirection:"column",paddingHorizontal:e.spaces.space16,marginBottom:e.spaces.space12},menuRow:{flexDirection:"row",paddingTop:e.spaces.space12,paddingBottom:e.spaces.space12,alignItems:"center",borderRadius:e.borderRadii.small},cancelButton:{marginHorizontal:e.spaces.space16,marginVertical:e.spaces.space16}})));var A=e=>{const{dismiss:t,isModal:n,value:o,isMidConversation:i}=e,s=t=>()=>{e.onChange(t),e.dismiss()};return a.createElement(l.a,{accessibilityDescribedBy:"conversation-controls-details",accessibilityLabelledBy:"conversation-controls-title",accessibilityRole:"dialog",style:[I.root,n?I.modal:I.popover]},a.createElement(l.a,{style:I.title},a.createElement(d.c,{nativeID:"conversation-controls-title",weight:"bold"},y),a.createElement(d.c,{color:"gray700",nativeID:"conversation-controls-details",size:"body"},C)),a.createElement(l.a,null,a.createElement(m.a,{Icon:p.a,actionText:E,isSelected:c.a.all===o,onClick:s(c.a.all),selectable:!0,style:I.menuRow,withIconAsThumbnail:!0}),a.createElement(m.a,{Icon:_,actionText:T,isSelected:c.a.community===o,onClick:s(c.a.community),selectable:!0,style:I.menuRow,withIconAsThumbnail:!0}),a.createElement(m.a,{Icon:f.a,actionText:i?k:g,isSelected:c.a.by_invitation===o,onClick:s(c.a.by_invitation),selectable:!0,style:I.menuRow,withIconAsThumbnail:!0}),e.isModal?a.createElement(h.a,{key:"button_cancel",onPress:t,style:I.cancelButton,type:"neutral"},x):null))},S=n("OiMc"),M=n("efqG");t.a=e=>{const{children:t,disabled:n,controlled:o=!1}=e,[c,s]=a.useState(!1),r=a.useCallback((()=>s(!0)),[]),l=a.useCallback((()=>s(!1)),[]),d=o?c?S.a.VISIBILITY_BEHAVIOR.forceVisible:S.a.VISIBILITY_BEHAVIOR.forceHidden:void 0,m="function"==typeof t?t({openPopover:r,closePopover:l}):t;return a.createElement(M.a,{disabled:n,onDismiss:l,renderContent:(t,n)=>{const{children:o,controlled:c,...s}=e;return a.createElement(A,i()({},s,{dismiss:t,isModal:"sheet"===n}))},visibilityBehavior:d},m)}}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TweetCurationActionMenu.0e8cdf55.js.map