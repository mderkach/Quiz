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
    var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
        },
    });
});
