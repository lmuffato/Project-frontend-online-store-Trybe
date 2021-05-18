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
        <EmptyCart />
        {this.getStorage().map((product) => (
          <div key={ product.id }>
            <h1 data-testid="shopping-cart-product-name">
              {product.title}
            </h1>
            <h2>
              {product.price}
            </h2>
            <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
          </div>
        ))}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
