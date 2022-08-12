// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/workers/workers"],function(e,f,h,k){let l=function(){function a(){}var d=a.prototype;d.open=function(){var b=f._asyncToGenerator(function*(c){this.connection=yield k.open("statsWorker",{strategy:"distributed",signal:c})});return function(c){return b.apply(this,arguments)}}();d.destroy=function(){var b;null==(b=this.connection)?void 0:b.close()};a.getInstance=function(){a.instance||(a.instance=new a);
return a.instance};d.summaryStatistics=function(){var b=f._asyncToGenerator(function*(c,g){if(!this.connection)throw new h("worker-client:summary-statistics","connection is required");return this.connection.invoke("summaryStatistics",{attribute:c,featuresJSON:g})});return function(c,g){return b.apply(this,arguments)}}();return a}();e.WorkerClient=l;Object.defineProperty(e,"__esModule",{value:!0})});