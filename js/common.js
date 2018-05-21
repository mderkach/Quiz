$(function () {
    $("[data-fancybox]").fancybox({
        touch: false,
        scrolling: false,
        hideScrollbar: true,
        beforeShow: function () {
            $("body").css({
                'overflow-y': 'hidden'
            });
        },
        afterClose: function () {
            $("body").css({
                'overflow-y': 'visible'
            });
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        setWrapperSize: 714,
        effect: 'slide',
        slidesPerView: 3,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 1
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    });
});
 $('.checkbox').on('change', function() {
    var div = $(this).closest('.checker__wrapper');
    $(this).is(":checked") ? div.addClass("checker__wrapper-checked") : div.removeClass("checker__wrapper-checked");
});