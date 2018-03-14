var mouseParallax = function(elem, x, y, etop, eleft, speed) {
  // var y = event.clientY;
  // var x = event.clientX;
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop + ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  var elemLeft = eleft + ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxInverse = function(elem, x, y, etop, eleft, speed) {
  var x = event.clientX;
  var y = event.clientY;
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop - ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  var elemLeft = eleft - ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxReverse = function(elem, x, y, etop, eleft, speed) {
  var x = event.clientX;
  var y = event.clientY;
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop + ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  var elemLeft = eleft + ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

var mouseParallaxReverseInverse = function(elem, x, y, etop, eleft, speed) {
  var x = event.clientX;
  var y = event.clientY;
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var elemTop = etop - ((x - (windowWidth - (windowWidth / 2))) * speed / 100);
  var elemLeft = eleft - ((y - (windowHeight - (windowHeight / 2))) * speed / 100);
  elem.offset({top: elemTop, left: elemLeft});
};

$(document).ready(function(){
    $(document).scrollTop(0);

    var skewcircleTop =  $("#SkewCircle").offset().top;
    var skewcircleLeft =  $("#SkewCircle").offset().left;

    var circlelineTop = $("#CircleLine").offset().top;
    var circlelineLeft = $("#CircleLine").offset().left;

    var circlewithoutcrossTop = $("#CircleWithoutCross").offset().top;
    var circlewithoutcrossLeft = $("#CircleWithoutCross").offset().left;

    var circlecrossTop = $("#CircleCross").offset().top;
    var circlecrossLeft = $("#CircleCross").offset().left;

    var cosmosilkytoptexttop = $("#CosmoSilkyTopText").offset().top;
    var cosmosilkytoptextleft = $("#CosmoSilkyTopText").offset().left;

    var cosmosilkybottomtexttop = $("#CosmoSilkyBottomText").offset().top;
    var cosmosilkybottomtextleft = $("#CosmoSilkyBottomText").offset().left;

    var haircarearrowstop = $("#HairCareArrows").offset().top;
    var haircarearrowsleft = $("#HairCareArrows").offset().left;

    var haircaredotstop = $("#HairCareDots").offset().top;
    var haircaredotsleft = $("#HairCareDots").offset().left;

    $(window).mousemove(function( event ) {
        mouseParallax($("#SkewCircle"), event.clientX, event.clientY, skewcircleTop, skewcircleLeft, 2);
        mouseParallaxInverse($("#CircleLine"), event.clientX, event.clientY, circlelineTop, circlelineLeft, 3);
        mouseParallaxInverse($("#CircleWithoutCross"), event.clientX, event.clientY, circlewithoutcrossTop, circlewithoutcrossLeft, 4);
        mouseParallax($("#CircleCross"), event.clientX, event.clientY, circlecrossTop, circlecrossLeft, 2);
        mouseParallaxReverse($("#CosmoSilkyTopText"), event.clientX, event.clientY, cosmosilkytoptexttop, cosmosilkytoptextleft, 2);
        mouseParallaxReverseInverse($("#CosmoSilkyBottomText"), event.clientX, event.clientY, cosmosilkybottomtexttop, cosmosilkybottomtextleft, 2);
        mouseParallaxReverse($("#HairCareArrows"), event.clientX, event.clientY, haircarearrowstop, haircarearrowsleft, 1);
        mouseParallax($("#HairCareDots"), event.clientX, event.clientY, haircaredotstop, haircaredotsleft, 3);
    });



    var foregroundLeft = $("#foreGroundText").offset().left;
    var backgroundLeft = $("#backGroundText").offset().left;
    var boldlinefirst = $("#boldLineFirst").offset().left;
    var boldlinesecond = $("#boldLineSecond").offset().left;
    var fixedparallaxsymbol = $("#fixedParallaxSymbol").offset().left;
    var fixedparallaxcircles = $("#fixedParallaxCircles").offset().left;
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        $("#foreGroundText").css({left: foregroundLeft - 2*scrollTop});
        $("#backGroundText").css({left: backgroundLeft - 2*scrollTop});
        $("#boldLineFirst").css({left: boldlinefirst - 2*scrollTop});
        $("#boldLineSecond").css({left: boldlinesecond - 2*scrollTop});
        $("#fixedParallaxSymbol").css({left: fixedparallaxsymbol - 1*scrollTop});
        $("#fixedParallaxCircles").css({left: fixedparallaxcircles - 1*scrollTop});

        if(scrollTop > 10){
            $("#header-container").addClass("header-shadow");
        }else{
            $("#header-container").removeClass("header-shadow");
        }
    });
    var blogimgcontainerwidth = $("#BlogImgContainer").width();
    $("#BlogImg1").width(blogimgcontainerwidth);
    $("#BlogImg2").width(blogimgcontainerwidth);
    $("#BlogImg3").width(blogimgcontainerwidth);
    $("#BlogImg4").width(blogimgcontainerwidth);
    var blogCount = 4;
    var blogNo = 0;
    $("#BlogArrowLeftImg").click(function() {
      if(blogNo > 0){
        blogNo--;
        var blogWidth = -blogNo * blogimgcontainerwidth;
        console.log(blogWidth);
        $("#BlogsImages").animate({left: blogWidth}, 500);
      }
    });
    $("#BlogArrowRightImg").click(function() {
      if(blogNo < blogCount - 1){
        blogNo++;
        var blogWidth = -blogNo * blogimgcontainerwidth;
        console.log(blogWidth);
        $("#BlogsImages").animate({left: blogWidth}, 500);
      }
    });
    var navTab = false;
    $("#Logo").click(function() {
        if($(window).width() <= 650){
            if(navTab){
              navTab = false;
              $("#nav-header").hide();
            }else{
              navTab = true;
              $("#nav-header").show();
            }
        }
    });
    $(".close").click(function() {
          $("#nav-header").hide();
          navTab = false;
    });
});
