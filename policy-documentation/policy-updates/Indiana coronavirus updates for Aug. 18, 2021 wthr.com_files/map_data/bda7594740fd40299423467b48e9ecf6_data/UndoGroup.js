// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let f=function(){function d(){this.operations=[];this.closed=!1}var b=d.prototype;b.close=function(){this.closed=!0};b.apply=function(){for(const a of this.operations)a.apply()};b.undo=function(){for(let a=this.operations.length-1;0<=a;a--)this.operations[a].undo()};b.accumulate=function(a){if(this.closed)return!1;const e=this.operations.length?this.operations[this.operations.length-1]:null;e&&e.accumulate(a)||(this.operations.push(a),a.apply());return!0};return d}();
c.UndoGroup=f;Object.defineProperty(c,"__esModule",{value:!0})});