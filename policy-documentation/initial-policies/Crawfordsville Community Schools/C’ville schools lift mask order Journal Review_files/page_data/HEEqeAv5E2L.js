if (self.CavalryLogger) { CavalryLogger.start_js(["EDxvPXR"]); }

__d("PercentVisible",[],(function(a,b,c,d,e,f){a=-1;b=0;c=50;d=100;f.NO_VISIBLE=a;f.VISIBLE_0_PCT=b;f.VISIBLE_50_PCT=c;f.VISIBLE_100_PCT=d}),66);
__d("CometMetricsChannel2ViewabilityFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1960868");c=b("FalcoLoggerInternal").create("comet_metrics_channel2_viewability",a);e.exports=c}),null);
__d("getCentralImpressionScrollSpeed",["Event"],(function(a,b,c,d,e,f){"use strict";var g=0,h=Date.now(),i=null,j=null;function a(a){b("Event").listen(window,"scroll",function(){j&&clearTimeout(j),j=setTimeout(function(){return a()},100)},b("Event").Priority.NORMAL,{passive:!0})}function k(){var a=window.scrollY,b=Date.now();if(i!=null&&b!==h){var c=a-i;g=c/(b-h)*1e3}i=a;h=b}a(function(){g=0,i=null});b("Event").listen(window,"scroll",function(){return k()},b("Event").Priority.NORMAL,{passive:!0});e.exports=function(){return g}}),null);
__d("getCentralImpressionTimeAfterRefresh",[],(function(a,b,c,d,e,f){"use strict";var g=null;window.addEventListener("load",function(){g=Date.now()},{passive:!0});function a(){return g!=null?Date.now()-g:0}f["default"]=a}),66);
__d("ghlTestUBT",["cr:1543261","cr:334"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1543261")&&b("cr:1543261")(),g["default"]=b("cr:334")}),98);
__d("isImpressionTargetOccluded",["containsNode","getViewportDimensions"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){d===void 0&&(d={bottom:0,left:0,right:0,top:0});try{if(!a||!b||!document.elementFromPoint)return!1;var e=c("getViewportDimensions")();if(e.height===0||e.width===0)return!1;var f=b.x,g=b.y,h=b.width;b=b.height;h=Math.min(f+h,e.width-1);b=Math.min(g+b,e.height-1);e=[{x:f,y:g},{x:f,y:b},{x:h,y:g},{x:h,y:b},{x:(f+h)/2,y:(g+b)/2}];d.top!==0&&d.top>g&&d.top<b&&e.push({x:(f+h)/2,y:(d.top+b)/2});return e.every(function(b){b=document.elementFromPoint(b.x,b.y);b=!!b&&!c("containsNode")(b,a)&&!c("containsNode")(a,b);return b})}catch(a){return!1}}g["default"]=a}),98);