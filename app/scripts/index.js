'use strict';


$.stellar({
  horizontalScrolling: false,
});


var all = function() {

	var $title = $('#header-title'),
		$shadow = $('.island-shadow');

	$title.arctext({
		radius: -1
	});

	var titleArcUp = function() {

		$title.arctext('set', {
			radius      : 200, 
			dir         : 1,
			animation   : {
				speed   : 300,
				easing  : 'ease-in'
			}
		});
		$title.animate({marginTop:'-10%'}, 300);
		$shadow.animate({width:'5rem', opacity:0.15}, 300);

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
		$shadow.animate({width:'10rem', opacity:0.2}, 600);

	};
	/*
	var titleArc = setInterval(function() {

		titleArcUp();
		setTimeout(function() {
			titleArcDown();
		}, 300);

	}, 5000);*/
};

all();
