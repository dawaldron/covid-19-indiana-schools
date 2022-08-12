// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function m(a){return G.intern(a)}function n(a){return H.intern(a)}function p(a){return I.intern(a)}function q(a){return J.intern(a)}function r(a){return K.intern(a)}function t(a){return L.intern(a)}function u(a){return M.intern(a)}function v(a){return N.intern(a)}function g(a){return"["+a.join(",")+"]"}function w(a){return a?g([a.srcRgb,a.srcAlpha,a.dstRgb,a.dstAlpha,a.opRgb,a.opAlpha,a.color.r,a.color.g,a.color.b,a.color.a]):null}function x(a){return a?g([a.face,a.mode]):
null}function y(a){return a?g([a.factor,a.units]):null}function z(a){return a?g([a.func]):null}function A(a){return a?g([a.function.func,a.function.ref,a.function.mask,a.operation.fail,a.operation.zFail,a.operation.zPass]):null}function B(a){return a?g([a.zNear,a.zFar]):null}function C(a){return a?g([a.r,a.g,a.b,a.a]):null}function D(a){return a?g([a.mask]):null}const E={face:1029,mode:2305},F={face:1028,mode:2305};var f=function(){function a(c,b){this.makeKey=c;this.makeRef=b;this.interns=new Map}
a.prototype.intern=function(c){if(!c)return null;const b=this.makeKey(c),e=this.interns;e.has(b)||e.set(b,this.makeRef(c));return e.get(b)};return a}();const G=new f(w,a=>({__tag:"Blending",...a})),H=new f(x,a=>({__tag:"Culling",...a})),I=new f(y,a=>({__tag:"PolygonOffset",...a})),J=new f(z,a=>({__tag:"DepthTest",...a})),K=new f(A,a=>({__tag:"StencilTest",...a})),L=new f(B,a=>({__tag:"DepthWrite",...a})),M=new f(C,a=>({__tag:"ColorWrite",...a})),N=new f(D,a=>({__tag:"StencilWrite",...a})),O=new f(function(a){return a?
g([w(a.blending),x(a.culling),y(a.polygonOffset),z(a.depthTest),A(a.stencilTest),B(a.depthWrite),C(a.colorWrite),D(a.stencilWrite)]):null},a=>({blending:m(a.blending),culling:n(a.culling),polygonOffset:p(a.polygonOffset),depthTest:q(a.depthTest),stencilTest:r(a.stencilTest),depthWrite:t(a.depthWrite),colorWrite:u(a.colorWrite),stencilWrite:v(a.stencilWrite)}));f=function(){function a(b){this._stencilWriteInvalid=this._colorWriteInvalid=this._depthWriteInvalid=this._stencilTestInvalid=this._depthTestInvalid=
this._polygonOffsetInvalid=this._cullingInvalid=this._blendingInvalid=this._pipelineInvalid=!0;this._stateSetters=b}var c=a.prototype;c.setPipeline=function(b){if(this._pipelineInvalid||b!==this._pipeline)this.setBlending(b.blending),this.setCulling(b.culling),this.setPolygonOffset(b.polygonOffset),this.setDepthTest(b.depthTest),this.setStencilTest(b.stencilTest),this.setDepthWrite(b.depthWrite),this.setColorWrite(b.colorWrite),this.setStencilWrite(b.stencilWrite),this._pipeline=b;this._pipelineInvalid=
!1};c.invalidateBlending=function(){this._pipelineInvalid=this._blendingInvalid=!0};c.invalidateCulling=function(){this._pipelineInvalid=this._cullingInvalid=!0};c.invalidatePolygonOffset=function(){this._pipelineInvalid=this._polygonOffsetInvalid=!0};c.invalidateDepthTest=function(){this._pipelineInvalid=this._depthTestInvalid=!0};c.invalidateStencilTest=function(){this._pipelineInvalid=this._stencilTestInvalid=!0};c.invalidateDepthWrite=function(){this._pipelineInvalid=this._depthWriteInvalid=!0};
c.invalidateColorWrite=function(){this._pipelineInvalid=this._colorWriteInvalid=!0};c.invalidateStencilWrite=function(){this._pipelineInvalid=this._stencilTestInvalid=!0};c.setBlending=function(b){this._blending=this.setSubState(b,this._blending,this._blendingInvalid,this._stateSetters.setBlending);this._blendingInvalid=!1};c.setCulling=function(b){this._culling=this.setSubState(b,this._culling,this._cullingInvalid,this._stateSetters.setCulling);this._cullingInvalid=!1};c.setPolygonOffset=function(b){this._polygonOffset=
this.setSubState(b,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset);this._polygonOffsetInvalid=!1};c.setDepthTest=function(b){this._depthTest=this.setSubState(b,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest);this._depthTestInvalid=!1};c.setStencilTest=function(b){this._stencilTest=this.setSubState(b,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest);this._stencilTestInvalid=!1};c.setDepthWrite=function(b){this._depthWrite=
this.setSubState(b,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite);this._depthWriteInvalid=!1};c.setColorWrite=function(b){this._colorWrite=this.setSubState(b,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite);this._colorWriteInvalid=!1};c.setStencilWrite=function(b){this._stencilWrite=this.setSubState(b,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite);this._stencilTestInvalid=!1};c.setSubState=function(b,e,k,l){if(k||
b!==e)l(b),this._pipelineInvalid=!0;return b};return a}();d.StateTracker=f;d.backFaceCullingParams=E;d.cullingParams=a=>2===a?E:1===a?F:null;d.defaultColorWriteParams={r:!0,g:!0,b:!0,a:!0};d.defaultDepthWriteParams={zNear:0,zFar:1};d.frontFaceCullingParams=F;d.makeBlending=m;d.makeColorWrite=u;d.makeCulling=n;d.makeDepthTest=q;d.makeDepthWrite=t;d.makePipelineState=function(a){return O.intern(a)};d.makePolygonOffset=p;d.makeStencilTest=r;d.makeStencilWrite=v;d.separateBlendingParams=function(a,c,
b,e,k=32774,l=32774,h=[0,0,0,0]){return{srcRgb:a,srcAlpha:c,dstRgb:b,dstAlpha:e,opRgb:k,opAlpha:l,color:{r:h[0],g:h[1],b:h[2],a:h[3]}}};d.simpleBlendingParams=function(a,c,b=32774,e=[0,0,0,0]){return{srcRgb:a,srcAlpha:a,dstRgb:c,dstAlpha:c,opRgb:b,opAlpha:b,color:{r:e[0],g:e[1],b:e[2],a:e[3]}}};Object.defineProperty(d,"__esModule",{value:!0})});