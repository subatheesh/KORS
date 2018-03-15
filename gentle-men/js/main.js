var adjustPage = function() {
    var gentlemenImageHeight = $('#GentleMenImage').height();
    var ItemsContainerTopPadding = gentlemenImageHeight + 100;
    console.log(ItemsContainerTopPadding);
    $("#ItemsContainer").css("padding-top", ItemsContainerTopPadding);
    var backgroundHeight = $("#ItemsContainer").height()-400;
    $("#BackgroundContainer").height(backgroundHeight);
    $("#BackgroundContainer").css("top", gentlemenImageHeight+150);
    $("#GentleMenDecoYellow").css("top", gentlemenImageHeight * 0.85);
    $("#GentleMenDecoWhite").css("top", gentlemenImageHeight * 0.75);
    $("#GentleMenDecoBlueLeft").css("top",gentlemenImageHeight * 1.4);
    if($(window).width() <= 420){
      $("#ItemsContainer").css("padding-top", ItemsContainerTopPadding-70);
      $("#BackgroundContainer").css("top", gentlemenImageHeight+30);
      $("#BackgroundContainer").height(backgroundHeight+300);
    }else if ($(window).width() <= 650) {
      $("#ItemsContainer").css("padding-top", ItemsContainerTopPadding-70);
      $("#BackgroundContainer").css("top", gentlemenImageHeight+30);
      $("#BackgroundContainer").height(backgroundHeight+300);
    }else if ($(window).width() <= 960) {
      $("#ItemsContainer").css("padding-top", ItemsContainerTopPadding);
      $("#BackgroundContainer").css("top", gentlemenImageHeight+ 100);
      $("#BackgroundContainer").height(backgroundHeight + 150);
    }
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
    setTimeout(function() {
      adjustPage();
      if($(window).width() > 960){

          var decoskewTop = $("#GentleMenDecoSkew").offset().top;
          var decoskewLeft = $("#GentleMenDecoSkew").offset().left;

          var decoplusTop = $("#GentleMenDecoPlus").offset().top;
          var decoplusLeft = $("#GentleMenDecoPlus").offset().left;

          var decodotsTop = $("#GentleMenDecoDots").offset().top;
          var decodotsLeft = $("#GentleMenDecoDots").offset().left;

          $(window).mousemove(function( event ) {
              mouseParallaxInverse($("#GentleMenDecoSkew"), event.clientX, event.clientY, decoskewTop, decoskewLeft, 2);
              mouseParallaxReverseInverse($("#GentleMenDecoPlus"), event.clientX, event.clientY, decoplusTop, decoplusLeft, 2);
              mouseParallaxReverse($("#GentleMenDecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 2);
          });
      }

    },100);
    $(window).resize(function() {
        adjustPage();
    })
});
