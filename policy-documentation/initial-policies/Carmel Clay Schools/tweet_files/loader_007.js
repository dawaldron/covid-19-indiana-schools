(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{o52z:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("VPAj");const a=Object(s.a)([]);Object(s.a)({})},xAHt:function(t,e,i){"use strict";i.r(e),i.d(e,"NewTweetsPill",(function(){return k}));var s=i("KEM+"),a=i.n(s),o=(i("kYxP"),i("ERkP")),n=i("lnti"),r=i("rxPX"),l=i("hqKg"),c=i("o52z"),h=i("G6rE");const m=(t,e)=>e.alert&&e.alert.userIds||Object(c.a)();var p=Object(r.a)().propsFromState((()=>({userImageUrls:Object(l.createSelector)(h.e.selectAll,m,((t,e)=>e?Object(n.a)(e.map((e=>{const i=t[e];return i?i.profile_image_url_https:void 0}))):[]))}))).withAnalytics(),d=i("3XMw"),u=i.n(d),w=i("Lsrn"),_=i("k/Ka");const b=(t={})=>Object(_.a)("svg",{...t,accessibilityHidden:void 0===t.accessibilityLabel,style:[w.a.root,t.style],viewBox:"0 0 24 24"},o.createElement("g",null,o.createElement("path",{d:"M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z"})));b.metadata={width:24,height:24};var g=b,y=i("IbOt"),S=i("fs1G"),D=i("rcen"),I=i("MWbm"),T=i("I4+6"),f=i("rHpw"),v=i("cm6r"),x=i("MAI/"),A=i("t62R");const C=u.a.gdb8bdcc,L=u.a.ac0f6491,E={component:"new_tweet_prompt"},O={},M={};class k extends o.PureComponent{constructor(...t){super(...t),a()(this,"state",{show:!1}),a()(this,"_getLastShownTime",(()=>M[this.props.timelineId])),a()(this,"_attemptShow",(()=>{const{alert:t,timelineId:e,unreadCount:i}=this.props;if(this._timeoutID&&(clearTimeout(this._timeoutID),this._timeoutID=null),this._mounted&&(t||i>0)){const t=this._getDelayRemaining();t<=0?(this.setState({show:!0}),O[e]=Date.now(),this._scribeAction("show")):this._timeoutID=setTimeout(this._attemptShow,t)}})),a()(this,"_handleScrollDown",(()=>{const{remainVisibleInterval:t,alert:e,timelineId:i}=this.props;let s=t;e&&e.displayDurationMs&&e.displayDurationMs>-1&&(s=e.displayDurationMs),this.state.show&&Date.now()>=O[i]+s&&(this._scribeAction("dismiss"),this._hide())})),a()(this,"_handleClick",(()=>{this._scribeAction("click"),window.scrollTo(0,0),this._hide()}))}componentDidMount(){this._mounted=!0,this._getLastShownTime()||this._updateLastShownTime(this.props.timelineId),this._attemptShow(),this._cancelMomentum=Object(y.a)({onUp:S.a,onDown:this._handleScrollDown})}componentDidUpdate(t,e){const{unreadCount:i,alert:s,timelineId:a}=this.props,o=t.timelineId!==a,n=o&&!this._getLastShownTime();o?(n&&this._updateLastShownTime(a),e.show&&this._updateLastShownTime(t.timelineId),t.removeAlert&&t.removeAlert(),this.setState({show:!1}),this._attemptShow()):((s&&!e.show||i>t.unreadCount)&&this._attemptShow(),!t.alert&&0!==i||s||this._hide())}componentWillUnmount(){const{timelineId:t,removeAlert:e}=this.props;this._mounted=!1,this._timeoutID&&clearTimeout(this._timeoutID),this.state.show&&(this._updateLastShownTime(t),e&&e()),this._cancelMomentum()}render(){const{alert:t,label:e,userImageUrls:i}=this.props,{show:s}=this.state;let a;a=t?t.richText&&o.createElement(D.c,{entities:t.richText.entities,text:t.richText.text}):e;const n=T.a.generate({backgroundColor:f.a.theme.colors.primary,color:f.a.theme.colors.whiteOnColor});return o.createElement(I.a,{accessibilityRole:"status"},o.createElement(v.a,{accessibilityHidden:!s,accessibilityLabel:L,accessibilityRole:"button",interactiveStyles:n,onClick:this._handleClick,style:[j.pill,s&&j.show]},o.createElement(I.a,{style:j.innerPill},o.createElement(g,{style:j.icon}),i&&i.length>0?o.createElement(I.a,{style:j.facepile},o.createElement(x.a,{borderColor:"primary",userAvatarSize:"large",userAvatarUrls:i})):null,o.createElement(A.c,{color:"whiteOnColor",numberOfLines:1,style:j.pillText},a))))}_getDelayRemaining(){const{triggerDelay:t,alert:e}=this.props,i=e&&e.triggerDelayMs||t;return this._getLastShownTime()+i-Date.now()}_updateLastShownTime(t){t&&(M[t]=Date.now())}_hide(){const{alert:t,removeAlert:e,timelineId:i}=this.props;this._mounted&&(this._updateLastShownTime(i),this.setState({show:!1})),t&&setTimeout((()=>e()),500)}_scribeAction(t){const{analytics:e,scribeNamespace:i}=this.props,s={...i,...E,action:t};e.scribe(s)}}a()(k,"defaultProps",{label:C,remainVisibleInterval:3e3,triggerDelay:24e4,unreadCount:0});const j=f.a.create((t=>({pill:{boxShadow:t.boxShadows.small,backgroundColor:t.colors.primary,borderRadius:t.borderRadii.infinite,paddingHorizontal:t.spaces.space16,opacity:0,justifyContent:"center",transform:[{translate3d:"0, 0, 0"}],transitionProperty:"transform, opacity",transitionDuration:"0.15s",transitionTimingFunction:"ease, ease, step-end"},innerPill:{flexDirection:"row",paddingVertical:t.spaces.space4},icon:{width:t.spaces.space20,marginRight:t.spaces.space4,alignSelf:"center",color:t.colors.whiteOnColor},facepile:{marginRight:t.spaces.space8},pillText:{alignSelf:"center"},show:{opacity:1,transitionTimingFunction:"ease, ease, step-start",transform:[{translate3d:"0, 3.5em, 0"}]}}))),P=p(k);e.default=P}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewTweetsPill.68ab1ee5.js.map