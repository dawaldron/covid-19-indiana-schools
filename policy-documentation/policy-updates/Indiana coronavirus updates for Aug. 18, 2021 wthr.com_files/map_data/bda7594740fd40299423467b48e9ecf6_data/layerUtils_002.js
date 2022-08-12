// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.addUniqueLayer=function(a,c,b){if(c&&a&&a.map){({map:a}=a);var e=a.layers.find(f=>f===c);e||a.add(c,b);void 0!==b&&null!==b&&a.layers.reorder(e,b)}};Object.defineProperty(d,"__esModule",{value:!0})});