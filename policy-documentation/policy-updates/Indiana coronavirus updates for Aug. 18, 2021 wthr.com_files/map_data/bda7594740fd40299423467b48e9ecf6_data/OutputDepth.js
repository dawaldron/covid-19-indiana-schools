// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(b,e,c){b.OutputDepth=function(a,d){a.fragment.include(e.RgbaFloatEncoding);3===d.output?(a.extensions.add("GL_OES_standard_derivatives"),a.fragment.code.add(c.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===d.output&&a.fragment.code.add(c.glsl`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)};Object.defineProperty(b,"__esModule",{value:!0})});