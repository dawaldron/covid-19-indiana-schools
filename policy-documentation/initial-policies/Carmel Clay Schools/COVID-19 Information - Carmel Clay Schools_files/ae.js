!function(){
  var document = window.document,
  addListener = document.addEventListener || document.attachEvent,
  removeListener = document.removeEventListener || document.detachEvent,
  eventName = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange",
  readyCallback = function () {
      removeListener.call(document, eventName, readyCallback, false);
      var a=document.createElement("script");
      a.src="https://wsmcdn.audioeye.com/bootstrap.js?f=ae&h="+(window.__AudioEyeSiteHash || 0);
      a.type="text/javascript";
      a.setAttribute("async","");
      document.getElementsByTagName("body")[0].appendChild(a)
  };
  if (document.readyState !== "loading") {
    readyCallback();
  } else {
    addListener.call(document, eventName, readyCallback, false);
  }
}();
