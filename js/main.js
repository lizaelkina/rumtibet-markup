/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/calendar/calendar.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/calendar/calendar.js ***!
  \****************************************************/
/***/ (function() {

var calendarLabel = document.querySelector('#calendar-label');

// function closeCalendar() {
//   list.classList.remove('dropdown__list_opened');
// }

function prettyDate(text) {
  var date = new Date(text);
  var newDate = date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return newDate;
}
var options = {
  input: true,
  actions: {
    changeToInput: function changeToInput(event, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates.length > 1 && self.selectedDates[0] && self.selectedDates[self.selectedDates.length - 1]) {
        self.HTMLInputElement.value = prettyDate(self.selectedDates[0]) + ' - ' + prettyDate(self.selectedDates[self.selectedDates.length - 1]);
        calendarLabel.style.display = 'none';
        self.hide();
      } else {
        self.HTMLInputElement.value = '';
        calendarLabel.style.display = 'block';
      }
    }
  },
  settings: {
    lang: 'ru',
    visibility: {
      theme: 'light',
      themeDetect: 'false',
      positionToInput: 'center',
      weekend: false
    },
    range: {
      disablePast: true
    },
    selection: {
      day: 'multiple-ranged'
    }
  }
};

// eslint-disable-next-line
var calendarInput = new VanillaCalendar('#calendar-input', options);
calendarInput.init();

// document.querySelector('#calendar-input').style.display = 'flex';

/***/ }),

/***/ "./src/blocks/components/dropdown/dropdown.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/dropdown/dropdown.js ***!
  \****************************************************/
/***/ (function() {

var page = document.querySelector('.page');
var dropdownList = page.querySelectorAll('.dropdown');
dropdownList.forEach(function (dropdown) {
  var button = dropdown.querySelector('.dropdown__button');
  var list = dropdown.querySelector('.dropdown__list');
  var items = dropdown.querySelectorAll('.dropdown__item');
  var input = dropdown.querySelector('.dropdown__input');
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

/***/ }),

/***/ "./src/blocks/components/form/form.js":
/*!********************************************!*\
  !*** ./src/blocks/components/form/form.js ***!
  \********************************************/
/***/ (function() {

var form = document.querySelector('.form');
var formButton = document.querySelector('.form__button');
function showInputError(inputElement, errorElement) {
  inputElement.classList.add('form__input_type_error');
  errorElement.classList.add('form__error_active');
}
function hideInputError(inputElement, errorElement) {
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__error_active');
}
function toggleButtonState(buttonElement, isActive) {
  if (isActive) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = 'disabled';
  }
}
function checkInputValidity(formElement, inputElement) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  var isInputValid = inputElement.validity.valid;
  if (isInputValid) {
    hideInputError(inputElement, errorElement);
  } else {
    showInputError(inputElement, errorElement);
  }
}
function setEventListeners(formElement) {
  var inputList = Array.from(formElement.querySelectorAll('.form__input'));
  var buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(buttonElement, false);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(buttonElement, formElement.checkValidity());
    });
  });
}
function enableValidation() {
  var formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(function (formElement) {
    return setEventListeners(formElement);
  });
}
enableValidation();
function sendMessage(event) {
  event.preventDefault();
  form.reset();
  formButton.disabled = 'disabled';
}
form.addEventListener('submit', sendMessage);

/***/ }),

/***/ "./src/blocks/modules/blog/blog.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/blog/blog.js ***!
  \*****************************************/
/***/ (function() {

// eslint-disable-next-line no-unused-vars,no-undef
var swiper = new Swiper('.blog__swiper', {
  direction: 'horizontal',
  spaceBetween: 20,
  freeMode: true,
  longSwipes: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/***/ (function() {

var body = document.querySelector('.root');
var page = document.querySelector('.page');
var menu = page.querySelector('.menu');
var overlay = page.querySelector('.menu__overlay');
var buttonOpenMenu = page.querySelector('.header__burger');
var buttonCloseMenu = menu.querySelector('.menu__button');
var anchorMenu = menu.querySelectorAll('.menu__link');
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
  if (event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}
buttonOpenMenu.addEventListener('click', openMenu);
buttonCloseMenu.addEventListener('click', closeMenu);
menu.addEventListener('mousedown', function (event) {
  if (event.target === menu) {
    closeMenu(menu);
  }
});
anchorMenu.forEach(function (link) {
  return link.addEventListener('click', function () {
    return closeMenu();
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal-images/modal-images.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/modal/modal-images/modal-images.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");

var page = document.querySelector('.page');
var modalImages = page.querySelector('.modal__images');
var buttonOpenImagesModal = page.querySelectorAll('.js-photo');
var buttonOpenImagesSwiperModal = page.querySelectorAll('.js-photo-swiper');

// eslint-disable-next-line no-unused-vars,no-undef
var swiper = new Swiper('.modal__swiper', {
  lazy: true,
  direction: 'horizontal',
  spaceBetween: 20,
  freeMode: true,
  longSwipes: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
function openImagesModal(index) {
  swiper.slideTo(index);
  (0,_modules_modal_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalImages);
}
buttonOpenImagesModal.forEach(function (photo, index) {
  return photo.addEventListener('click', function () {
    return openImagesModal(index);
  });
});
buttonOpenImagesSwiperModal.forEach(function (photo, index) {
  return photo.addEventListener('click', function () {
    return openImagesModal(index);
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal-video/modal-video.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/modal/modal-video/modal-video.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");

var page = document.querySelector('.page');
var modalVideo = page.querySelector('.modal__video');
var modalContent = modalVideo.querySelector('.modal__content');
var buttonOpenVideoModal = page.querySelector('.about__play');
var buttonCloseVideoModal = modalVideo.querySelector('.modal__button');
function openVideoModal() {
  modalContent.innerHTML = '<iframe ' + 'class="modal__iframe" ' + 'src="https://www.youtube.com/embed/_Z5coMfFloc?si=bB9ThMYQoA61cf24&amp;controls=0&amp;autoplay=1&amp;autoplay=1" ' + 'title="Красота гор" ' + 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' + 'referrerpolicy="strict-origin-when-cross-origin" ' + 'allowfullscreen>' + '</iframe>';
  (0,_modules_modal_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalVideo);
}
function closeVideoModal() {
  modalContent.innerHTML = '';
}
buttonOpenVideoModal.addEventListener('click', openVideoModal);
buttonCloseVideoModal.addEventListener('click', closeVideoModal);

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
var body = document.querySelector('.root');
var page = document.querySelector('.page');
function openModal(modal) {
  modal.classList.add('modal_opened');
  body.classList.add('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}
function closeModal(modal) {
  modal.classList.remove('modal_opened');
  body.classList.remove('root__modal-open');
  document.addEventListener('keydown', closeModalByEsc);
}
function closeModalByEsc(event) {
  if (event.key === 'Escape') {
    var openedModal = page.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}
var modalList = page.querySelectorAll('.modal');
modalList.forEach(function (modal) {
  var buttonCloseModal = modal.querySelector('.modal__button');
  buttonCloseModal.addEventListener('click', function () {
    return closeModal(modal);
  });
  modal.addEventListener('mousedown', function (event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/photo/photo.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/photo/photo.js ***!
  \*******************************************/
/***/ (function() {

// eslint-disable-next-line no-unused-vars,no-undef
var swiper = new Swiper('.photo__swiper', {
  direction: 'horizontal',
  spaceBetween: 20,
  freeMode: true,
  longSwipes: true,
  slidesPerView: 1,
  breakpoints: {
    1000: {
      slidesPerView: 3.2
    },
    810: {
      slidesPerView: 2.7
    },
    768: {
      slidesPerView: 2.3
    },
    600: {
      slidesPerView: 1.8
    },
    450: {
      slidesPerView: 1.3
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/***/ }),

/***/ "./src/blocks/modules/popular/popular.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/popular/popular.js ***!
  \***********************************************/
/***/ (function() {

// eslint-disable-next-line no-unused-vars,no-undef
var swiper = new Swiper('.popular__swiper', {
  direction: 'horizontal',
  spaceBetween: 20,
  freeMode: true,
  longSwipes: false,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/blocks/modules/search/search.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/search/search.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/calendar/calendar */ "./src/blocks/components/calendar/calendar.js");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/dropdown/dropdown */ "./src/blocks/components/dropdown/dropdown.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/form/form */ "./src/blocks/components/form/form.js");
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_form_form__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_blog_blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/blog/blog */ "./src/blocks/modules/blog/blog.js");
/* harmony import */ var _modules_blog_blog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_blog_blog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal_images_modal_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modal/modal-images/modal-images */ "./src/blocks/modules/modal/modal-images/modal-images.js");
/* harmony import */ var _modules_modal_modal_video_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/modal/modal-video/modal-video */ "./src/blocks/modules/modal/modal-video/modal-video.js");
/* harmony import */ var _modules_photo_photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/photo/photo */ "./src/blocks/modules/photo/photo.js");
/* harmony import */ var _modules_photo_photo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_photo_photo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_popular_popular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/popular/popular */ "./src/blocks/modules/popular/popular.js");
/* harmony import */ var _modules_popular_popular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_popular_popular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/search/search */ "./src/blocks/modules/search/search.js");
/* harmony import */ var _modules_search_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_search_search__WEBPACK_IMPORTED_MODULE_7__);









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");


}();
/******/ })()
;
//# sourceMappingURL=main.js.map