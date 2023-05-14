const counterEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counter = 0;

const decrement = () => {
  counter -= 1;
  counterEl.textContent = counter;
};

const increment = () => {
  counter += 1;
  counterEl.textContent = counter;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
