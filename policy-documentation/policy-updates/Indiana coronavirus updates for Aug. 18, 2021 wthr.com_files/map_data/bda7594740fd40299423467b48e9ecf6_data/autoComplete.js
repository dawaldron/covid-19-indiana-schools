// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../utils ./utils ../../geometry/Polygon".split(" "),function(e,l,r,m,f,g,n){function d(){d=l._asyncToGenerator(function*(a,b,h,c){const k=b[0].spatialReference;a=f.parseUrl(a);b={...a.query,f:"json",sr:JSON.stringify(k.toJSON()),polygons:JSON.stringify(g.encodeGeometries(b).geometries),polylines:JSON.stringify(g.encodeGeometries(h).geometries)};c=f.asValidOptions(b,c);return m(a.path+"/autoComplete",c).then(({data:p})=>
(p.geometries||[]).map(({rings:q})=>new n({spatialReference:k,rings:q})))});return d.apply(this,arguments)}e.autoComplete=function(a,b,h,c){return d.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});