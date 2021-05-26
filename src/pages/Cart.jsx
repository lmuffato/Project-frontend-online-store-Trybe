import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import IconCart from '../components/IconCart';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    let cartProducts = [];
    if (localStorage.getItem('cartItems') !== null) {
      cartProducts = JSON.parse(localStorage.getItem('cartItems'));
    }
    this.state = { cartProducts };
  }

  initialMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <IconCart />
        { cartProducts.length === 0 ? this.initialMessage()
          : <CartItem data-testid="product-add-to-cart" cartProducts={ cartProducts } /> }
      </div>
    );
  }
}
