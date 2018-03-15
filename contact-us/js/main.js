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

        var decodownarrowsTop = $("#DecoDownArrows").offset().top;
        var decodownarrowsLeft = $("#DecoDownArrows").offset().left;

        var decoplusTop = $("#DecoPlus").offset().top;
        var decoplusLeft = $("#DecoPlus").offset().left;

        var decodotsTop = $("#DecoDots").offset().top;
        var decodotsLeft = $("#DecoDots").offset().left;

        var innerdecoarrowsTop = $("#InnerDecoArrows").offset().top;
        var innerdecoarrowsLeft = $("#InnerDecoArrows").offset().left;

        $(window).mousemove(function( event ) {
            mouseParallaxInverse($("#DecoDownArrows"), event.clientX, event.clientY, decodownarrowsTop, decodownarrowsLeft, 2);
            mouseParallaxReverseInverse($("#DecoPlus"), event.clientX, event.clientY, decoplusTop, decoplusLeft, 2);
            mouseParallaxReverse($("#DecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 2);
            mouseParallax($("#InnerDecoArrows"), event.clientX, event.clientY, innerdecoarrowsTop, innerdecoarrowsLeft, 2);
        });
    }
});
