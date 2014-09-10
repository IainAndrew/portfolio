'use strict';

$(window).load(function() {
	$('body').removeClass('loading'); // Hide loading animation on page load

	$(function() {

		$('.island').addClass('island-on-load');
		setTimeout(function() {
			$('.header-title').addClass('header-on-load');
		}, 1000);

		/*setTimeout(function() {
			$('.ribbon').addClass('ribbon-on-load');
		}, 3000);*/

		titleArcFull();
		setTimeout(function() {
			$('.island-shadow').animate({opacity:0.09}, 1000);
		}, 2400);

	});
});

window.viewportUnitsBuggyfill.init();

(function() {

	if ( Modernizr.touch ) {
		//alert("I'm a mobile device!");
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

var titleArcFull = function() {

	var $title = $('#header-title'),
		$shadow = $('.island-shadow');

	// initialise Arctext on the title
	$title.arctext({
		radius: -1
	});

	// upward bounce animation
	var titleArcUp = function() {

		$title.arctext('set', {
			radius      : 210, 
			dir         : 1,
			animation   : {
				speed   : 300,
				easing  : 'cubic-bezier(.46,-0.53,.48,1.97)'
			}
		});
		$title.animate({marginTop:'-10rem'}, 300);
		$shadow.animate({width:'5em', opacity:0.07}, 300);

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
		$shadow.animate({width:'10em', opacity:0.09}, 600);

	};
	
	var titleArc = setInterval(function() {

		titleArcUp();
		setTimeout(function() {
			titleArcDown();
		}, 300);

	}, 6000);
};



// Tilt animation when island hits the sea floor
$(window).scroll(function() {
	if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
		$('.island-speedo').addClass('speedo-tilt');
	} else {
		$('.island-speedo').removeClass('speedo-tilt');
	}
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        
    }
});