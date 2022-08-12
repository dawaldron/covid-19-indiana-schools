// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(a,c,d){a.ReadLinearDepth=function(b){b.include(c.RgbaFloatEncoding);b.code.add(d.glsl`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)};Object.defineProperty(a,"__esModule",{value:!0})});