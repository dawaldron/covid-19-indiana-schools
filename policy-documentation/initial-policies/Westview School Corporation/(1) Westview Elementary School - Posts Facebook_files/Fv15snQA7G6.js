if (self.CavalryLogger) { CavalryLogger.start_js(["Vxzsnxh"]); }

__d("CometNotificationsRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6138262366214455",metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",menuUseEntryPoint:c("gkx")("146"),scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);
__d("VideoPlayerFallbackCoverImplWithRetry.react",["fbt","ix","TetraText.react","VideoPlayerActionButton.react","VideoPlayerFallbackLearnMoreLink.react","cr:1672302","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var e=a.debugError,f=a.message;a=a.onRetry;return j.jsx("div",{className:"h4z51re5 osnr6wyh rv4hoivh jktsbyx5 stjgntxs ni8dbmo4 taijpn5t datstx6m j83agx80 ora8z2hr bp9cbjyn",children:j.jsxs("div",{className:"ij9ysmuz cbu4d94t j83agx80 bp9cbjyn",children:[j.jsx("div",{className:"d2edcug0 cbu4d94t j83agx80 bp9cbjyn",children:j.jsx(c("TetraText.react"),{align:"center",color:"white",type:"bodyLink3",children:f})}),a?j.jsx("div",{className:"d2edcug0 tr9rh885 cbu4d94t j83agx80 bp9cbjyn",children:j.jsx(c("VideoPlayerActionButton.react"),{icon:d("fbicon")._(i("534218"),16),label:h._("Try Again"),onPress:a,testid:void 0})}):j.jsx("div",{className:"d2edcug0 tr9rh885 cbu4d94t j83agx80 bp9cbjyn",children:j.jsx(c("VideoPlayerFallbackLearnMoreLink.react"),{})}),b("cr:1672302")?j.jsx(b("cr:1672302"),{error:e}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ServerRedirect",["ReloadPage","URI"],(function(a,b,c,d,e,f,g){function a(a,b,d){c("URI").go(a,b,d)}function b(){d("ReloadPage").now()}g.redirectPageTo=a;g.reloadPage=b}),98);