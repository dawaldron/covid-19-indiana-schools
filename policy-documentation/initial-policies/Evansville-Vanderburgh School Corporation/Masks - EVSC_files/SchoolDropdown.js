$(document).ready( function(){

  if( $('.school-dropdown-col').length > 1 ){
    $('#pubWrapper').addClass('mega-pub');

    var colNum = $('.school-dropdown-col').length;

    $('.school-dropdown-col').css('width', 100 / colNum + '%');

    $(window).resize( function(){

      var pubWid = $('#pubWrapper .container').width();

      $('ul.schoolDropdown').width( pubWid );
    });

  }

  $('#selectSchool .schoolList .schoolGroup').each(function(){
    $(this).nextUntil(".schoolGroup").wrapAll('<div class="tab-content" />');
  });

  $("#selectSchool .tab-button a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    var tab = $(this).attr("href");
    $("#selectSchool .tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });

  $("#selectSchool .tab-content:nth-of-type(1)").attr("id","tab-1");
  $("#selectSchool .tab-content:nth-of-type(2)").attr("id","tab-2");
  $("#selectSchool .tab-content:nth-of-type(3)").attr("id","tab-3");
  $("#selectSchool .tab-content:nth-of-type(4)").attr("id","tab-4");
  $("#selectSchool .tab-content:nth-of-type(5)").attr("id","tab-5");

  var wi = $(window).width();

  if (wi <= 640) {
    $('#selectSchool #tab-1').addClass('active').css("display", "block");
    $('#selectSchool #tab-2').removeClass('active').css("display", "none");
    $('#selectSchool #tab-3').removeClass('active').css("display", "none");
    $('#selectSchool #tab-4').removeClass('active').css("display", "none");
    $('#selectSchool #tab-5').removeClass('active').css("display", "none");
  } else {
    $('#selectSchool #tab-1').addClass('active').css("display", "block");
    $('#selectSchool #tab-2').removeClass('active').css("display", "none");
    $('#selectSchool #tab-3').removeClass('active').css("display", "none");
    $('#selectSchool #tab-4').removeClass('active').css("display", "none");
    $('#selectSchool #tab-5').removeClass('active').css("display", "none");
  }

});