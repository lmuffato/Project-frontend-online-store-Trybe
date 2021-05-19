export default async function getProductById(productId) {
  const fetchApiProduct = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const resolve = await fetchApiProduct.json();
  return resolve;
}

export function cartStorage({ thumbnail, title, price, id }) {
  const productsCart = JSON.parse(localStorage.getItem('productsCart'));

  const objProduct = { thumbnail, title, price, id, quantity: 1 };

  if (Array.isArray(productsCart)) {
    if (productsCart.some((product) => product.id === id)) {
      const productFound = productsCart.find((product) => product.id === id);
      console.log(productFound);
      productFound.quantity += 1;
    } else {
      productsCart.push(objProduct);
    }
    localStorage.setItem('productsCart', JSON.stringify(productsCart));
  } else {
    localStorage.setItem('productsCart', JSON.stringify([objProduct]));
  }
}
