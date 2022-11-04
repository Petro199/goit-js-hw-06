function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor);
const bodyEl = document.querySelector(`body`)
const elementLabel = document.querySelector(`.color`)
const btnChangeColor = document.querySelector(`.change-color`)
const onColorChange = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  elementLabel.textContent = color;
  
}
btnChangeColor.addEventListener(`click`,onColorChange)