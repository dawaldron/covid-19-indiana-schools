// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(d,b){d.RibbonVertexPosition=function(a,c){a.vertex.uniforms.add("intrinsicWidth","float");c.vvSize?(a.attributes.add("sizeFeatureAttribute","float"),a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.code.add(b.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(a.attributes.add("size","float"),a.vertex.code.add(b.glsl`float getSize(){
return intrinsicWidth * size;
}`));c.vvOpacity?(a.attributes.add("opacityFeatureAttribute","float"),a.vertex.constants.add("vvOpacityNumber","int",8),a.vertex.code.add(b.glsl`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):a.vertex.code.add(b.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`);c.vvColor?(a.attributes.add("colorFeatureAttribute","float"),a.vertex.constants.add("vvColorNumber","int",8),a.vertex.code.add(b.glsl`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(a.attributes.add("color","vec4"),a.vertex.code.add(b.glsl`vec4 getColor(){
return applyOpacity(color);
}`))};Object.defineProperty(d,"__esModule",{value:!0})});