import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.getStorage = this.getStorage.bind(this);
  }

  getStorage() {
    return JSON.parse(localStorage.getItem('productsCart'));
  }

  render() {
    console.log(this.getStorage());
    return (
      <div>
        { !this.getStorage()
          ? <EmptyCart />
          : (
            this.getStorage().map((product) => (
              <div key={ product.id }>
                <h1 data-testid="shopping-cart-product-name">
                  {product.title}
                </h1>
                <img src={ product.thumbnail } alt="product" />
                <h2>
                  {product.price}
                </h2>
                <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              </div>
            ))
          )}
        <Link to="/">Voltar</Link>
        <button
          type="button"
          data-testid="checkout-products"
        >
          Checkout
        </button>
      </div>
    );
  }
}
