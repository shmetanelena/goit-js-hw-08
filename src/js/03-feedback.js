import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LOCALSTORAGE_KEY = 'feedback-form-state';

const savedValuesJson = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedValuesJson !== null) {
  try {
    const savedValues = JSON.parse(savedValuesJson);
    email.value = savedValues.email;
    message.value = savedValues.message;
  } catch (error) {
    console.error(error.message);
  }
}

const getFormValues = () => {
  return { email: email.value, message: message.value };
};

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getFormValues()));
  }, 500),
);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(getFormValues());
  form.reset();
  localStorage.clear();
});
