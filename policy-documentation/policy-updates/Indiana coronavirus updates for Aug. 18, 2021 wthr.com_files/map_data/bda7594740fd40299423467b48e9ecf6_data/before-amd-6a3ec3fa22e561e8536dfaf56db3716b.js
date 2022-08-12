var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE "),trident=ua.indexOf("Trident/"),edgeLegacy=ua.indexOf("Edge/1")
if((msie>0||trident>0||edgeLegacy>0)&&window.location.replace("error.html"),"https:"===window.location.protocol){var csp=document.querySelector('meta[http-equiv="Content-Security-Policy"]')
csp.content="upgrade-insecure-requests"}window.CKEDITOR_BASEPATH=window.location.pathname.match(/((?:[^/]*\/)*).*/)[1]+"assets/ckeditor/"
