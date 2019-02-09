$( document ).ready(function() {
    initIndex();
});

function initIndex() {
    $("#navbarTemplate").load("navbar.html"); 
    $("#contactTemplate").load("contact.html"); 
    $('.slider').slick({
        autoplay: true,
          autoplaySpeed: 3000,
    });
    $('.learn-1').mouseover(function(){
        $('.learn-overlay-1').css({
            'visibility':'visible'
        })
    });
    $('.learn-1').mouseout(function(){
        $('.learn-overlay-1').css({
            'visibility':'hidden'
        })
    });

    $('.learn-2').mouseover(function(){
        $('.learn-overlay-2').css({
            'visibility':'visible'
        })
    });
    $('.learn-2').mouseout(function(){
        $('.learn-overlay-2').css({
            'visibility':'hidden'
        })
    });

    $('.learn-3').mouseover(function(){
        $('.learn-overlay-3').css({
            'visibility':'visible'
        })
    });
    $('.learn-3').mouseout(function(){
        $('.learn-overlay-3').css({
            'visibility':'hidden'
        })
    });

    $('.learn-4').mouseover(function(){
        $('.learn-overlay-4').css({
            'visibility':'visible'
        })
    });
    $('.learn-4').mouseout(function(){
        $('.learn-overlay-4').css({
            'visibility':'hidden'
        })
    });

    $('.learn-5').mouseover(function(){
        $('.learn-overlay-5').css({
            'visibility':'visible'
        })
    });

    $('.learn-5').mouseout(function(){
        $('.learn-overlay-5').css({
            'visibility':'hidden'
        })
    });

    $('.featured-img').on('click', function() {
        if($(this).hasClass('featured-img-1')) {
            $('.modal-product-1').css("display","flex");
        } else if($(this).hasClass('featured-img-2')) {
            $('.modal-product-2').css("display","flex");
        } else if($(this).hasClass('featured-img-3')) {
            $('.modal-product-3').css("display","flex");
        } else if($(this).hasClass('featured-img-4')) {
            $('.modal-product-4').css("display","flex");
        } else if($(this).hasClass('featured-img-5')) {
            $('.modal-product-5').css("display","flex");
        } else if($(this).hasClass('featured-img-6')) {
            $('.modal-product-6').css("display","flex");
        } 
    });

    $('.modal-close').on('click', function(){
        $('.modal').css('display','none');
    });
}