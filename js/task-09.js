const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const color = document.querySelector('.color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
});