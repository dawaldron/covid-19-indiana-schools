$(window).load(function() {

if ($('.rmSelected').length > 0) { 

$('.rmSelected').parent().addClass('menuSelected');

      var $el, leftPos, newWidth,
          $mainNav = $("ul.rmRootGroup.rmHorizontal");
      
      $mainNav.append('<li id="magic-line"></li>');

      var $magicLine = $("#magic-line");


    $(window).on('resize',function(){
      
      $magicLine
          .width($("ul.rmRootGroup.rmHorizontal > .rmItem.menuSelected").width())
          .css("left", $("ul.rmRootGroup.rmHorizontal > .rmItem.menuSelected").position().left)
          .data("origLeft", $magicLine.position().left)
          .data("origWidth", $magicLine.width());
      
      // Keeps bar in place when hovering over "Level0" menu       
      $("ul.rmRootGroup.rmHorizontal > li > a").hover(function() {

          $el = $(this);
          var offsetBM = $mainNav.offset().left;
          var offsetLine = $el.offset().left - offsetBM;
          leftPos = offsetLine;
          newWidth = $el.parent().width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });    
      });

      // Keeps bar in place when hovering over "Level1" menu
      $("ul.rmVertical > li > a").hover(function() {

          $el = $(this);
          var offsetBM = $mainNav.offset().left;
          var offsetLine = $el.offset().left - offsetBM;
          leftPos = offsetLine;
          newWidth = $el.parents('ul.rmRootGroup.rmHorizontal > li').width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });    
      });

      /* Keeps bar in place when hovering over "Level2" menu
      $("ul.rmVertical.rmLevel2 > li > a").hover(function() {

          $el = $(this).parents('ul.rmRootGroup.rmHorizontal > li');
          var offsetBM = $mainNav.offset().left;
          var offsetLine = $el.offset().left - offsetBM;
          leftPos = offsetLine;
          newWidth = $el.width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });    
      });  */
        
      // Keeps bar in place when hovering over "Level3" menu
      $("ul.rmVertical[class*='rmLevel'] > li > a").hover(function() {

          $el = $(this).parents('ul.rmRootGroup.rmHorizontal > li');
          var offsetBM = $mainNav.offset().left;
          var offsetLine = $el.offset().left - offsetBM;
          leftPos = offsetLine;
          newWidth = $el.width();
          $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $magicLine.data("origWidth")
          });    
      });

      // alert( $('#menubar-960').css('margin-left') + ', ' + $('a[title="Home"]').offset().left);
    }).resize();
	
}

});