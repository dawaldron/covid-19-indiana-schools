// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],function(f,h,d){function g(b,a,c,e=k){e.screenLength=b.screenLength;e.perDistance=Math.tan(.5*a)/(.5*c);e.minWorldLength=b.minWorldLength;e.maxWorldLength=b.maxWorldLength;return e}const k={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};f.VerticalOffset=function(b,a){const c=b.vertex.code;a.verticalOffsetEnabled?(b.vertex.uniforms.add("verticalOffset","vec4"),a.screenSizePerspectiveEnabled&&(b.include(h.ScreenSizePerspective),
b.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(d.glsl`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===a.viewingMode?d.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:d.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${a.screenSizePerspectiveEnabled?d.glsl`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d.glsl`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(d.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)};f.bindVerticalOffsetUniforms=function(b,a,c){a.verticalOffset&&(a=g(a.verticalOffset,c.camera.fovY,c.camera.fullViewport[3]),b.setUniform4f("verticalOffset",a.screenLength*(c.camera.pixelRatio||1),a.perDistance,a.minWorldLength,a.maxWorldLength))};f.calculateVerticalOffsetFactors=g;Object.defineProperty(f,"__esModule",{value:!0})});