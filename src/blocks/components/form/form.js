function showInputError(inputElement, errorElement) {
  if (inputElement) {
    inputElement.classList.add('form__input_type_error');
  }
  if (errorElement) {
    errorElement.classList.add('form__error_active');
  }
}

function hideInputError(inputElement, errorElement) {
  if (inputElement) {
    inputElement.classList.remove('form__input_type_error');
  }
  if (errorElement) {
    errorElement.classList.remove('form__error_active');
  }
}

function toggleButtonState(buttonElement, isActive) {
  if (isActive) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = 'disabled';
  }
}

function checkInputValidity(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const isInputValid = inputElement.validity.valid;

  if (isInputValid) {
    hideInputError(inputElement, errorElement);
  } else {
    showInputError(inputElement, errorElement);
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');

  toggleButtonState(buttonElement, false);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(buttonElement, formElement.checkValidity());
    });

    inputElement.addEventListener('change', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(buttonElement, formElement.checkValidity());
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => setEventListeners(formElement));
}

enableValidation();

function addSubmitListeners() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      formElement.reset();
      formElement.querySelector('.form__button').disabled = 'disabled';
      Array.from(formElement.querySelectorAll('.form__input')).forEach(input => {
        input.dispatchEvent(new Event('clearInput'));
      });
    });
  });
}

addSubmitListeners();
