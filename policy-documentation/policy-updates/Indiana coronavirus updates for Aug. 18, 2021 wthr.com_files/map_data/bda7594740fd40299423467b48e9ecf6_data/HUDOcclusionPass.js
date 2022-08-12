// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadLinearDepth.glsl","../shading/MultipassGeometryTest.glsl","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(d,e,f,g,c){d.HUDOcclusionPass=function(a,b){b.multipassGeometryEnabled&&a.vertex.include(f.multipassGeometryTest);b.multipassTerrainEnabled&&a.varyings.add("depth","float");a.vertex.code.add(c.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${b.multipassGeometryEnabled?c.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${b.multipassTerrainEnabled?"depth \x3d projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `);b.multipassTerrainEnabled&&a.fragment.include(e.ReadLinearDepth);a.fragment.uniforms.add("terrainDepthTexture","sampler2D");a.fragment.uniforms.add("cameraNearFar","vec2");a.fragment.uniforms.add("inverseViewport","vec2");a.fragment.include(g.RgbaFloatEncoding);a.fragment.code.add(c.glsl`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${b.multipassTerrainEnabled?c.glsl`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), cameraNearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)};Object.defineProperty(d,"__esModule",{value:!0})});