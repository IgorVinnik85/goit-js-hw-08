import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
// throttle(getValue, 500);

form.addEventListener('submit', cleanValue);

function cleanValue(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Fill the fields, ok?');
  }
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

form.addEventListener('input', throttle(getValue, 500));

function getValue(event) {
  const valuesObject = {
    email: `${email.value}`,
    message: `${message.value}`,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(valuesObject));
}

function updateValue() {
  const savedSettings = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(savedSettings);

  if (savedSettings) {
    email.value = parsedSettings.email;
    message.value = parsedSettings.message
  };
}
updateValue();
