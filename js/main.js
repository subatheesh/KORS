$(document).ready(function(){
    $(document).scrollTop(0);
    var foregroundLeft = $("#foreGroundText").offset().left;
    var backgroundLeft = $("#backGroundText").offset().left;
    var boldlinefirst = $("#boldLineFirst").offset().left;
    var boldlinesecond = $("#boldLineSecond").offset().left;
    var fixedparallaxsymbol = $("#fixedParallaxSymbol").offset().left;
    var fixedparallaxcircles = $("#fixedParallaxCircles").offset().left;
    console.log(foregroundLeft);
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        $("#foreGroundText").css({left: foregroundLeft - 2*scrollTop});
        $("#backGroundText").css({left: backgroundLeft - 2*scrollTop});
        $("#boldLineFirst").css({left: boldlinefirst - 2*scrollTop});
        $("#boldLineSecond").css({left: boldlinesecond - 2*scrollTop});
        $("#fixedParallaxSymbol").css({left: fixedparallaxsymbol - 1*scrollTop});
        $("#fixedParallaxCircles").css({left: fixedparallaxcircles - 1*scrollTop});

        if(scrollTop > 20){
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
});
