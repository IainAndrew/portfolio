'use strict';

var s = skrollr.init({
    forceHeight: false
});

$(document).scroll(function() {
	if ( $(this).scrollTop() >= $('.intro-outer').position().top - 500){
		$('.intro-outer').addClass('intro-outer-rotate');
	}
});

var all = function() {

	var $title = $('#header-title'),
		$shadow = $('.island-shadow');

	$title.arctext({
		radius: -1
	});

	var titleArcUp = function() {

		$title.arctext('set', {
			radius      : 400, 
			dir         : 1,
			animation   : {
				speed   : 300,
				easing  : 'ease-in'
			}
		});
		$title.animate({marginTop:'-10%'}, 300);
		$shadow.animate({width:'12rem', opacity:0.15}, 300);

	};

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
		$shadow.animate({width:'15rem', opacity:0.2}, 600);

	};

	var titleArc = setInterval(function() {

		titleArcUp();
		setTimeout(function() {
			titleArcDown();
		}, 300);

	}, 2000);
};

all();
