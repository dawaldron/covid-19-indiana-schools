// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(c,d){c.bindMultipassTerrainTexture=function(a,b){b.multipassTerrainEnabled&&b.terrainLinearDepthTexture&&a.bindTexture(b.terrainLinearDepthTexture,"terrainDepthTexture")};c.multipassTerrainTest=function(a,b){a.fragment.uniforms.add("terrainDepthTexture","sampler2D");a.fragment.uniforms.add("cameraNearFar","vec2");a.fragment.uniforms.add("inverseViewport","vec2");a.fragment.code.add(d.glsl`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${b.cullAboveGround?"\x3e":"\x3c\x3d"} terrainDepth){
        discard;
      }
    }
  `)};Object.defineProperty(c,"__esModule",{value:!0})});