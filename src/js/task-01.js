const itemEl = document.querySelectorAll(`.item`)
console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach(el => {
    const titleEl = el.querySelector(`h2`)
    console.log(`Category:${titleEl.textContent}`)
    const itemsEl = el.querySelectorAll(`li`)
    console.log(`Elements:${itemsEl.length}`)
})
