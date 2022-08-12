// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){const f={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};d.glLayout=function(c,g=0){const h=c.stride;return c.fieldNames.filter(a=>{a=c.fields.get(a).optional;return!(a&&a.glPadding)}).map(a=>{const b=c.fields.get(a),k=b.constructor.ElementCount;var e=f[b.constructor.ElementType];if(!e)throw Error("BufferType not supported in WebGL");return{name:a,stride:h,count:k,type:e,offset:b.offset,normalized:!(!b.optional||!b.optional.glNormalized),divisor:g}})};
Object.defineProperty(d,"__esModule",{value:!0})});