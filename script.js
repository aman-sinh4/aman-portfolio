$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
            
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>550){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    // Toggle menu bar
    $('.menu-btn, .navbar .menu li a, .navbar .menuside').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //scroll up btn function

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop:0});
  });

})