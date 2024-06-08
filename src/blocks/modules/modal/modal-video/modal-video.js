import {openModal, closeModal} from '%modules%/modal/modal';

const page = document.querySelector('.page');
const modalVideo = page.querySelector('.modal__video');
const modalContent = modalVideo.querySelector('.modal__content');
const buttonOpenVideoModal = page.querySelector('.about__play');

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

// eslint-disable-next-line no-unused-vars
function closeVideoModal() {
  modalContent.innerHTML = '';
  closeModal(modalVideo);
}

buttonOpenVideoModal.addEventListener('click', openVideoModal);
