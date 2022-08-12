// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Logger"],function(h,k,l){const r=l.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");l=function(){function b(){this.includedModules=new Map}b.prototype.include=function(c,a){this.includedModules.has(c)?this.includedModules.get(c)!==a&&r.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(c,a),c(this.builder,a))};return b}();let x=
function(b){function c(){var a=b.apply(this,arguments)||this;a.vertex=new m;a.fragment=new m;a.attributes=new t;a.varyings=new u;a.extensions=new n;a.constants=new p;return a}k._inheritsLoose(c,b);c.prototype.generateSource=function(a){const e=this.extensions.generateSource(a),d=this.attributes.generateSource(a),f=this.varyings.generateSource();var g="vertex"===a?this.vertex:this.fragment;const v=g.uniforms.generateSource(),w=g.code.generateSource();a="vertex"===a?"precision highp float;\nprecision highp sampler2D;":
"#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif";g=this.constants.generateSource().concat(g.constants.generateSource());return`
${e.join("\n")}

${a}

${g.join("\n")}

${v.join("\n")}

${d.join("\n")}

${f.join("\n")}

${w.join("\n")}`};k._createClass(c,[{key:"fragmentUniforms",get:function(){return this.fragment.uniforms}},{key:"builder",get:function(){return this}}]);return c}(l),y=function(){function b(){this._entries=new Map}var c=b.prototype;c.add=function(a,e,d){this._entries.set(`${a}_${e}_${d}`,{name:a,type:e,arraySize:d});return this};c.generateSource=function(){return Array.from(this._entries.values()).map(a=>{var e=a.arraySize;return`uniform ${a.type} ${a.name}${e?`[${e}]`:""};`})};k._createClass(b,[{key:"entries",
get:function(){return Array.from(this._entries.values())}}]);return b}(),q=function(){function b(){this._entries=[]}var c=b.prototype;c.add=function(a){this._entries.push(a)};c.generateSource=function(){return this._entries};return b}(),m=function(b){function c(){var a=b.apply(this,arguments)||this;a.uniforms=new y;a.code=new q;a.constants=new p;return a}k._inheritsLoose(c,b);k._createClass(c,[{key:"builder",get:function(){return this}}]);return c}(l),t=function(){function b(){this._entries=[]}var c=
b.prototype;c.add=function(a,e){this._entries.push([a,e])};c.generateSource=function(a){return"fragment"===a?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)};return b}(),u=function(){function b(){this._entries=[]}var c=b.prototype;c.add=function(a,e){this._entries.push([a,e])};c.generateSource=function(){return this._entries.map(a=>`varying ${a[1]} ${a[0]};`)};return b}(),n=function(){function b(){this._entries=new Set}var c=b.prototype;c.add=function(a){this._entries.add(a)};c.generateSource=
function(a){const e="vertex"===a?b.ALLOWLIST_VERTEX:b.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(d=>e.includes(d)).map(d=>`#extension ${d} : enable`)};return b}();n.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"];n.ALLOWLIST_VERTEX=[];let p=function(){function b(){this._entries=[]}var c=b.prototype;c.add=function(a,e,d){let f="ERROR_CONSTRUCTOR_STRING";switch(e){case "float":f=b.numberToFloatStr(d);break;case "int":f=b.numberToIntStr(d);break;case "bool":f=
d.toString();break;case "vec2":f=`vec2(${b.numberToFloatStr(d[0])},\
                            ${b.numberToFloatStr(d[1])})`;break;case "vec3":f=`vec3(${b.numberToFloatStr(d[0])},\
                            ${b.numberToFloatStr(d[1])},\
                            ${b.numberToFloatStr(d[2])})`;break;case "vec4":f=`vec4(${b.numberToFloatStr(d[0])},\
                            ${b.numberToFloatStr(d[1])},\
                            ${b.numberToFloatStr(d[2])},\
                            ${b.numberToFloatStr(d[3])})`;break;case "ivec2":f=`ivec2(${b.numberToIntStr(d[0])},\
                             ${b.numberToIntStr(d[1])})`;break;case "ivec3":f=`ivec3(${b.numberToIntStr(d[0])},\
                             ${b.numberToIntStr(d[1])},\
                             ${b.numberToIntStr(d[2])})`;break;case "ivec4":f=`ivec4(${b.numberToIntStr(d[0])},\
                             ${b.numberToIntStr(d[1])},\
                             ${b.numberToIntStr(d[2])},\
                             ${b.numberToIntStr(d[3])})`;break;case "mat2":case "mat3":case "mat4":f=`${e}(${Array.prototype.map.call(d,g=>b.numberToFloatStr(g)).join(", ")})`}this._entries.push(`const ${e} ${a} = ${f};`);return this};b.numberToIntStr=function(a){return a.toFixed(0)};b.numberToFloatStr=function(a){return Number.isInteger(a)?a.toFixed(1):a.toString()};c.generateSource=function(){return Array.from(this._entries)};return b}();h.Code=q;h.Includes=l;h.ShaderBuilder=x;h.Stage=m;Object.defineProperty(h,
"__esModule",{value:!0})});