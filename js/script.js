
//------------------------------------MENU----------------------------//

$(document).ready(function () {
    $(".menu-button").click(function () {
        $(".menu-bar-home").toggleClass("open");
        $(".contact").removeClass("active");
        $(this).toggleClass("active");
        $(".menu-bar-contact").removeClass("open"); 
    });

    $(".contact").click(function () {
        $(".menu-bar-contact").toggleClass("open");
        $(".menu-button").removeClass("active");
        $(this).toggleClass("active");
        $(".menu-bar-home").removeClass("open"); 
    });

    $(".search").click(function () {
        $(".menu-bar-search").toggleClass("open");
        $(".menu-button").removeClass("active");
        $(this).toggleClass("active");
        $(".menu-bar-home").removeClass("open"); 
    });
});


//------------------------------------------------------------------//    





//------------------------------------PAGE D'ACCEUIL----------------------------//

var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function () {
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#' + target).addClass('active');

    if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function () {
    $(this).find('.heart').toggleClass("is-active");
});


//----------------------------------------------------------------------------//







