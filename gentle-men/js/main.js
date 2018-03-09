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
};
$(document).ready(function(){
    setInterval(function() {
      adjustPage();
    },100);
    $(window).resize(function() {
        adjustPage();
    })
});
