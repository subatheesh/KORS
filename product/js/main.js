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
        var decodownarrowsTop = $("#DecoArrows").offset().top;
        var decodownarrowsLeft = $("#DecoArrows").offset().left;

        var decoplusTop = $("#DecoPlus").offset().top;
        var decoplusLeft = $("#DecoPlus").offset().left;

        var decodotsTop = $("#DecoDots").offset().top;
        var decodotsLeft = $("#DecoDots").offset().left;

        $(window).mousemove(function( event ) {
            mouseParallaxInverse($("#DecoArrows"), event.clientX, event.clientY, decodownarrowsTop, decodownarrowsLeft, 2);
            mouseParallaxReverseInverse($("#DecoPlus"), event.clientX, event.clientY, decoplusTop, decoplusLeft, 2);
            mouseParallaxReverse($("#DecoDots"), event.clientX, event.clientY, decodotsTop, decodotsLeft, 2);
        });
    }
    
    $("#NaturalBlack").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Natural Black.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Natural Black 1");
    });

    $("#MobileNaturalBlack").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Natural Black.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Natural Black 1");
    });

    $("#WineRed").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Red.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Wine Red 2");
    });

    $("#MobileWineRed").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Red.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Wine Red 2");
    });

    $("#DarkBrown").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Dark Brown.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Dark Brown 3");
    });

    $("#MobileDarkBrown").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Dark Brown.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Dark Brown 3");
    });

    $("#Burgundy").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Burgundy.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Burgundy 4");
    });

    $("#MobileBurgundy").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Burgundy.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Burgundy 4");
    });

    $("#GoldenBlonde").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Golden.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Golden Blonde 5");
    });

    $("#MobileGoldenBlonde").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Golden.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Golden Blonde 5");
    });
});
