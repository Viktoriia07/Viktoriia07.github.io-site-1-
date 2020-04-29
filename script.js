$(document).ready(function(){   
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.burger-menu__button').click (function(){
        $ ('.header__menu').toggleClass('header__menu-active');
    });

    $(document).ready(function(){
        $(".header__list").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
});

