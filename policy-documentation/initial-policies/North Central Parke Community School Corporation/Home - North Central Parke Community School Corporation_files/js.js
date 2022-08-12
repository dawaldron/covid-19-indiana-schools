Type.registerNamespace('Intrafinity.Web.Services');
Intrafinity.Web.Services.CalendarPickerWS=function() {
Intrafinity.Web.Services.CalendarPickerWS.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Intrafinity.Web.Services.CalendarPickerWS.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_path();},
GetCalendarPageList:function(serverId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetCalendarPageList',false,{serverId:serverId},succeededCallback,failedCallback,userContext); },
GetCalendarRelatedItemList:function(parentId,category,pageIndex,pagesize,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetCalendarRelatedItemList',false,{parentId:parentId,category:category,pageIndex:pageIndex,pagesize:pagesize},succeededCallback,failedCallback,userContext); },
GetNavItemList:function(rootId,currentId,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetNavItemList',false,{rootId:rootId,currentId:currentId},succeededCallback,failedCallback,userContext); },
GetServerInfoList:function(serverIds,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetServerInfoList',false,{serverIds:serverIds},succeededCallback,failedCallback,userContext); }}
Intrafinity.Web.Services.CalendarPickerWS.registerClass('Intrafinity.Web.Services.CalendarPickerWS',Sys.Net.WebServiceProxy);
Intrafinity.Web.Services.CalendarPickerWS._staticInstance = new Intrafinity.Web.Services.CalendarPickerWS();
Intrafinity.Web.Services.CalendarPickerWS.set_path = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_path(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_path = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_path(); }
Intrafinity.Web.Services.CalendarPickerWS.set_timeout = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_timeout(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_timeout = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_timeout(); }
Intrafinity.Web.Services.CalendarPickerWS.set_defaultUserContext = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_defaultUserContext(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_defaultUserContext = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_defaultUserContext(); }
Intrafinity.Web.Services.CalendarPickerWS.set_defaultSucceededCallback = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_defaultSucceededCallback(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_defaultSucceededCallback = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_defaultSucceededCallback(); }
Intrafinity.Web.Services.CalendarPickerWS.set_defaultFailedCallback = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_defaultFailedCallback(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_defaultFailedCallback = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_defaultFailedCallback(); }
Intrafinity.Web.Services.CalendarPickerWS.set_enableJsonp = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_enableJsonp(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_enableJsonp = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_enableJsonp(); }
Intrafinity.Web.Services.CalendarPickerWS.set_jsonpCallbackParameter = function(value) { Intrafinity.Web.Services.CalendarPickerWS._staticInstance.set_jsonpCallbackParameter(value); }
Intrafinity.Web.Services.CalendarPickerWS.get_jsonpCallbackParameter = function() { return Intrafinity.Web.Services.CalendarPickerWS._staticInstance.get_jsonpCallbackParameter(); }
Intrafinity.Web.Services.CalendarPickerWS.set_path("/common/controls/General/CalendarPicker/CalendarPickerWS.asmx");
Intrafinity.Web.Services.CalendarPickerWS.GetCalendarPageList= function(serverId,onSuccess,onFailed,userContext) {Intrafinity.Web.Services.CalendarPickerWS._staticInstance.GetCalendarPageList(serverId,onSuccess,onFailed,userContext); }
Intrafinity.Web.Services.CalendarPickerWS.GetCalendarRelatedItemList= function(parentId,category,pageIndex,pagesize,onSuccess,onFailed,userContext) {Intrafinity.Web.Services.CalendarPickerWS._staticInstance.GetCalendarRelatedItemList(parentId,category,pageIndex,pagesize,onSuccess,onFailed,userContext); }
Intrafinity.Web.Services.CalendarPickerWS.GetNavItemList= function(rootId,currentId,onSuccess,onFailed,userContext) {Intrafinity.Web.Services.CalendarPickerWS._staticInstance.GetNavItemList(rootId,currentId,onSuccess,onFailed,userContext); }
Intrafinity.Web.Services.CalendarPickerWS.GetServerInfoList= function(serverIds,onSuccess,onFailed,userContext) {Intrafinity.Web.Services.CalendarPickerWS._staticInstance.GetServerInfoList(serverIds,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('Intrafinity.Web.Classes');
if (typeof(Intrafinity.Web.Classes.ClientCalendar) === 'undefined') {
Intrafinity.Web.Classes.ClientCalendar=gtc("Intrafinity.Web.Classes.ClientCalendar");
Intrafinity.Web.Classes.ClientCalendar.registerClass('Intrafinity.Web.Classes.ClientCalendar');
}
if (typeof(Intrafinity.Web.Classes.ClientCalendarPageNode) === 'undefined') {
Intrafinity.Web.Classes.ClientCalendarPageNode=gtc("Intrafinity.Web.Classes.ClientCalendarPageNode");
Intrafinity.Web.Classes.ClientCalendarPageNode.registerClass('Intrafinity.Web.Classes.ClientCalendarPageNode');
}
if (typeof(Intrafinity.Web.Services.ContentItemListWSResult) === 'undefined') {
Intrafinity.Web.Services.ContentItemListWSResult=gtc("Intrafinity.Web.Services.ContentItemListWSResult");
Intrafinity.Web.Services.ContentItemListWSResult.registerClass('Intrafinity.Web.Services.ContentItemListWSResult');
}
if (typeof(Intrafinity.Web.Classes.ClientClickServer) === 'undefined') {
Intrafinity.Web.Classes.ClientClickServer=gtc("Intrafinity.Web.Classes.ClientClickServer");
Intrafinity.Web.Classes.ClientClickServer.registerClass('Intrafinity.Web.Classes.ClientClickServer');
}
