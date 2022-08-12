$( document ).ready(function() {
	$('#navigation > ul').prepend('<li class="mobile"><a href="#"><span>Menu <i>&#9776;</i></span></a></li>');
	$('#navigation > ul > li > a').click(function(e) {
	  $('#navigation li').removeClass('active');
	  $(this).closest('li').addClass('active');	
	  var checkElement = $(this).next();
	  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	  }
	  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#navigation ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	  }
	  if( $(this).parent().hasClass('mobile') ) {
		e.preventDefault();
		$('#navigation').toggleClass('expand');
	  }
	  if($(this).closest('li').find('ul').children().length == 0) {
		return true;
	  } else {
		return false;	
	  }		
	});
});