// for (var i = 1; i < 6; i++) {
//     document.querySelector('.menu-list__item-' + i).addEventListener('click', (event) => {
//         menuIndex = event.srcElement.parentElement.classList[1].replace(/^\D+/g, '');
//         for (var ii = 1; ii < 6; ii++) {
//             if (ii.toString() === menuIndex)
//                 document.querySelector('.dropdown-list__' + menuIndex).classList.toggle('active')
//             continue;
//             document.querySelector('.dropdown-list__' + ii).classList.remove('active')
//
//         }
//     });
// }


$(function () {


    $(function () {

        $('.mobile-menu').on('click', function () {
            $('.dropdown-list__media-category').toggleClass('active');
        });
    });

    $(function () {

        $('.menu-list__item-media-1').on('click', function () {
            $('.dropdown-list__media-1').toggleClass('active');
        });
    });


    $(function () {

        $('.menu-list__item-media-8').on('click', function () {
            $('.dropdown-list__media-5').toggleClass('active');
        });
    });

    $(function () {
        $('.btn__media-close ').on('click', function () {
            $('.dropdown-list__media-category').toggleClass('close');
        });
    });



    $(function () {
        $('.btn__media-close').on('click', function () {
            $('.dropdown-list__media').removeClass('active');
        });
    });



    $(function () {
        $('.btn__media-close-category').on('click', function () {
            $('.dropdown-list__media-category').removeClass('active');
        });
    });

    $(function () {
        $('.search').on('click', function () {
            $('.search-desktop').toggleClass('active');
        });
    });

    $(function () {
        $('.search-btn__close').on('click', function () {
            $('.search-desktop').removeClass('active');
            $('.search-desktop').toggleClass('close');
        });
    });

    $(function () {
        $('.header-top-contacts__list-callback').on('click', function () {
            $('.contacts__list-callback').toggleClass('active');
        });
    });

    $(function () {
        $('.contacts__list-callback-btn__close').on('click', function () {
            $('.contacts__list-callback').removeClass('active');
            $('.contacts__list-callback').toggleClass('close');
        });
    });



    $('.slider').not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.crolssselling-block__slider').not('.slick-initialized').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ' <img class="slider-arrows slider-arrows-left" src="img/crolssselling-arrow-left.svg" alt="">',
        nextArrow: ' <img class="slider-arrows slider-arrows-right" src="img/crolssselling-arrow-right.svg" alt="">',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1335,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1005,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.upselling__slider').not('.slick-initialized').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: ' <img class="slider-arrows slider-arrows-left" src="img/crolssselling-arrow-left.svg" alt="">',
        nextArrow: ' <img class="slider-arrows slider-arrows-right" src="img/crolssselling-arrow-right.svg" alt="">',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1510,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(function () {

        $('.catalog-filter-block__flex-1').on('click', function () {
            $('.catalog-price-row').toggleClass('close');
        });
    });

    $(function () {

        $('.catalog-filter-block__flex-2').on('click', function () {
            $('.catalog-filter-list-wrap').toggleClass('close');
        });
    });

    $(function () {
        $('.catalog-filter-block__flex-3').on('click', function () {
            $('.catalog-filter-list-purpose').toggleClass('close');
        });
    });
    $(function () {
        $('.catalog-filter-block__flex-4').on('click', function () {
            $('.catalog-filter-list-line').toggleClass('close');
        });
    });

    $(function () {
        $('.upselling__btn-one-click').on('click', function () {
            $('.window-one-click ').toggleClass('active');
        });
    });

    $(function () {
        $('.buy-one-click').on('click', function () {
            $('.window-one-click').toggleClass('active');
        });
    });

    $(function () {
        $('.window-one-click__close').on('click', function () {
            $('.window-one-click').removeClass('active');
        });
    });

    $(function () {
        $('.catalog__sorting-title').on('click', function () {
            $('.catalog__sorting-dropdown').toggleClass('active');
        });
    });

    $(function () {
        $('.filters-media').on('click', function () {
            $('.catalog-filter').toggleClass('active');
        });
    });

    $(function () {
        $('.btn__media-close-aside').on('click', function () {
            $('.catalog-filter').removeClass('active');
        });
    });

    $(function () {
        $('.catalog-filter-block__flex-1').on('click', function () {
            $('.catalog-filter-block__arrow-1').toggleClass('close');
        });
    });

    $(function () {
        $('.catalog-filter-block__flex-2').on('click', function () {
            $('.catalog-filter-block__arrow-2').toggleClass('close');
        });
    });

    $(function () {
        $('.catalog-filter-block__flex-3').on('click', function () {
            $('.catalog-filter-block__arrow-3').toggleClass('close');
        });
    });

    $(function () {
        $('.catalog-filter-block__flex-4').on('click', function () {
            $('.catalog-filter-block__arrow-4').toggleClass('close');
        });
    });

    $(function () {
        $('.basket-btn').on('click', function () {
            $('.basket__container').toggleClass('active');
        });
    });

    $(function () {
        $('.basket__container-btn-close').on('click', function () {
            $('.basket__container').removeClass('active');
        });
    });


    $(function () {
        $('.ordering__box-title-2 ').on('click', function () {
            $('.tabcontent-form-2').toggleClass('active');
            $('.tabcontent-form-1').removeClass('active');
            $('.ordering__box-title-2').toggleClass('active');
            $('.ordering__box-title-1').removeClass('active');
        });
    });

    $(function () {
        $('.ordering__box-title-1 ').on('click', function () {
            $('.ordering__box-title-1').toggleClass('active');
            $('.tabcontent-form-1').toggleClass('active');
            $('.tabcontent-form-2').removeClass('active');
            $('.ordering__box-title-2').removeClass('active');

        });
    });

    $(function () {
        $('.profile-btn').on('click', function () {
            $('.profile-window').toggleClass('active');
        });
    });


    $(function () {
        $('.profile-window-btn__close').on('click', function () {
            $('.profile-window').removeClass('active');
        });
    });

    $(function () {
        $('.color__groups-eye-btn').on('click', function () {
            $('.window__groups-eye').toggleClass('active');
        });
    });

    $(function () {
        $('.color__groups-hair-btn').on('click', function () {
            $('.window__groups-hair').toggleClass('active');
        });
    });

    $(function () {
        $('.color__groups-leather-btn').on('click', function () {
            $('.window__groups-leather').toggleClass('active');
        });
    });
    $(function () {
        $('.ordering-form-city').on('click', function () {
            $('.ordering-form-city-dropdown').toggleClass('active');
        });
    });

    $(function () {
        $('.ordering-form-post-office').on('click', function () {
            $('.ordering-form-post-office-dropdown').toggleClass('active');
        });
    });

    $(function () {
        $('.ordering-form-post-office-number').on('click', function () {
            $('.ordering-form-post-office-number-dropdown').toggleClass('active');
        });
    });

    $(function () {
        $('.ordering-form-street').on('click', function () {
            $('.ordering-form-street-dropdown').toggleClass('active');
        });
    });

    $(function () {
        $('.ordering__box-title-pickup').on('click', function () {
            $('.tabcontent-form-2-pickup').toggleClass('active');
        });
    });


})

// const readMoreBtn = document.querySelector(".read-more-btn");
// const text = document.querySelector(".text-show-more");
//
// readMoreBtn.addEventListener("click", (e) => {
//     text.classList.toggle("show-more");
//     if (readMoreBtn.innerText === "ПОКАЗАТЬ БОЛЬШЕ") {
//         readMoreBtn.innerText = "СКРЫТЬ";
//     } else {
//         readMoreBtn.innerText = "ПОКАЗАТЬ БОЛЬШЕ";
//     }
// });
//
//
// const reviewsReadMoreBtn = document.querySelector(".reviews__read-more-btn");
// const reviewsText = document.querySelector(".reviews__text-show-more");
//
// reviewsReadMoreBtn.addEventListener("click", (e) => {
//     reviewsText.classList.toggle("reviews__show-more");
//     if (reviewsReadMoreBtn.innerText === "ПОКАЗАТЬ БОЛЬШЕ") {
//         reviewsReadMoreBtn.innerText = "СКРЫТЬ";
//     } else {
//         reviewsReadMoreBtn.innerText = "ПОКАЗАТЬ БОЛЬШЕ";
//     }
// });
//
