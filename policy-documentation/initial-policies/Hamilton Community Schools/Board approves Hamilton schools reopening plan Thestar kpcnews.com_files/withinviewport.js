!function(t,e,o){"function"==typeof define&&define.amd?define([],o):"undefined"!=typeof module&&"object"==typeof exports?module.exports=o():t.withinviewport=o()}(this,0,function(){var t=void 0!==window.innerHeight,e=function e(o,n){var r,i,l,c,f,u,a,d,p,s=!1,g={},m={},h=[0,0];if("undefined"!=typeof jQuery&&o instanceof jQuery&&(o=o.get(0)),"object"!=typeof o||1!==o.nodeType)throw new Error("First argument must be an element");for(o.getAttribute("data-withinviewport-settings")&&window.JSON&&(g=JSON.parse(o.getAttribute("data-withinviewport-settings"))),r="string"==typeof n?{sides:n}:n||{},m.container=r.container||g.container||e.defaults.container||window,m.sides=r.sides||g.sides||e.defaults.sides||"all",m.top=r.top||g.top||e.defaults.top||0,m.right=r.right||g.right||e.defaults.right||0,m.bottom=r.bottom||g.bottom||e.defaults.bottom||0,m.left=r.left||g.left||e.defaults.left||0,"undefined"!=typeof jQuery&&m.container instanceof jQuery&&(m.container=m.container.get(0)),m.container!==document.body&&1!==!m.container.nodeType||(m.container=window),l=m.container===window,i={top:function(){return l?c.top>=m.top:c.top>=containerScrollTop-(containerScrollTop-f.top)+m.top},right:function(){return l?c.right<=f.right+containerScrollLeft-m.right:c.right<=f.right-h[0]-m.right},bottom:function(){var e;return e=l?t?m.container.innerHeight:document.documentElement.clientHeight:f.bottom,c.bottom<=e-h[1]-m.bottom},left:function(){return l?c.left>=m.left:c.left>=containerScrollLeft-(containerScrollLeft-f.left)+m.left},all:function(){return i.top()&&i.bottom()&&i.left()&&i.right()}},c=o.getBoundingClientRect(),l?(f=document.documentElement.getBoundingClientRect(),containerScrollTop=document.body.scrollTop,containerScrollLeft=document.body.scrollLeft):(f=m.container.getBoundingClientRect(),containerScrollTop=m.container.scrollTop,containerScrollLeft=m.container.scrollLeft),containerScrollLeft&&(h[0]=18),containerScrollTop&&(h[1]=16),u=/^top$|^right$|^bottom$|^left$|^all$/,a=m.sides.split(" "),p=a.length;p--;)if(d=a[p].toLowerCase(),u.test(d)){if(!i[d]()){s=!1;break}s=!0}return s};return e.prototype.defaults={container:document.body,sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e});
//# sourceMappingURL=withinviewport.1f94ee79a22e6ee8e9c0bb61dec9999b.js.map