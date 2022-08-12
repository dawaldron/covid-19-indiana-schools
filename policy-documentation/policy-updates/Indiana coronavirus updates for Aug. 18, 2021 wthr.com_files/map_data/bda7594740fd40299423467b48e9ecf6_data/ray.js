// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../core/ObjectStack","../../chunks/vec3","../../chunks/vec3f64","./vectorStacks"],function(e,m,d,f,h){function g(a){return a?{origin:f.clone(a.origin),direction:f.clone(a.direction)}:{origin:f.create(),direction:f.create()}}function k(a,c,b=g()){d.copy(b.origin,a);d.copy(b.direction,c);return b}function l(a,c){a=d.cross(h.sv3d.get(),d.normalize(h.sv3d.get(),a.direction),d.subtract(h.sv3d.get(),c,a.origin));return d.dot(a,a)}const n=new m.ObjectStack(function(){return{origin:null,
direction:null}});e.closestPoint=function(a,c,b){c=d.dot(a.direction,d.subtract(b,c,a.origin));d.add(b,a.origin,d.scale(b,a.direction,c));return b};e.copy=function(a,c=g()){return k(a.origin,a.direction,c)};e.create=g;e.distance=function(a,c){return Math.sqrt(l(a,c))};e.distance2=l;e.fromPoints=function(a,c,b=g()){d.copy(b.origin,a);d.subtract(b.direction,c,a);return b};e.fromValues=k;e.wrap=function(a,c){const b=n.get();b.origin=a;b.direction=c;return b};Object.defineProperty(e,"__esModule",{value:!0})});