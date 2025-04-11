$(function(){

    $(".hamburger-menu").click(function() {
        $(this).toggleClass("close");
        $("#navi").toggleClass("active");
    }); 

    $("#navi .btn").click(function() {
        $(".hamburger-menu").toggleClass("close");
        $("#navi").toggleClass("active");
    });

});