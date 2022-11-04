function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector(`#controls`)
const boxesEL = document.querySelector(`#boxes`)
const inputEl = document.querySelector(`#controls > input`)
const createBtn = document.querySelector(`button[data-create]`)
const destroyBtn = document.querySelector(`button[data-destroy]`)
console.log(destroyBtn)
const createBoxes(amount)