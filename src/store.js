import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
 store = products.map((product)=>{
  const {id} = product;
  const {featured, name, price, company, colors, image:img} = product.fields;
  const image = img[0].thumbnails.large.url;
  
  return {id, featured, name, price, company, colors, image}
 })
 setStorageItem('store', store)
};


const findProduct = () => {};
export { store, setupStore, findProduct };


