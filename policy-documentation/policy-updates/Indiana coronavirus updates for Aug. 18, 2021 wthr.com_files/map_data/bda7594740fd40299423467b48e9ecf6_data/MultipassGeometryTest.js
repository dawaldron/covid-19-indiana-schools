// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadLinearDepth.glsl","../../shaderModules/interfaces"],function(b,d,e){b.bindMultipassGeometryTexture=function(a,c){c.multipassGeometryEnabled&&c.geometryLinearDepthTexture&&a.bindTexture(c.geometryLinearDepthTexture,"geometryDepthTexture")};b.multipassGeometryTest=function(a){a.include(d.ReadLinearDepth);a.uniforms.add("geometryDepthTexture","sampler2D");a.uniforms.add("cameraNearFar","vec2");a.code.add(e.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)};Object.defineProperty(b,"__esModule",{value:!0})});