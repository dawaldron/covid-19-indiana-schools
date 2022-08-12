if (self.CavalryLogger) { CavalryLogger.start_js(["fKU4moC"]); }

__d("BizKitDiodeOptOutMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"input",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"is_diode_opted_out",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"BizKitDiodeOptOutMutation",selections:[{alias:null,args:b,concreteType:"SetBizkitDiodeOptedOutResponsePayload",kind:"LinkedField",name:"set_bizkit_diode_opted_out",plural:!1,selections:[{alias:null,args:null,concreteType:"BizKitUser",kind:"LinkedField",name:"bizkit_user",plural:!1,selections:[c],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"BizKitDiodeOptOutMutation",selections:[{alias:null,args:b,concreteType:"SetBizkitDiodeOptedOutResponsePayload",kind:"LinkedField",name:"set_bizkit_diode_opted_out",plural:!1,selections:[{alias:null,args:null,concreteType:"BizKitUser",kind:"LinkedField",name:"bizkit_user",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"6010786285601864",metadata:{},name:"BizKitDiodeOptOutMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("PagesCometBizWebEntryCardRenderer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometBizWebEntryCardRenderer_renderer$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_diode_opt_out",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_cross_family_user",storageKey:null}]};e.exports=a}),null);
__d("PagesCometBizWebEntryCardRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometBizWebEntryCardRenderer_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_diode_opt_out",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_cross_family_user",storageKey:null}],type:"CometPageAdminToBizWebCardRenderer",abstractKey:null};e.exports=a}),null);
__d("BizKitDiodeOptOutMutation",["BizKitDiodeOptOutMutation.graphql","RelayModern"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("BizKitDiodeOptOutMutation.graphql");function a(a,b){d("RelayModern").commitMutation(b,{mutation:i,variables:{input:{is_diode_opted_out:a}}})}g.updateBizKitDiodeOptOut=a}),98);
__d("PagesCometBizWebEntryCard.react",["fbt","ix","BizKitDiodeOptOutMutation","CometCard.react","CometImage.react","CometRelay","TetraButton.react","TetraCircleButton.react","TetraText.react","TetraTextPairing.react","emptyFunction","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=h._("Access all your business tools in one place"),l=h._("Create and schedule posts, manage your Inbox, view insights and more in Facebook Business Suite."),m=h._("Manage your Page and Instagram account together with Business Suite."),n=h._("Close Facebook Business Suite upsell");function a(a){var b=a.isCrossFamilyUser,e=a.isDiodeOptOut,f=a.link;a=a.onCloseButton;var g=d("CometRelay").useRelayEnvironment();return f==null?null:j.jsx("div",{className:"a8nywdso sj5x9vvc rz4wbd8a cxgpxx05",children:j.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:j.jsxs("div",{className:"ozuftl9m tvfksri0 i1fnvgqd pioscnbf btwxx1t3 j83agx80 bp9cbjyn",children:[j.jsxs("div",{className:"btwxx1t3 j83agx80 bp9cbjyn",children:[j.jsx("div",{className:"ph5uu5jm",children:j.jsx(c("CometImage.react"),{src:b===!0?i("1353564"):i("2008979")})}),j.jsx("div",{className:"b3onmgus ph5uu5jm",children:b===!0?j.jsx(c("TetraText.react"),{type:"headline3",children:m}):j.jsx(c("TetraTextPairing.react"),{body:l,headline:k,level:3})})]}),j.jsxs("div",{className:"btwxx1t3 j83agx80 bp9cbjyn",children:[j.jsx("div",{className:"e6erh6tl qq4y78aw",children:j.jsx(c("TetraButton.react"),{label:h._("Go to Business Suite"),linkProps:{target:"_blank",url:f},onPress:Boolean(e)?function(){d("BizKitDiodeOptOutMutation").updateBizKitDiodeOptOut(!1,g)}:c("emptyFunction"),reduceEmphasis:!0,testid:void 0})}),a!=null&&j.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("478231"),12),label:n,onPress:a,size:24})]})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometBizWebEntryCardRenderer.react",["CometCreatorToolsGrowthLoggingUtils","CometErrorBoundary.react","CometRelay","FBLogger","PagesCometBizWebEntryCard.react","PagesCometBizWebEntryCardRenderer_renderer.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useEffect;function l(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometBizWebEntryCardRenderer_renderer.graphql"),a.renderer);var e=a.is_cross_family_user,f=a.is_diode_opt_out;a=a.link;var g=a!=null;k(function(){g&&d("CometCreatorToolsGrowthLoggingUtils").logCreatorToolsGrowthEventComet("PAGES_ADMIN_ENTRY_CARD_FBS_BANNER","BANNER_IMPRESSION")},[g]);return!g?null:i.jsx(c("PagesCometBizWebEntryCard.react"),{isCrossFamilyUser:e,isDiodeOptOut:f,link:a})}l.displayName=l.name+" [from "+f.id+"]";function a(a){k(function(){d("CometCreatorToolsGrowthLoggingUtils").logCreatorToolsGrowthEventComet("PAGES_ADMIN_ENTRY_CARD_FBS_BANNER","BANNER_MOUNT")},[]);var b=j(function(a){c("FBLogger")("core_business_interface_www").catching(a).warn("Failed to render Pages Comet BizWeb entry card")},[]);return i.jsx(c("CometErrorBoundary.react"),{onError:b,children:i.jsx(l,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);