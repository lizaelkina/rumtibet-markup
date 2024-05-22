const swiper = new Swiper('.popular__swiper',
  {
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    longSwipes: false,
    slidesPerView: 'auto',

    breakpoints: {
      1210: {
        enabled: false,
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
