/*
Intensify by TEMPLATED
templated.co @templatedco
Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
	) {
  // Figure out element to scroll to
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  // Does a scroll target exist?
  if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
    	scrollTop: target.offset().top
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
      	return false;
      } else {
        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
    };
});
}
}
});

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

	// Only show video if desktop 
	if (browser.mobile) {
		var brickPoster = document.getElementById('brickPoster');
		var newImageElement = document.createElement('img');
		newImageElement.setAttribute('src', 'images/header.png');
		newImageElement.setAttribute('width', '100%');
		brickPoster.appendChild(newImageElement);

} else {
	var video = document.getElementById('brickVideo');		
	var source = document.createElement('source');
	source.setAttribute('src', 'images/header.mp4');
	source.setAttribute('type', 'video/mp4');
	video.setAttribute('height', 'auto');
	video.appendChild(source);
}

var	$window = $(window),
$body = $('body'),
$header = $('#header');

	// Disable animations/transitions until the page has loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-loading');
		}, 100);
	});

	// Fix: Placeholder polyfill.
	$('form').placeholder();

	// Prioritize "important" elements on medium.
	skel.on('+medium -medium', function() {
		$.prioritize(
			'.important\\28 medium\\29',
			skel.breakpoint('medium').active
			);
	});

	// Scrolly.
	$('.scrolly').scrolly({
		offset: function() {
			return $header.height();
		}
	});

	// Menu.
	$('#menu')
	.append('<a href="#menu" class="close"></a>')
	.appendTo($body)
	.panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'right'
	});

});

	})(jQuery);