(function($) {
	$('a.back-to-top').click(function(){
		$('html,body').animate({scrollTop:0},'slow');return false;
	});
	$('.nav-toggler').click(function(){
		$('.navbar').slideToggle('300');
		$(this).toggleClass('active');
	});

	if($(window).outerWidth() <= 991){
		$('nav li a').addClass("mobile-link");
	};
	if($(window).outerWidth() <= 991){
		//This adds class to a tag if there is a child named Dropdown Menu
		$('.sub-menu').parent().addClass('dropdown-toggle');
		//This adds the back class to the Ul that has the dropdown class
		$('.sub-menu').prepend('<span class="back"></span>');
		//This adds the caret class to A tags with children that have the class Dropdown Toggle
		$('.dropdown-toggle>a').prepend('<span class="caret"></span>');
		$('.nav-toggler').click(function(){
			//Makes sure the classes are removed when the Toggler is clicked
			$('.sub-menu').removeClass('slide-in-right');
			$('.sub-menu').removeClass('slide-out-right');

		});
		$('.caret').click(function(event) {
			//Removes the slide out class. Then addes the Slide in class to the UL Dropdown Menu when the span caret is clicked.
			event.preventDefault();
			event.stopImmediatePropagation();
			var dropdown = $(this).parent().parent();
			var subMenu = dropdown.children('.sub-menu');
			subMenu.removeClass('slide-out-right');
			subMenu.addClass('slide-in-right');
		});
		$('.back').click(function() {
			//Removes the slide in class. And adds the slide out.
			$(this).parent().toggleClass('slide-in-right');
			$(this).parent().toggleClass('slide-out-right');

		});
		var navHeight = $('.navbar.navbar-default').outerHeight(); //Gets Height of Navbar
		if($(window).height()< navHeight){ //tests against the window height
			$('ul.nav-list a').css({'font-size':'12px'});
			$('ul.nav-list li').css({'padding':'5px 0'});
			$('.back').css({'font-size':'14px'});
			$('.caret').css({'font-size':'16px'});
		}
	}
	//Scroll to Anchor function. Adjust 'extraPadding' variable as needed
	function scrollPageToAnchor(anchor){
		anchor = anchor.replace('/', '');
		var fixedElementHeight = 0;
		var anchorMarginPadding = $(anchor).outerHeight(true) - $(anchor).innerHeight();
		var scrollDuration = 1000;
		console.log(anchorMarginPadding);
		$('html, body').animate({scrollTop: $(anchor).offset().top - anchorMarginPadding - fixedElementHeight}, scrollDuration);
	}
	//If there's an anchor in the url on page load, scroll to that anchor
	$(window).on('load', function(){
		if(window.location.hash){
			scrollPageToAnchor(window.location.hash);
		}
	});
	//back to top link
	if(($(window).height() + 100) < $(document).height()) {$('#top-link-block').removeClass('hidden').affix({offset: {top: 100}});}
})(jQuery);
