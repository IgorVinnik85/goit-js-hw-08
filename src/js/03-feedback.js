import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
// throttle(getValue, 500);

form.addEventListener('submit', cleanValue);

function cleanValue(event) {
  console.log(localStorage.getItem('feedback-form-state'));
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

form.addEventListener('input', getValue);

function getValue(event) {
  console.log(event.currentTarget.elements.email.value);
    console.log(event.currentTarget.elements.message.value);
  const {
    elements: { email, message },
  } = event.currentTarget;
  //   console.log(email.value, message.value);

  const valuesObject = {
    email: `${email.value}`,
    message: `${message.value}`,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(valuesObject));
}

function updateValue() {
  const savedSettings = localStorage.getItem('feedback-form-state');
  const parsedSettings = JSON.parse(savedSettings);

  email.value = parsedSettings.email;
  message.value = parsedSettings.message;
}
updateValue();
