const input = document.querySelector(`#name-input`)
const nameLabel = document.querySelector(`#name-output`)
function onInputChange(event) {
    console.log(event.currentTarget.value)
    nameLabel.textContent = event.currentTarget.value || "Anonymus"
}
input.addEventListener(`input`,onInputChange)
console.log(input)