$(document).ready(function () {
/////////////////////////////////////////////////////////////////////
// Headline Scroller - jquery-scroller-v1.js
	$('.horizontal_scroller').SetScroller({
		velocity: 76,
		direction: 'horizontal',
		startfrom: 'right',
		loop: 'infinite',
		onmouseover: 'play',
		onmouseout: 'play',
		onstartup: 'play',
		cursor: 'default'
	});

/////////////////////////////////////////////////////////////////////
// Flash Gallery - slick.min.js
	$('.flash-gallery').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
    asNavFor: '.flash-thumb'
	});
  
  $('.flash-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    asNavFor: '.flash-gallery',
    centerMode: false,
    focusOnSelect: true
  });
  
  $('.flash-gallery').delay( 2000 ).removeClass('load');
  $('.flash-thumb').delay( 2000 ).removeClass('load-thumb');

/////////////////////////////////////////////////////////////////////


}); //end document.ready
