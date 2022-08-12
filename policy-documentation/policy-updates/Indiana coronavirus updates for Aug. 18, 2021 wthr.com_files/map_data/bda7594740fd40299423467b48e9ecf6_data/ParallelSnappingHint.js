// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../snappingUtils ./SnappingHint".split(" "),function(d,h,e,k,f,l){k.getLogger("esri.views.interactive.snapping.hints.ParallelSnappingHint");e=function(g){function b(a,m){var c=g.call(this)||this;c.lineStart=a;c.lineEnd=m;return c}h._inheritsLoose(b,g);b.prototype.equals=function(a){return a instanceof b?f.objectEqual(this.lineStart,a.lineStart)&&f.objectEqual(this.lineEnd,a.lineEnd):!1};return b}(l.SnappingHint);
d.ParallelSnappingHint=e;Object.defineProperty(d,"__esModule",{value:!0})});