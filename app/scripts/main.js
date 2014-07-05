$(function() {

    var $title = $('#header-title');

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
        $title.animate({top:'5%'}, 300);

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
        $title.animate({top:'20%'}, 600);

    };

    var titleArc = setInterval(function() {

        titleArcUp();
        setTimeout(function() {
            titleArcDown();
        }, 300);

    }, 2000);

});