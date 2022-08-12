// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(d,c){function e(a,b){b.vvSizeEnabled&&(a.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),a.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),a.setUniform3fv("vvSizeOffset",b.vvSizeOffset),a.setUniform3fv("vvSizeFactor",b.vvSizeFactor));b.vvColorEnabled&&(a.setUniform1fv("vvColorValues",b.vvColorValues),a.setUniform4fv("vvColorColors",b.vvColorColors))}d.VisualVariables=function(a,b){b.vvInstancingEnabled&&(b.vvSize||b.vvColor)&&a.attributes.add("instanceFeatureAttribute",
"vec4");b.vvSize?(a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),a.vertex.uniforms.add("vvSymbolAnchor","vec3"),a.vertex.code.add(c.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),a.vertex.code.add(c.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${b.vvInstancingEnabled?c.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):a.vertex.code.add(c.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`);b.vvColor?(a.vertex.constants.add("vvColorNumber","int",8),a.vertex.code.add(c.glsl`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${b.vvInstancingEnabled?c.glsl`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):a.vertex.code.add(c.glsl`vec4 vvColor() { return vec4(1.0); }`)};d.bindVisualVariablesUniforms=e;d.bindVisualVariablesUniformsForSymbols=function(a,b){e(a,b);b.vvSizeEnabled&&(a.setUniform3fv("vvSymbolAnchor",b.vvSymbolAnchor),a.setUniformMatrix3fv("vvSymbolRotationMatrix",b.vvSymbolRotationMatrix))};d.bindVisualVariablesUniformsWithOpacity=function(a,b){e(a,b);b.vvOpacityEnabled&&(a.setUniform1fv("vvOpacityValues",b.vvOpacityValues),a.setUniform1fv("vvOpacityOpacities",b.vvOpacityOpacities))};
Object.defineProperty(d,"__esModule",{value:!0})});