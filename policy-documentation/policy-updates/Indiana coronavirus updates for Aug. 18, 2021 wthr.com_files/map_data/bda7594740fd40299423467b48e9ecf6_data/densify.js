// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../geometry/support/jsonUtils","../utils"],function(e,g,h,k,f){function d(){d=g._asyncToGenerator(function*(a,b,c){const l=b.geometries[0].spatialReference;a=f.parseUrl(a);b={...a.query,f:"json",...b.toJSON()};c=f.asValidOptions(b,c);return h(a.path+"/densify",c).then(({data:m})=>(m.geometries||[]).map(n=>k.fromJSON(n).set({spatialReference:l})))});return d.apply(this,arguments)}e.densify=function(a,b,c){return d.apply(this,
arguments)};Object.defineProperty(e,"__esModule",{value:!0})});