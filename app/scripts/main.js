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
    $title.animate({marginTop:0}, 600);
    $shadow.animate({width:'15rem'}, 600);

};

var titleArc = setInterval(function() {

    titleArcUp();
    setTimeout(function() {
        titleArcDown();
    }, 300);

}, 2000);


setTimeout(function() {
    
    var $abstractBG = $('header .abstract-bg'),
        $island = $('header .island-wrap'),
        $cloud1 = $('header .cloud-1'),
        $cloud2 = $('header .cloud-2'),
        $cloud3 = $('header .cloud-3');

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

    $title.addClass('header-abstract');

    $title.find('.char1').animate({top:'-15%', left:'8%'}, 1500);
    $title.find('.char2').animate({top:'-15%', left:'18%'}, 1500);
    $title.find('.char3').animate({top:'0', left:'15%'}, 1500);
    $title.find('.char4').animate({top:'0', left:'20%'}, 1500);
    $title.find('.char6').animate({top:'23%', left:'-10%'}, 1500);
    $title.find('.char7').animate({top:'23%', left:'-11%'}, 1500);
    $title.find('.char8').animate({top:'23%', left:'8%'}, 1500);
    $title.find('.char9').animate({top:'50%', left:'-20%'}, 1500);
    $title.find('.char10').animate({top:'50%', left:'-10%'}, 1500);
    $title.find('.char11').animate({top:'50%', left:'-5%'}, 1500);

    $('.square').each(function(i) {
        $(this).delay(i * 100).fadeIn();
    });

    //$('.char4').html('&#x25fc;');

    clearInterval(titleArc);

}, 5500);

setTimeout(function() {

    //$title.find('span').animate({top:0, left:0}, 1000);

}, 15000);