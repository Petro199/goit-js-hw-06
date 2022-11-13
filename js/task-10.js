function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector(`#controls`)
const boxesEL = document.querySelector(`#boxes`)
const inputEl = document.querySelector(`#controls > input`)
const createBtn = document.querySelector(`button[data-create]`)
const destroyBtn = document.querySelector(`button[data-destroy]`)

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
    const basicSize = 30;
    const size = basicSize + i * 10;
    const color = getRandomHexColor();
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color} )`;

  }
  boxesEL.append(createBoxes)
}

createBtn.addEventListener(`click`, () => {
 createBoxes(Number(inputEl.value)) 
})