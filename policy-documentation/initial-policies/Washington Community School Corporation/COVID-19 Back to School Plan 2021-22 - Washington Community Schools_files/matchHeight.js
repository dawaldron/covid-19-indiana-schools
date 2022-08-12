function matchHeight(selector, breakpoint) {
	if (window.innerWidth > breakpoint) {
		var maxHeight = 0;

		$(selector).css('min-height', '');

		$(selector).each(function () {
			maxHeight = maxHeight < $(this).outerHeight(false) ? $(this).outerHeight(false) : maxHeight;
		});

		$(selector).each(function () {
			$(this).css({ 'min-height': maxHeight + 'px' });
		});
	} else {
		$(selector).css('min-height', '');
	}
}

function matchHeightPlus(selector, breakpoint, plus) {
	if (window.innerWidth > breakpoint) {
		var maxHeight = 0;

		$(selector).css('min-height', '');

		$(selector).each(function () {
			maxHeight = maxHeight < $(this).outerHeight(false) ? $(this).outerHeight(false) : maxHeight;
		});

		maxHeight = maxHeight + plus;

		$(selector).each(function () {
			$(this).css({ 'min-height': maxHeight + 'px' });
		});
	} else {
		$(selector).css('min-height', '');
	}
}