const calendarLabel = document.querySelector('#calendar-label');



function prettyDate(text) {
  const date = new Date(text);
  const newDate = date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return newDate;
}

const options = {
  input: true,
  actions: {
    changeToInput(event, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates.length > 1 && self.selectedDates[0] && self.selectedDates[self.selectedDates.length - 1]) {
        self.HTMLInputElement.value =
          prettyDate(self.selectedDates[0]) + ' - ' +
          prettyDate(self.selectedDates[self.selectedDates.length - 1]);
        calendarLabel.style.display = 'none';
        self.hide();
      } else {
        self.HTMLInputElement.value = '';
        calendarLabel.style.display = 'block';
      }
    },
  },
  settings: {
    lang: 'ru',
    visibility: {
      theme: 'light',
      themeDetect: 'false',
      positionToInput: 'center',
      weekend: false,
    },
    range: {
      disablePast: true,
    },
    selection: {
      day: 'multiple-ranged',
    },
  },
};

// eslint-disable-next-line
const calendarInput = new VanillaCalendar('#calendar-input', options);

calendarInput.init();

document.querySelector('#calendar-input').style.display = 'flex';
