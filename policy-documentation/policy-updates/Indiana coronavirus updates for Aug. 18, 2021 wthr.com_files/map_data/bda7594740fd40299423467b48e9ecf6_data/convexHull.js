// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/support/jsonUtils ../utils ./utils".split(" "),function(e,h,k,l,f,m){function d(){d=h._asyncToGenerator(function*(a,b,c){const g=b[0].spatialReference;a=f.parseUrl(a);b={...a.query,f:"json",sr:JSON.stringify(g.toJSON()),geometries:JSON.stringify(m.encodeGeometries(b))};c=f.asValidOptions(b,c);return k(a.path+"/convexHull",c).then(({data:n})=>l.fromJSON(n.geometry).set({spatialReference:g}))});return d.apply(this,arguments)}
e.convexHull=function(a,b,c){return d.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});