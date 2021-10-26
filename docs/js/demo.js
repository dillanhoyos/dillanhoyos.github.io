$(function (){

    "use strict";

    //smooth button scroll
    $('.button-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top
        }, 1000 );

    }); 


});

// Preloader

$(window).on("load",function (){

    $(".loading").fadeOut(500);

});