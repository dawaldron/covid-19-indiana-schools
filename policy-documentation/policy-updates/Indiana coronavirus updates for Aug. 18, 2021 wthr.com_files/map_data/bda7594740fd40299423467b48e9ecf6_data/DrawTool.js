// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Evented ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/Logger ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ./DrawOperation ./drawSurfaces ../../../../interactive/InteractiveToolBase".split(" "),function(b,h,d,m,n,f,t,u,v,
w,p,q,k,r){b.DrawTool=function(l){function g(a){a=l.call(this,a)||this;a.drawOperation=null;a.hasZ=!0;a.defaultZ=0;a.elevationInfo=null;a.snapToScene=null;a.mode=null;a.geometryType=null;a.type="draw-3d";return a}h._inheritsLoose(g,l);var c=g.prototype;c.initialize=function(){const a=n.unwrapOr(this.elevationInfo,{mode:this.hasZ?"absolute-height":"on-the-ground",offset:0});this.drawOperation=new q.DrawOperation({view:this.view,manipulators:this.manipulators,geometryType:this.geometryType,drawingMode:this.mode,
hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,sceneDrawSurface:new k.SceneDrawSurface(this.view,a),elevationDrawSurface:new k.ElevationDrawSurface(a,this.defaultZ,this.view),hasM:!1,elevationInfo:a});this.drawOperation.on("vertex-add",e=>this.onVertexAdd(e));this.drawOperation.on("vertex-remove",e=>this.onVertexRemove(e));this.drawOperation.on("vertex-update",e=>this.onVertexUpdate(e));this.drawOperation.on("cursor-update",e=>this.onCursorUpdate(e));this.drawOperation.on("complete",
e=>this.onComplete(e));this.complete()};c.destroy=function(){this.drawOperation.destroy();this.drawOperation=null;this._set("view",null)};c.onInputEvent=function(a){this.drawOperation.onInputEvent(a)};c.reset=function(){};c.redo=function(){this.drawOperation.redo()};c.undo=function(){this.drawOperation.undo()};c.completeCreateOperation=function(){this.drawOperation.complete()};c.activate=function(){};c.deactivate=function(){this.drawOperation.isCompleted||this.drawOperation.cancel()};c.getVertexCoords=
function(){return this.drawOperation.vertices};c.onVertexAdd=function(a){this.emit("vertex-add",a)};c.onVertexRemove=function(a){this.emit("vertex-remove",a)};c.onVertexUpdate=function(a){this.emit("vertex-update",a)};c.onCursorUpdate=function(a){this.emit("cursor-update",a)};c.onComplete=function(a){this.emit("complete",a)};h._createClass(g,[{key:"updating",get:function(){var a,e;return null!=(a=null==(e=this.drawOperation)?void 0:e.updating)?a:!1}},{key:"enabled",set:function(a){this.drawOperation.interactive=
a;this._set("enabled",a)}},{key:"canRedo",get:function(){return this.drawOperation.canRedo}},{key:"canUndo",get:function(){return this.drawOperation.canUndo}}]);return g}(m.EventedMixin(r.InteractiveToolBase));d.__decorate([f.property()],b.DrawTool.prototype,"drawOperation",void 0);d.__decorate([f.property({readOnly:!0})],b.DrawTool.prototype,"updating",null);d.__decorate([f.property({constructOnly:!0,nonNullable:!0})],b.DrawTool.prototype,"view",void 0);d.__decorate([f.property({value:!0})],b.DrawTool.prototype,
"enabled",null);d.__decorate([f.property({constructOnly:!0})],b.DrawTool.prototype,"hasZ",void 0);d.__decorate([f.property({constructOnly:!0,nonNullable:!0})],b.DrawTool.prototype,"defaultZ",void 0);d.__decorate([f.property({constructOnly:!0})],b.DrawTool.prototype,"elevationInfo",void 0);d.__decorate([f.property()],b.DrawTool.prototype,"snapToScene",void 0);d.__decorate([f.property({constructOnly:!0})],b.DrawTool.prototype,"mode",void 0);d.__decorate([f.property({constructOnly:!0})],b.DrawTool.prototype,
"geometryType",void 0);d.__decorate([f.property({readOnly:!0})],b.DrawTool.prototype,"type",void 0);b.DrawTool=d.__decorate([p.subclass("esri.views.3d.interactive.editingTools.draw.DrawTool")],b.DrawTool);Object.defineProperty(b,"__esModule",{value:!0})});