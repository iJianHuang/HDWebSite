$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen-half").css("height", 500); 
        $(".fill-screen-one-third").css("height", 300);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 200
    });

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            },
            1500,
            'easeInOutExpo'
        );
        event.preventDefault();
    });
});