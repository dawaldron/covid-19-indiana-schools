// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ./vec2 ./vec2f64 ./vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(g,n,h,p,q,r,t,u,v,w,e,x,y,z,c,A){function l(a){const b=new A.ShaderBuilder;var d=a.signedDistanceFieldEnabled;b.include(r.AlignPixel);b.include(t.HUD,a);b.include(q.Slice,a);if(6===a.output)return b.include(u.HUDOcclusionPass,a),b;b.include(z.ScreenSizePerspective);b.fragment.include(y.RgbaFloatEncoding);b.fragment.include(x.ColorConversion);b.include(w.VisualVariables,a);b.varyings.add("vcolor","vec4");b.varyings.add("vtc","vec2");b.varyings.add("vsize","vec2");a.binaryHighlightOcclusionEnabled&&
b.varyings.add("voccluded","float");b.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4");d&&b.vertex.uniforms.add("outlineColor","vec4");a.screenSizePerspectiveEnabled&&b.vertex.uniforms.add("screenSizePerspective","vec4");(a.debugDrawBorder||a.binaryHighlightOcclusionEnabled)&&b.varyings.add("debugBorderCoords","vec4");b.attributes.add("uv0","vec2");b.attributes.add("color","vec4");b.attributes.add("size","vec2");
b.attributes.add("auxpos2","vec4");b.vertex.code.add(c.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${a.screenSizePerspectiveEnabled?c.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:c.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${a.vvSize?"inputSize *\x3d vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${a.occlusionTestEnabled||a.binaryHighlightOcclusionEnabled?"bool visible \x3d testVisibilityHUD(posProj);":""}

      ${a.binaryHighlightOcclusionEnabled?"voccluded \x3d visible ? 0.0 : 1.0;":""}
    `);var f=c.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;const B=a.pixelSnappingEnabled?d?c.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:c.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:c.glsl`posProj += quadOffset;`;b.vertex.code.add(c.glsl`
      ${a.occlusionTestEnabled?"if (visible) {":""}
      ${f}
      ${a.vvColor?"vcolor \x3d vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${c.glsl.float(e.symbolAlphaCutoff)};
      ${d?`alphaDiscard = alphaDiscard && outlineColor.a < ${c.glsl.float(e.symbolAlphaCutoff)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${B}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${a.debugDrawBorder?"debugBorderCoords \x3d vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${a.occlusionTestEnabled?c.glsl`} else { vtc = vec2(0.0);
        ${a.debugDrawBorder?"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `);b.fragment.uniforms.add("tex","sampler2D");d&&(b.fragment.uniforms.add("outlineColor","vec4"),b.fragment.uniforms.add("outlineSize","float"));f=a.debugDrawBorder?c.glsl`(isBorder > 0.0 ? 0.0 : ${c.glsl.float(e.defaultMaskAlphaCutoff)})`:c.glsl.float(e.defaultMaskAlphaCutoff);d=c.glsl`
    ${a.debugDrawBorder?c.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${d?c.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${f} ||
          fillPixelColor.a + outlinePixelColor.a < ${c.glsl.float(e.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${f}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:c.glsl`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${f}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${a.debugDrawBorder?c.glsl`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;7===a.output&&b.fragment.code.add(c.glsl`
      void main() {
        ${d}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `);0===a.output&&b.fragment.code.add(c.glsl`
    void main() {
      ${d}
      ${a.FrontFacePass?"gl_FragColor.rgb /\x3d gl_FragColor.a;":""}
    }
    `);4===a.output&&(b.include(v.OutputHighlight),b.fragment.code.add(c.glsl`
    void main() {
      ${d}
      ${a.binaryHighlightOcclusionEnabled?c.glsl`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `));return b}function m(a,b,d){a.setUniform4fv("materialColor",b.color);b.textureIsSignedDistanceField&&(0>=b.outlineColor[3]||0>=b.outlineSize?(a.setUniform4fv("outlineColor",p.ZEROS),a.setUniform1f("outlineSize",0)):(a.setUniform4fv("outlineColor",b.outlineColor),a.setUniform1f("outlineSize",b.outlineSize)));a.setUniform2f("screenOffset",2*b.screenOffset[0]*d,2*b.screenOffset[1]*d);a.setUniform2fv("anchorPos",k(b))}function k(a,b=C){if(a.textureIsSignedDistanceField){var d=a.anchorPos;a=a.distanceFieldBoundingBox;
b[0]=d[0]*(a[2]-a[0])+a[0];b[1]=d[1]*(a[3]-a[1])+a[1]}else n.copy(b,a.anchorPos);return b}const C=h.create();h=Object.freeze({__proto__:null,build:l,bindHUDMaterialUniforms:m,calculateAnchorPosForRendering:k});g.HUDMaterialShader=h;g.bindHUDMaterialUniforms=m;g.build=l;g.calculateAnchorPosForRendering=k});