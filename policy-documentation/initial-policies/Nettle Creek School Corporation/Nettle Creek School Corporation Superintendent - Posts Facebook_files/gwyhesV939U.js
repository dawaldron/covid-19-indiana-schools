if (self.CavalryLogger) { CavalryLogger.start_js(["Qbthei+"]); }

__d("CometAlbumViewerDropdownMenuQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3875596129204753",metadata:{},name:"CometAlbumViewerDropdownMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometLegacyAlbumPopoverTrigger_album.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometLegacyAlbumPopoverTrigger_album",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"album_menu_items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"Album",abstractKey:null};e.exports=a}),null);
__d("setIgnoreIsComposerEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(){return{isEmpty:!1,useIsEmpty:!1}}f["default"]=a}),66);
__d("CometAlbumViewerDropdownMenu.entrypoint",["CometAlbumViewerDropdownMenuQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.albumID;return{queries:{cometAlbumViewerDropdownMenuQueryReference:{parameters:c("CometAlbumViewerDropdownMenuQuery$Parameters"),variables:{albumID:a}}}}},root:c("JSResourceForInteraction")("CometAlbumViewerDropdownMenu.react").__setRef("CometAlbumViewerDropdownMenu.entrypoint")};b=a;g["default"]=b}),98);
__d("ProfileCometLegacyAlbumPopoverTrigger.react",["fbt","ix","CometAlbumViewerDropdownMenu.entrypoint","CometEntryPointPopoverTrigger.react","CometRelay","ProfileCometLegacyAlbumPopoverTrigger_album.graphql","TetraCircleButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){a=a.album$key;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometLegacyAlbumPopoverTrigger_album.graphql"),a);var e=a.album_menu_items;if(e==null)return null;e=e.length>0;a=a.id;return e&&k.jsx("div",{className:"dn56xbwz pmk7jnqg cypi58rs",children:k.jsx(c("CometEntryPointPopoverTrigger.react"),{entryPointParams:{albumID:a},otherProps:{},popoverEntryPoint:c("CometAlbumViewerDropdownMenu.entrypoint"),popoverType:"menu",position:"below",preloadTrigger:"button",children:function(a,b,e,f,g,j){return k.jsx(c("TetraCircleButton.react"),{icon:d("fbicon")._(i("484386"),16),label:h._("More"),onHoverIn:f,onHoverOut:g,onPress:b,onPressIn:j,ref:a,size:32,type:"dark-overlay"})}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometPhotoAlbumUploadControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/media/set/upload/{mediaset_token}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);