const swiper = new Swiper('.popular__swiper',
  {
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    longSwipes: false,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
