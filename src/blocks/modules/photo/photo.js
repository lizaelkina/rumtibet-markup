// eslint-disable-next-line no-unused-vars,no-undef
const swiper = new Swiper('.photo__swiper',
  {
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    longSwipes: true,
    slidesPerView: 1,

    breakpoints: {
      1000: {
        slidesPerView: 3.2,
      },
      810: {
        slidesPerView: 2.7,
      },
      768: {
        slidesPerView: 2.3,
      },
      600: {
        slidesPerView: 1.8,
      },
      450: {
        slidesPerView: 1.3,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
