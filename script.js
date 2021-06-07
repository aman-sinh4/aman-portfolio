$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
            
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    // Toggle menu bar
    $('.menu-btn, .navbar .menu li a, .navbar .menuside').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


})