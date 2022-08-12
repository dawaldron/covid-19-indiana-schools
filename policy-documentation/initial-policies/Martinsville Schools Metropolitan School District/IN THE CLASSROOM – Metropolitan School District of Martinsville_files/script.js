/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function(){

    //---- banner slider ----- //
    if(jQuery('.banner').length > 0) {
        jQuery(".banner").slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
			dots: true
        });
    }
    
    if ($(window).width() > 960) {
    var headerHeight = $('header').height(); 
    $('.siteContainer').css('padding-top', headerHeight+'px');
    }else{
	var schoolmenu = jQuery(".page-template-schools header");
	var menupage = jQuery(".page-template-menupage header");
	var header = jQuery("header");
    jQuery(document).scroll(function(e) {
        if(jQuery(this).scrollTop() >= 5) {
            header.addClass("sticky-head");
            schoolmenu.addClass("dnmenu");
            menupage.addClass("dnmenu"); 
        } else {
            header.removeClass("sticky-head");
           schoolmenu.removeClass("dnmenu");
            menupage.removeClass("dnmenu");
        }
    });
    }
	
	//----- search field -----//
    $(".search-icon").click(function(){
        if($(this).parents('.search-block').hasClass('open')){
            $(this).parents('.search-block').removeClass('open');
        }
        else {
            $(this).parents('.search-block').addClass('open');
        }
    });
    var wrapper_search = $('.search-block');
    $('body, html, #wrapper').click(function(e) {
        if (
            (wrapper_search[0] != e.target) &&
            (!wrapper_search.has(e.target).length)
        ){
            $(".search-block").removeClass('open');
        }
    });
	
	
	/* Scroll Top Script */
	$('.scroll-top-top').on('click',function(){
	  $('html, body').animate({
	   scrollTop: ($( $.attr(this, 'href') ).offset().top)
	  }, 500);
	  return false;
	 });
	 
	 
	 
	 //----- Menu script----- //
    $("nav ul li").find('ul').parent('li').addClass('has-children');
    if ( (navigator.userAgent.match(/iPod/i) )
        || (navigator.userAgent.match(/iPad/i)))
    {
        $("nav > li.has-children > a").each(function() {
            var onClick; 
            var firstClick = function() {
                onClick = secondClick;
                return false;
            };
            var secondClick = function() {
                onClick = firstClick;
                return true;
            };
            //onClick = firstClick;
            $(this).click(function() {
                if($(this).hasClass('already')){
                    onClick = secondClick;
                    $(this).removeClass('already')
                }
                else{
                    onClick = firstClick;
                    $("nav > li.has-children > a").removeClass('already');
                    $(this).addClass('already')
                }
                return onClick();
            });
        });
    }
	 
	 
	 
	 //----- mobile nav script -----// 	
	$(".btn-nav").click(function(e) {
        if($(this).hasClass("nav-open")){
            $(this).removeClass("nav-open");
            $(".nav-mobile").removeClass("nav-open");
		}else{
            $(this).addClass("nav-open");
            $(".nav-mobile").addClass("nav-open");
			
        	$(".cart-mobile").removeClass("cart-open");
			$(".btn-cart").removeClass("cart-open");
		}
    });
	
	var wrapper = $('.nav-mobile');
    $('body,html').click(function(e) { 
        if (
            (wrapper[0] != e.target) && 
            (!wrapper.has(e.target).length)
        ){
           $(".nav-mobile").removeClass("nav-open");
		   $(".btn-nav").removeClass("nav-open");
        }
    });
	
	$(".nav-mobile-content ul li").find("ul").parents("li").append("<em>")
    $(".nav-mobile-content ul li ul").addClass("first-sub");
    $(".nav-mobile-content ul li ul").next("em").addClass("first-em");
    $(".nav-mobile-content ul li ul ul").removeClass("first-sub");
    $(".nav-mobile-content ul li ul ul").addClass("second-sub");
    $(".nav-mobile-content ul li ul ul").next("em").addClass("second-em");
    $(".nav-mobile-content ul li ul ul").next("em").removeClass("first-em");
    $(".nav-mobile-content ul li em.first-em").click(function(e) {
        if($(this).parent("li").hasClass("active")){
            $(this).parent("li").removeClass("active");
            $(this).prev("ul.first-sub").slideUp();
            $(".nav-mobile-content ul li ul.second-sub li").removeClass("active");
            $(".nav-mobile-content ul li ul.second-sub").slideUp();
        }else{
            $(".nav-mobile-content ul li").removeClass("active");
            $(this).parent("li").addClass("active");
            $(".nav-mobile-content ul li ul.first-sub").slideUp();	
            $(this).prev("ul.first-sub").slideDown();
            $(".nav-mobile-content ul li ul.second-sub li").removeClass("active");
            $(".nav-mobile-content ul li ul.second-sub").slideUp();
        }
    });
    $(".nav-mobile-content ul li ul.first-sub li em.second-em").click(function(e) {
        if($(this).parent("li").hasClass("active")){
            $(this).parent("li").removeClass("active");
            $(this).prev("ul.second-sub").slideUp();
        }else{
            $(".nav-mobile-content ul li ul li").removeClass("active");
            $(this).parent("li").addClass("active");
            $(".nav-mobile-content ul li ul.second-sub").slideUp();	
            $(this).prev("ul.second-sub").slideDown();
        }
    });
	
	
	
	 /* match height function */
    $(function() {
        $('.match-height').matchHeight();
    });
	
	
});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function() {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).resize(function() {
    var headerHeight = $('header').height(); 
    if ($(window).width() > 960) {
        $('.siteContainer').css('padding-top', headerHeight+'px');
    }
});

/* Script on load
------------------------------------------------------------------------------*/
$(window).load(function() {

	
});


/* Script all functions
------------------------------------------------------------------------------*/
//---- sticky footer script ----- //
function StickyFooter(){
    var Stickyfooter =    $('footer').outerHeight();
    $('#wrapper').css('margin-bottom',-Stickyfooter)
    $('#wrapper .footer-push').css('height',Stickyfooter)
}
$(window).on("load resize scroll ready",function(){
       StickyFooter()
    $('html,body').css("height","100%");
});


/* fix header extra space jquery */
/*
function extra_height() {
    var head_height = $('header').innerHeight();
    $('.header-extra-height').css({
        "height": head_height
    });
}
$(window).on("load resize scroll ready",function(){
    setTimeout(function(){
        extra_height()
    },500)
});
*/