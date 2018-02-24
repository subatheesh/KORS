$(document).ready(function(){
    var foregroundLeft = $("#foreGroundText").position().left;
    var backgroundLeft = $("#backGroundText").position().left;
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        $("#foreGroundText").css({left: foregroundLeft- 2*scrollTop});
        $("#backGroundText").css({left: backgroundLeft- 2*scrollTop});
    });
});
