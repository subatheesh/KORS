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
    $(document).scrollTop(0);

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - $("#header-container").height()
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                // $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    if($(window).width() > 960){
        var skewcircleTop =  $("#SkewCircle").offset().top;
        var skewcircleLeft =  $("#SkewCircle").offset().left;

        var circlelineTop = $("#CircleLine").offset().top;
        var circlelineLeft = $("#CircleLine").offset().left;

        var aboutkorstop = $("#AboutKors").offset().top;
        var aboutkorsleft = $("#AboutKors").offset().left;

        var aboutcolormatictop = $("#AboutColormatic").offset().top;
        var aboutcolormaticleft = $("#AboutColormatic").offset().left;

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

        var skincaresymboltop = $("#SkinCareSymbol").offset().top;
        var skincaresymbolleft = $("#SkinCareSymbol").offset().left;

        var skincarecirclestop = $("#SkinCareCircles").offset().top;
        var skincarecirclesleft = $("#SkinCareCircles").offset().left;

        var gentlemencirclestop = $("#GentleMenCircles").offset().top;
        var gentlemencirclesleft = $("#GentleMenCircles").offset().left;

        var privatelabelarrowtop = $("#PrivateLabelArrows").offset().top;
        var privatelabelarrowleft = $("#PrivateLabelArrows").offset().left;

        var privatelabeldotstop = $("#PrivateLabelDots").offset().top;
        var privatelabeldotsleft = $("#PrivateLabelDots").offset().left;

        var privatelabelcirclestop = $("#PrivateLabelCircles").offset().top;
        var privatelabelcirclesleft = $("#PrivateLabelCircles").offset().left;

        var decouparrowstop = $("#DecoUpArrows").offset().top;
        var decouparrowsleft = $("#DecoUpArrows").offset().left;

        var decodownarrowstop = $("#DecoDownArrows").offset().top;
        var decodownarrowsleft = $("#DecoDownArrows").offset().left;

        var decodotstoptop = $("#DecoDotsTop").offset().top;
        var decodotstopleft = $("#DecoDotsTop").offset().left;

        var decodotsbottomtop = $("#DecoDotsBottom").offset().top;
        var decodotsbottomleft = $("#DecoDotsBottom").offset().left;

        var decoclosesymboltop = $("#DecoCloseSymbol").offset().top;
        var decoclosesymbolleft = $("#DecoCloseSymbol").offset().left;

        var decosmallcircletop = $("#DecoSmallCircle").offset().top;
        var decosmallcircleleft = $("#DecoSmallCircle").offset().left;

        var followdotstop = $("#FollowDots").offset().top;
        var followdotsleft = $("#FollowDots").offset().left;

        var followdarrowstop = $("#FollowArrows").offset().top;
        var followdarrowsleft = $("#FollowArrows").offset().left;

        $(window).mousemove(function( event ) {
            mouseParallax($("#SkewCircle"), event.clientX, event.clientY, skewcircleTop, skewcircleLeft, 2);
            mouseParallaxInverse($("#CircleLine"), event.clientX, event.clientY, circlelineTop, circlelineLeft, 3);
            mouseParallaxReverse($("#AboutKors"), event.clientX, event.clientY, aboutkorstop, aboutkorsleft, 2);
            mouseParallaxReverseInverse($("#AboutColormatic"), event.clientX, event.clientY, aboutcolormatictop, aboutcolormaticleft, 2);
            mouseParallaxInverse($("#CircleWithoutCross"), event.clientX, event.clientY, circlewithoutcrossTop, circlewithoutcrossLeft, 4);
            mouseParallax($("#CircleCross"), event.clientX, event.clientY, circlecrossTop, circlecrossLeft, 2);
            mouseParallaxReverse($("#CosmoSilkyTopText"), event.clientX, event.clientY, cosmosilkytoptexttop, cosmosilkytoptextleft, 2);
            mouseParallaxReverseInverse($("#CosmoSilkyBottomText"), event.clientX, event.clientY, cosmosilkybottomtexttop, cosmosilkybottomtextleft, 2);
            mouseParallaxReverse($("#HairCareArrows"), event.clientX, event.clientY, haircarearrowstop, haircarearrowsleft, 1);
            mouseParallax($("#HairCareDots"), event.clientX, event.clientY, haircaredotstop, haircaredotsleft, 3);
            mouseParallax($("#SkinCareSymbol"), event.clientX, event.clientY, skincaresymboltop, skincaresymbolleft, 2);
            mouseParallaxInverse($("#SkinCareCircles"), event.clientX, event.clientY, skincarecirclestop, skincarecirclesleft, 2);
            mouseParallax($("#GentleMenCircles"), event.clientX, event.clientY, gentlemencirclestop, gentlemencirclesleft, 4);
            mouseParallaxReverse($("#PrivateLabelArrows"), event.clientX, event.clientY, privatelabelarrowtop, privatelabelarrowleft, 2);
            mouseParallax($("#PrivateLabelDots"), event.clientX, event.clientY, privatelabeldotstop, privatelabeldotsleft, 2);
            mouseParallaxInverse($("#PrivateLabelCircles"), event.clientX, event.clientY, privatelabelcirclestop, privatelabelcirclesleft, 1);
            mouseParallax($("#DecoUpArrows"), event.clientX, event.clientY, decouparrowstop, decouparrowsleft, 3);
            mouseParallaxInverse($("#DecoDownArrows"), event.clientX, event.clientY, decodownarrowstop, decodownarrowsleft, 3);
            mouseParallax($("#DecoDotsTop"), event.clientX, event.clientY, decodotstoptop, decodotstopleft, 1);
            mouseParallaxInverse($("#DecoDotsBottom"), event.clientX, event.clientY, decodotsbottomtop, decodotsbottomleft, 1);
            mouseParallaxReverse($("#DecoCloseSymbol"), event.clientX, event.clientY, decoclosesymboltop, decoclosesymbolleft, 2);
            mouseParallaxReverseInverse($("#DecoSmallCircle"), event.clientX, event.clientY, decosmallcircletop, decosmallcircleleft, 2);
            mouseParallax($("#FollowDots"), event.clientX, event.clientY, followdotstop, followdotsleft, 2);
            mouseParallaxInverse($("#FollowArrows"), event.clientX, event.clientY, followdarrowstop, followdarrowsleft, 2);
        });
    }


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
