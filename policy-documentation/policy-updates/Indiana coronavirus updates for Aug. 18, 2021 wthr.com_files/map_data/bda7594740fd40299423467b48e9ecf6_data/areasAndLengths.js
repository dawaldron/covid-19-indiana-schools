// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],function(e,g,h,f){function d(){d=g._asyncToGenerator(function*(a,b,c){a=f.parseUrl(a);b={...a.query,f:"json",...b.toJSON()};c=f.asValidOptions(b,c);return h(a.path+"/areasAndLengths",c).then(k=>k.data)});return d.apply(this,arguments)}e.areasAndLengths=function(a,b,c){return d.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});