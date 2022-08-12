// JavaScript Document

      $(window).on ("resize",function() { //Fires when window is resized
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width <= 977) {
        $("body").each(function() {
        var detach = $(this).find("#languageBtn").detach();	
			$( "#footerLang" ).append( detach);	
        })
    } else {
		$("body").each(function() {
        var detach2 = $(this).find("#languageBtn").detach();
			$( "#learnerLink" ).append( detach2);
        })
	}		  
}).resize();                       	