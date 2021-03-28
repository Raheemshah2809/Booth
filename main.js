const formFields = document.querySelectorAll('.form__content');

const contact = document.querySelector('.info');
const form = document.querySelector('.form');
const contactBtn = document.querySelector('.info__send');
const formBtn = document.querySelector('.form__send');

// form view
contactBtn.addEventListener('click', () => {
  contact.classList.add('info--hide');
  form.classList.add('form--show');
});

// contact view
formBtn.addEventListener('click', () => {
  contact.classList.remove('info--hide');
  form.classList.remove('form--show');

  //reset
  formFields.forEach((field) => {
    const input = field.querySelector('.form__input');
    const label = field.querySelector('.form__label');

    input.value = null;
    label.classList.remove('form__label--valid');
  });
});

// active labels
formFields.forEach((field) => {
  const input = field.querySelector('.form__input');
  const label = field.querySelector('.form__label');

  input.addEventListener('focus', () => {
    label.classList.add('form__label--valid');
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      label.classList.remove('form__label--valid');
    }
  });
});