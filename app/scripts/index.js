'use strict';

$(document).scroll(function() {
    if ( $(this).scrollTop() >= $('.intro-outer').position().top - 500){
        $('.intro-outer').addClass('intro-outer-rotate');
    }
});

var all = function() {

    var $title = $('#header-title'),
        $shadow = $('.island-shadow'),
        $abstractBG = $('header .abstract-bg'),
        $island = $('header .island-wrap'),
        $cloud1 = $('header .cloud-1'),
        $cloud2 = $('header .cloud-2'),
        $cloud3 = $('header .cloud-3'),
        $treeBG = $('header .tree-item');

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


    setTimeout(function() {

        $abstractBG.animate({opacity:1}, 1000);

        $island.animate({top:'100%'}, 1000, function() {
            $(this).hide();
        });
        $cloud1.animate({left:'-100%'}, 2000, function() {
            $(this).hide();
        });
        $cloud2.animate({right:'-100%'}, 2000, function() {
            $(this).hide();
        });
        $cloud3.animate({left:'-100%'}, 2000, function() {
            $(this).hide();
        });

        

        if (window.innerWidth <= 480) {

            $title.find('.char1').animate({top:'-10%', left:'8%'}, 1500);
            $title.find('.char2').animate({top:'-10%', left:'18%'}, 1500);
            $title.find('.char3').animate({top:'10%', left:'15%'}, 1500);
            $title.find('.char4').animate({top:'10%', left:'20%'}, 1500);
            $title.find('.char6').animate({top:'30%', left:'-10%'}, 1500);
            $title.find('.char7').animate({top:'30%', left:'-11%'}, 1500);
            $title.find('.char8').animate({top:'30%', left:'8%'}, 1500);
            $title.find('.char9').animate({top:'50%', left:'-20%'}, 1500);
            $title.find('.char10').animate({top:'50%', left:'-10%'}, 1500);
            $title.find('.char11').animate({top:'50%', left:'-5%'}, 1500);

        } else if (window.innerWidth <= 768) {

            $title.find('.char1').animate({top:'-10%', left:'-5%'}, 1500);
            $title.find('.char2').animate({top:'-10%', left:'10%'}, 1500);
            $title.find('.char3').animate({top:'10%', left:'5%'}, 1500);
            $title.find('.char4').animate({top:'10%', left:'10%'}, 1500);
            $title.find('.char6').animate({top:'30%', left:'-10%'}, 1500);
            $title.find('.char7').animate({top:'30%', left:'-10%'}, 1500);
            $title.find('.char8').animate({top:'30%', left:'5%'}, 1500);
            $title.find('.char9').animate({top:'50%', left:'-20%'}, 1500);
            $title.find('.char10').animate({top:'50%', left:'-10%'}, 1500);
            $title.find('.char11').animate({top:'50%', left:'-5%'}, 1500);

        } else if (window.innerWidth > 768) {

            $title.find('.char1').animate({top:'-20%', left:'-5%'}, 1500);
            $title.find('.char2').animate({top:'-20%', left:'10%'}, 1500);
            $title.find('.char3').animate({top:'5%', left:'5%'}, 1500);
            $title.find('.char4').animate({top:'5%', left:'10%'}, 1500);
            $title.find('.char6').animate({top:'30%', left:'-10%'}, 1500);
            $title.find('.char7').animate({top:'30%', left:'-10%'}, 1500);
            $title.find('.char8').animate({top:'30%', left:'5%'}, 1500);
            $title.find('.char9').animate({top:'55%', left:'-20%'}, 1500);
            $title.find('.char10').animate({top:'55%', left:'-10%'}, 1500);
            $title.find('.char11').animate({top:'55%', left:'-5%'}, 1500);

        }

        $title.addClass('header-abstract');

        $('.square').each(function(i) {
            $(this).delay(2000).delay(i * 100).fadeIn();
        });

        $('.zigzag').addClass('zigzag-appear');

        //$('.char4').html('&#x25fc;');

        clearInterval(titleArc);

    }, 6700); //5500

    setTimeout(function() {

        $('.square').each(function(i) {
            $(this).delay(i * 100).fadeOut();
        });

        $title.find('span').animate({top:0, left:0}, {duration:1000, queue: false});

        setTimeout(function() {
            $title.removeClass('header-abstract').addClass('header-tree');
        }, 1000);
        //$title.removeClass('header-abstract').addClass('header-tree');

        $abstractBG.animate({opacity:0}, 1000);

        $('.zigzag').addClass('zigzag-disappear').removeClass('zigzag-appear');

        //$title.addClass('header-tree');

        $abstractBG.animate({opacity:0}, 1000);

        $treeBG.animate({opacity:1}, 1000);

    }, 15000); // 12000

    setTimeout(function() {

        $island.show().animate({top:'37%'}, 1000);
        $cloud1.show().animate({left:'2rem'}, 2000);
        $cloud2.show().animate({right:'3rem'}, 2000);
        $cloud3.show().animate({left:'1rem'}, 2000);

        $('.zigzag').removeClass('zigzag-disappear');

        $title.removeClass('header-tree');

        $treeBG.animate({opacity:0}, 1000);

    }, 24000);
};




all();
var allInterval = setInterval(function() {

    all();

}, 24000);