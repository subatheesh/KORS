var mouseParallax = function(elem, x, y, etop, eleft, speed) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop + ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  var elemLeft = eleft + ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxInverse = function(elem, x, y, etop, eleft, speed) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop - ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  var elemLeft = eleft - ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxReverse = function(elem, x, y, etop, eleft, speed) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop + ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  var elemLeft = eleft + ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxReverseInverse = function(elem, x, y, etop, eleft, speed) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop - ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  var elemLeft = eleft - ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

$(document).ready(function(){
    if($(window).width() > 960){

        var decoplus2Top = $("#DecoPlus2").offset().top;
        var decoplus2Left = $("#DecoPlus2").offset().left;

        var decoplusTop = $("#DecoPlus").offset().top;
        var decoplusLeft = $("#DecoPlus").offset().left;

        var decodotsTop = $("#DecoDots").offset().top;
        var decodotsLeft = $("#DecoDots").offset().left;

        var decocirclelinesTop = $("#DecoCircleLines").offset().top;
        var decocirclelinesLeft = $("#DecoCircleLines").offset().left;

        var decohTop = $("#DecoH").offset().top;
        var decohLeft = $("#DecoH").offset().left;

        var decoa1Top = $("#Decoa1").offset().top;
        var decoa1Left = $("#Decoa1").offset().left;

        var decoiTop = $("#Decoi").offset().top;
        var decoiLeft = $("#Decoi").offset().left;

        var decor1Top = $("#Decor1").offset().top;
        var decor1Left = $("#Decor1").offset().left;

        var decocTop = $("#Decoc").offset().top;
        var decocLeft = $("#Decoc").offset().left;

        var decoa2Top = $("#Decoa2").offset().top;
        var decoa2Left = $("#Decoa2").offset().left;

        var decor2Top = $("#Decor2").offset().top;
        var decor2Left = $("#Decor2").offset().left;

        var decoeTop = $("#Decoe").offset().top;
        var decoeLeft = $("#Decoe").offset().left;

        $(window).mousemove(function( event ) {
            mouseParallaxInverse($("#DecoPlus2"), event.clientX, event.clientY, decoplus2Top, decoplus2Left, 2);
            mouseParallaxReverseInverse($("#DecoPlus"), event.clientX, event.clientY, decoplusTop, decoplusLeft, 4);
            mouseParallaxReverse($("#DecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 2);
            mouseParallax($("#DecoCircleLines"), event.clientX, event.clientY, decocirclelinesTop, decocirclelinesLeft, 4);
            mouseParallaxInverse($("#DecoH"), event.clientX, event.clientY, decohTop, decohLeft, 2);
            mouseParallaxReverseInverse($("#Decoa1"), event.clientX, event.clientY, decoa1Top, decoa1Left, 2);
            mouseParallaxReverse($("#Decoi"), event.clientX, event.clientY, decoiTop, decoiLeft, 2);
            mouseParallax($("#Decor1"), event.clientX, event.clientY, decor1Top, decor1Left, 2);
            mouseParallaxInverse($("#Decoc"), event.clientX, event.clientY, decocTop, decocLeft, 2);
            mouseParallaxReverseInverse($("#Decoa2"), event.clientX, event.clientY, decoa2Top, decoa2Left, 2);
            mouseParallaxReverse($("#Decor2"), event.clientX, event.clientY, decor2Top, decor2Left, 2);
            mouseParallax($("#Decoe"), event.clientX, event.clientY, decoeTop, decoeLeft, 2);
        });
    }
});
