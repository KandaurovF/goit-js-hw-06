const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
