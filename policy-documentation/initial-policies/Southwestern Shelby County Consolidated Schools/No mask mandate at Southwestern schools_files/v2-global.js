$(document).ready(function () {
  /* ========== Bootstrap Navigation Override ========== */
  function dropDownLocation() {
    var location = $(this).attr('href');
    var target = $(this).attr('target');

    if (location !== '') {
      if (target == '_blank') {
        window.open(location);
      } else {
        window.location.href = location;
      }
    }
    return false;
  }

  $('.dropdown-toggle').on('click', dropDownLocation);
  $('.dropdown-toggle').each(function () {
    if ($(this).attr('href') === '') {
      $(this).addClass('default');
    }
  });

  /* ========== Add dropdown toggle for mobile ========== */
  $(".dropdown").each(function () {
    if ($(this).children('.dropdown-menu').length) {
      $(this).addClass('toggle');
      $(this).append('<span class="sm-toggle"></span>'); // for boostrap v4
    }
  });
  $(".dropdown-menu .dropdown.toggle").each(function (index, element) {
    if ($(this).children('.dropdown-menu').length) {
      $(this).append('<span class="mobile-toggle"><i class="fa fa-angle-down"></i></span>');
    }
  });

  $('.mobile-toggle').click(function (e) {
    $(this).siblings('.dropdown-menu').toggleClass('active');
    $(this).children('i').toggleClass('fa-angle-down');
    $(this).children('i').toggleClass('fa-angle-up');
  });

  //bootstrap v4 version
  $(".dropdown-submenu").each(function (index) {
    if ($(this).children('.dropdown-menu').length) {
      $(this).append('<span class="sm-toggle"></span>');
    }
  });
  $('.sm-toggle').click(function (e) {
    $(this).siblings('.dropdown-menu').toggleClass('active');
    $(this).toggleClass('open');
  });

  /* ========== Keep Hover State During Submenu Rollover ========== */
  $('.dropdown').mouseover(function () {
    $(this).children('.dropdown-toggle').addClass('active');
  });
  $('.dropdown').mouseleave(function () {
    $(this).children('.dropdown-toggle').removeClass('active');
  });


  /* ========== Member Login  ========== */
  $('#login-toggle').click(function () {
    $('.user-nav').toggleClass('active');
  });

  /* ========== Bootstrap Tooltip Initialization ========== */
  if (typeof tooltip == 'function') {
    $('[data-toggle="tooltip"]').tooltip();
  }

});
