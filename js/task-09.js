function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const color = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor(event) {
  const backgroundColor = getRandomHexColor();
  console.log(backgroundColor);
  bodyEl.style.backgroundColor = backgroundColor;
  color.textContent = `${backgroundColor}`;
}
