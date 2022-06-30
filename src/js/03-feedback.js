import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onTextareaInput, 200));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  if (textarea.value === '' || input.value === '') {
    return alert('Заполните все поля');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const email = input.value;
  const message = textarea.value;
  const obj = {
    email,
    message,
  };
  const data = localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}
if (localStorage.getItem(STORAGE_KEY)) {
  const objValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  input.value = objValue.email;
  textarea.value = objValue.message;
}
