import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      productsCart: [],
    };
    this.handleStorage = this.handleStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    this.getStorage();
  }

  handleStorage(productsCart) {
    localStorage.setItem('productsCart', JSON.stringify(productsCart));
  }

  getStorage() {
    this.setState({
      productsCart: JSON.parse(localStorage.getItem('productsCart')),
    });
  }

  decreaseQuantity(id) {
    const { productsCart } = this.state;
    const productFound = productsCart.find((product) => product.id === id);
    if (productFound.quantity > 1) {
      productFound.quantity -= 1;
      this.setState({ productsCart });
      this.handleStorage(productsCart);
    }
    console.log(productFound);
  }

  increaseQuantity(id) {
    const { productsCart } = this.state;
    const productFound = productsCart.find((product) => product.id === id);
    productFound.quantity += 1;
    this.setState({ productsCart });
    this.handleStorage(productsCart);
    console.log(productFound);
  }

  deleteProduct(id) {
    const { productsCart } = this.state;
    const productDelete = productsCart.find((product) => product.id === id);
    productsCart.splice(productsCart.indexOf(productDelete), 1);
    this.setState({ productsCart });
    this.handleStorage(productsCart);
    console.log(productsCart);
  }

  render() {
    const { productsCart } = this.state;
    return (
      <div>
        { !productsCart || productsCart.length === 0
          ? <EmptyCart />
          : (
            productsCart.map((product) => (
              <div key={ product.id }>
                <h1 data-testid="shopping-cart-product-name">
                  {product.title}
                </h1>
                <button
                  type="button"
                  onClick={ () => this.deleteProduct(product.id) }
                >
                  X
                </button>
                <img src={ product.thumbnail } alt="product" />
                <h2>
                  {product.price}
                </h2>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.decreaseQuantity(product.id) }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.increaseQuantity(product.id) }
                >
                  +
                </button>
              </div>
            ))
          )}
        <Link to="/">Voltar</Link>
        <Link
          to={ {
            pathname: '/checkout',
            products: productsCart,
          } }
          data-testid="checkout-products"
        >
          Checkout
        </Link>
      </div>
    );
  }
}
