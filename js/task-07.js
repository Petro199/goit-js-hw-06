const input = document.querySelector(`#font-size-control`)
const span = document.querySelector(`#text`)
function onInputChanges  (event) {
    span.style.fontSize = `${event.target.value}px`
};
input.addEventListener(`input`,onInputChanges)
console.log(span)