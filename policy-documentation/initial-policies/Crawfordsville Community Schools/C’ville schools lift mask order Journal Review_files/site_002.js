function mobileSubnav(el){
	if( el.data('toggled') ){
		$('.mobile-subnav-item-'+el.data('navitem')).hide();
		el.removeClass('fa-minus').addClass('fa-plus');
		el.data('toggled',false);
	}else{
		$('.mobile-subnav-item-'+el.data('navitem')).show();
		el.removeClass('fa-plus').addClass('fa-minus');
		el.data('toggled',true);
	}
}

function weightedRandom(prob) {
  let i, sum=0, r=Math.random();
  for (i in prob) {
    sum += prob[i];
    if (r <= sum) return i;
  }
}

// Viewport adjustments
$(function(){

	// Desktop
	if( Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= 728 ){
		$('.mobile-only').each(function(){
			if( $(this).closest('.pk-layer').find('.box').length == 1 ){
				$(this).closest('.pk-layer').remove();
			}else if( $(this).closest('.railitem').find('.box').length == 1 ){
				$(this).closest('.railitem').remove();
			}
			$(this).remove();
		});
	}

	// Mobile
	if( Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 728 ){
		$('.desktop-only').each(function(){
			if( $(this).closest('.pk-layer').find('.box').length == 1 ){
				$(this).closest('.pk-layer').remove();
			}else if( $(this).closest('.railitem').find('.box').length == 1 ){
				$(this).closest('.railitem').remove();
			}
			$(this).remove();
		});
	}

});

/* Constant Contact Modal */

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("obitCCBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}