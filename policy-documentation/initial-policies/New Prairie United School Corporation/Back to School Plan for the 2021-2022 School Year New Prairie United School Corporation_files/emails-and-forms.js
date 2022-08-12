/**
 * Write an email address to the screen. Helps so that bots can't parse email addresses from the site.
 *
 *     writeEmail("info", "info", "domain.com");
 *
 * @param string
 * @param string
 * @param string
 */
function writeEmail(contact, email, emailHost) {
  document.write("<a href=" + "&#109a&#105l" + "&#116&#111:" + email + "@" + emailHost+ ">" + contact + "@" + emailHost+"</a>");
}

jQuery(document).ready(function ($) {

	$('div.kjo-link').removeAttr('style');
	$('div.kjo-link').hide();
		
	if ($.cookie('VideoWelcome95') != '1') {
	
		setTimeout(function() {
		    $("#videoPop").trigger('click');
		},10);
		
		$.cookie('VideoWelcome95', '1', { expires: 20 });
	
	}

  $(".infieldlabel").inFieldLabels();
  $('#slides').unslider({
	  speed: 500,
	  delay: 6000,
	  fluid: true,
  });

	var unslider = $('#slides').unslider();
    
	$('.unslider-arrow').click(function() {
	    var fn = this.className.split(' ')[1];
	    
	    //  Either do unslider.data('unslider').next() or .prev() depending on the className
	    unslider.data('unslider')[fn]();
	});
    	
	/**
	*
	*     This code is for Dynamic Forms
	*
	*/

  
	$("#from").validate({
		errorPlacement: function(error,element) {
		   return true;
		 },
		 highlight: function(element) {
	         $(element).parent('div').addClass('error');
	         $(".error_message").show(); // Show error div
	     },
	     unhighlight: function(element) {
	         $(element).parent('div').removeClass('error');
	     },
	     // ajax call
	     submitHandler: function(form) {
	         $.ajax({
	             url: form.action,
	             type: form.method,
	             data: $(form).serialize(),
	             success: function(response) {
	             	 // Show confirmation and hide error div
	                 $("#divConfirmation").show();
	                 $(".error_message").hide();
	                 $("#divForm").hide();
	                 //$('#answers').html(response);
	             }            
	         });
	     }
	     
	});
  
  
});


/**
 *
 *     This code is for Campaign  Monitor
 *
 */


jQuery(document).ready(function ($) {
    $('#formEmail').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error: " + data.Message);
            } else { // 200
                $('#divEmailConfirmation').show();
                $('#divEmail').hide();
            }
        });
    });
});

