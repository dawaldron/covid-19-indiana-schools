(function ($) {
	"use strict";
	$(function () {
		$('#sailthru-modal').hide();

		$( ".show_shortcode" ).on( "click", function( e ) {
			e.preventDefault();
			var posTop = $(this).offset().top;
			var modal = $( "#sailthru-modal");
			modal.css("top", '100px');
			modal.css("left", Math.max(0, (($(window).width() - $(modal).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

			$('.sailthru_shortcode_hidden .sailthru-signup-widget-close').show();
			modal.fadeIn();
		});

		$('#sailthru-modal .sailthru-signup-widget-close').click(function(){
			$('#sailthru-modal ').fadeOut();
		}) ;

		// when a user clicks subscribe
		$(".sailthru-add-subscriber-form").submit(async function(e){
			e.preventDefault();
			var recaptcha = $("#sailthruToken");
			var siteKey = $("#siteKey").val();
			if (!recaptcha.val() && siteKey) {
				var token = await grecaptcha.execute(siteKey, {action: 'homepage'});
				recaptcha.val(token);
			}

			var user_input = $(this).serialize();
			var form = $(this);
			$.ajax({
				url: sailthru_vars.ajaxurl,
				type: 'post',
				data: user_input,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				success: function (data, status) {
					if (data.success == false) {
						var message = data.message === 'Please enter a valid email' ? data.message + ' address' : data.message
						$('#' + form.attr('id') + " .sailthru-add-subscriber-errors").html(message);
					} else {
						$('#sailthru-modal .sailthru-signup-widget-close').fadeIn();
						var successMessage = $(form).parent().parent().find('.sailthru-signup-success-message');
						$(form).parent().html('');
						successMessage.show();
						$(form).parent().find(".hide_toggle").hide();
					}
				}
			});

		});
	});
}(jQuery));
