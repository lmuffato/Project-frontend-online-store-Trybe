async function getProductById(productId) {
  const fetchApiProduct = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const resolve = await fetchApiProduct.json();
  return resolve;
}

export default getProductById;
