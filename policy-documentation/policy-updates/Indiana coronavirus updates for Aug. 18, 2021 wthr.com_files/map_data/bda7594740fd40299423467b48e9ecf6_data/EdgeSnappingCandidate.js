// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingConstraint","./FeatureSnappingCandidate","../hints/LineSnappingHint"],function(d,e,g,b,h){b=function(f){function c(a){return f.call(this,{...a,constraint:new g.LineConstraint(a.coordinateHelper,a.edgeStart,a.edgeEnd)})||this}e._inheritsLoose(c,f);e._createClass(c,[{key:"hints",get:function(){return[new h.LineSnappingHint(1,this.constraint.start,this.constraint.end)]}}]);return c}(b.FeatureSnappingCandidate);d.EdgeSnappingCandidate=
b;Object.defineProperty(d,"__esModule",{value:!0})});