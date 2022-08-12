$( window ).load(function() {
 $(function() {
  var f = $('#breadcrumbs div');
  if (f.length > 0)
 	f.html(f.html().replace(/»/g, "<span>/</span>"));
 });
});