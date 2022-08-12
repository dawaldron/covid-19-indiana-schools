// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(e,g,h,k,l,m,n,p,q,r,c,t){function f(b){const a=new t.ShaderBuilder,d=1===b.output;a.include(h.Transform,{linearDepth:d});a.include(k.VertexColor,b);a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.attributes.add("position","vec3");a.varyings.add("vpos","vec3");b.multipassTerrainEnabled&&a.varyings.add("depth","float");d&&(a.include(l.OutputDepth,b),a.vertex.uniforms.add("cameraNearFar","vec2"),a.varyings.add("linearDepth","float"));a.vertex.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${d?c.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);a.include(g.Slice,b);a.fragment.include(r.ColorConversion);b.multipassTerrainEnabled&&(a.fragment.include(n.ReadLinearDepth),a.include(p.multipassTerrainTest,b));a.fragment.uniforms.add("eColor","vec4");4===b.output&&a.include(m.OutputHighlight);a.fragment.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${b.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${c.glsl.float(q.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===b.output?c.glsl`gl_FragColor = vec4(color.a);`:""}

    ${0===b.output?c.glsl`gl_FragColor = highlightSlice(color, vpos); ${b.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===b.output?c.glsl`outputHighlight();`:""};
    ${1===b.output?c.glsl`outputDepth(linearDepth);`:""};
  }
  `);return a}var u=Object.freeze({__proto__:null,build:f});e.ColorMaterialShader=u;e.build=f});