// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(f,h,k,l,m,n,p,q,r,t,b,u){function g(c){const a=new u.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");a.include(q.PiUtils);a.include(k.RibbonVertexPosition,c);a.include(n.LineStipple,c);1===c.output&&a.include(l.OutputDepth,c);a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2");a.attributes.add("position","vec3");a.attributes.add("subdivisionFactor","float");a.attributes.add("uv0",
"vec2");a.attributes.add("auxpos1","vec3");a.attributes.add("auxpos2","vec3");a.varyings.add("vColor","vec4");a.varyings.add("vpos","vec3");a.varyings.add("linearDepth","float");c.multipassTerrainEnabled&&a.varyings.add("depth","float");const d=c.falloffEnabled,e=c.innerColorEnabled;e&&a.varyings.add("vLineDistance","float");d&&a.varyings.add("vLineDistanceNorm","float");c.falloffEnabled&&a.fragment.uniforms.add("falloff","float");c.innerColorEnabled&&(a.fragment.uniforms.add("innerColor","vec4"),
a.fragment.uniforms.add("innerWidth","float"));a.vertex.code.add(b.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`);a.vertex.code.add(b.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`);a.vertex.code.add(b.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${c.multipassTerrainEnabled?"depth \x3d pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`);a.vertex.code.add(b.glsl`void main(void) {
float coverage = 1.0;
vpos = position;
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
bool isJoin = abs(uv0.y)-3.0 < 0.0;
float lineWidth = getSize() * pixelRatio;
if (lineWidth < 1.0) {
coverage = lineWidth;
lineWidth = 1.0;
}else{
lineWidth = floor(lineWidth + 0.5);
}
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
vec4 next = view * vec4(auxpos2.xyz, 1.0);
clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);c.stippleEnabled&&a.vertex.code.add(b.glsl`vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;
vec2 stippleSegmentDirection = stippleSegmentInfo.zw;`);a.vertex.code.add(b.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = ISOUTSIDE;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`);c.roundJoins?a.vertex.code.add(b.glsl`vec2 startDir;
vec2 endDir;
if (leftLen < 0.001) {
startDir = right;
}
else{
startDir = left;
}
startDir = normalize(startDir);
startDir = PERPENDICULAR(startDir);
if (rightLen < 0.001) {
endDir = left;
}
else{
endDir = right;
}
endDir = normalize(endDir);
endDir = PERPENDICULAR(endDir);
float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);`):a.vertex.code.add(b.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);a.vertex.code.add(b.glsl`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;`);c.roundCaps?a.vertex.code.add(b.glsl`float angle = subdivisionFactor*PI*0.5;
joinDisplacementDir *= cos(angle);
capDisplacementDir *= sin(angle);`):a.vertex.code.add(b.glsl`capDisplacementDir *= subdivisionFactor;`);a.vertex.code.add(b.glsl`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${d||e?b.glsl`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${e?b.glsl`vLineDistance = lineDist;`:""}
  ${d?b.glsl`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `);c.stippleEnabled&&(a.vertex.code.add(b.glsl`{
vec2 posVec = pos.xy - stippleSegmentOrigin;
float stippleSegmentDirectionLength = length(stippleSegmentDirection);`),c.stippleIntegerRepeatsEnabled&&a.vertex.code.add(b.glsl`float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
stipplePatternUvMax = roundedNumberOfPatternRepeats;`),a.vertex.code.add(b.glsl`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${c.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale \x3d roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale \x3d 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `));a.vertex.code.add(b.glsl`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`);c.multipassTerrainEnabled&&(a.fragment.include(m.ReadLinearDepth),a.include(p.multipassTerrainTest,c));a.include(h.Slice,c);a.fragment.uniforms.add("intrinsicColor","vec4");a.fragment.include(t.ColorConversion);a.fragment.code.add(b.glsl`
  void main() {
    discardBySlice(vpos);
    ${c.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `);c.innerColorEnabled&&(a.fragment.uniforms.add("pixelRatio","float"),a.fragment.code.add(b.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`));a.fragment.code.add(b.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`);c.falloffEnabled&&a.fragment.code.add(b.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`);a.fragment.code.add(b.glsl`
    if (finalColor.a < ${b.glsl.float(r.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===c.output?b.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===c.output?b.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===c.output&&c.OITEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    ${4===c.output?b.glsl`gl_FragColor = vec4(1.0);`:""}
    ${1===c.output?b.glsl`outputDepth(linearDepth);`:""}
  }
  `);return a}var v=Object.freeze({__proto__:null,build:g});f.RibbonLineShader=v;f.build=g});