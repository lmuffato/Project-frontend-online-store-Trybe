export function getProductsFromStorage() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
}

/* export function saveProductsOnStorage() {
  const products = localStorage.setItem('products', JSON.stringify(dataApi));
  console.log(products);
  return products;
} */

export function saveProductsOnStorage(newProduct) {
  const products = getProductsFromStorage();
  const newProducts = [...products, newProduct];
  const productStorage = localStorage.setItem('products', JSON.stringify(newProducts));
  return productStorage;
}

/* export const getItem = (id) => {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
};

export const AllItens = () => {
  const arrKeys = Object.keys(localStorage).filter((keys) => keys.includes('MLB'));
  const itens = arrKeys.map((key) => getItem(key));
  return itens;
};
 */
