export function setProducts(product) {
  // const { cart, totalPayment } = this.state; // vai virar parâmetro da função // cart = product
  const storageItems = localStorage.getItem('products');
  const storagePrice = localStorage.getItem('total');
  let productsFromLS = [];
  let amount = 0;
  if (storageItems) {
    productsFromLS = JSON.parse(localStorage.getItem('products'));
  }
  if (storagePrice) {
    amount = JSON.parse(localStorage.getItem('total'));
  }
  productsFromLS.push(product);
  amount += product.price; // price, de product
  localStorage.setItem('products', JSON.stringify(productsFromLS));
  localStorage.setItem('total', JSON.stringify(amount));
}

export function getProducts() {
  const get = localStorage.getItem('products');
  const getPrice = localStorage.getItem('total');
  if (get) {
    this.setState({ cart: JSON.parse(get) });
  }
  if (getPrice) {
    this.setState({ totalPayment: JSON.parse(getPrice) });
  }
}
