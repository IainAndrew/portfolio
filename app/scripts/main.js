$(function() {

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
        $title.animate({top:'5%'}, 300);
        $shadow.animate({width:'12rem'}, 300);

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
        $shadow.animate({width:'15rem'}, 600);

    };

    var titleArc = setInterval(function() {

        titleArcUp();
        setTimeout(function() {
            titleArcDown();
        }, 300);

    }, 2000);

});

setTimeout(function() {
    
    var $trainBG = $('header .train-bg'),
        $island = $('header .island-wrap'),
        $cloud1 = $('header .cloud-1'),
        $cloud2 = $('header .cloud-2'),
        $cloud3 = $('header .cloud-3');

    $trainBG.animate({opacity:1}, 1000);
    $island.animate({top:'100%'}, 1000);
    $cloud1.animate({left:'-100%'}, 2000);
    $cloud2.animate({right:'-100%'}, 2000);
    $cloud3.animate({left:'-100%'}, 2000);

}, 6000);