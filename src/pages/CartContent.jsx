import React, { Component } from 'react';
import emptyCart from './images/emptyCart.png';

class CartContent extends Component {
  render() {
    return (
      <section style={ { textAlign: 'center' } }>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
          <br />
          <img style={ { width: '100px' } } src={ emptyCart } alt="Carrinho vázio" />
        </p>
      </section>
    );
  }
}
export default CartContent;
