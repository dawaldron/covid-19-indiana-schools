(function ($, root, undefined) {

	$(function () {

		window.addEventListener('load', documentReady);
		document.addEventListener('turbolinks:load', documentReady);
		documentReady();
	});
	function documentReady() {
		'use strict';
		$('.parallax-bg').parallax("50%", 0.6);

		// Setup website smooth scrolling

		resetParalaxContainers();
		deleteAdContainers();

		$(window).resize(function() {
			resetParalaxContainers();
            deleteAdContainers();
		});

		// COOKIE CHECKS
		// Check to see if the footer has been closed
		if (!readCookie('footer-newsletter')) {
			$('.footer').fadeIn();
		}
		// HIDE ADVERTISEMENT POPUP FOR MOBILE
		$( document ).on( 'click', '.js-first-visit-close-modal', function(e) {
            e.preventDefault();
			$('#ad-popup').hide();
		});

		jQuery(document).on('click', '.single_add_to_cart_button', function() {
			var button = jQuery(this);
			setTimeout(function(){
				jQuery.ajax({
					type: 'POST',
					url: MyAjax.ajaxurl,
					data: {"action": "get_cart_quantity"},
					success: function(qty){
						jQuery('.cart-qty-total').html(qty);
					}
				});
			}, 4000);

		});

		$.fn.isInViewport = function() {
			var elementTop = $(this).offset().top;
			var elementBottom = elementTop + $(this).outerHeight();

			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();

			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

	
	}

	// Open the main website navigation with the hamburger menu
	$( document ).on( 'click', '#nav-expand', function(event) {
		$(this).toggleClass('is-active');
        $('#search-overlay').removeClass('active');
        $('.search-toggle').removeClass('active');
        $(".mobile-nav").fadeToggle(500);
		$(".icon").toggleClass("iconxborder");
	});
	// Open the main website navigation with the hamburger menu
	$( document ).on( 'click', '.search-toggle', function(event) {
		searchToggle($(this), event);
	});
	// Open the main website navigation with the hamburger menu
	$(document).on('submit','form.search-form',function(event){
		submitFn($(this), event);
	});
	// Fade out the footer on click and set the cookie to not display this for another 7 days.
	$( document ).on( 'click', '.close-footer .close', function(event) {
		createCookie('footer-newsletter', true, 7);
		$('.footer').fadeOut();
	});
	// For the Risk Central page, this will select the chosen tab as 'active'
	$(document).on('click', '#filters li', function() {
		if (!$(this).hasClass('active')) {
			$('#filters li.active').removeClass('active');
			$(this).addClass('active');
		}
	});
    // For the Risk Central page, this will select the chosen tab as 'active'
    $(document).on('click', '#filters li', function() {
        if (!$(this).hasClass('active')) {
            $('#filters li.active').removeClass('active');
            $(this).addClass('active');
        }

    });
    $(document).on('click', '.omlogout', function(e) {
    	e.preventDefault();
    	console.log('logout');
        eraseCookie('oly_lrp_logged_id');
        window.location.href = "https://districtadministration.com";

    });
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $(document).on("submit", ".postup-form", function (e) {
        e.preventDefault();
        var form = $(this);
        form.find('.email').removeClass('red-border');
        form.find('input[type=submit]').val('Submitting...');
        form.find('.message-field').html('').removeClass('red-text');
        var templateid = form.attr('data-template-id');
        var email = form.find('.email');
        if (isEmail(email.val()) == true) {

            $.ajax({
                url: loadissues.ajax_url,
                type: 'post',
                data: {
                    action: 'postup_import_email',
                    templateid: templateid,
                    email: email.val(),
                },
                success: function (response) {

                    form.find('.message-field').html('Success! Thanks for signing up!');
                    setTimeout(function() {
                        form.find('.message-field').html('');
                    }, 3000);
                    form.find('input[type=submit]').val('Submit');
                    email.val('');

                },
                error: function (error) {
                    form.find('.email').addClass('red-border');
                    form.find('input[type=submit]').val('Submit');
                    form.find('.message-field').addClass('red-text').html('Error occurred. Please contact us.');
                }
            });

        } else {
            form.find('.email').addClass('red-border');
            form.find('input[type=submit]').val('Submit');
			form.find('.message-field').addClass('red-text').html('Not a valid email address');
        }
	});

    $(document).on('hover','.meta-info .icon', function() {

    });
	// We need to retrieve the previous issue from the last month.
	$( document ).on( 'click', '#previous-issue-container', function() {
		$('.issue-loader').addClass('loading');
		$('#previous-issue-container').addClass('loading');
		var post_id = $(this).attr('data-id');

		$.ajax({
			url : loadissues.ajax_url,
			type : 'post',
			data : {
				action : 'get_monthly_issue',
				post_id : post_id,
				ajax : 1,
			},
			success : function( response ) {
				$('.main-issue').last().after(response);
				$('.main-issue').last().slideDown('slow');
				$('.main-issue.hidden').removeClass('hidden');
				resetParalaxContainers();

				$('body,html').animate({
					'scrollTop': $('#issue-'+post_id).offset().top
				}, 500);

				var current_order = $('.main-issue').last().data('order');
				var currentIssueID = $('.main-issue').last().data('issue');
				get_next_monthly_issue(current_order);
				$('.issue-loader').removeClass('loading');

				$('#previous-issue-container').removeClass('loading');
			},
			error : function (error) {
				$('.issue-loader').removeClass('loading');
			}
		});

		return false;
	})

	// The button that the user will use to copy the link to their clipboard
	$( document ).on( 'click', '.copy-url', function(event) {
		copyToClipboard($('.copy-url-area').val());
		$(this).html('Copied!');
		$(this).addClass('copied');
	});
	$( document ).on( 'click', '.copy-url-area', function(event) {
		copyToClipboard($(this).val());
		$(this).parent('.url-share').find('.copy-url').html('Copied!');
        $(this).parent('.url-share').find('.copy-url').addClass('copied');
	});

	// Copies a string to the clipboard. Must be called from within an event handler such as click.
	// May return false if it failed, but this is not always
	// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
	// No Safari support, as of (Nov. 2015). Returns false.
	// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
	// shown the first time the clipboard is used (per session).
	function copyToClipboard(text) {
		if (window.clipboardData && window.clipboardData.setData) {
			// IE specific code path to prevent textarea being shown while dialog is visible.
			return clipboardData.setData("Text", text);

		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
			var textarea = document.createElement("textarea");
			textarea.textContent = text;
			textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");  // Security exception may be thrown by some browsers.
			} catch (ex) {
				console.warn("Copy to clipboard failed.", ex);
				return false;
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}

	function resetParalaxContainers() {
		$('.parallax-height').height($(window).height() - $('.header').height());
	}
	function deleteAdContainers() {
		if($(window).width() < 800 ) {
			$('.delete-from-mobile').remove();
		} else {
            $('.delete-from-desktop').remove();
		}
	}
    function get_next_monthly_issue(current_order) {
		$.ajax({
			url : loadissues.ajax_url,
			type : 'post',
			dataType : 'json',
			data : {
				action : 'get_next_monthly_issue',
				current_order : current_order,
				ajax: 1,
			},
			success : function( response ) {
				$('#previous-issue-container').attr('data-id', response.ID);
			},
			error : function (error) {
				return error;
			}
		});
	}
	function searchToggle(obj, evt){

		//var container = $(obj).closest('.search-wrapper');
        var container = $('#search-overlay');
		var searchBtn = $('.search-toggle');
		var searchInput = $('.search-input');
		if(!container.hasClass('active')){
            container.addClass('active');
            searchBtn.addClass('active');
			searchInput.focus();
			evt.preventDefault();
		}
		else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            searchBtn.removeClass('active');
			// clear input
			container.find('.search-input').val('');
			// clear and hide result container when we press close
			container.find('.result-container').fadeOut(100, function(){$(this).empty();});
		}
	}

	function submitFn(obj, evt){
		var value = $(obj).find('.search-input').val().trim();
		if (value.length) {
			return;
		} else {
			evt.preventDefault();
		}
	}

	// Cookies
	function createCookie(name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else var expires = "";

		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name, "", -1);
	}


})(jQuery, this);
