// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec4f64","../../shaderModules/interfaces"],function(b,d,g){const e=d.fromValues(1,1,0,1),f=d.fromValues(1,0,1,1);b.OutputHighlight=function(a){a.fragment.uniforms.add("depthTex","sampler2D");a.fragment.uniforms.add("highlightViewportPixelSz","vec4");a.fragment.constants.add("occludedHighlightFlag","vec4",e).add("unoccludedHighlightFlag","vec4",f);a.fragment.code.add(g.glsl`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)};b.bindOutputHighlight=function(a,c){a.bindTexture(c.highlightDepthTexture,"depthTex");a.setUniform4f("highlightViewportPixelSz",0,0,c.inverseViewport[0],c.inverseViewport[1])};b.occludedHighlightFlag=e;b.unoccludedHighlightFlag=f;Object.defineProperty(b,"__esModule",{value:!0})});