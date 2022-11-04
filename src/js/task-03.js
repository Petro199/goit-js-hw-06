const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector('.gallery')
console.log(listEl)
const galleryCardItem = ({ url, alt } = {}) => {
  return `
  <li class = "gallery-item">
  <img class= "gallery-img" src="${url}" alt = "${alt}" width="200px" height ="140px">
</li>
`
}
const itemEl = images.map((el) => {
  return galleryCardItem(el)
});
// listEl.innerHTML = itemEl.join('')
listEl.insertAdjacentHTML('beforeend', itemEl.join(''))
// listEl.style.display = "flex";
// listEl.style.listStyle = "none";
// listEl.style.gap = "10px";
listEl.style.cssText = 'display:flex; list-style:none; gap:10px'



