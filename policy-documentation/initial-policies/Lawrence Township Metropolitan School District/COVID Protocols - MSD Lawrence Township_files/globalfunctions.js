(function ($, document, window) {
  var $doc = $(document),
    $win = $(window),
    $widgetCol, $sidenav, stickyOffset, windowWidth;

  //document ready functions
  $doc.on('ready', function () {
    $widgetCol = $('.cols .widget');
    $sidenav = $('.sidenav');

    // District bar schools mega menu web part
    //
    $('.schools-link').on('click', ' > a', function (e) {
      var $this = $(this);

      if ($this.siblings('.schools').is(':not(:animated)')) {
        $this.siblings('.schools').slideToggle();
        $this.parent().toggleClass('open');
      };

      e.preventDefault();
    });
  
    // Magnet school selection on menu bar (magnet site only)
    //
    $('.nav .magnetschools-link').on('click', ' > a', function (e) {
      var $this = $(this);
    
      if ($this.parent().parent().siblings('.magnet-schools').is(':not(:animated)')) {
        $this.parent().parent().siblings('.magnet-schools').slideToggle();
        $this.parent().toggleClass('open');
      };
    
      e.preventDefault();
    }).children('a').append('<small></small>');

    $doc.mouseup(function (e) {
      var $container = $('.schools');

      if ($container.css('display') == 'none')
        return;

      if ($container.has(e.target).length === 0) {
        if ($container.is(':not(:animated)')) {
          $container.slideToggle();
          $container.parent().toggleClass('open');
        };
      }
    });

    /*
    $('.sidenav > li > a').on('click', function (e) {
      var $this = $(this);
      $ul = $sidenav.find('ul'),
      $siblingUl = $this.siblings('ul');

      if ($siblingUl.length) {
        $sidenav.children('li').removeClass('current');
        $this.parent('.sidenav > li').addClass('current');

        if (!$ul.is(':animated') && !$siblingUl.is(':visible')) {
          $ul.slideUp();
          $siblingUl.slideDown();
        };
        e.preventDefault();
      };
    });
    */

    $('#myCarousel').carousel({
      interval:7000,
      pause:'hover'
    });
    $('#myCarousel').bind('slid', function (e) {
      setTimeout(setBannerRightControl, 1000);
    });
    
    $('.navbar').on('click', '.navbar-button-navigation', function (e) {
      var $this = $(this)
      $nav = $this.siblings('.nav');

      if ($nav.is(':not(:animated)')) {
        $nav.slideToggle();
        $this.toggleClass('active');
      };
    
      $magschools = $('.magnet-schools');
      if ($magschools.is(':visible')) {
        $magschools.slideToggle();
      }

      e.preventDefault();
    });

    $('.navbar ul.nav li.new-window a').attr('target', '_blank');
  
    $('.utility-bar').on('click', '.utility-button', function (e) {
      var $ul = $(this).siblings('ul');

      if (!$ul.is(':animated')) {
        $ul.slideToggle();
      };

      e.preventDefault();
    });

    /*$('.widget-announcements h4').hover(
      function () {
          if ($(window).width() > 979) {
              $(this).addClass('spanish');
          }
      },
      function () { $(this).removeClass('spanish'); }
    );*/
    $('.widget-news h5').on('click', function () {
      var $h5 = $(this);
      var $h6 = $('.widget-news h6');
      var $events = $('.widget-news .widget-body-events');
      var $board = $('.widget-news .widget-body-board');
      if ($h5.hasClass("inactive")) {
        $h5.addClass("active");
        $h5.removeClass("inactive");
        $h6.addClass("inactive");
        $h6.removeClass("active");
        $events.show();
        $board.hide();
      }
    });
    $('.widget-news h6').on('click', function () {
      var $h5 = $('.widget-news h5');
      var $h6 = $(this);
      var $events = $('.widget-news .widget-body-events');
      var $board = $('.widget-news .widget-body-board');
      if ($h6.hasClass("inactive")) {
        $h6.addClass("active");
        $h6.removeClass("inactive");
        $h5.addClass("inactive");
        $h5.removeClass("active");
        $events.hide();
        $board.show();
      }
    });
    $('.widget-news .widget-body-events').show();
    $('.widget-news .widget-body-board').hide();
    
    $('.portalIconImg').hover(function () {
      var rel = $(this).attr("rel");
      var src = $(this).attr("src");
      $(this).attr("src", rel);
      $(this).attr("rel", src);
    }, function () {
      var rel = $(this).attr("rel");
      var src = $(this).attr("src");
      $(this).attr("src", rel);
      $(this).attr("rel", src);
    });
    
    windowWidth = $(window).width();
    var bannerImgHeight = $('.carousel-inner').height();
    $(window).resize(function(){
      windowWidth = $(window).width();
      checkSticky();
      $('.carousel-inner,.item').removeAttr("style");
      if (windowWidth <= 767) {
        var bannerImgHeight = $('.carousel-inner').height();
        $('.carousel-inner,.item').css("height",(bannerImgHeight + 95) + "px");
        if ($('.navbar-search .search-query').is(":visible")) {
          $('.utility-bar').css("height", "90px");
        } else {
          $('.utility-bar').css("height", "45px");
        }
        $('.header').css("padding-top", "12px");
      }
      else if (windowWidth <= 979) {
        $('.utility-bar').css("height", "85px");
        $('.header').css("padding-top", "18px");
        $('.navbar-search').removeAttr("style");
        $('.search-query').show();
      } else {
        $('.utility-bar').css("height", "48px");
        $('.header').css("padding-top", "11px");
        $('.navbar-search').removeAttr("style");
        $('.search-query').show();
      }
      setTimeout(checkSharingBar, 1000);
    });
    function checkSharingBar() {
      if (!$('.at4-share-outer').is(":visible")) {
        $('#addThisSharingToolbox').show();
      } else {
        $('#addThisSharingToolbox').hide();
      }
    }
    
    if (windowWidth <= 767) {
      $('.carousel-inner,.item').css("height",(bannerImgHeight + 95) + "px");
    } else {
      $('.carousel-inner,.item').removeAttr("style");
    }
    
    $('.navbar').wrap('<div class="navbarWrapper" />').show();
    stickyOffset = $('.header .navbarWrapper:eq(0)').offset().top;
    $(window).scroll(function(){
      checkSticky();
    });
    function checkSticky() {
      var sticky = $('.navbar');
      var scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) {
        sticky.addClass('fixed');
        if (windowWidth <= 979) {
          var w = $('.main:eq(0)').width();
          sticky.attr("style", "display:block;width:" + w + "px");
          $('#navbar-mobile-right').attr("style", "position: fixed !important;right:inherit;margin-left:" + (w + 10) + "px");
        } else {
          sticky.attr("style", "display:block;");
        }
      } else {
        sticky.removeClass('fixed');
        if (windowWidth <= 979) {
          //sticky.css("width", "100%");
          $('#navbar-mobile-right').removeAttr("style");
        }
        sticky.attr("style", "display:block");
      }
    }
  });

  //window load functions
  $win.on('load', function () {
    var height = 0;

    if (!$widgetCol)
      return;

    $widgetCol.each(function () {
      var $this = $(this);

      if ($this.height() > height) {
          height = $this.height();
      };
    });
    $widgetCol.css({ 'min-height': height });
    /*
    var buttonHeight = 0;
    $widgetColButtons = $('.cols .widget .more.primary');
    $widgetColButtons.each(function () {
      var $this = $(this);
      if ($this.height() > buttonHeight) {
          buttonHeight = $this.offset().top;
      };
    });
    
    $widgetColButtons.css('position','absolute').css({ 'top': buttonHeight });
    //$('.more.primary').css('position','absolute').css('top', $widgetCol.offset().top + height - 100);
    */
    var blogSidebar = $('#siteBlog > .span3').height();
    var blogContent = $('#siteBlog > .span9').height();
    if (blogSidebar > blogContent) {
      $('#siteBlog > .span9').css("height", blogSidebar + "px");
    } else {
      //$('#siteBlog > .span3').css("height", blogContent);
      $('#siteBlog > .span3 > .sidebar').css("height", blogContent + "px");
    }
    
    if ($('#myCarousel').length > 0) {
      setBannerRightControl();
    }
  });
}(jQuery, document, window));

function setBannerRightControl() {
  var leftOffset = $('#myCarousel').find('.active').find('.slide-number-next').offset().left;
  $('.carousel-control.right').css("left", leftOffset - $('#myCarousel').offset().left + 7 + "px");
}

function resolve(url, base_url) {
  var doc      = document
    , old_base = doc.getElementsByTagName('base')[0]
    , old_href = old_base && old_base.href
    , doc_head = doc.head || doc.getElementsByTagName('head')[0]
    , our_base = old_base || doc_head.appendChild(doc.createElement('base'))
    , resolver = doc.createElement('a')
    , resolved_url
    ;
  our_base.href = base_url;
  resolver.href = url;
  resolved_url  = resolver.href; // browser magic at work here

  if (old_base) old_base.href = old_href;
  else doc_head.removeChild(our_base);
  return resolved_url;
}

jQuery(function() {
  initNav();
  firstMenu = $('.nav li:first').text();
  setTimeout(waitNav, 500);
});

function waitNav() {
  if (firstMenu != $('.nav li:first').text()) {
    initNav();
    firstMenu = $('.nav li:first').text();
    setTimeout(waitNav, 500);
  }
  else {
    setTimeout(waitNav, 500);
  }
}

function initNav() {
  //$('.navbar .nav > li + li').css('padding-left', '43px');
  var outerWidth = 0;
  $('.navbar .nav li').each(function() {
    outerWidth = outerWidth + $(this).outerWidth();
  });
  if (outerWidth > 910) {
    var paddingOffset = Math.ceil((outerWidth - 900) / $('.navbar .nav > li + li').length);
    var newPadding = 43 - paddingOffset;
    $('.navbar .nav > li + li').css('padding-left', newPadding + 'px');
  }
}
