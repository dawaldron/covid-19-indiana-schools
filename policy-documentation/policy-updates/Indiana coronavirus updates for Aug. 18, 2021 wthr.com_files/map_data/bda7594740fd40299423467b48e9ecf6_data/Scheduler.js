// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/maybe ../../core/PerformanceSampler ../../core/PooledArray ../../core/promiseUtils ../../core/time ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../layers/support/PromiseQueue ./debugFlags".split(" "),function(e,q,t,E,L,v,w,x,y,m,
M,z,S,T,U,F,N,O){function A(d){return B.has(d)?B.get(d):"number"===typeof d?d:1}const P=L.getLogger("esri.views.support.Scheduler");e.TaskPriority=void 0;(function(d){d.RESOURCE_CONTROLLER="schedule";d.SLIDE="slide";d.STREAM_DATA_LOADER="stream loader";d.ELEVATION_QUERY="elevation query";d.TERRAIN_SURFACE="terrain";d.SURFACE_GEOMETRY_UPDATES="surface geometry updates";d.GRAPHICS_CORE="Graphics3D";d.I3S_CONTROLLER="I3S";d.POINT_CLOUD_LAYER="point cloud";d.FEATURE_TILE_FETCHER="feature fetcher";d.STAGE=
"stage";d.GRAPHICS_DECONFLICTOR="graphics deconflictor";d.FILTER_VISIBILITY="Graphics3D filter visibility";d.SCALE_VISIBILITY="Graphics3D scale visibility";d.FRUSTUM_VISIBILITY="Graphics3D frustum visibility";d.POINT_OF_INTEREST_FREQUENT="POI frequent";d.POINT_OF_INTEREST_INFREQUENT="POI infrequent";d.LABELER="labeler";d.FEATURE_QUERY_ENGINE="feature query";d.FEATURE_TILE_TREE="feature tile tree";d.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree";d.ELEVATION_ALIGNMENT="elevation alignment";d.TEXT_TEXTURE_ATLAS=
"text texture atlas";d.TEXTURE_UNLOAD="texture unload";d.OVERLAY_MANAGER="overlay manager";d.LINE_OF_SIGHT_TOOL="line of sight tool";d.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool";d.ELEVATION_PROFILE="elevation profile";d.SNAPPING="snapping";d.SHADOW_ACCUMULATOR="shadow accumulator";d[d.TEST_PRIO=1]="TEST_PRIO"})(e.TaskPriority||(e.TaskPriority={}));const B=new Map([[e.TaskPriority.RESOURCE_CONTROLLER,0],[e.TaskPriority.SLIDE,0],[e.TaskPriority.STREAM_DATA_LOADER,0],[e.TaskPriority.ELEVATION_QUERY,
0],[e.TaskPriority.TERRAIN_SURFACE,1],[e.TaskPriority.SURFACE_GEOMETRY_UPDATES,1],[e.TaskPriority.GRAPHICS_CORE,2],[e.TaskPriority.I3S_CONTROLLER,2],[e.TaskPriority.POINT_CLOUD_LAYER,2],[e.TaskPriority.FEATURE_TILE_FETCHER,2],[e.TaskPriority.STAGE,4],[e.TaskPriority.GRAPHICS_DECONFLICTOR,4],[e.TaskPriority.FILTER_VISIBILITY,4],[e.TaskPriority.SCALE_VISIBILITY,4],[e.TaskPriority.FRUSTUM_VISIBILITY,4],[e.TaskPriority.POINT_OF_INTEREST_FREQUENT,6],[e.TaskPriority.POINT_OF_INTEREST_INFREQUENT,30],[e.TaskPriority.LABELER,
8],[e.TaskPriority.FEATURE_QUERY_ENGINE,8],[e.TaskPriority.FEATURE_TILE_TREE,16],[e.TaskPriority.FEATURE_TILE_TREE_ACTIVE,0],[e.TaskPriority.ELEVATION_ALIGNMENT,12],[e.TaskPriority.TEXT_TEXTURE_ATLAS,12],[e.TaskPriority.TEXTURE_UNLOAD,12],[e.TaskPriority.OVERLAY_MANAGER,12],[e.TaskPriority.LINE_OF_SIGHT_TOOL,16],[e.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[e.TaskPriority.SNAPPING,0],[e.TaskPriority.SHADOW_ACCUMULATOR,30]]),G=m.Milliseconds(6.5),H=m.Milliseconds(1),Q=m.Milliseconds(30),I=m.Milliseconds(1E3/
30),J=m.Milliseconds(100);var u;(function(d){let n=function(l){function h(a){var b=l.call(this,a)||this;b.updating=!0;b.performanceInfo={total:new w("total"),tasks:new Map};b._frameTaskTimes=new Map;b._budget=null;b._state=1;b._tasks=new x;b._runQueue=new x;b._load=0;b._idleStateCallbacks=new x;b._idleUpdatesStartFired=!1;b._maxReschedule=C;b._forceTask=!1;b._debug=!1;b._debugHandle=M.init(O,"SCHEDULER_LOG_SLOW_TASKS",g=>b._debug=g);b._budget=new r(a.nowFunc);for(const g of Object.keys(e.TaskPriority))b.performanceInfo.tasks.set(e.TaskPriority[g],
new w(e.TaskPriority[g]));let c;const k=q._assertThisInitialized(b);b._test={get state(){return v.isNone(c)?k._state:c},set state(g){c=g},FRAME_SAFETY_BUDGET:G,INTERACTING_BUDGET:I,IDLE_BUDGET:J,get budget(){return k._budget.budget},usedBudget:0,updateTask:g=>b._updateTask(g),getState:g=>b._getState(g),getRuntime:g=>b._getRuntime(g),resetRuntimes:()=>b._resetRuntimes(),getRunning:()=>b._getRunning()};return b}q._inheritsLoose(h,l);var f=h.prototype;f.destroy=function(){this._debugHandle&&this._debugHandle.remove()};
f.registerTask=function(a,b){const c=A(a);b=new p(this,a,b,c);this._tasks.push(b);this.performanceInfo.tasks.has(a)||this.performanceInfo.tasks.set(a,new w(a));return b};f.registerIdleStateCallbacks=function(a,b){const c={idleBegin:a,idleEnd:b};this._idleStateCallbacks.push(c);2===this.state&&this._idleUpdatesStartFired&&c.idleBegin();const k=this;return{remove:()=>this._removeIdleStateCallbacks(c),set idleBegin(g){k._idleUpdatesStartFired&&(c.idleEnd(),2===k._state&&g());c.idleBegin=g},set idleEnd(g){c.idleEnd=
g}}};f.updateBudget=function(a){this._test.usedBudget=0;let b=G,c=a.frameDuration,k=H;switch(this.state){case 2:b=m.Milliseconds(0);c=m.Milliseconds(Math.max(J,a.frameDuration));k=Q;break;case 1:c=m.Milliseconds(Math.max(I,a.frameDuration))}c=m.Milliseconds(c-a.elapsedFrameTime-b);if(2!==this.state&&c<H&&!this._forceTask)return this._forceTask=!0,!1;c=m.Milliseconds(Math.max(c,k));this._budget.reset(c,this.state);this._maxReschedule=C;this._updateLoad();return this._schedule()};f.frame=function(){this._forceTask=
!1;switch(this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(a=>a.idleBegin()));this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed};f.stopFrame=function(){this._budget.reset(m.Milliseconds(0),this._state);this._budget.madeProgress()};f._removeIdleStateCallbacks=function(a){this._idleUpdatesStartFired&&a.idleEnd();this._idleStateCallbacks.removeUnordered(a)};f.removeTask=
function(a){this._tasks.removeUnordered(a);this._runQueue.removeUnordered(a)};f._updateTask=function(a){this._tasks.forAll(b=>{b.name===a&&b.setPriority(a)})};f._getState=function(a){if(this._runQueue.some(c=>c.name===a))return e.TaskState.SCHEDULED;let b=e.TaskState.IDLE;this._tasks.forAll(c=>{c.name===a&&c.needsUpdate&&(1>=c.schedulePriority?b=e.TaskState.READY:b!==e.TaskState.READY&&(b=e.TaskState.WAITING))});return b};f._getRuntime=function(a){let b=0;this._tasks.forAll(c=>{c.name===a&&(b+=c.runtime)});
return b};f._resetRuntimes=function(){this._tasks.forAll(a=>a.runtime=0)};f._getRunning=function(){const a=new Map;this._tasks.forAll(c=>{c.needsUpdate&&a.set(c.name,(a.get(c.name)||0)+1)});if(0===a.size)return null;let b="";a.forEach((c,k)=>{b=1<c?b+` ${c}x ${k}`:b+` ${k}`});return b};f._runIdle=function(){this._run()};f._runInteracting=function(){this._run()};f._runAnimating=function(){this._run()};f._updateLoad=function(){const a=this._tasks.reduce((b,c)=>c.needsUpdate?++b:b,0);this._load=.9*this._load+
a*(1-.9)};f._schedule=function(){if(0>=this._maxReschedule)return!1;this._runQueue.filterInPlace(a=>{if(a.needsUpdate)return!0;a.schedulePriority=a.basePriority;return!1});for(this._tasks.forAll(a=>{0===a.basePriority&&a.needsUpdate&&!this._runQueue.some(b=>b===a)&&this._runQueue.unshift(a)});0===this._runQueue.length;){let a=!1,b=0;this._tasks.forAll(c=>{if(c.needsUpdate&&0!==c.schedulePriority&&0!==c.basePriority)switch(a=!0,b=Math.max(b,c.basePriority),c.schedulePriority){case 1:c.schedulePriority=
0;this._runQueue.push(c);break;default:--c.schedulePriority}});if(!a)return this.updating=!1;this._maxReschedule===C&&(this._maxReschedule=b);--this._maxReschedule}return this.updating=!0};f._run=function(){const a=this._budget.now();this._startFrameTaskTimes();do for(;0<this._runQueue.length;){var b=this._budget.now();const c=this._runQueue.pop();this._budget.resetProgress();try{c.task.runTask(this._budget)}catch(k){P.error(`Exception in task "${c.name}"`,k)}c.schedulePriority=c.basePriority;b=this._budget.now()-
b;c.runtime+=b;this._frameTaskTimes.set(c.priority,this._frameTaskTimes.get(c.priority)+b);this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",c.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms");if(0>=this._budget.remaining){this._recordFrameTaskTimes(this._budget.now()-a);return}}while(this._schedule());this._recordFrameTaskTimes(this._budget.now()-a)};f._startFrameTaskTimes=function(){for(const a of Object.keys(e.TaskPriority))this._frameTaskTimes.set(e.TaskPriority[a],
0)};f._recordFrameTaskTimes=function(a){this._frameTaskTimes.forEach((b,c)=>this.performanceInfo.tasks.get(c).record(b));this.performanceInfo.total.record(a)};q._createClass(h,[{key:"now",get:function(){return this.nowFunc()}},{key:"load",get:function(){return this._load}},{key:"state",get:function(){return v.isNone(this._test.state)?this._state:this._test.state},set:function(a){this._state!==a&&(this._state=a,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(b=>
b.idleEnd())))}},{key:"test",get:function(){return this._test}}]);return h}(E);t.__decorate([z.property()],n.prototype,"updating",void 0);t.__decorate([z.property()],n.prototype,"nowFunc",void 0);n=t.__decorate([F.subclass("esri.views.support.Scheduler")],n);d.Scheduler=n;let p=function(l){function h(a,b,c,k){var g=l.call(this,{})||this;g._scheduler=a;g.name=b;g._basePriority=k;g.runtime=0;g._queue=new N;g.updating=!1;g.schedulePriority=g._basePriority;g.task=v.isSome(c)?c:{running:!1,runTask:R=>
g.processQueue(R)};return g}q._inheritsLoose(h,l);var f=h.prototype;f.normalizeCtorArgs=function(){return{}};f.remove=function(){this.processQueue(K);this._scheduler.removeTask(this);this.schedule=D.schedule;this.reschedule=D.reschedule};f.setPriority=function(a){this.name=a;a=A(a);if(0===this._basePriority||0!==this.schedulePriority)this.schedulePriority=a;this._basePriority=a};f.schedule=function(a,b,c){this.updating=!0;return this._queue.push(a,b,c)};f.reschedule=function(a,b,c){this.updating=
!0;return this._queue.unshift(a,b,c)};f.processQueue=function(a){for(;!a.done&&this._queue.process();)a.madeProgress();this.updating=0<this._queue.length};q._createClass(h,[{key:"basePriority",get:function(){return this._basePriority}},{key:"priority",get:function(){return this.name},set:function(a){this.setPriority(a)}},{key:"needsUpdate",get:function(){return this.updating||this.task.running}}]);return h}(E);t.__decorate([z.property()],p.prototype,"updating",void 0);p=t.__decorate([F.subclass("esri.views.support.SchedulerTask")],
p);let r=function(){function l(f){this.now=f;this._budget=this._begin=0;this._state=2;this._didWork=!1;this._enabled=!0}var h=l.prototype;h.run=function(f){if(this.done)return!1;!0===f()&&(this._didWork=!0);return!0};h.madeProgress=function(){this._didWork=!0};h.reset=function(f,a){this._begin=this.now();this._budget=f;this._state=a;this._didWork=!1};h.resetProgress=function(){this._didWork=!1};q._createClass(l,[{key:"done",get:function(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}},
{key:"budget",get:function(){return this._budget}},{key:"state",get:function(){return this._state}},{key:"enabled",get:function(){return this._enabled},set:function(f){this._enabled=f}},{key:"remaining",get:function(){return Math.max(this._budget-this.elapsed,0)}},{key:"elapsed",get:function(){return this.now()-this._begin}},{key:"hasProgressed",get:function(){return this._didWork}}]);return l}();d.Budget=r})(u||(u={}));e.TaskState=void 0;(function(d){d.SCHEDULED="s";d.READY="r";d.WAITING="w";d.IDLE=
"i"})(e.TaskState||(e.TaskState={}));const K=(()=>{const d=new u.Budget(()=>performance.now());d.enabled=!1;return d})(),D=new (function(){function d(){}var n=d.prototype;n.remove=function(){};n.processQueue=function(){};n.schedule=function(p,r,l){try{if(y.isAborted(r)){const h=y.createAbortError();return l?Promise.resolve(l(h)):Promise.reject(h)}return y.when(p())}catch(h){return Promise.reject(h)}};n.reschedule=function(p,r,l){return this.schedule(p,r,l)};return d}()),C=Number.MAX_SAFE_INTEGER;
e.ImmediateTask=D;e.getTaskPriority=A;e.newScheduler=function(d){return new u.Scheduler({nowFunc:d})};e.noBudget=K;e.taskPriorities=B;Object.defineProperty(e,"__esModule",{value:!0})});