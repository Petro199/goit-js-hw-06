const valueEl = document.querySelector(`#value`)
const decrementBtn = document.querySelector(`button[data-action="decrement"]`)
const incrementBtn = document.querySelector(`button[data-action="increment"]`)
let counterValue = 0;
const onDecrBtnValue = () => {
    counterValue -= 1;
    valueEl.innerHTML = counterValue
}
const onIncrBtnValue = () => {
    counterValue += 1;
    valueEl.innerHTML = counterValue
}
decrementBtn.addEventListener(`click`, onDecrBtnValue)
incrementBtn.addEventListener(`click`,onIncrBtnValue)
