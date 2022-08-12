// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../ArcadePortal ../Attachment ../Dictionary ../Feature ../../chunks/languageUtils ../featureset/support/shared ./convertdirection ./hash ../../geometry/Extent ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/SpatialReference".split(" "),function(t,u,x,r,m,e,v,y,z,A,B,C,D,E,F){function w(c,d){if(c.x===d.x&&c.y===d.y){if(c.hasZ){if(c.z!==d.z)return!1}else if(d.hasZ)return!1;if(c.hasM){if(c.m!==d.m)return!1}else if(d.hasM)return!1;
return!0}return!1}function l(c,d,f){if(null===c)d.updateUint8Array([0,139]);else if(e.isArray(c)){d.updateUint8Array([61]);if(f.map.has(c))c=f.map.get(c),d.updateIntArray([c^61237541]);else{f.map.set(c,f.currentLength++);for(var h of c)l(h,d,f);f.map.delete(c);f.currentLength--}d.updateUint8Array([199])}else if(e.isImmutableArray(c)){d.updateUint8Array([61]);if(f.map.has(c))c=f.map.get(c),d.updateIntArray([c^61237541]);else{f.map.set(c,f.currentLength++);for(var b of c.toArray())l(b,d,f);f.map.delete(c);
f.currentLength--}d.updateUint8Array([199])}else if(e.isDate(c))d.updateIntArray([c.getTime()]),d.updateUint8Array([241]);else if(e.isString(c))d.updateIntArray([c.length]),d.updateWithString(c),d.updateUint8Array([41]);else if(e.isBoolean(c))d.updateUint8Array([!0===c?1:0,113]);else if(e.isNumber(c))d.updateFloatArray([c]),d.updateUint8Array([173]);else{if(c instanceof x)throw Error("Type not supported in Hash");if(c instanceof u)throw Error("Type not supported in Hash");if(c instanceof r){d.updateUint8Array([223]);
if(f.map.has(c))c=f.map.get(c),d.updateIntArray([c^61237541]);else{f.map.set(c,f.currentLength++);for(var g of c.keys())d.updateIntArray([g.length]),d.updateWithString(g),d.updateUint8Array([251]),h=c.field(g),l(h,d,f),d.updateUint8Array([239]);f.map.delete(c);f.currentLength--}d.updateUint8Array([73])}else{if(c instanceof m)throw Error("Type not supported in Hash");if(c instanceof C)d.updateIntArray([3833836621]),d.updateIntArray([0]),d.updateFloatArray([c.x]),d.updateIntArray([1]),d.updateFloatArray([c.y]),
c.hasZ&&(d.updateIntArray([2]),d.updateFloatArray([c.z])),c.hasM&&(d.updateIntArray([3]),d.updateFloatArray([c.m])),d.updateIntArray([3765347959]),l(c.spatialReference.wkid,d,f);else if(c instanceof D){d.updateIntArray([1266616829]);for(g=0;g<c.rings.length;g++){b=c.rings[g];h=[];var a=null;let k=null;for(let n=0;n<b.length;n++){const p=c.getPoint(g,n);if(0===n)a=p;else if(w(k,p))continue;k=p;n===b.length-1&&w(a,p)||h.push(p)}d.updateIntArray([1397116793,h.length]);for(b=0;b<h.length;b++)a=h[b],d.updateIntArray([3962308117,
b]),l(a,d,f),d.updateIntArray([2716288009]);d.updateIntArray([2278822459])}d.updateIntArray([3878477243]);l(c.spatialReference.wkid,d,f)}else if(c instanceof E){d.updateIntArray([4106883559]);for(g=0;g<c.paths.length;g++){h=c.paths[g];d.updateIntArray([1397116793,h.length]);for(b=0;b<h.length;b++)d.updateIntArray([3962308117,b]),l(c.getPoint(g,b),d,f),d.updateIntArray([2716288009]);d.updateIntArray([2278822459])}d.updateIntArray([2568784753]);l(c.spatialReference.wkid,d,f)}else if(c instanceof B){d.updateIntArray([588535921,
c.points.length]);for(g=0;g<c.points.length;g++)h=c.getPoint(g),d.updateIntArray([g]),l(h,d,f);d.updateIntArray([1700171621]);l(c.spatialReference.wkid,d,f)}else if(c instanceof A)d.updateIntArray([3483648373]),d.updateIntArray([0]),d.updateFloatArray([c.xmax]),d.updateIntArray([1]),d.updateFloatArray([c.xmin]),d.updateIntArray([2]),d.updateFloatArray([c.ymax]),d.updateIntArray([3]),d.updateFloatArray([c.ymin]),c.hasZ&&(d.updateIntArray([4]),d.updateFloatArray([c.zmax]),d.updateIntArray([5]),d.updateFloatArray([c.zmin])),
c.hasM&&(d.updateIntArray([6]),d.updateFloatArray([c.mmax]),d.updateIntArray([7]),d.updateFloatArray([c.mmin])),d.updateIntArray([3622027469]),l(c.spatialReference.wkid,d,f);else if(c instanceof F)d.updateIntArray([14]),void 0!==c.wkid&&null!==c.wkid&&d.updateIntArray([c.wkid]),c.wkt&&d.updateWithString(c.wkt);else{if(e.isFunctionParameter(c))throw Error("Type not supported in Hash");if(e.isFeatureSet(c))throw Error("Type not supported in Hash");e.isFeatureSetCollection(c);throw Error("Type not supported in Hash");
}}}}t.registerFunctions=function(c,d){c.portal=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);return new u(e.toString(a[0]))})};c.trim=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);return e.toString(a[0]).trim()})};c.tohex=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);b=e.toNumber(a[0]);return isNaN(b)?b:b.toString(16)})};c.upper=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);return e.toString(a[0]).toUpperCase()})};c.proper=function(f,h){return d(f,
h,function(b,g,a){e.pcCheck(a,1,2);b=1;2===a.length&&"firstword"===e.toString(a[1]).toLowerCase()&&(b=2);g=/\s/;a=e.toString(a[0]);let k="",n=!0;for(let p=0;p<a.length;p++){let q=a[p];g.test(q)?1===b&&(n=!0):q.toUpperCase()!==q.toLowerCase()&&(n?(q=q.toUpperCase(),n=!1):q=q.toLowerCase());k+=q}return k})};c.lower=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);return e.toString(a[0]).toLowerCase()})};c.guid=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,0,1);if(0<a.length)switch(e.toString(a[0]).toLowerCase()){case "digits":return e.generateUUID().replace("-",
"").replace("-","").replace("-","").replace("-","");case "digits-hyphen":return e.generateUUID();case "digits-hyphen-parentheses":return"("+e.generateUUID()+")"}return"{"+e.generateUUID()+"}"})};c.console=function(f,h){return d(f,h,function(b,g,a){0!==a.length&&(1===a.length?f.console(e.toString(a[0])):f.console(e.toString(a)));return e.voidOperation})};c.mid=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,3);b=e.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);if(2===a.length)return e.toString(a[0]).substr(b);
g=e.toNumber(a[2]);if(isNaN(g))return"";0>g&&(g=0);return e.toString(a[0]).substr(b,g)})};c.find=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,3);b=0;if(2<a.length){b=e.toNumber(e.defaultUndefined(a[2],0));if(isNaN(b))return-1;0>b&&(b=0)}return e.toString(a[1]).indexOf(e.toString(a[0]),b)})};c.left=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,2);b=e.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);return e.toString(a[0]).substr(0,b)})};c.right=function(f,h){return d(f,h,function(b,
g,a){e.pcCheck(a,2,2);b=e.toNumber(a[1]);if(isNaN(b))return"";0>b&&(b=0);return e.toString(a[0]).substr(-1*b,b)})};c.split=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,4);b=e.toNumber(e.defaultUndefined(a[2],-1));g=e.toBoolean(e.defaultUndefined(a[3],!1));-1===b||null===b||!0===g?a=e.toString(a[0]).split(e.toString(a[1])):(isNaN(b)&&(b=-1),-1>b&&(b=-1),a=e.toString(a[0]).split(e.toString(a[1]),b));if(!1===g)return a;g=[];for(let k=0;k<a.length&&!(-1!==b&&g.length>=b);k++)""!==a[k]&&void 0!==
a[k]&&g.push(a[k]);return g})};c.text=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,2);return e.toStringExplicit(a[0],a[1])})};c.concatenate=function(f,h){return d(f,h,function(b,g,a){b=[];if(1>a.length)return"";if(e.isArray(a[0])){g=e.defaultUndefined(a[2],"");for(var k=0;k<a[0].length;k++)b[k]=e.toStringExplicit(a[0][k],g);return 1<a.length?b.join(a[1]):b.join("")}if(e.isImmutableArray(a[0])){g=e.defaultUndefined(a[2],"");for(k=0;k<a[0].length();k++)b[k]=e.toStringExplicit(a[0].get(k),
g);return 1<a.length?b.join(a[1]):b.join("")}for(g=0;g<a.length;g++)b[g]=e.toStringExplicit(a[g]);return b.join("")})};c.reverse=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);if(e.isArray(a[0]))return b=a[0].slice(0),b.reverse(),b;if(e.isImmutableArray(a[0]))return b=a[0].toArray().slice(0),b.reverse(),b;throw Error("Invalid Parameter");})};c.replace=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,3,4);b=e.toString(a[0]);g=e.toString(a[1]);const k=e.toString(a[2]);return(4===
a.length?e.toBoolean(a[3]):1)?e.multiReplace(b,g,k):b.replace(g,k)})};c.schema=function(f,h){return d(f,h,function(b,g,a){if(a[0]instanceof m)return(b=a[0].schema())?r.convertObjectToArcadeDictionary(b):null;throw Error("Invalid Parameter");})};c.subtypes=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);if(a[0]instanceof m)return(b=a[0].subtypes())?r.convertObjectToArcadeDictionary(b):null;throw Error("Invalid Parameter");})};c.subtypecode=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,
1,1);if(a[0]instanceof m){b=a[0].subtypes();if(!b)return null;if(b.subtypeField&&a[0].hasField(b.subtypeField)){a=a[0].field(b.subtypeField);for(const k of b.subtypes)if(k.code===a)return k.code}return null}throw Error("Invalid Parameter");})};c.subtypename=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);if(a[0]instanceof m){b=a[0].subtypes();if(!b)return"";if(b.subtypeField&&a[0].hasField(b.subtypeField)){a=a[0].field(b.subtypeField);for(const k of b.subtypes)if(k.code===a)return k.name}return""}throw Error("Invalid Parameter");
})};c.gdbversion=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);if(a[0]instanceof m)return a[0].gdbVersion();throw Error("Invalid Parameter");})};c.domain=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,3);if(a[0]instanceof m)return(b=a[0].fullDomain(e.toString(a[1]),void 0===a[2]?void 0:e.toNumber(a[2])))&&b.domain?"coded-value"===b.domain.type||"codedValue"===b.domain.type?r.convertObjectToArcadeDictionary({type:"codedValue",name:b.domain.name,dataType:v.layerFieldEsriConstants[b.field.type],
codedValues:b.domain.codedValues.map(k=>({name:k.name,code:k.code}))}):r.convertObjectToArcadeDictionary({type:"range",name:b.domain.name,dataType:v.layerFieldEsriConstants[b.field.type],min:b.domain.min,max:b.domain.max}):null;throw Error("Invalid Parameter");})};c.domainname=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,2,4);if(a[0]instanceof m)return a[0].domainValueLookup(e.toString(a[1]),a[2],void 0===a[3]?void 0:e.toNumber(a[3]));throw Error("Invalid Parameter");})};c.domaincode=function(f,
h){return d(f,h,function(b,g,a){e.pcCheck(a,2,4);if(a[0]instanceof m)return a[0].domainCodeLookup(e.toString(a[1]),a[2],void 0===a[3]?void 0:e.toNumber(a[3]));throw Error("Invalid Parameter");})};c.urlencode=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);if(null===a[0])return"";if(a[0]instanceof r){b="";for(const k of a[0].keys())g=a[0].field(k),""!==b&&(b+="\x26"),b=null===g?b+(encodeURIComponent(k)+"\x3d"):b+(encodeURIComponent(k)+"\x3d"+encodeURIComponent(g));return b}return encodeURIComponent(e.toString(a[0]))})};
c.hash=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,1,1);b=new z.XXH(0);l(a[0],b,{map:new Map,currentLength:0});return b.digest()})};c.convertdirection=function(f,h){return d(f,h,function(b,g,a){e.pcCheck(a,3,3);return y.convertDirection(a[0],a[1],a[2])})}};Object.defineProperty(t,"__esModule",{value:!0})});