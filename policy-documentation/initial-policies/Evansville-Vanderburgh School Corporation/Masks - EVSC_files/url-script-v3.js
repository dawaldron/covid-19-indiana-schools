$.extend({
getUrlVars: function(){
var vars = [], hash;
var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for(var i = 0; i < hashes.length; i++)
{
	hash = hashes[i].split('=');
	vars.push(hash[0]);
	vars[hash[0]] = hash[1];
}
return vars;
},
  
getUrlVar: function(name){
	return $.getUrlVars()[name];
}
	
});

//Code for favicon
var headID = document.getElementsByTagName("head")[0];
var ShortcutIcon = document.createElement('link');
ShortcutIcon.type = 'image/vnd.microsoft.icon';
ShortcutIcon.rel = 'shortcut icon';
ShortcutIcon.href = '/Common/resources/DesignPortfolio/SiteThemes/CommonLib/apple-favicon.ico';
headID.appendChild(ShortcutIcon);

var Icon = document.createElement('link');
Icon.type = 'image/vnd.microsoft.icon';
Icon.rel = 'shortcut icon';
Icon.href = '/Common/resources/DesignPortfolio/SiteThemes/CommonLib/apple-favicon.ico';
headID.appendChild(Icon);

function TranslateTo(language)
{
	var currentURL = window.location.href;
	
	if (language.match('original')) {
		currentURL = $.getUrlVar('u');
		parent.location = unescape(currentURL);
	}
	else {
		if (currentURL.indexOf('translate.google.com') > 0)
			currentURL = unescape($.getUrlVar('u'));

		parent.location='http://translate.google.com/translate?hl=' + language + '&sl=auto&tl=' + language + '&u=' + encodeURIComponent(currentURL);
	}
}

//Code for translate drop down menu
$(document).ready(function(){
		
		if ($(".languageDropdown").length > 0) {
			var currentURL = window.location.href;
			if (currentURL.indexOf('translate.google.com') > 0)
				document.getElementById('gtl_original').style.display = 'inline-block';
			else
				document.getElementById('gtl_original').style.display = 'none';
		}
}); 

//Search Watermark
$(document).ready(function() {
	$('#searchPanel input').attr('placeholder', 'Search...');
	$("#searchPanel a").append( "<i class='fa fa-search'></i>" );
});

$(document).ready(function() { 
   
	//remove spaces
	$(".PublishedLinkMenu li").each(function() {
		var $this = $(this);
		$this.html($this.html().replace(/ /g, ''));
	});
	
	
	
	
	
	//NEW ACCESSIBLE DROPDOWN
	
	$('div.pubDropdown-btn').each(function() {
		var widgetHTML = $(this).html();
		$(this).parent().prepend('<a class="pubDropdown-btn" href="#" aria-haspopup="true" aria-expanded="false">' + widgetHTML + '</a>');
		$(this).remove();
	});
	
	$('.pubDropdown').attr('aria-hidden','true');
	$('.PublishedLinkMenu li:last-child, .languageDropdown li:last-child').addClass('last');
	$('.schoolDropdown .school-dropdown-col:last-child .schoolList:last-child li:last-child').addClass('last');
	$('#pubLinks .pubDropdown-btn').append('<span style="position: absolute; left: -10000px;">Published Links</span>');
	
	$(".pubDropdown-btn").click(function(e){
		e.preventDefault();
		$(this).attr('aria-expanded','true');
		$(this).parent().addClass('active');
		$(this).next().slideDown('fast');
		$(this).next().attr('aria-hidden','false');
	});
	
	$('.pubDropdown-wrapper .last').focusout(function(){
		$('.pubDropdown-btn').attr('aria-expanded','false');
		$('.pubDropdown').slideUp('slow'); 
		$('.PublishedLinkMenu').slideUp('slow'); 
		$('.PublishedLinkMenu').attr('aria-hidden','true');
		$('.pubDropdown-wrapper').removeClass('active');
	});
	
	$('.pubDropdown-wrapper').mouseleave(function(){
		$('.pubDropdown-btn').attr('aria-expanded','false');
		$('.pubDropdown').slideUp('slow'); 
		$('.PublishedLinkMenu').slideUp('slow'); 
		$('.PublishedLinkMenu').attr('aria-hidden','true');
		$('.pubDropdown-wrapper').removeClass('active');
	});
	
	//END NEW ACCESSIBLE DROPDOWN
	
	
	
	
	
	
	//hide #userPanel if guest
	$('.user_link:contains("Guest")').parent().hide();
	// when resizing the pubwrapper
	$(document).ready(function(){
		$(window).resize(function() {
			var wi = $(window).width();
			if (wi <= 800) {
					//addClass when small
					$("#pubWrapper").addClass("responsive");//.removeClass('active');
					//$("#pubWrapper .container").hide();
				}
			else {
					//removeClass when wider
				//$("#pubWrapper").removeClass("responsive active");
			$("#pubWrapper").removeClass("responsive");
					$("#pubWrapper .container").show();
				}
		}); 
		$(window).resize(); //on page load 
	});
	
	// when ready
	$(document).ready(function() {
		var wi = $(window).width();
		
		if (wi <= 800) {
				//addClass when small
				$("#pubWrapper").addClass("responsive");//.removeClass('active');
				//$("#pubWrapper .container").hide();
			}
		else {
				//removeClass when wider
				//$("#pubWrapper").removeClass("responsive active");
			$("#pubWrapper").removeClass("responsive");
				$("#pubWrapper .container").show();
		}

		//click responsive pubwrapper button
		var pubWrapperBtn = $('#pubWrapper-btn');
		pubWrapperBtn.click(function (event) {
			var $parent = $(this).parent();
			if ($parent) {
				$parent.find('.container').slideToggle();
				$parent.toggleClass('active');
				event.preventDefault();
			}
		});
	}); 
	
	//Fix Mini Calendar 6 Rows
	if($('.PO-miniCalendar').length > 0) {
		var calendarRows = $('.MC-calendarDays tr').length;
		
		console.log(calendarRows);
		
		if(calendarRows === 6) {
			//console.log('six rows');
			if($('.MC-calendarDays tr td a[style]').length > 0) {
				console.log('today exists');
				if($('.MC-calendarDays tr:first-child td').find('a[style]').length > 0) {
					$('.MC-calendarDays tr:last-child').hide();
				}
				else {
					$('.MC-calendarDays tr:first-child').hide();
				}
			}
			if($('.MC-calendarDays tr td span[style]').length > 0) {
				console.log('today exists');
				if($('.MC-calendarDays tr:first-child td').find('a[style]').length > 0) {
					$('.MC-calendarDays tr:last-child').hide();
				}
				else {
					$('.MC-calendarDays tr:first-child').hide();
				}
			}
		}
	}

});

//Close school and language dropdown when enter "Esc" using keyboard
$(document).on('keyup', function (evt) {
	if (evt.keyCode === 27) {
		$('#pubWrapper ul.pubList > li#selectSchool .schoolDropdown').slideUp(400);
		$('.pubDropdown-wrapper .languageDropdown').slideUp(400);
		var mobileNavMenu = $('#mobileNav');
		$('.mobile-nav-items').slideUp(400);
		mobileNavMenu.removeClass("expanded");
		mobileNavMenu.attr('aria-expanded', 'false');
		var pubWrapperBtn = $('#pubWrapper-btn');
		var $parent = pubWrapperBtn.parent();
		if ($parent) {
			$parent.find('.container').slideUp(400);
			$parent.removeClass('active');
		}
	}
});
