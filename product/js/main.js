$(document).ready(function(){

    var colorContainerTop = $("#ProductDetailsContainer").position().top + $("#ProductDetailsContainer").height();
    $("#ProductColorContainer").css({top: colorContainerTop});
    var productColorHeight = $("#ProductColorContainer").height();
    $("#ProductContainer").height(productColorHeight+colorContainerTop+40);
    $("#NaturalBlack").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Natural Black.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Natural Black 5");
    });

    $("#WineRed").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Red.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Wine Red 5");
    });

    $("#DarkBrown").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Dark Brown.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Dark Brown 5");
    });

    $("#Burgundy").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Burgundy.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Burgundy 5");
    });

    $("#GoldenBlonde").click(function(){
          $("#ProductImage").attr('src','../img/products/boxs/Golden.png');
          $("#ProductCode").html("KC201");
          $("#ProductColor").html("Golden Blonde 5");
    });
});
