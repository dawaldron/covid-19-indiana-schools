// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass".split(" "),function(h,d,a,k,m,n,p,q,l){var b;a=b=function(e){function c(){var f=e.apply(this,arguments)||this;f.url="";return f}h._inheritsLoose(c,e);var g=c.prototype;g.destroy=function(){this.url=""};g.clone=function(){return new b({url:this.url})};
return c}(a.JSONSupport);d.__decorate([k.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"url",void 0);return a=b=d.__decorate([l.subclass("esri.webdoc.support.Thumbnail")],a)});