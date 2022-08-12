// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../utils ../../geometry/Polygon".split(" "),function(d,g,q,h,e,k){function c(){c=g._asyncToGenerator(function*(b,a,f){b=e.parseUrl(b);const l={...b.query,f:"json",...a.toJSON()},m=a.outSpatialReference||a.geometries[0].spatialReference;a=e.asValidOptions(l,f);return h(b.path+"/buffer",a).then(n=>(n.data.geometries||[]).map(({rings:p})=>new k({spatialReference:m,rings:p})))});return c.apply(this,arguments)}d.buffer=
function(b,a,f){return c.apply(this,arguments)};Object.defineProperty(d,"__esModule",{value:!0})});