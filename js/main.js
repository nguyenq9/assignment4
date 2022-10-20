

$(document).ready(function(){
    $("#light").click(function(){
      $("body").css("background-color", "white");
      $("p").css("color", "black");
      $("h2").css("color", "black");
      $("h1").css("color", "black");
      $("ul").css("color", "black");

    });
});

$(document).ready(function(){
    $("#dark").click(function(){
      $("body").css("background-color", "#141d26");
      $("p").css("color", "#FAF9F6");
      $("h2").css("color", "#FAF9F6");
      $("h1").css("color", "#FAF9F6");
      $("ul").css("color", "#FAF9F6");

    });
});

$(document).ready(function() {
    $("h2").hover(function(){
        $(this).css("background-color", "#1DA1F2");
        }, function(){
        $(this).css("background-color", "transparent");
    });
});

$(document).ready(function() {
    $("h1").hover(function(){
        $(this).css("background-color", "#1DA1F2");
        }, function(){
        $(this).css("background-color", "transparent");
    });
});

$(document).ready(function() {
    
  
    $("#longhead").click(function() {
      $("#long").show();
    });
    $("#visionhead").click(function() {
        $("#vision").show();
    });
    $("#takehead").click(function() {
        $("#takeaway").show();
    });  
    $("#takehead").dblclick(function() {
        $("#takeaway").hide();
    }); 
    $("#visionhead").dblclick(function() {
        $("#vision").hide();
    }); 
    $("#longhead").dblclick(function() {
        $("#long").hide();
    }); 

});

$(document).ready(function(){
    $("#resetButton").click(function(){
        $("#takeaway").hide();
        $("#vision").hide();
        $("#long").hide();
    });
});

$(document).ready(function(){
    $("#openButton").click(function(){
        $("#takeaway").show();
        $("#vision").show();
        $("#long").show();
    });
});