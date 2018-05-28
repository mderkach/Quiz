$(function () {
//    $("[data-fancybox]").fancybox({
//        touch: false,
//        scrolling: false,
//        hideScrollbar: true,
//        beforeShow: function () {
//            $("body").css({
//                'overflow-y': 'hidden'
//            });
//        },
//        afterClose: function () {
//            $("body").css({
//                'overflow-y': 'visible'
//            });
//        }
//    });
    var mySwiper = new Swiper('.swiper-container', {
        setWrapperSize: 695,
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
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
    });
    $('input[name="phone"]').inputmask("+7(999)999-99-99");
    $('.checkbox').on('change', function() {
    var div = $(this).closest('.checker__wrapper');
    $(this).is(":checked") ? div.addClass("checker__wrapper-checked") : div.removeClass("checker__wrapper-checked");
    function changeValue(){
        var rangeValue = document.getElementById("range").value;
        console.log(rangeValue);
    }     
});
});