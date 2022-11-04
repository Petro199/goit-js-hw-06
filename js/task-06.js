const input = document.querySelector(`#validation-input`)
function onInputBlur(event) {
    if(event.currentTarget.value.length === Number(input.dataset.length) )
    {
    input.classList.remove(`invalid`)
    input.classList.add(`valid`)
    return;    
    }
    input.classList.remove(`valid`)
    input.classList.add(`invalid`)  
}
input.addEventListener(`blur`,onInputBlur)
console.log(input)