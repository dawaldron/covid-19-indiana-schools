if (self.CavalryLogger) { CavalryLogger.start_js(["B+NX5IE"]); }

__d("CometTahoeRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4462385010506788",metadata:{},name:"CometTahoeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3376330692474027",metadata:{},name:"CometVideosLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("validateChainingCaller",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("validateChannelEntryPoint",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("CometTahoeRoot.entrypoint",["CometTahoeRootQuery$Parameters","CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","validateChainingCaller","validateChannelEntryPoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.story_token,e=a.passthroughProps,f=(e==null?void 0:e.playerOrigin)!=null?String(e==null?void 0:e.playerOrigin):void 0,g=(e==null?void 0:e.playerSuborigin)!=null?String(e==null?void 0:e.playerSuborigin):void 0,h=(e==null?void 0:e.channelID)!=null?String(e==null?void 0:e.channelID):null,i=c("validateChainingCaller")(e==null?void 0:e.caller),j=c("validateChannelEntryPoint")(e==null?void 0:e.channelEntryPoint),k=null;(e==null?void 0:e.searchKeyword)!=null&&(k=JSON.stringify({searchKeyword:e==null?void 0:e.searchKeyword}));var l=(e==null?void 0:e.chainingCursor)!=null?String(e==null?void 0:e.chainingCursor):null;e=(e==null?void 0:e.chainingSeedVideoId)!=null?String(e==null?void 0:e.chainingSeedVideoId):null;e={UFI2CommentsProvider_commentsKey:"CometTahoeSidePaneQuery",caller:(i=i)!=null?i:"TAHOE",chainingCursor:l,chainingSeedVideoId:e,channelEntryPoint:(i=j)!=null?i:"TAHOE",channelID:(l=h)!=null?l:"",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"TAHOE",feedbackSource:41,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:d("WebPixelRatio").get(),useDefaultActor:!1,videoChainingContext:k};j=babelHelpers["extends"]({},e,{playerOrigin:f,playerSuborigin:g});i={tahoeRootQueryReference:{parameters:c("CometTahoeRootQuery$Parameters"),variables:babelHelpers["extends"]({},j,{videoID:b})}};c("gkx")("1801392")&&(i=babelHelpers["extends"]({},i,{loggedOutCTAfooterDataQueryReference:{parameters:c("CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{nodeID:b,scale:d("WebPixelRatio").get()}}}));return{extraProps:{t:a.routeProps.t},queries:i}},root:c("JSResourceForInteraction")("CometTahoeRoot.react").__setRef("CometTahoeRoot.entrypoint")};g["default"]=a}),98);