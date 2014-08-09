'use strict';

//window.viewportUnitsBuggyfill.init();

var s = skrollr.init({
	smoothScrolling: true
});

(function(){
  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }

  $(function(){
    var iScrollInstance;

    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper');

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        //verticalOffset: 150
      });

    } else {
      $.stellar({
        horizontalScrolling: false,
        //verticalOffset: 150
      });
    }
  });

})();

/*$.stellar({
  horizontalScrolling: false,
});*/


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
		$shadow.animate({width:'10rem', opacity:0.2}, 600);

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
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('.island-speedo').addClass('speedo-tilt');
	} else {
		$('.island-speedo').removeClass('speedo-tilt');
	}
});

/*$(window).scroll(function() {
	if ($(window).scrollTop() + $(window).height() > $(document).height() - $(window).height()) {
		$('.island-speedo').animate({opacity:1}, 1000);
	}
});*/


/*var limit = 5000;  /* scrolltop value when opacity should be 0 */
/*
$(window).on('scroll', function() {
   var st = $(window).scrollTop();
   if (st <= limit) {
      $('.island-speedo').css({ 'opacity' : (0 + st/limit) });
   }
});*/