function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const createdElContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createEl);

destroyBtn.addEventListener('click', destroyAll);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    let size = 30 + 10 * i;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = '20px auto';
    box.style.backgroundColor = getRandomHexColor();

    createdElContainer.append(box);
  }
}

function createEl() {
  const amount = inputEl.value;
  if (amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please, enter valid amount! (from 1 to 100)');
  }
}

function destroyAll() {
  createdElContainer.innerHTML = '';
}
