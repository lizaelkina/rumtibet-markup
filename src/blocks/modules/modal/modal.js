const body = document.querySelector('.root');
const page = document.querySelector('.page');

export function openModal(modal) {
  modal.classList.add('modal_opened');
  body.classList.add('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}

export function closeModal(modal) {
  modal.classList.remove('modal_opened');
  body.classList.remove('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(event) {
  if (event.key === 'Escape') {
    const openedModal = page.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}

const modalList = page.querySelectorAll('.modal');

modalList.forEach(modal => {
  const buttonCloseModal = modal.querySelector('.modal__button');
  buttonCloseModal.addEventListener('click', () => closeModal(modal));
  modal.addEventListener('mousedown', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});
