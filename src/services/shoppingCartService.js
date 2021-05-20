export function setProducts(product) {
  // const { cart, totalPayment } = this.state; // vai virar parâmetro da função // cart = product
  const storageItems = localStorage.getItem('products');
  const storagePrice = localStorage.getItem('total');
  let productsFromLS = [];
  let amount = 0;
  if (storageItems && storagePrice) {
    productsFromLS = JSON.parse(localStorage.getItem('products'));
    amount = JSON.parse(localStorage.getItem('total'));
  }
  productsFromLS.push(product);
  amount += product.price; // price, de product
  localStorage.setItem('products', JSON.stringify(productsFromLS));
  localStorage.setItem('total', JSON.stringify(amount));
}

export function getQuantity(quantidade) {
  const storagedQuantity = localStorage.getItem('totalQuantity');
  let quantity = 0;
  if (storagedQuantity) {
    quantity = JSON.parse(storagedQuantity);
  }
  quantity += quantidade;
  localStorage.setItem('totalQuantity', JSON.stringify(quantity));
}

export function subtractQuantity(quantidade) {
  const storagedQuantity = localStorage.getItem('totalQuantity');
  let quantity = 1;
  if (storagedQuantity) {
    quantity = JSON.parse(storagedQuantity);
  }
  quantity -= quantidade;
  localStorage.setItem('totalQuantity', JSON.stringify(quantity));
}
