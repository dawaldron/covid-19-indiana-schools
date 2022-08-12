$(window).load(function() {

  /* New Mobile Menu */

  
  if ($('#menubar .inner-bar').length) {
    var parent = $('#menubar .inner-bar');
  } else if ($('#menubar .inside-padding .row').length) {
    var parent = $('#menubar .inside-padding .row');
  } else if ($('#menubar .inside-padding').length) {
    var parent = $('#menubar .inside-padding');
  } else {
    var parent = $('#menubar');
  }
  parent.append('<a href="javascript:void(0);" id="mobileNav" title="Mobile Navigation" aria-expanded="false"><div class="hamburger"><div class="bar"></div></div><span>MENU</span></a>');
  parent.append('<div class="mobile-nav-items"><ul class="level0"></ul></div>');

  /* Render items */

  // if ($('#mMenuCMS').length) {
  //   var mId = $('#mMenuCMS');
  // } else if ($('#mobile-nav').length) {
  //   var mId = $('#mobile-nav');
  // }

  $('.mm-menu > ul > li > a:not(.mm-subopen)').each(function(){
    var title = $(this).text();
    var url = $(this).attr('href');
    var p = $(this).parent();
    var subnavL1 = p.find(' > .mm-list');
    var subnavL2 = subnavL1.find(' > li > .mm-list');
    var stitle, surl;
    if (subnavL2.length) {
      $('.mobile-nav-items ul.level0').append('<li class="level0 has-child" data-nav="' + title + '"><a aria-label="' + title + '" href="' + url + '">' + title + '</a><a href="javascript:void(0);" class="subnav fa fa-plus" aria-expanded="false" aria-label="' + title + '"><span class="offScreen">' + title + '</span></a><ul class="subnav-items level1"></ul></li>');
      var subnavL1child = $('.mobile-nav-items ul li.level0[data-nav="' + title + '"] .subnav-items.level1');
      subnavL1.find('> li > a:not(.mm-subopen)').each(function(){
        stitle = $(this).text();
        surl = $(this).attr('href');
        subnavL1child.append('<li class="level1 has-child" data-nav="' + stitle + '"><a aria-label="' + stitle + '" href="' + surl + '">' + stitle + '</a><a href="javascript:void(0);" class="subnav fa fa-plus" aria-expanded="false" aria-label="' + stitle + '"><span class="offScreen">' + stitle + '</span></a><ul class="subnav-items level2"></ul></li>');
        subnavL2.find('> li > a:not(.mm-subopen)').each(function(){
          var subnavL2child = $('.mobile-nav-items ul li.level1[data-nav="' + stitle + '"] .subnav-items.level2');
          var sL2title = $(this).text();
          var sL2url = $(this).attr('href');
          var parent = $(this).parents().eq(1).siblings('a:not(.mm-subopen)').text();
          if (parent == stitle) {
            subnavL2child.append('<li class="level2" data-nav="' + sL2title + '"><a aria-label="' + sL2title + '" href="' + sL2url + '">' + sL2title + '</a></li>');
          }
        });
      });
    } else if (subnavL1.length) {
      $('.mobile-nav-items ul.level0').append('<li class="level0 has-child" data-nav="' + title + '"><a aria-label="' + title + '" href="' + url + '">' + title + '</a><a href="javascript:void(0);" class="subnav fa fa-plus" aria-expanded="false" aria-label="' + title + '"><span class="offScreen">' + title + '</span></a><ul class="subnav-items level1"></ul></li>');
      var subnavL1child = $('.mobile-nav-items ul li.level0[data-nav="' + title + '"] .subnav-items.level1');
      subnavL1.find('> li > a:not(.mm-subopen)').each(function(){
        var stitle = $(this).text();
        var surl = $(this).attr('href');
        subnavL1child.append('<li class="level1" data-nav="' + stitle + '"><a aria-label="' + stitle + '" href="' + surl + '">' + stitle + '</a></li>');
      });
    } else {
      $('.mobile-nav-items ul.level0').append('<li class="level0" data-nav="' + title + '"><a aria-label="' + title + '" href="' + url + '">' + title + '</a></li>');
    }
  });

  /*  Hamburger (production) */

  $('#mobileNav').on('click', function() {
    $(this).toggleClass('expanded');
    if ($(this).hasClass('expanded')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
    $('.mobile-nav-items').slideToggle(400);
  })

  /* Expanding Menu */

  $('.mobile-nav-items .subnav').each(function(){
    $(this).click(function(){
      $(this).toggleClass('fa-minus expanded');
      $(this).siblings('.subnav-items').slideToggle(400);
      if ($(this).hasClass('expanded')) {
        $(this).attr('aria-expanded', 'true');
      } else {
        $(this).attr('aria-expanded', 'false');
      }
    });
  });

  /* Removing extra plus icons in level 2 */

  $('.mobile-nav-items ul li .subnav-items.level2').each(function(){
    if (!$(this).find('a').length) {
      $(this).siblings('.fa').remove();
    }
  });

  /* Close dropdown when focus is on the items */

  /* Level 0 */

  if (!$('#menubar .mobile-nav-items > ul > li:last-child').hasClass('has-child')) {
    $('#menubar .mobile-nav-items > ul > li:last-child > a').focusout(function(){
      $('#menubar .mobile-nav-items').slideUp(400);
      $('#menubar #mobileNav').removeClass('expanded');
    });
  } else {
    $('#menubar .mobile-nav-items > ul > li:last-child > a.subnav').focusout(function(){
      if (!$(this).hasClass('expanded')) {
        $('#menubar .mobile-nav-items').slideUp(400);
        $('#menubar #mobileNav').removeClass('expanded');
      }
    });
  }

  /* Level 1 */

  if ($('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level1').length) {
    if (!$('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level1 > li:last-child').hasClass('has-child')) {
      $('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level1 > li:last-child > a').focusout(function(){
        $('#menubar .mobile-nav-items').slideUp(400);
        $('#menubar #mobileNav').removeClass('expanded');
      });
    } else {
      $('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level1 > li:last-child > a.subnav').focusout(function(){
        if (!$(this).hasClass('expanded')) {
          $('#menubar .mobile-nav-items').slideUp(400);
          $('#menubar #mobileNav').removeClass('expanded');
        }
      });
    }
  }


  /* Level 2 */


  if ($('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level2').length) {
    $('#menubar .mobile-nav-items > ul > li:last-child .subnav-items.level1 > li:last-child > .subnav-items.level2 > li:last-child > a').focusout(function(){
      $('#menubar .mobile-nav-items').slideUp(400);
      $('#menubar #mobileNav').removeClass('expanded');
    });
  }


  // /* Check Color Contrast */

  // var bgColor = $('#menubar').css('background-color');
  // $('#mobileNav').css('color', getcontrast(rgb2hex(bgColor)));

  // if (getcontrast(rgb2hex(bgColor)) == 'black') {
  //   $('#mobileNav .hamburger').addClass('black');
  // } else if (getcontrast(rgb2hex(bgColor)) == 'white') {
  //   $('#mobileNav .hamburger').addClass('white');
  // }


  // function getcontrast(hex) {
  //   var r = parseInt(hex.substr(1, 2), 16),
  //   g = parseInt(hex.substr(3, 2), 16),
  //   b = parseInt(hex.substr(5, 2), 16),
  //   yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  //   return (yiq >= 128) ? 'black' : 'white';
  // }

  // function rgb2hex(rgb) {
  //   rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  //   function hex(x) {
  //     return ("0" + parseInt(x).toString(16)).slice(-2);
  //   }
  //   return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  // }


});