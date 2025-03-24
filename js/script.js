$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Proszę wprowadzić swoje imię",
                    minlength: jQuery.validator.format("Wprowadź {0} znaków!")
                },
                phone: "Proszę wprowadzić swój numer telefonu",
                email: {
                    required: "Proszę wprowadzić swój adres e-mail",
                    email: "Nieprawidłowy adres e-mail"
                }
            }            
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    

    //pageup

   

    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('.pageup').removeClass('animate__backOutRight').addClass('animate__backInRight').fadeIn();
        }   else {
            $('.pageup').removeClass('animate__backInRight').addClass('animate__backOutRight').fadeOut(5000);
        }
    });

    // $("a[href^='#']").click(function(){
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //     return false;
    // });

    new WOW().init();
});

//    СМЕНА ЯЗЫКА

document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
  
    // Проверяем, на какой странице мы находимся
    // (Можно проверить document.documentElement.lang или window.location.pathname)
    const isPolishPage = document.documentElement.lang === 'pl';
  
    // Устанавливаем состояние чекбокса в зависимости от страницы
    // (Это особенно актуально, если у вас нет отдельной логики для index_pl.html)
    langSwitch.checked = isPolishPage;
  
    langSwitch.addEventListener('change', () => {
      // Добавляем класс fade-out, чтобы страница плавно исчезла
      document.body.classList.add('fade-out');
  
      // Через 0.5 секунды (время анимации) делаем переход
      setTimeout(() => {
        if (langSwitch.checked) {
          window.location.href = 'index_pl.html';
        } else {
          window.location.href = 'index.html';
        }
      }, 500);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.getElementById('langSwitch');
  
    // Проверяем, на какой странице мы находимся
    // (Можно проверить document.documentElement.lang или window.location.pathname)
    const isPolishPage = document.documentElement.lang === 'pl';
  
    // Устанавливаем состояние чекбокса в зависимости от страницы
    // (Это особенно актуально, если у вас нет отдельной логики для index_pl.html)
    langSwitch.checked = isPolishPage;
  
    langSwitch.addEventListener('change', () => {
      // Добавляем класс fade-out, чтобы страница плавно исчезла
      document.body.classList.add('fade-out');
  
      // Через 0.5 секунды (время анимации) делаем переход
      setTimeout(() => {
        if (langSwitch.checked) {
          window.location.href = 'index_pl.html';
        } else {
          window.location.href = 'index.html';
        }
      }, 500);
    });
  });
    
  