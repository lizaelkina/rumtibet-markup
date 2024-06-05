const body = document.querySelector('.custom-scroll');
const page = document.querySelector('.page');
const modal = page.querySelector('.modal__video');
const buttonCloseModal = modal.querySelector('.modal__button');

function closeModal() {
  modal.classList.remove('modal_opened');
  body.classList.remove('open-modal');
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(event) {
  if(event.key === 'Escape') {
    modal.querySelector('.modal_opened');
    closeModal();
  }
}

buttonCloseModal.addEventListener('click', closeModal);

modal.addEventListener('mousedown', (event) => {
  if (event.target === modal) {
    closeModal(modal);
  }
});
