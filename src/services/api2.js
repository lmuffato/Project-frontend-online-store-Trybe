export async function getProductsFromId(productId) {
  const product = await fetch(
    `https://api.mercadolibre.com/items?ids=${productId}`,
  );
  const response = await product.json();

  return response[0].body;
}

export const saveCartLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const readCartLocalStorage = () => JSON.parse(localStorage.getItem('cart'));

export const deleteEveryFromLocalStorage = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter((item) => item.id !== id);

  saveCartLocalStorage(newCart);
};

export const addToLocalStorage = async (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  let product = cart.find((item) => item.id === id);
  if (!product) { product = await getProductsFromId(id); }

  cart.push(product);
  saveCartLocalStorage(cart);
};

export const removeFromLocalStorage = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const deleteIndex = cart.map((item) => item.id).indexOf(id);

  cart.splice(deleteIndex, 1);
  saveCartLocalStorage(cart);
};
