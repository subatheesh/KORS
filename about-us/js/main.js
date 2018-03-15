var adjustPage = function() {
      var pageHeight = $("body").height();
      var deco15Height = $("#AboutDeco15 img").height();
      var backGroundHeight = $("#AboutUsTextContainer").height();
      $("#AboutUsTextBackground").height( backGroundHeight);
      $("#AboutDeco15").css({top: pageHeight-deco15Height});
};

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

    setTimeout(function(){
        if($(window).width() > 960){
            var decocircleTop =  $("#DecoCircle").offset().top;
            var decocircleLeft =  $("#DecoCircle").offset().left;

            var decodownarrowsTop = $("#DecoDownArrows").offset().top;
            var decodownarrowsLeft = $("#DecoDownArrows").offset().left;

            var decoplusTop = $("#DecoPlus").offset().top;
            var decoplusLeft = $("#DecoPlus").offset().left;

            var decodotsTop = $("#DecoDots").offset().top;
            var decodotsLeft = $("#DecoDots").offset().left;

            var decocirclelinesTop = $("#DecoCircleLines").offset().top;
            var decocirclelinesLeft = $("#DecoCircleLines").offset().left;

            var decocrossTop = $("#DecoCross").offset().top;
            var decocrossLeft = $("#DecoCross").offset().left;

            var decodownarrows2Top = $("#DecoDownAroows2").offset().top;
            var decodownarrows2Left = $("#DecoDownAroows2").offset().left;

            var decouparrowsTop = $("#DecoUpArrows").offset().top;
            var decouparrowsLeft = $("#DecoUpArrows").offset().left;

            var decoverticaldotsTop = $("#DecoVerticalDots").offset().top;
            var decoverticaldotsLeft = $("#DecoVerticalDots").offset().left;


            $(window).mousemove(function( event ) {
                mouseParallax($("#DecoCircle"), event.clientX, event.clientY, decocircleTop, decocircleLeft, 2);
                mouseParallaxInverse($("#DecoDownArrows"), event.clientX, event.clientY, decodownarrowsTop, decodownarrowsLeft, 2);
                mouseParallaxReverseInverse($("#DecoPlus"), event.clientX, event.clientY, decoplusTop, decoplusLeft, 4);
                mouseParallaxReverse($("#DecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 4);
                mouseParallax($("#DecoCircleLines"), event.clientX, event.clientY, decocirclelinesTop, decocirclelinesLeft, 2);
                mouseParallax($("#DecoCross"), event.clientX, event.clientY, decocrossTop, decocrossLeft, 2);
                mouseParallaxInverse($("#DecoDownAroows2"), event.clientX, event.clientY, decodownarrows2Top, decodownarrows2Left, 2);
                mouseParallax($("#DecoUpArrows"), event.clientX, event.clientY, decouparrowsTop, decouparrowsLeft, 2);
                mouseParallaxReverse($("#DecoVerticalDots"), event.clientX, event.clientY, decoverticaldotsTop, decoverticaldotsLeft, 2);

            });
        }

      adjustPage();
    },100);
    $(window).resize(function() {
      adjustPage();
    });
});
