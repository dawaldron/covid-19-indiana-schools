// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../utils ../support/RelationParameters ../../tasks/operations/relation".split(" "),function(e,g,h,f,k,l){function d(){d=g._asyncToGenerator(function*(b,a,c){a=k.from(a);a=l.relationToRESTParameters(a);b=f.parseUrl(b);c=f.asValidOptions({...b.query,f:"json",...a},c);return h(b.path+"/relation",c).then(({data:m})=>m.relations)});return d.apply(this,arguments)}e.relation=function(b,a,c){return d.apply(this,arguments)};Object.defineProperty(e,
"__esModule",{value:!0})});