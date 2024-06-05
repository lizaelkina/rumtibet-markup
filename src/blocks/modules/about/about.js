const body = document.querySelector('.custom-scroll');
const page = document.querySelector('.page');
const modal = page.querySelector('.modal__video');
const buttonPlay = page.querySelector('.about__play');

function playVideo() {
  modal.classList.add('modal_opened');
  body.classList.add('open-modal');
}

buttonPlay.addEventListener('click', playVideo);