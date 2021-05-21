export function getProductsFromStorage(id) {
  const products = JSON.parse(localStorage.getItem(id)) || [];
  return products;
}

/* export function saveProductsOnStorage() {
  const products = localStorage.setItem('products', JSON.stringify(dataApi));
  console.log(products);
  return products;
} */

export function saveProductsOnStorage(newProduct) {
  const { id } = newProduct;
  const products = getProductsFromStorage(id);
  const newProducts = [...products, newProduct];
  const productStorage = localStorage.setItem(id, JSON.stringify(newProducts));
  return productStorage;
}

/* export const getItem = (id) => {
  const item = localStorage.getItem(id);
  return JSON.parse(item);
}; */

/* export const AllItens = () => {
  const arrKeys = Object.keys(localStorage).filter((keys) => keys.includes('MLB'));
  const itens = arrKeys.map((key) => getItem(key));
  return itens;
};
*/
