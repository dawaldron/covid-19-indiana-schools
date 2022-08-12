// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils"],function(e,h,k,f){function d(){d=h._asyncToGenerator(function*(a,b,c){a=f.parseUrl(a);b={...a.query,f:"json",...b.toJSON()};c=f.asValidOptions(b,c);return k(a.path+"/distance",c).then(({data:g})=>g&&g.distance)});return d.apply(this,arguments)}e.distance=function(a,b,c){return d.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0})});