(function($) {
	var lastScrollPos = null;
	//Sticky Header
	function setHeaderPosition(){
		var headerHeight = $('#primary-header').outerHeight();
		$('body').css('margin-top', headerHeight);
		var windowPosition = window.pageYOffset;
		var isScrollUp = true;
		if(windowPosition < lastScrollPos){
			isScrollUp = true;
		} else {
			isScrollUp = false;
		}
		if(windowPosition >= headerHeight){
			if(isScrollUp){
				$('#primary-header').addClass('sticky');
			} else {
				$('#primary-header').removeClass('sticky');
			}
		} else {
			$('#primary-header').addClass('sticky');
		}
	}

	//On Load
	setHeaderPosition();

	//On Scroll
	$(window).scroll(function(){
		setHeaderPosition();
		lastScrollPos = window.pageYOffset;
	});

	//On Resize
	$(window).resize(function(){
		setHeaderPosition();
	});

	//Mobile Nav Toggle
	$('#mobile-nav-toggle').click(function(){
		$('#mobile-nav').toggleClass('show');
	});
	$('#nav-close').click(function(){
		$('#mobile-nav').toggleClass('show');
	});
	//Owl Carousel
	$('.owl-carousel').owlCarousel({
	    loop: false,
	    margin: 30,
	    nav: true,
		dots: false,
		navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
	    responsive:{
	        0: {
	            items: 1
	        },
			480: {
				items: 2
			},
	        767: {
	            items: 3
	        },
	        1000: {
	            items: 4
	        }
	    }
	});

	// Class counter
	function Counter(data) {
	  var _default = {
	    fps: 20,
	    from: 0,
	    time: 2000,
	  }
	  for (var attr in _default) {
	    if (typeof data[attr] === 'undefined') {
	      data[attr] = _default[attr];
	    }
	  }
	  if (typeof data.to === 'undefined')
	    return;
	  data.fps = typeof data.fps === 'undefined' ? 20 : parseInt(data.fps);
	  data.from = typeof data.from === 'undefined' ? 0 : parseFloat(data.from);
	  var frames = data.time / data.fps,
	      inc = (data.to - data.from) / frames,
	      val = data.from;

	  if (typeof data.start === 'function') {
	    data.start(data.from, data)
	  }
	  var interval = setInterval(function() {
	    frames--;
	    val += inc;

	    if (val >= data.to) {
	      if (typeof data.complete === 'function') {
	        data.complete(data.to, data)
	      }
	      clearInterval(interval);
	    } else if (typeof data.progress === 'function') {
	      data.progress(val, data)
	    }
	  }, data.fps);
	}
	// Auto-counter from HTML API
	var counters = document.getElementsByClassName('counter'),
	    print = function(val, data) {
	      data.element.innerHTML = parseInt(val).toLocaleString();
	    }
	var started = false;
	var startPos = (($('#achievements-section').length > 0) ? $('#achievements-section').position().top : '');
	$(window).scroll(function(){
		if ($(window).scrollTop() + $(window).height() > startPos && !started){
			started = true;
			for (var i = 0, l = counters.length; i < l; i++) {
			  // Loads from HTML dataset
			  var data = {};
			  for (var attr in counters[i].dataset) {
			    data[attr] = counters[i].dataset[attr];
			  }
			  // Save element and callbacks
			  data.element = counters[i];
			  data.start = print;
			  data.progress = print;
			  data.complete = print;
			  // Creates the counter
			  new Counter(data);
			}
		}
	});

	//Set banner overlay text color based on image brightness
	function getImageLightness(imageSrc,callback) {
	    var img = document.createElement("img");
	    img.src = imageSrc;
	    img.style.display = "none";
	    document.body.appendChild(img);
	    var colorSum = 0;
	    img.onload = function() {
	        var canvas = document.createElement("canvas");
	        canvas.width = this.width;
	        canvas.height = this.height;
			var canvasXStart = canvas.width - canvas.width * .5 - 200;
			var canvasYStart = canvas.height - 120;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(this,0,0);
	        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
	        var data = imageData.data;
	        var r,g,b,avg;
	        for(var x = 0, len = data.length; x < len; x+=4) {
	            r = data[x];
	            g = data[x+1];
	            b = data[x+2];
	            avg = Math.floor((r+g+b)/3);
	            colorSum += avg;
	        }
	        var brightness = Math.floor(colorSum / (this.width*this.height));
	        callback(brightness);
	    }
	}
	getImageLightness($('.banner img').attr('src'), function(brightness){
	    if(brightness < 180){
			$('.banner h1').css('color', '#fff');
			$('.banner h1').css('text-shadow', '1px 1px 4px rgba(0, 0, 0, 0.5)');
		}
	});

	function getMaxValue(el, value){
		var max = Math.max.apply(null, $(el).map(function (){
			switch (value) {
				case 'height':
					return $(this).height();
					break;
				case 'width':
					return $(this).width();
					break;
				default:
				return $(this).height();
			}
		}).get());
		return max;
	}

	function matchElementHeights(el){
		if($(el).length){
			var maxHeight = Math.max.apply(null, $(el).map(function (){
				return $(this).outerHeight();
			}).get());
			$(el).height(getMaxValue(el, 'height'));
			$(window).resize(function(){
				$(el).height('auto');
				$(el).height(getMaxValue(el, 'height'));
			});
		}
	}
	matchElementHeights('.academic-opportunity-child-content .feature-box .heading');
	matchElementHeights('.academic-opportunity-child-content .feature-box .content');

})(jQuery);
