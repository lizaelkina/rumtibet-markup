const body = document.querySelector('.root');
const page = document.querySelector('.page');
const menu = page.querySelector('.menu');
const overlay = page.querySelector('.menu__overlay');
const buttonOpenMenu = page.querySelector('.header__burger');
const buttonCloseMenu = menu.querySelector('.menu__button');
const anchorMenu = menu.querySelectorAll('.menu__link');

function openMenu() {
  menu.classList.add('menu_opened');
  overlay.classList.add('menu__overlay_opened');
  body.classList.add('root__modal-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  overlay.classList.remove('menu__overlay_opened');
  body.classList.remove('root__modal-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenuByEsc(event) {
  if(event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}

buttonOpenMenu.addEventListener('click', openMenu);

buttonCloseMenu.addEventListener('click', closeMenu);

menu.addEventListener('mousedown', (event) => {
  if (event.target === menu) {
    closeMenu(menu);
  }
});

anchorMenu.forEach(link => link.addEventListener('click', () => closeMenu()));
