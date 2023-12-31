import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
 const priceFilter = getElement('.price-filter');
 const priceValue = getElement('.price-value');
 
//filter setup
 let maxPrice = store.map((product) => product.price);
 maxPrice = Math.max(...maxPrice);
 maxPrice = Math.ceil(maxPrice / 100);
 
 priceFilter.value = maxPrice;
 priceFilter.max = maxPrice;
 priceFilter.min = 0;
 priceValue.textContent = `Value: $${maxPrice}`;

 priceFilter.addEventListener('input', ()=>{
  const value = parseInt(priceFilter.value);
  priceValue.textContent = `Value: $${value}`
  let newStore = store.filter((product) => product.price / 100 <= value);

  display(newStore, getElement('.products-container'));
  if (newStore.length < 1) {
    const products = getElement(".products-container")
    products.innerHTML = `<h3 class = "filter-error">sorry, no products matched your search </h3>`
  }
 })
};

export default setupPrice;
