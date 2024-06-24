const page = document.querySelector('.page');
const dropdownList = page.querySelectorAll('.dropdown');

dropdownList.forEach(function (dropdown) {

  const button = dropdown.querySelector('.dropdown__button');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');
  const input = dropdown.querySelector('.dropdown__input');

  function openDropdown() {
    button.classList.toggle('dropdown__button_active');
    list.classList.toggle('dropdown__list_opened');
  }

  function closeDropdown() {
    button.classList.remove('dropdown__button_active');
    list.classList.remove('dropdown__list_opened');
  }

  button.addEventListener('click', openDropdown);

  items.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
      button.innerText = this.innerText;
      input.value = this.dataset.value;
      closeDropdown();
    });
  });

  document.addEventListener('click', function (event) {
    if (event.target !== button) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Tab') {
      closeDropdown();
    }
  });
});
