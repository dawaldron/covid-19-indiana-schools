if (self.CavalryLogger) { CavalryLogger.start_js(["rBXETGD"]); }

__d("CometFeedStoryGenericLink_story$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryGenericLink_story$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[a,b],storageKey:null},b],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryGenericLink_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryGenericLink_story",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useURLFromAttachment_attachment"}],storageKey:null}],type:"StoryAttachmentGenericLinkRenderer",abstractKey:null};e.exports=a}),null);
__d("useURLFromAttachment_attachment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useURLFromAttachment_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[a],storageKey:null},a],type:"StoryAttachment",abstractKey:null}}();e.exports=a}),null);
__d("useURLFromAttachment",["CometRelay","useURLFromAttachment_attachment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var c;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useURLFromAttachment_attachment.graphql"),a);return(c=(c=a==null?void 0:(c=a.action_links)==null?void 0:(c=c[0])==null?void 0:c.url)!=null?c:a==null?void 0:a.url)!=null?c:null}g["default"]=a}),98);
__d("CometFeedStoryGenericLink.react",["CometFeedStoryGenericLink_story.graphql","CometLink.react","CometRelay","gkx","react","recoverableViolation","useURLFromAttachment"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useEffect,k=h!==void 0?h:h=b("CometFeedStoryGenericLink_story.graphql");function a(a,b){b=a["aria-label"];var e=a["aria-labelledby"],f=a.children,g=a.story;a=a.xstyle;g=d("CometRelay").useFragment(k,g);var h=g.attachment;g=c("useURLFromAttachment")(h);j(function(){(h==null?void 0:h.web_link)==null?c("recoverableViolation")("attachment web_link must not be null in CometFeedStoryGenericLink.react.js","comet_infra"):(h==null?void 0:h.web_link.url)==null&&c("recoverableViolation")("web_link url must not be null in CometFeedStoryGenericLink.react.js","comet_infra")},[h]);var l=h==null?void 0:h.web_link;g=l!=null&&c("gkx")("1616314")?l.url:g;var m=l==null?void 0:l.fbclid;l=l==null?void 0:l.lynx_mode;return h==null?null:i.jsx(c("CometLink.react"),{"aria-label":b,"aria-labelledby":e,fbclid:m,href:g,lynxMode:l,suppressHydrationWarning:!0,xstyle:a,children:f})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("XArticleContextMainDialogControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/feed/article_context/dialog/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);