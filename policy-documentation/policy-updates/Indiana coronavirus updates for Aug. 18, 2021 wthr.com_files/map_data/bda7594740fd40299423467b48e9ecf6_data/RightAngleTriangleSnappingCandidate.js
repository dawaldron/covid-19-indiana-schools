// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../SnappingConstraint ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(f,g,h,m,n,b,k,p){b=function(l){function c({coordinateHelper:a,targetPoint:q,point1:d,point2:e}){a=l.call(this,a,q,new n.PlanarCircleConstraint(a,h.lerp(r,d,e,.5),.5*h.distance(d,e)))||this;a.p1=d;a.p2=e;return a}g._inheritsLoose(c,l);g._createClass(c,[{key:"hints",get:function(){return[new k.LineSnappingHint(1,
this.targetPoint,this.p1),new k.LineSnappingHint(1,this.targetPoint,this.p2),new p.RightAngleSnappingHint(this.p1,this.targetPoint,this.p2)]}}]);return c}(b.SnappingCandidate);const r=m.create();f.RightAngleTriangleSnappingCandidate=b;Object.defineProperty(f,"__esModule",{value:!0})});