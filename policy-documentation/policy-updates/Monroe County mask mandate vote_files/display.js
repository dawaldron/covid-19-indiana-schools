checkSizeClasses = function() {
	var formContainers = document.querySelectorAll('.sailthru-subscribe-grid-display, .sailthru-add-subscriber-form');
	for (var container, i = 0; container = formContainers[i]; i++) {
		// 400 is the size in px.
		if (container.offsetWidth <= 400 && ! container.classList.contains('sailthru-subscribe-SM-display')) {
			if (container.className === 'sailthru-subscribe-grid-display') {
				container.getElementsByClassName('sailthru-signup-display-message')[0].classList.add('sailthru-subscribe-form-SM-display');
				container.getElementsByClassName('sailthru-signup-display-button')[0].classList.add('sailthru-subscribe-form-SM-display');
			}
			container.classList.add( 'sailthru-subscribe-SM-display' );
		} else if (container.offsetWidth > 400 && container.classList.contains('sailthru-subscribe-SM-display')) {
			container.classList.remove('sailthru-subscribe-SM-display');
			if (container.className === 'sailthru-subscribe-grid-display') {
				container.getElementsByClassName('sailthru-signup-display-message')[0].classList.remove('sailthru-subscribe-form-SM-display');
				container.getElementsByClassName('sailthru-signup-display-button')[0].classList.remove('sailthru-subscribe-form-SM-display');
			}
		}
	}
}

window.addEventListener('resize', () => {
	this.checkSizeClasses();
});
