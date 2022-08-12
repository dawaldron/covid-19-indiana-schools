// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/maybe ./support/utils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(g,d,k,l,m,h){function n(a){return e.apply(this,arguments)}function e(){e=g._asyncToGenerator(function*(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new d("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");var b=a.valueExpression||a.sqlExpression,c=b&&!a.sqlExpression;
if(b)if(c){if(!a.view)throw new d("unique-values:missing-parameters","View is required when 'valueExpression' is specified");}else if(!a.valueExpression)throw new d("unique-values:missing-parameters","'valueExpression' parameters are required");c=[0,2,1,3,4,5];const {layer:p,...q}=a;b=h.createLayerAdapter(p,c);a={layerAdapter:b,...q};if(!b)throw new d("unique-values:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(c).join(", "));c=k.isSome(a.signal)?{signal:a.signal}:
null;yield b.load(c);c=yield m.getFieldsList({field:a.field,valueExpression:a.valueExpression});if(b=l.verifyBasicFieldValidity(b,c,"unique-values:invalid-parameters"))throw b;return a});return e.apply(this,arguments)}function f(){f=g._asyncToGenerator(function*(a){const {layerAdapter:b,...c}=yield n(a);return b.uniqueValues(c)});return f.apply(this,arguments)}return function(a){return f.apply(this,arguments)}});