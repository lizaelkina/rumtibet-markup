const body = document.querySelector('.root');
const page = document.querySelector('.page');
const modal = page.querySelector('.modal__video');
const modalContent = modal.querySelector('.modal__content');
const buttonOpenModal = page.querySelector('.about__play');
const buttonCloseModal = modal.querySelector('.modal__button');

function openModal() {
  modalContent.innerHTML =
    '<iframe class="modal__iframe" ' +
    'src="https://www.youtube.com/embed/_Z5coMfFloc?si=bB9ThMYQoA61cf24&amp;controls=0&amp;autoplay=1&amp;autoplay=1" ' +
    'title="Красота гор" ' +
    'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
    'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  modal.classList.add('modal_opened');
  body.classList.add('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModal() {
  modalContent.innerHTML = '';
  modal.classList.remove('modal_opened');
  body.classList.remove('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(event) {
  if (event.key === 'Escape') {
    modal.querySelector('.modal_opened');
    closeModal();
  }
}

buttonOpenModal.addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);

modal.addEventListener('mousedown', (event) => {
  if (event.target === modal) {
    closeModal(modal);
  }
});
