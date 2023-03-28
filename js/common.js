$(window).on('load', function () {
    $("#splash-logo").delay(3000).fadeOut('slow');
        $("#splash").delay(2000).fadeOut('slow', function () {
        $('body').addClass('appear');
        });
    
        var element = $(".eachTextAnime");
        element.each(function () {
          var text = $(this).text();
          var textbox = "";
          text.split('').forEach(function (t, i) {
            if (t !== " ") {
              if (i < 10) {
                textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
              } else {
                var n = i / 10;
                textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
              }
            } else {
              textbox += t;
            }
          });
          $(this).html(textbox);
        });
    
        EachTextAnimeControl();
});

function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");
  
      } else {
        $(this).removeClass("appeartext");
      }
    });
}

$(window).scroll(function () {
    EachTextAnimeControl();
  });



$(function () {
    $('.sp__btn, .sp__nav li').on('click', function () {
        $('.sp__btn').toggleClass('open');
        $('.sp__nav').fadeToggle();
    });

    $('.works__slider').slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        autoplaySpeed: 2500,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });

    $(function () {
        $('.openModal').on('click', function () {
            let index = $('.openModal').index(this) + 1;
            $('.modalArea[data-index=' + index + ']').fadeIn();
        });
        $('.closeModal, .modalBg').on('click', function () {
            $('.modalArea').fadeOut();
        });
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header__bar').css('opacity', 0.8);
        } else {
            $('.header__bar').css('opacity', 1);
        }
    });


});

function fadeAnime() {

    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top - 40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');

        } else {
            $(this).removeClass('fadeUp');
        }
    });

    $('.fadeInTrigger').each(function () {
        var elemPos = $(this).offset().top - 40;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');
        } else {
            $(this).removeClass('fadeIn');
        }
    });
     
}

$(window).scroll(function () {
    fadeAnime();
});



