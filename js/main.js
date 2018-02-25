$(document).ready(function(){
    $(document).scrollTop(0);
    var foregroundLeft = $("#foreGroundText").position().left;
    var backgroundLeft = $("#backGroundText").position().left;
    var boldlinefirst = $("#boldLineFirst").position().left;
    var boldlinesecond = $("#boldLineSecond").position().left;
    var fixedparallaxsymbol = $("#fixedParallaxSymbol").position().left;
    var fixedparallaxcircles = $("#fixedParallaxCircles").position().left;
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        $("#foreGroundText").css({left: foregroundLeft - 2*scrollTop});
        $("#backGroundText").css({left: backgroundLeft - 2*scrollTop});
        $("#boldLineFirst").css({left: boldlinefirst - 2*scrollTop});
        $("#boldLineSecond").css({left: boldlinesecond - 2*scrollTop});
        $("#fixedParallaxSymbol").css({left: fixedparallaxsymbol - 1*scrollTop});
        $("#fixedParallaxCircles").css({left: fixedparallaxcircles - 1*scrollTop});
    });
});
