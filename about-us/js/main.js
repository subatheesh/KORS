var adjustPage = function() {
      var pageHeight = $("body").height();
      var deco15Height = $("#AboutDeco15 img").height();
      var backGroundHeight = $("#AboutUsTextContainer").height();
      $("#AboutUsTextBackground").height( backGroundHeight);
      $("#AboutDeco15").css({top: pageHeight-deco15Height});
};
$(document).ready(function(){
    setTimeout(function(){
      adjustPage();
    },100);
    $(window).resize(function() {
      adjustPage();
    });
});
