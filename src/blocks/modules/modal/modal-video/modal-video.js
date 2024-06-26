import {openModal} from '%modules%/modal/modal';

const page = document.querySelector('.page');
const modalVideo = page.querySelector('.modal__video');
const modalContent = modalVideo.querySelector('.modal__content');
const buttonOpenVideoModal = page.querySelector('.about__play');
const buttonCloseVideoModal = modalVideo.querySelector('.modal__button');

function openVideoModal() {
  modalContent.innerHTML =
    '<iframe ' +
    'class="modal__iframe" ' +
    'src="https://www.youtube.com/embed/_Z5coMfFloc?si=bB9ThMYQoA61cf24&amp;controls=0&amp;autoplay=1&amp;autoplay=1" ' +
    'title="Красота гор" ' +
    'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
    'referrerpolicy="strict-origin-when-cross-origin" ' +
    'allowfullscreen>' +
    '</iframe>';
  openModal(modalVideo);
}

function closeVideoModal() {
  modalContent.innerHTML = '';
}

buttonOpenVideoModal.addEventListener('click', openVideoModal);

buttonCloseVideoModal.addEventListener('click', closeVideoModal);
