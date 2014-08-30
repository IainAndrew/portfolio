'use strict';

$(window).load(function() {
	$('body').removeClass('loading'); // Hide loading animation on page load

	$(function() {

		

	});
});

window.viewportUnitsBuggyfill.init();

(function() {

	if ( Modernizr.touch ) {
		alert("I'm a mobile device!");
	} else {
		$.stellar({
			horizontalScrolling: false,
		});

		var s = skrollr.init({
			smoothScrolling: true,
			forceHeight: false
		});
	}

})();

var all = function() {

	var $title = $('#header-title'),
		$shadow = $('.island-shadow');

	// initialise Arctext on the title
	$title.arctext({
		radius: -1
	});

	// upward bounce animation
	var titleArcUp = function() {

		$title.arctext('set', {
			radius      : 220, 
			dir         : 1,
			animation   : {
				speed   : 300,
				easing  : 'cubic-bezier(.46,-0.53,.48,1.97)'
			}
		});
		$title.animate({marginTop:'-15%'}, 300);
		$shadow.animate({width:'5rem', opacity:0.07}, 300);

	};

	//downward bounce animation
	var titleArcDown = function() {

		$title.arctext('set', {
			radius      : -1, 
			dir         : 1,
			animation   : {
				speed   : 600,
				easing  : 'ease-out'
			}
		});
		$title.animate({marginTop:0}, 600);
		$shadow.animate({width:'10rem', opacity:0.12}, 600);

	};
	
	/*var titleArc = setInterval(function() {

		titleArcUp();
		setTimeout(function() {
			titleArcDown();
		}, 300);

	}, 2000);*/
};

all();

// Tilt animation when island hits the sea floor
$(window).scroll(function() {
	if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
		$('.island-speedo').addClass('speedo-tilt');
	} else {
		$('.island-speedo').removeClass('speedo-tilt');
	}
});