import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
 //display products
element.innerHTML = products.map((product) =>{
  const {name, id, image, price} = product;
  return `<article class="product">
      <div class="product-container">
        <img src="${image}" alt="${name}" class="product-img img">
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`
  }).join('');
  element.addEventListener('click', function (e) {
  const target = e.target.parentElement;
  if (target.classList.contains('product-cart-btn')){
    addToCart(target.dataset.id)
  }
  }
  )
};



export default display;
