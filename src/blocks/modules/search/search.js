const options = {
  input: true,
  actions: {
    changeToInput(event, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates.length > 1) {
        self.HTMLInputElement.value = self.selectedDates[0] + ' - ' + self.selectedDates[self.selectedDates.length - 1];
        document.querySelector('#calendar-label').style.display = 'none';
        self.hide();
      } else {
        self.HTMLInputElement.value = '';
        document.querySelector('#calendar-label').style.display = 'block';
      }
    },
  },
  settings: {
    lang: 'ru',
    visibility: {
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

const calendarInput = new VanillaCalendar('#calendar-input', options);

calendarInput.init();

document.querySelector('#calendar-input').style.display = 'flex';
