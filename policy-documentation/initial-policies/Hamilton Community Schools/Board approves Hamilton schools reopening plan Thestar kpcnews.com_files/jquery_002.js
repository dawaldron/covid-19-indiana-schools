!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=t.event.dispatch||t.event.handle,n=t.event.special,l="D"+ +new Date,o="D"+(+new Date+1);n.scrollstart={setup:function(o){var a,c=t.extend({latency:n.scrollstop.latency},o),i=function(t){var n=this,l=arguments;a?clearTimeout(a):(t.type="scrollstart",e.apply(n,l)),a=setTimeout(function(){a=null},c.latency)};t(this).bind("scroll",i).data(l,i)},teardown:function(){t(this).unbind("scroll",t(this).data(l))}},n.scrollstop={latency:250,setup:function(l){var a,c=t.extend({latency:n.scrollstop.latency},l),i=function(t){var n=this,l=arguments;a&&clearTimeout(a),a=setTimeout(function(){a=null,t.type="scrollstop",e.apply(n,l)},c.latency)};t(this).bind("scroll",i).data(o,i)},teardown:function(){t(this).unbind("scroll",t(this).data(o))}}});
//# sourceMappingURL=jquery.scrollstop.934c2bd4d6bebe0494bcb9dd4b1b6ca1.js.map