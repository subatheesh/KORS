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

        var decoarrowsTop = $("#DecoArrows").offset().top;
        var decoarrowsLeft = $("#DecoArrows").offset().left;

        var decocircledotsTop = $("#DecoCircleDots").offset().top;
        var decocircledotsLeft = $("#DecoCircleDots").offset().left;

        var decodotsTop = $("#DecoDots").offset().top;
        var decodotsLeft = $("#DecoDots").offset().left;

        var decocirclelinesTop = $("#DecoCircleLines").offset().top;
        var decocirclelinesLeft = $("#DecoCircleLines").offset().left;

        var decosTop = $("#Decos").offset().top;
        var decosLeft = $("#Decos").offset().left;

        var decokTop = $("#Decok").offset().top;
        var decokLeft = $("#Decok").offset().left;

        var decoiTop = $("#Decoi").offset().top;
        var decoiLeft = $("#Decoi").offset().left;

        var deconTop = $("#Decon").offset().top;
        var deconLeft = $("#Decon").offset().left;

        $(window).mousemove(function( event ) {
            mouseParallaxInverse($("#DecoArrows"), event.clientX, event.clientY, decoarrowsTop, decoarrowsLeft, 2);
            mouseParallaxReverseInverse($("#DecoCircleDots"), event.clientX, event.clientY, decocircledotsTop, decocircledotsLeft, 2);
            mouseParallaxReverse($("#DecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 2);
            mouseParallax($("#DecoCircleLines"), event.clientX, event.clientY, decocirclelinesTop, decocirclelinesLeft, 2);
            mouseParallaxInverse($("#Decos"), event.clientX, event.clientY, decosTop, decosLeft, 2);
            mouseParallaxReverseInverse($("#Decok"), event.clientX, event.clientY, decokTop, decokLeft, 2);
            mouseParallaxReverse($("#Decoi"), event.clientX, event.clientY, decoiTop, decoiLeft, 2);
            mouseParallax($("#Decon"), event.clientX, event.clientY, deconTop, deconLeft, 2);
        });
    }
});
