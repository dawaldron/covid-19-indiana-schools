if (self.CavalryLogger) { CavalryLogger.start_js(["+qAtxUj"]); }

__d("CometMiddotSeparator.react",["CometMiddot.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.Children.toArray(a.children).filter(Boolean).map(function(a,b){return h.jsxs(h.Fragment,{children:[b!==0?h.jsx(c("CometMiddot.react"),{}):null,a]},b)})}g["default"]=a}),98);
__d("EventCometDashboardConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a="/images/youth/birthday/Education_Calendar_A_4x.png";b=1024;c=h._("Search Events");g.CALENDAR_IMAGE_PATH=a;g.SHOW_SIDEBAR_MIN_WIDTH=b;g.SIDEBAR_SEARCH_LABEL=c}),98);
__d("XCometEventsSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useEventCometSearchRouteUrlBuilder",["XCometEventsSearchControllerRouteBuilder","react","useSearchCometResultsCommonRouteParamBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=c("useSearchCometResultsCommonRouteParamBuilder")(a);return h(function(a){return c("XCometEventsSearchControllerRouteBuilder").buildURL(babelHelpers["extends"]({},b.build(a)))},[b])}g["default"]=a}),98);
__d("useEventActionLoggerParams",["CometRouteParams","EventCometActionLogger","react","recoverableViolation","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo,i={event_action_history:[]};function j(a,b,c){var e,f=typeof a.acontext==="string"?a.acontext:null,g=typeof a.notif_t==="string"?a.notif_t:null;f=k(f);if(!((e=f.event_action_history)==null?void 0:e.length)){e=n(a,c);e&&(f=babelHelpers["extends"]({},f,{event_action_history:[{surface:e}]}))}f.ref_notif_type=(a=f.ref_notif_type)!=null?a:g;c=d("EventCometActionLogger").createForNewSurface(f,b);return[f,c]}function k(a){if(a==null||a==="")return i;var b=null;try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_context string"+a.toString(),"events")}if(b==null)return i;a=b;b=a.action_history;var d=a.event_action_history,e=a.ref,f=a.ref_notif_type;a=a.source;d=(d=d)!=null?d:b;b=[];typeof d==="string"?b=o(d):Array.isArray(d)&&(b=p(d));return{event_action_history:b,ref:e,ref_notif_type:f,source:a}}var l=["google","bing","yahoo"],m={colleges:"campus_feed",gaming:"games_feed",group:"group",groups:"group",marketplace:"marketplace",page:"page",profile:"user_timeline",save:"saved_dashboard",watch:"video_feed"};function n(a,b){if(a.ref==="notif"||a.notif_id!=null)return"notifications_tab";b=b==null?void 0:b.split(".");b=b!=null&&b.length>=2&&b[0]==="comet"?b[1]:null;if(b!=null&&Object.prototype.hasOwnProperty.call(m,b))return m[b];if(a.ref==="newsfeed")return"newsfeed";b=(b=document.referrer)==null?void 0:(a=b.match(/\/\/[^\/]*?([\w-]+)\.\w+(\/|$)/))==null?void 0:a[1];if(b!=null){if(l.includes(b))return"external_search_engine";if(b!=="facebook")return"external"}return null}function o(a){if(a==="")return[];var b=[];try{b=JSON.parse(a)}catch(a){c("recoverableViolation")("Unable to parse action_history string"+a.toString(),"events");return b}return p(b)}function p(a){return!Array.isArray(a)?[]:a.filter(function(a){return typeof a==="object"}).map(function(a){var b=a.event_tracking,c=a.extra_data,d=a.mechanism;a=a.surface;return{event_tracking:typeof b==="string"?b:void 0,extra_data:typeof c==="object"?JSON.stringify(c):"",mechanism:typeof d==="string"?d:"unknown",surface:typeof a==="string"?a:"unknown"}})}function a(a){var b=d("CometRouteParams").useRouteParams(),e=c("useRouteReferrer")();return h(function(){return j(b,a,e==null?void 0:e.tracePolicy)},[b,a,e==null?void 0:e.tracePolicy])}g["default"]=a}),98);
__d("SearchCometResultsEndOfResultsNotice.react",["fbt","CometColumn.react","CometColumnItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){return i.jsx(c("CometColumn.react"),{paddingTop:12,paddingVertical:0,ref:b,spacing:8,children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"body3",children:h._("End of Results")})})})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometEventPermalinkTab",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({ABOUT:"about",DISCUSSION:"discussion",BRACKETS:"brackets",PARTICIPANTS:"participants",STANDINGS:"standings",VIDEOS:"videos",PAID_ACCESS:"paid_access"});c=a;f["default"]=c}),66);
__d("XCometEventPermalinkControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/{?location_slug}/{?name_slug}/{event_id}/",Object.freeze({active_tab:"about",hide_invite_flow_filter_groups:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometGroupsTabCreateControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/create/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);