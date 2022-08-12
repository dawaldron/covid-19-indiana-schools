;(function(omidGlobal) {
  'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b='undefined'!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ba='function'==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca;
if('function'==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={V:!0},fa={};try{fa.__proto__=ea;da=fa.V;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+' is not extensible');return a}:null}var ia=ca;
function r(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if('prototype'!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.pa=b.prototype}var t='undefined'!=typeof window&&window===this?this:'undefined'!=typeof global&&null!=global?global:this;function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja='function'==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a},z='function'==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function A(a,b){if(b){var c=t;a=a.split('.');for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&z(c,a,{configurable:!0,writable:!0,value:b})}}A('Object.assign',function(a){return a||ja});function ka(){ka=function(){};t.Symbol||(t.Symbol=la)}function ma(a,b){this.a=a;z(this,'description',{configurable:!0,writable:!0,value:b})}ma.prototype.toString=function(){return this.a};
var la=function(){function a(c){if(this instanceof a)throw new TypeError('Symbol is not a constructor');return new ma('jscomp_symbol_'+(c||'')+'_'+b++,c)}var b=0;return a}();function B(){ka();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol('Symbol.iterator'));'function'!=typeof Array.prototype[a]&&z(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(aa(this))}});B=function(){}}function na(a){B();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}
A('WeakMap',function(a){function b(f){this.a=(l+=Math.random()+1).toString();if(f){f=p(f);for(var k;!(k=f.next()).done;)k=k.value,this.set(k[0],k[1])}}function c(){}function d(f){if(!u(f,g)){var k=new c;z(f,g,{value:k})}}function e(f){var k=Object[f];k&&(Object[f]=function(h){if(h instanceof c)return h;d(h);return k(h)})}if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),k=Object.seal({}),h=new a([[f,2],[k,3]]);if(2!=h.get(f)||3!=h.get(k))return!1;h.delete(f);h.set(k,4);return!h.has(f)&&
4==h.get(k)}catch(m){return!1}}())return a;var g='$jscomp_hidden_'+Math.random();e('freeze');e('preventExtensions');e('seal');var l=0;b.prototype.set=function(f,k){d(f);if(!u(f,g))throw Error('WeakMap key fail: '+f);f[g][this.a]=k;return this};b.prototype.get=function(f){return u(f,g)?f[g][this.a]:void 0};b.prototype.has=function(f){return u(f,g)&&u(f[g],this.a)};b.prototype.delete=function(f){return u(f,g)&&u(f[g],this.a)?delete f[g][this.a]:!1};return b});
A('Map',function(a){function b(){var f={};return f.D=f.next=f.head=f}function c(f,k){var h=f.a;return na(function(){if(h){for(;h.head!=f.a;)h=h.D;for(;h.next!=h.head;)return h=h.next,{done:!1,value:k(h)};h=null}return{done:!0,value:void 0}})}function d(f,k){var h=k&&typeof k;'object'==h||'function'==h?g.has(k)?h=g.get(k):(h=''+ ++l,g.set(k,h)):h='p_'+k;var m=f.b[h];if(m&&u(f.b,h))for(f=0;f<m.length;f++){var v=m[f];if(k!==k&&v.key!==v.key||k===v.key)return{id:h,list:m,index:f,m:v}}return{id:h,list:m,
index:-1,m:void 0}}function e(f){this.b={};this.a=b();this.size=0;if(f){f=p(f);for(var k;!(k=f.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),k=new a(p([[f,'s']]));if('s'!=k.get(f)||1!=k.size||k.get({x:4})||k.set({x:4},'t')!=k||2!=k.size)return!1;var h=k.entries(),m=h.next();if(m.done||m.value[0]!=f||'s'!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
't'!=m.value[1]||!h.next().done?!1:!0}catch(v){return!1}}())return a;B();var g=new WeakMap;e.prototype.set=function(f,k){f=0===f?0:f;var h=d(this,f);h.list||(h.list=this.b[h.id]=[]);h.m?h.m.value=k:(h.m={next:this.a,D:this.a.D,head:this.a,key:f,value:k},h.list.push(h.m),this.a.D.next=h.m,this.a.D=h.m,this.size++);return this};e.prototype.delete=function(f){f=d(this,f);return f.m&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.b[f.id],f.m.D.next=f.m.next,f.m.next.D=f.m.D,f.m.head=null,
this.size--,!0):!1};e.prototype.clear=function(){this.b={};this.a=this.a.D=b();this.size=0};e.prototype.has=function(f){return!!d(this,f).m};e.prototype.get=function(f){return(f=d(this,f).m)&&f.value};e.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};e.prototype.keys=function(){return c(this,function(f){return f.key})};e.prototype.values=function(){return c(this,function(f){return f.value})};e.prototype.forEach=function(f,k){for(var h=this.entries(),m;!(m=h.next()).done;)m=
m.value,f.call(k,m[1],m[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var l=0;return e});A('Object.values',function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push(b[d]);return c}});
A('Set',function(a){function b(c){this.a=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||'function'!=typeof a||!a.prototype.entries||'function'!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),g=e.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return!1;g=e.next();return g.done||g.value[0]==c||4!=g.value[0].x||
g.value[1]!=g.value[0]?!1:e.next().done}catch(l){return!1}}())return a;B();b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.a.forEach(function(g){return c.call(d,g,g,e)})};return b});A('Object.is',function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});A('Array.prototype.includes',function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
var D={ga:'loaded',ma:'start',ca:'firstQuartile',ha:'midpoint',na:'thirdQuartile',aa:'complete',ia:'pause',ka:'resume',$:'bufferStart',Z:'bufferFinish',la:'skipped',oa:'volumeChange',ja:'playerStateChange',Y:'adUserInteraction'},oa={da:'full',ba:'domain',fa:'limited'};function F(a,b){this.x=null!=a.x?a.x:a.left;this.y=null!=a.y?a.y:a.top;this.width=a.width;this.height=a.height;this.B=this.x+this.width;this.C=this.y+this.height;this.u=a.u||void 0;this.S=a.S||[];this.b=a.friendlyObstructionClass||void 0;this.c=a.friendlyObstructionPurpose||void 0;this.f=a.friendlyObstructionReason||void 0;this.L=void 0!==a.L?!0===a.L:!0;this.v=a.v||void 0;this.J=a.J||[];this.M=a.M||!1;this.a=b}function pa(a){var b={};return b.width=a.width,b.height=a.height,b}
function G(a){var b={};return Object.assign({},pa(a),(b.x=a.x,b.y=a.y,b))}function H(a){var b=G(a),c={};return Object.assign({},b,(c.endX=a.B,c.endY=a.C,c))}F.prototype.O=function(a){if(null==a)return!1;a=G(a);var b=a.y,c=a.width,d=a.height;return this.x===a.x&&this.y===b&&this.width===c&&this.height===d};function qa(a){return a.width*a.height};function ra(a,b){a=G(a);for(var c=[],d=[],e=0;e<b.length;e++){var g=G(b[e]);g=sa(a,g);I(c,g.x);I(c,g.B);I(d,g.y);I(d,g.C)}c=c.sort(function(l,f){return l-f});d=d.sort(function(l,f){return l-f});return{W:c,X:d}}function sa(a,b){return{x:Math.max(a.x,b.x),y:Math.max(a.y,b.y),B:Math.min(a.x+a.width,b.x+b.width),C:Math.min(a.y+a.height,b.y+b.height)}}function I(a,b){-1===a.indexOf(b)&&a.push(b)};function ta(){this.b=this.a=this.c=this.h=void 0;this.o=0;this.g=[];this.l=[];this.s=0;this.i=[];this.f=[];this.j=[]}ta.prototype.O=function(a){return null==a?!1:JSON.stringify(J(this))===JSON.stringify(J(a))};
function J(a){var b=[],c=[],d={viewport:a.h,adView:{percentageInView:a.o,reasons:a.j},declaredFriendlyObstructions:a.g.length};if(void 0!==a.a){d.adView.geometry=G(a.a);d.adView.geometry.pixels=qa(a.a);d.adView.onScreenGeometry=G(a.b);d.adView.onScreenGeometry.pixels=a.s;for(var e=0;e<a.f.length;e++)b.push(G(a.f[e]));for(e=0;e<a.l.length;e++){var g=a.l[e],l=g,f={};l.b&&(f.obstructionClass=l.b);l.c&&(f.obstructionPurpose=l.c);l.f&&(f.obstructionReason=l.f);g=sa(a.a,g);c.push(Object.assign({},{x:g.x,
y:g.y,width:g.B-g.x,height:g.C-g.y},f))}d.adView.onScreenGeometry.obstructions=b;d.adView.onScreenGeometry.friendlyObstructions=c}return d}function ua(a,b){b=pa(b);a.h={};a.h.width=b.width;a.h.height=b.height;a.c={};a.c.x=0;a.c.y=0;a.c.width=b.width;a.c.height=b.height;a.c.endX=b.width;a.c.endY=b.height}function va(){return{x:0,y:0,endX:0,endY:0,width:0,height:0}}
function wa(a,b){var c={};c.x=Math.max(a.x,b.x);c.y=Math.max(a.y,b.y);c.endX=Math.min(a.endX,b.endX);c.endY=Math.min(a.endY,b.endY);c.width=Math.max(0,c.endX-c.x);c.height=Math.max(0,c.endY-c.y);return c}function xa(a,b){return a.width<b.width||a.height<b.height}
function ya(a){var b=qa(a.a);if(0!==b){var c=qa(a.b);var d=a.f,e=0;if(0<d.length){var g=ra(a.b,d),l=g.W;g=g.X;for(var f=0;f<l.length-1;f++)for(var k=(l[f]+(l[f]+1))/2,h=l[f+1]-l[f],m=0;m<g.length-1;m++){for(var v=(g[m]+(g[m]+1))/2,C=g[m+1]-g[m],w=!1,x=0;x<d.length;x++){var y=G(d[x]);if(y.x<k&&y.x+y.width>k&&y.y<v&&y.y+y.height>v){w=!0;break}}w&&(e+=Math.round(h)*Math.round(C))}}c-=e;b=Math.round(c/b*100);a.o=Math.max(b,0);a.s=Math.max(c,0)}}
function za(a,b){if(0!==b.width&&0!==b.height&&a.b){a=H(a.b);var c=a.y,d=a.endX,e=a.endY;b=!(b.B<=a.x||b.x>=d||b.C<=c||b.y>=e)}else b=!1;return b}function K(a,b){for(var c=!1,d=0;d<a.j.length;d++)a.j[d]===b&&(c=!0);c||a.j.push(b)};function Aa(a,b,c,d){var e=b.M?!0:b.u===d;if(e){c.a=b;var g=H(c.a);a=wa(c.c,g);var l=c.a;'notAttached'===l.v||'noWindowFocus'===l.v||'noAdView'===l.v?(K(c,'notFound'),c.b=new F(va(),!1)):(l=c.a,'viewInvisible'===l.v||'viewGone'===l.v||'viewNotVisible'===l.v||'viewAlphaZero'===l.v||'viewHidden'===l.v||void 0!==c.a.v?(K(c,'hidden'),c.b=new F(va(),!1)):(xa(a,g)&&K(c,'clipped'),c.b=new F(a,!1)))}else if(g=!0,b.a&&(g=-1!==b.S.indexOf(d)?!1:!1===b.L),g){l=b.J;for(var f=0;f<l.length;f++)g=void 0!==c.a,Aa(a,
new F(l[f],g),c,d)}e||void 0===c.a||(b.a?-1!==b.S.indexOf(d)?c.g.push(b):c.i.push(b):(e=H(b),d=H(c.b),G(c.b),a=c.b,0!==a.width&&0!==a.height&&b.L&&(b=wa(d,e),xa(b,d)&&(K(c,'clipped'),c.b=new F(b,!1)))))};function Ba(a,b){this.y=this.x=0;this.width=a;this.height=b};function Ca(){return{apiVersion:'1.0',accessMode:'limited',environment:'web',omidJsInfo:{omidImplementer:'omsdk',serviceVersion:'1.3.14-google29'},adSessionType:'html',supports:['clid','vlid']}}function Da(){this.u=null;this.c=Ca();this.o=null;this.w='foregrounded';this.j=this.i='none';this.h=this.g=this.f=this.l=this.a=this.b=this.H=this.N=null;this.G=!0;this.F=new Map}var L;function M(){L||(L=new Da);return L};var Ea=eval('this'),N=function(){if('undefined'!==typeof omidGlobal&&omidGlobal)return omidGlobal;if('undefined'!==typeof global&&global)return global;if('undefined'!==typeof window&&window)return window;if('undefined'!==typeof Ea&&Ea)return Ea;throw Error('Could not determine global object context.');}();function Fa(a){if(a===N)return!1;try{if('undefined'===typeof a.location.hostname)return!0}catch(b){return!0}return!1}function Ga(){var a=omidGlobal;if(null==a||'undefined'===typeof a.top||null==a.top)return null;try{var b=a.top;return Fa(b)?null:b.location.href}catch(c){return null}};function Ha(a,b){this.a=a;this.b=b}t.Object.defineProperties(Ha.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.a}},origin:{configurable:!0,enumerable:!0,get:function(){return this.b}}});function O(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ia(function(){throw new (Function.prototype.bind.apply(Error,[null,'Could not complete the test successfully - '].concat(q(b))));},function(){return console.error.apply(console,q(b))})}function Ja(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];Ia(function(){},function(){return console.error.apply(console,q(b))})}
function Ia(a,b){'undefined'!==typeof jasmine&&jasmine?a():'undefined'!==typeof console&&console&&console.error&&b()};function Ka(){this.f=[];this.b=[];this.c=[];this.g=[];this.i={};this.a=M()}function La(a){a.f=[];a.b=[];a.c=[];a.g=[];a.i={};L.u=null;L.c=Ca();L.o=null;L.R=void 0;L.ea=void 0;L.P=null;L.K=null;L.s=null;L.w='foregrounded';L.i='none';L.j='none';L.N=null;L.H=null;L.b=null;L.a=null;L.l=null;L.f=null;L.g=null;L.h=null;L.G=!0;L.F=new Map}function Ma(a,b){void 0!==a.a&&a.a.u&&!1!==Na(a,b)&&a.c.filter(function(c){return c.type===b.event.type}).forEach(function(c){return a.h(c.I,b.event)})}
function P(a,b){a.f.push(b);Ma(a,b)}function Oa(a,b,c){void 0!==a.a&&a.a.u&&a.f.filter(function(d){return d.event.type===b&&Na(a,d)}).map(function(d){return d.event}).forEach(c)}function Na(a,b){var c=b.event.type,d=-1!==Object.values(D).indexOf(c)&&'volumeChange'!==c;return'impression'===c||'loaded'===c&&a.a.a?b.origin===M().j:d?b.origin===M().i:!0}function Pa(a,b,c){'media'===b||'video'===b?Qa(a,c):(a.c.push({type:b,I:c}),Oa(a,b,c))}
function Qa(a,b){Object.keys(D).forEach(function(c){c=D[c];a.c.push({type:c,I:b});Oa(a,c,b)})}function Ra(a,b,c,d){var e={U:c,T:d,I:b};a.g.push(e);a.b.forEach(function(g){var l=Sa(g);'sessionStart'===g.event.type&&Ta(a,l,e);a.h(b,l)})}function Ua(a,b,c){var d=Q(a,'sessionError','native',{errorType:b,message:c});a.b.push(d);a.g.forEach(function(e){a.h(e.I,d.event)})}
function Va(a,b){a.i=Object.assign(a.i,b);b=a.a.c;if(void 0!==b){b=Object.assign({},Wa(a,Xa(a,{context:b}),!0),{supportsLoadedEvent:!!a.a.a||'video'==a.a.b});Object.assign(b,{pageUrl:Ga(),contentUrl:a.a.o});var c=Q(a,'sessionStart','native',b);a.b.push(c);a.g.forEach(function(d){var e=d.I,g=Sa(c);Ta(a,g,d);a.h(e,g)},a);Ya(a)}}
function Ta(a,b,c){c.U&&(b.data.verificationParameters=a.i[c.U]);c.T&&(c=a.a.F.get(c.T))&&(b.data.verificationParameters=c.verificationParameters,b.data.context.accessMode=c.accessMode,'full'===c.accessMode&&(a.a.g&&(b.data.context.videoElement=a.a.g),a.a.f&&(b.data.context.slotElement=a.a.f)))}function Za(a){var b=a.g,c=Q(a,'sessionFinish','native');a.b.push(c);var d=a.a.c;d&&'native'==d.adSessionType||La(a);b.forEach(function(e){return a.h(e.I,c.event)})}
Ka.prototype.h=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];try{a.apply(null,q(c))}catch(e){Ja(e)}};
function Ya(a){var b=a.a.i,c=a.f.filter(function(l){return Object.values(D).includes(l.event.type)&&l.origin===b}).map(function(l){return l.event}),d=a.a.u||'',e={};c=p(c);for(var g=c.next();!g.done;e={A:e.A},g=c.next()){e.A=g.value;e.A.adSessionId||(e.A.adSessionId=d);if('loaded'==e.A.type){if(!a.a.a&&'display'==a.a.b)continue;e.A.data=Wa(a,Xa(a,e.A.data))}a.c.filter(function(l){return function(f){return f.type===l.A.type}}(e)).forEach(function(l){return function(f){return f.I(l.A)}}(e))}}
function $a(a,b){a:{b=new Set(b);a=p(a.f.concat(a.b));for(var c=a.next();!c.done;c=a.next())if(c=c.value,b.has(c.event.type)&&'javascript'!=c.origin){b=!0;break a}b=!1}return b?(O('Event owner cannot be registered after its events have already been published.'),!1):!0}function ab(a){var b=a.a.j;return'none'!=b&&'javascript'!=b?(O('Impression event is owned by '+(a.a.j+', not javascript.')),!1):!0}
function bb(a){var b=a.a.i;return'none'!=b&&'javascript'!=b?(O('Media events are owned by '+(a.a.i+', not javascript.')),!1):!0}function Wa(a,b,c){c=void 0===c?!1:c;b=Object.assign({},b);a.a.b&&Object.assign(b,{mediaType:a.a.b});a.a.a&&(c||'definedByJavaScript'!==a.a.a)&&Object.assign(b,{creativeType:a.a.a});return b}function Xa(a,b){return a.a.l?Object.assign({},b,{impressionType:a.a.l}):b}function Q(a,b,c,d){return new Ha({adSessionId:a.a.u||'',timestamp:(new Date).getTime(),type:b,data:d},c)}
function Sa(a){a=a.event;return{adSessionId:a.adSessionId,timestamp:a.timestamp,type:a.type,data:a.data}};function cb(a,b){var c=a.a.K,d=a.a.s;if(c&&!c.O(d)||b)d=J(c),b&&(d.adView.reasons=d.adView.reasons||[b]),b=a.b,'audio'!=b.a.a&&P(b,Q(b,'geometryChange','native',d)),a.a.s=c};function db(a){var b=a&&a.tagName&&'iframe'===a.tagName.toLowerCase();try{b=b&&a instanceof HTMLIFrameElement}catch(c){}return b}function eb(a){var b=a&&a.tagName;try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLElement}catch(c){}return b}function fb(a){var b=a&&a.tagName&&'video'===a.tagName.toLowerCase();try{b=b&&a instanceof a.ownerDocument.defaultView.HTMLVideoElement}catch(c){}return b};function R(a,b,c){this.f=a;this.N=b;this.P=c;this.c=M();this.b=null;this.a=this.g=this.F=void 0;this.R=!0;this.o=void 0;gb(this)}function gb(a){if(!a.b){var b;a:{if((b=a.f.document)&&b.getElementsByClassName&&(b=b.getElementsByClassName('omid-element'))){if(1==b.length){b=b[0];break a}1<b.length&&a.R&&(Ua(a.P,'generic',"More than one element with 'omid-element' class name."),a.R=!1)}b=null}if(fb(b))a.c.g=b;else if(eb(b))a.c.f=b;else return;hb(a)}}
function hb(a){a.c.g?(a.b=a.c.g,a.i()):a.c.f&&(a.b=a.c.f,db(a.b)?a.c.h&&a.i():a.i())}function ib(a){a.a&&(db(a.b)?a.c.h&&(a.K(),jb(a)):(a.K(),jb(a)))}R.prototype.s=function(){this.o&&(this.f.document.removeEventListener('visibilitychange',this.o),this.o=void 0)};R.prototype.i=function(){var a=this;this.o||(this.o=function(){var b=a.f.document.hidden;a.c.w=b?'backgrounded':'foregrounded';cb(a.N,b?'backgrounded':void 0)},this.f.document.addEventListener('visibilitychange',this.o))};
function jb(a){a.F&&(a.c.K=a.F,cb(a.N))}function kb(a){if(a.a&&a.c.h){var b=new F(a.c.h,!1),c=a.a.x;a=a.a.y;b.x+=c;b.y+=a;b.B+=c;b.C+=a;b.L=!0;return b}};function lb(a,b,c){return mb(a,'setInterval')(b,c)}function nb(a,b){mb(a,'clearInterval')(b)}function ob(a,b){mb(a,'clearTimeout')(b)}function mb(a,b){return a.a&&a.a[b]?a.a[b]:pb(a,b)}
function qb(a,b,c,d){if(a.a.document&&a.a.document.body){var e=a.a.document.createElement('img');e.width=1;e.height=1;e.style.display='none';e.src=b;c&&e.addEventListener('load',function(){return c()});d&&e.addEventListener('error',function(){return d()});a.a.document.body.appendChild(e)}else pb(a,'sendUrl')(b,c,d)}function pb(a,b){if(a.a&&a.a.omidNative&&a.a.omidNative[b])return a.a.omidNative[b].bind(a.a.omidNative);throw Error('Native interface method "'+b+'" not found.');};function T(a,b,c,d,e){R.call(this,a,c,e);this.l=b;this.h=void 0;this.j=d}r(T,R);T.prototype.s=function(){void 0!==this.h&&(nb(this.j,this.h),this.h=void 0);R.prototype.s.call(this)};T.prototype.i=function(){var a=this;R.prototype.i.call(this);null==this.b?this.h=void 0:void 0===this.h&&(this.h=lb(this.j,function(){return rb(a)},200),rb(this))};
T.prototype.K=function(){if(this.g){var a=kb(this);if(a){this.a.M=!1;a.M=!0;for(var b=!1,c=0;c<this.a.J.length;c++)if(this.a.J[c].M){this.a.J[c]=a;b=!0;break}b||this.a.J.push(a)}else this.a.M=!0;b=this.l;c=this.c.w;var d=this.c.u,e=this.H();a=new ta;var g=new F(this.g,!1);ua(a,g);Aa(b,g,a,d);if(e)if('backgrounded'===c)K(a,'backgrounded');else if(void 0!==a.a){for(b=0;b<a.g.length;b++)za(a,a.g[b])&&a.l.push(a.g[b]);for(b=0;b<a.i.length;b++){if(c=za(a,a.i[b])){b:{c=a.i[b];for(d=0;d<a.f.length;d++)if(a.f[d].O(c)){c=
!0;break b}c=!1}c=!c}c&&(K(a,'obstructed'),a.f.push(a.i[b]))}ya(a)}else K(a,'notFound');else a.j=['unmeasurable'],a.h=void 0,a.o=0,a.f=[],a.a&&(b=a.a,c={},b=new F((c.x=0,c.y=0,c.width=b.width,c.height=b.height,c),b.a),a.a=b),a.b=va();this.F=a}};T.prototype.H=function(){return sb(this)};
function rb(a){if(void 0!==a.h){if(sb(a)){var b=a.f.top;b=new F(new Ba(b.innerWidth,b.innerHeight),!1)}else b=new F(new Ba(0,0),!1);var c=a.b.getBoundingClientRect();if(null==c.x||isNaN(c.x))c.x=c.left;if(null==c.y||isNaN(c.y))c.y=c.top;c=new F(c,!1);b.O(a.g)&&c.O(a.a)||(a.a=c,a.a.L=!0,a.g=b,a.g.J.push(a.a),ib(a))}}function sb(a){try{var b=a.f.top;return 0<=b.innerHeight&&0<=b.innerWidth}catch(c){}return!1};function U(a,b,c,d){R.call(this,a,c,d);this.G=this.w=this.j=this.l=this.h=void 0}r(U,R);U.prototype.s=function(){this.h&&this.h.disconnect();tb(this);R.prototype.s.call(this)};U.prototype.i=function(){R.prototype.i.call(this);this.b&&(this.h||(this.h=ub(this)),vb(this),wb(this.b)&&xb(this))};
U.prototype.K=function(){if(this.a&&this.G){var a=kb(this);if(a){var b=a;var c=this.G;var d=Math.max(a.x,c.x);var e=Math.max(a.y,c.y),g=Math.min(a.B,c.B);a=Math.min(a.C,c.C);g<=d||a<=e?d=null:(c={},d=new F((c.x=d,c.y=e,c.width=Math.abs(g-d),c.height=Math.abs(a-e),c),!1));d||(d=new F({x:0,y:0,width:0,height:0},!1))}else b=this.a,d=this.G;e=new ta;this.g&&ua(e,this.g);e.a=b;e.b=d;ya(e);this.F=e}};U.prototype.H=function(){return!0};
function tb(a){a.l&&(a.l.disconnect(),a.l=void 0);a.j&&(a.j.disconnect(),a.j=void 0);a.w&&((0,a.f.removeEventListener)('resize',a.w),a.w=void 0)}function vb(a){a.h&&a.b&&(a.h.unobserve(a.b),a.h.observe(a.b))}function wb(a){a=a.getBoundingClientRect();return 0==a.width||0==a.height}
function ub(a){return new a.f.IntersectionObserver(function(b){try{if(b.length){for(var c,d=b[0],e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e]);c=d;a.g=yb(c.rootBounds);a.a=yb(c.boundingClientRect);a.G=yb(c.intersectionRect);ib(a)}}catch(g){a.s(),Ua(a.P,'generic','Problem handling IntersectionObserver callback: '+g.message)}},{root:null,rootMargin:'0px',threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}
function xb(a){a.f.ResizeObserver?a.l||(a.l=zb(a,function(){return Ab(a)}),a.l.observe(a.b)):(a.w||(a.w=function(){return Ab(a)},(0,a.f.addEventListener)('resize',a.w)),a.j||(a.j=new MutationObserver(function(){return Ab(a)}),a.j.observe(a.b,{childList:!1,attributes:!0,subtree:!1})))}function Ab(a){a.b&&!wb(a.b)&&(vb(a),tb(a))}function zb(a,b){return new a.f.ResizeObserver(b)}function yb(a){if(a&&null!==a.x&&null!==a.y&&null!==a.width&&null!==a.height)return new F(a,!1)};function V(a,b,c,d){this.b=a;this.method=b;this.version=c;this.a=d}function Bb(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&'string'===typeof a.omid_message_guid&&'string'===typeof a.omid_message_method&&'string'===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)}function Db(a){return new V(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)}
function Eb(a){var b={};b=(b.omid_message_guid=a.b,b.omid_message_method=a.method,b.omid_message_version=a.version,b);void 0!==a.a&&(b.omid_message_args=a.a);return b};function Fb(a){this.c=a};function W(a){this.c=a;this.handleExportedMessage=W.prototype.f.bind(this)}r(W,Fb);W.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.handleExportedMessage(Eb(a),this)};W.prototype.f=function(a,b){Bb(a)&&this.a&&this.a(Db(a),b)};function Gb(a){this.b=a}Gb.prototype.a=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.b('SessionService.'+a,this.c.bind(this,a,c),c)};Gb.prototype.c=function(a,b,c){switch(a){case 'registerSessionObserver':a=p(b).next().value,a(c)}};function X(a,b){return a.a.bind(a,b)}
function Hb(a){var b=void 0===b?N:b;null==b.omidSessionInterface&&(a={setClientInfo:X(a,'setClientInfo'),registerSessionObserver:X(a,'registerSessionObserver'),startAdSession:X(a,'startSession'),finishAdSession:X(a,'finishSession'),reportError:X(a,'sessionError'),registerAdEvents:X(a,'registerAdEvents'),registerMediaEvents:X(a,'registerMediaEvents'),injectVerificationScriptResources:X(a,'injectVerificationScriptResources'),setSlotElement:X(a,'setSlotElement'),setVideoElement:X(a,'setVideoElement'),
setElementBounds:X(a,'setElementBounds'),setCreativeType:X(a,'setCreativeType'),setImpressionType:X(a,'setImpressionType'),setContentUrl:X(a,'setContentUrl'),adEvents:{impressionOccurred:X(a,'impressionOccurred'),loaded:X(a,'loaded')},mediaEvents:{start:X(a,'start'),firstQuartile:X(a,'firstQuartile'),midpoint:X(a,'midpoint'),thirdQuartile:X(a,'thirdQuartile'),complete:X(a,'complete'),pause:X(a,'pause'),resume:X(a,'resume'),bufferStart:X(a,'bufferStart'),bufferFinish:X(a,'bufferFinish'),skipped:X(a,
'skipped'),volumeChange:X(a,'volumeChange'),playerStateChange:X(a,'playerStateChange'),adUserInteraction:X(a,'adUserInteraction')}},a.mediaEvents.loaded=a.adEvents.loaded,a.videoEvents=a.mediaEvents,Object.freeze(a),Object.defineProperty(b,'omidSessionInterface',{value:a,writable:!1}))};function Ib(a,b){this.c=b=void 0===b?N:b;var c=this;a.addEventListener('message',function(d){if('object'===typeof d.data){var e=d.data;Bb(e)&&d.source&&c.a&&c.a(Db(e),d.source)}})}r(Ib,Fb);Ib.prototype.b=function(a,b){b=void 0===b?this.c:b;if(!b)throw Error('Message destination must be defined at construction time or when sending the message.');b.postMessage(Eb(a),'*')};function Jb(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=16*Math.random()|0;return'y'===a?(b&3|8).toString(16):b.toString(16)})};function Kb(a){if(!a.a||!a.a.document)throw Error('OMID Service Script is not running within a window.');var b=a.b;a.b=[];b.forEach(function(c){try{var d=a.c.G?'limited':'full',e=c.accessMode,g='string'===typeof e&&-1!==Object.values(oa).indexOf(e)?c.accessMode:null;var l=g?g:d;c.accessMode=l;a:{var f=c.resourceUrl,k=a.a.location.origin;try{var h=new URL(f,k);break a}catch(y){}try{h=new URL(f);break a}catch(y){}h=null}if(d=h){var m=Jb(),v=a.a.document,C=v.createElement('iframe');C.id='omid-verification-script-frame-'+
m;C.style.display='none';['full','limited'].includes(l)?C.srcdoc="<html><head>\n<script type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionId': '"+(m+'\',\n};\x3c/script>\n<script type="text/javascript" src="')+d.href+'">\x3c/script>\n</head><body></body></html>':'domain'==l&&(C.src=Lb(a,m,d).href);['domain','limited'].includes(l)&&(C.sandbox='allow-scripts');v.body.appendChild(C);var w=c.vendorKey,x=c.verificationParameters;w=void 0===w?
'':w;x=void 0===x?'':x;w&&'string'===typeof w&&''!==w&&x&&'string'===typeof x&&''!==x&&(a.f.i[w]=x);a.c.F.set(m,c)}}catch(y){Ja('OMID verification script '+c.resourceUrl+' failed to load: '+y)}})}
function Lb(a,b,c){var d='/.well-known/omid/omloader-v1.html#';(new Map([['verificationScriptUrl',c.href],['injectionId',b]])).forEach(function(e,g){d+=encodeURIComponent(g)+'='+encodeURIComponent(e)+'&'});b=null;try{b=new URL(d,a.a.parent.location.origin)}catch(e){throw Error('OMID Service Script cannot access the parent window.');}return b};function Mb(){var a=Nb,b=Ob,c=this;this.c=Y;this.b=a;this.a=M();this.g=b;this.f=!1;this.registerSessionObserver(function(d){return Pb(c,d)})}n=Mb.prototype;n.registerSessionObserver=function(a){Ra(this.c,a)};n.setSlotElement=function(a){eb(a)?(this.a.f=a,this.b&&hb(this.b)):O('setSlotElement called with a non-HTMLElement.  It will be ignored.')};n.setElementBounds=function(a){this.a.h=a;this.b&&hb(this.b);this.b&&ib(this.b)};n.error=function(a,b){Ua(this.c,a,b)};
n.registerAdEvents=function(){var a=this.c;$a(a,['impression'])&&ab(a)&&(a.a.j='javascript')};n.registerMediaEvents=function(){var a=this.c;$a(a,Object.values(D))&&bb(a)&&(a.a.i='javascript')};
function Z(a,b,c){if('impression'==b)ab(a.c)&&(b=a.c,c=(c=M().s)?J(c):void 0,c=Wa(b,Xa(b,c)),P(b,Q(b,'impression','javascript',c)),a.b&&gb(a.b));else{if('loaded'==b){var d=c;d=void 0===d?null:d;bb(a.c)&&(c=a.c,c.a.a||'display'!=c.a.b)&&(d=Q(c,'loaded','javascript',Wa(c,Xa(c,void 0===d?null:d))),P(c,d))}else if(bb(a.c)){d=a.c;'start'!==b&&'volumeChange'!==b||null!=(c&&c.deviceVolume)||(c.deviceVolume=d.a.N);if(c&&('start'===b||'volumeChange'===b)){var e=c.videoPlayerVolume,g=c.mediaPlayerVolume;null!=
e?(Object.assign(c,{mediaPlayerVolume:e}),d.a.H=e):null!=g&&(Object.assign(c,{videoPlayerVolume:g}),d.a.H=g)}P(d,Q(d,b,'javascript',c))}['loaded','start'].includes(b)&&a.b&&gb(a.b)}}n.injectVerificationScriptResources=function(a){var b=this.g;b.b.push.apply(b.b,q(a));if(this.f)try{Kb(this.g)}catch(c){O(c.message)}};
n.setCreativeType=function(a,b){b=void 0===b?null:b;if(!this.a.b||this.a.a)this.a.a=a,'video'==a||'audio'==a?this.a.b='video':'htmlDisplay'==a||'nativeDisplay'==a?this.a.b='display':'definedByJavaScript'==a&&b&&(this.a.b='none'==b?'display':'video')};n.setImpressionType=function(a){if(!this.a.b||this.a.a)this.a.l=a};
function Pb(a,b){if('sessionStart'===b.type){a.f=!0;try{Kb(a.g)}catch(c){O(c.message)}}'sessionFinish'===b.type&&(a.f=!1,(b=M().c)&&'native'==b.adSessionType||a.registerSessionObserver(function(c){return Pb(a,c)}))}n.setClientInfo=function(a,b,c){var d=this.a.c||{};d.omidJsInfo=Object.assign({},d.omidJsInfo,{sessionClientVersion:a,partnerName:b,partnerVersion:c});this.a.c=d;return this.a.c.omidJsInfo.serviceVersion};function Qb(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)}function Rb(a){a=a.split('-')[0].split('.');for(var b=['1','0','3'],c=0;3>c;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(d>e)break;else if(d<e)return!1}return!0};function Sb(a,b){return Qb(a)&&Rb(a)?b?b:[]:b&&'string'===typeof b?JSON.parse(b):[]};function Tb(){var a=Ub,b=this;var c=void 0===c?omidGlobal:c;this.a=a;this.f=c;this.b=new W;this.f.omid=this.f.omid||{};this.f.omid.v1_SessionServiceCommunication=this.b;this.c=c&&c.addEventListener&&c.postMessage?new Ib(c):null;this.g=null;this.b.a=this.h.bind(this);this.c&&(this.c.a=this.i.bind(this));this.j=new Gb(function(d,e,g){try{Vb(b,d,e,g)}catch(l){O(Wb(l))}});Hb(this.j)}Tb.prototype.h=function(a,b){Xb(this,a,b,this.b)};
Tb.prototype.i=function(a,b){this.g||(this.g=b);this.g!=b?O('The source window of session client post messages cannot be changed from the source of the first message.'):Xb(this,a,b,this.c)};function Xb(a,b,c,d){function e(k){for(var h=[],m=0;m<arguments.length;++m)h[m]=arguments[m];h=new V(g,'response',f,Qb(f)&&Rb(f)?h:JSON.stringify(h));d.b(h,c)}var g=b.b,l=b.method,f=b.version;b=Sb(f,b.a);try{Vb(a,l,e,b)}catch(k){d.b(new V(g,'error',f,Wb(k)),c)}}
function Vb(a,b,c,d){switch(b){case 'SessionService.registerAdEvents':a.a.registerAdEvents();break;case 'SessionService.registerMediaEvents':a.a.registerMediaEvents();break;case 'SessionService.registerSessionObserver':a.a.registerSessionObserver(c);break;case 'SessionService.setSlotElement':var e=p(d).next().value;a.a.setSlotElement(e);break;case 'SessionService.setVideoElement':e=p(d).next().value;a=a.a;fb(e)?(a.a.g=e,a.b&&hb(a.b)):O('setVideoElement called with a non-HTMLVideoElement. It will be ignored.');
break;case 'SessionService.setElementBounds':e=p(d).next().value;a.a.setElementBounds(e);break;case 'SessionService.startSession':c=p(d).next().value;null!=c&&'object'===typeof c?(b=c.customReferenceData,c=c.underEvaluation,'string'===typeof b||(b=void 0),'boolean'===typeof c||(c=!1),c={customReferenceData:b,underEvaluation:c}):c=null;if(null==c)break;a=a.a;b=c;var g;e=void 0===e?null:e;null==g&&(g=Jb());b.canMeasureVisibility=a.b.H();a.a.u=g;c=a.a;b=g=b;void 0!==b.contentUrl&&(c.o=b.contentUrl,b.contentUrl=
void 0);b=c.c||{};g.omidJsInfo=Object.assign({},b.omidJsInfo||{},g.omidJsInfo||{});b=g=Object.assign({},b,g);c.G||(null!=c.g?(b.videoElement=c.g,b.accessMode='full'):null!=c.f&&(b.slotElement=c.f,b.accessMode='full'));c.c=g;Va(a.c,e);a.b&&gb(a.b);break;case 'SessionService.finishSession':a=a.a;Za(a.c);a.b.s();break;case 'SessionService.impressionOccurred':Z(a.a,'impression');break;case 'SessionService.loaded':(e=p(d).next().value)?(c={skippable:e.isSkippable,autoPlay:e.isAutoPlay,position:e.position},
e.isSkippable&&(c.skipOffset=e.skipOffset),Z(a.a,'loaded',c)):Z(a.a,'loaded');break;case 'SessionService.start':c=p(d);e=c.next().value;c=c.next().value;Z(a.a,'start',{duration:e,mediaPlayerVolume:c});break;case 'SessionService.firstQuartile':Z(a.a,'firstQuartile');break;case 'SessionService.midpoint':Z(a.a,'midpoint');break;case 'SessionService.thirdQuartile':Z(a.a,'thirdQuartile');break;case 'SessionService.complete':Z(a.a,'complete');break;case 'SessionService.pause':Z(a.a,'pause');break;case 'SessionService.resume':Z(a.a,
'resume');break;case 'SessionService.bufferStart':Z(a.a,'bufferStart');break;case 'SessionService.bufferFinish':Z(a.a,'bufferFinish');break;case 'SessionService.skipped':Z(a.a,'skipped');break;case 'SessionService.volumeChange':e={mediaPlayerVolume:p(d).next().value};Z(a.a,'volumeChange',e);break;case 'SessionService.playerStateChange':e={state:p(d).next().value};Z(a.a,'playerStateChange',e);break;case 'SessionService.adUserInteraction':e={interactionType:p(d).next().value};Z(a.a,'adUserInteraction',
e);break;case 'SessionService.setClientInfo':b=p(d);e=b.next().value;g=b.next().value;b=b.next().value;a=a.a.setClientInfo(e,g,b);c(a);break;case 'SessionService.injectVerificationScriptResources':e=p(d).next().value;a.a.injectVerificationScriptResources(e);break;case 'SessionService.setCreativeType':e=p(d).next().value;a.a.setCreativeType(e);break;case 'SessionService.setImpressionType':e=p(d).next().value;a.a.setImpressionType(e);break;case 'SessionService.setContentUrl':e=p(d).next().value;a.a.a.o=
e;break;case 'SessionService.sessionError':c=p(d),e=c.next().value,c=c.next().value,a.a.error(e,c)}}function Wb(a){return'\n        name: '+a.name+'\n        message: '+a.message+'\n        filename: '+a.filename+'\n        lineNumber: '+a.lineNumber+'\n        columnNumber: '+a.columnNumber+'\n        stack: '+a.stack+'\n        toString(): '+a.toString()};function Yb(){var a=Y,b=Zb;var c=void 0===c?N:c;this.g=a;this.a=b;this.h={};this.f={};this.c=new W;c.omid=c.omid||{};c.omid.v1_VerificationServiceCommunication=this.c;this.b=null;c&&c.addEventListener&&c.postMessage&&(this.b=new Ib(c));this.c.a=this.i.bind(this);this.b&&(this.b.a=this.j.bind(this))}function $b(a,b,c,d){qb(a.a,b,c,d)}function ac(a,b,c,d){pb(a.a,'downloadJavaScriptResource')(b,c,d)}Yb.prototype.j=function(a,b){this.b&&bc(this,a,b,this.b)};Yb.prototype.i=function(a,b){bc(this,a,b,this.c)};
function bc(a,b,c,d){function e(E){for(var S=[],ha=0;ha<arguments.length;++ha)S[ha]=arguments[ha];S=new V(g,'response',f,Qb(f)&&Rb(f)?S:JSON.stringify(S));d.b(S,c)}var g=b.b,l=b.method,f=b.version;b=Sb(f,b.a);try{switch(l){case 'VerificationService.addEventListener':var k=p(b).next().value;Pa(a.g,k,e);break;case 'VerificationService.addSessionListener':var h=p(b),m=h.next().value,v=h.next().value;Ra(a.g,e,m,v);break;case 'VerificationService.sendUrl':var C=p(b).next().value;$b(a,C,function(){return e(!0)},
function(){return e(!1)});break;case 'VerificationService.setTimeout':var w=p(b),x=w.next().value,y=w.next().value;a.h[x]=mb(a.a,'setTimeout')(e,y);break;case 'VerificationService.clearTimeout':var gc=p(b).next().value;ob(a.a,a.h[gc]);break;case 'VerificationService.setInterval':var Cb=p(b),hc=Cb.next().value,ic=Cb.next().value;a.f[hc]=lb(a.a,e,ic);break;case 'VerificationService.clearInterval':var jc=p(b).next().value;nb(a.a,a.f[jc]);break;case 'VerificationService.injectJavaScriptResource':var kc=
p(b).next().value;ac(a,kc,function(E){return e(!0,E)},function(){return e(!1)});break;case 'VerificationService.getVersion':p(b).next();var lc=M().c.omidJsInfo;e(lc.serviceVersion)}}catch(E){d.b(new V(g,'error',f,'\n              name: '+E.name+'\n              message: '+E.message+'\n              filename: '+E.filename+'\n              lineNumber: '+E.lineNumber+'\n              columnNumber: '+E.columnNumber+'\n              stack: '+E.stack+'\n              toString(): '+E.toString()+'\n          '),
c)}};function cc(){var a=N.document.createElement('iframe');a.id='omid_v1_present';a.name='omid_v1_present';a.style.display='none';N.document.body.appendChild(a)}function dc(){var a=new MutationObserver(function(b){b.forEach(function(c){'BODY'===c.addedNodes[0].nodeName&&(cc(),a.disconnect())})});a.observe(N.document.documentElement,{childList:!0})};var Y=new Ka,Zb=new function(){var a;this.a=a=void 0===a?omidGlobal:a};new Yb;var ec=new function(){},fc=new function(){},mc=new function(){this.b=Y;this.a=M()},nc;N?nc=N.IntersectionObserver&&(N.MutationObserver||N.ResizeObserver)?new U(N,ec,mc,Y):new T(N,fc,mc,Zb,Y):nc=null;var Nb=nc,Ob=new function(){var a=Y;var b=void 0===b?N:b;this.f=a;this.a=b;this.c=M();this.b=[]},Ub=new Mb;M();new Tb;
if(N.frames&&N.document&&!('omid_v1_present'in N.frames)){var oc;if(oc=null==N.document.body)oc='MutationObserver'in N;oc?dc():N.document.body?cc():N.document.write('<iframe style="display:none" id="omid_v1_present" name="omid_v1_present"></iframe>')};
}).call(this, this);

