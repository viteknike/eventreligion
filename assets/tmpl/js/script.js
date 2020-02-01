$(document).ready(function(){

    $('.detail-case-page-slider').owlCarousel({

        dots: false,
        center: true,
        items:2,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 1500,
        autoplayHoverPause:true,
        loop:true,
        margin:30,
        responsive:{
            600:{
                items:3
            }
        }
    });

});