var space_top = $('.main_menu').offset().top;

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > space_top){
        $('.main_menu').addClass('menu_fix');
    }
    else{
        $('.main_menu').removeClass('menu_fix');
    }
});



$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });