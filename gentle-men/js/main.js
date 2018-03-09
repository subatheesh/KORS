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
$(document).ready(function(){
    setTimeout(function() {
      adjustPage();
    },100);
    $(window).resize(function() {
        adjustPage();
    })
});
