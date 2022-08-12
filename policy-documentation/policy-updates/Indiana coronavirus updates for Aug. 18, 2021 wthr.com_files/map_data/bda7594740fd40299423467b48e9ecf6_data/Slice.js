// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../shaderModules/interfaces"],function(f,l,m,g,e){function h(a,c,b,d){c.slicePlaneEnabled&&(l.isSome(b)?(d?(m.subtract(k,b.origin,d),a.setUniform3fv("slicePlaneOrigin",k)):a.setUniform3fv("slicePlaneOrigin",b.origin),a.setUniform3fv("slicePlaneBasis1",b.basis1),a.setUniform3fv("slicePlaneBasis2",b.basis2)):(a.setUniform3fv("slicePlaneBasis1",g.ZEROS),a.setUniform3fv("slicePlaneBasis2",g.ZEROS),
a.setUniform3fv("slicePlaneOrigin",g.ZEROS)))}const k=g.create();f.Slice=function(a,c){if(c.slicePlaneEnabled){a.extensions.add("GL_OES_standard_derivatives");c.sliceEnabledForVertexPrograms&&(a.vertex.uniforms.add("slicePlaneOrigin","vec3"),a.vertex.uniforms.add("slicePlaneBasis1","vec3"),a.vertex.uniforms.add("slicePlaneBasis2","vec3"));a.fragment.uniforms.add("slicePlaneOrigin","vec3");a.fragment.uniforms.add("slicePlaneBasis1","vec3");a.fragment.uniforms.add("slicePlaneBasis2","vec3");var b=e.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,d=e.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`;d=c.sliceHighlightDisabled?e.glsl`#define highlightSlice(_color_, _pos_) (_color_)`:e.glsl`
        ${d}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;c.sliceEnabledForVertexPrograms&&a.vertex.code.add(b);a.fragment.code.add(b);a.fragment.code.add(d)}else b=e.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`,c.sliceEnabledForVertexPrograms&&a.vertex.code.add(b),a.fragment.code.add(b)};f.bindSliceUniforms=h;f.bindSliceUniformsWithOrigin=function(a,c,b){h(a,c,b.slicePlane,b.origin)};Object.defineProperty(f,"__esModule",{value:!0})});