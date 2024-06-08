import {openModal} from '%modules%/modal/modal';

const page = document.querySelector('.page');
const modalImages = page.querySelector('.modal__images');
const buttonOpenImagesModal = page.querySelectorAll('.photo__img');

// eslint-disable-next-line no-unused-vars,no-undef
const swiper = new Swiper('.modal__swiper',
  {
    lazy: true,
    direction: 'horizontal',
    spaceBetween: 20,
    freeMode: true,
    longSwipes: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

function openImagesModal(index) {
  swiper.slideTo(index);
  openModal(modalImages);
}

buttonOpenImagesModal.forEach((photo, index) => photo.addEventListener('click', () => openImagesModal(index)));
