// eslint-disable-next-line no-unused-vars,no-undef
const swiper = new Swiper('.blog__swiper',
  {
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    longSwipes: true,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
