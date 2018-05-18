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
});
