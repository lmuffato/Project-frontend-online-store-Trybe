import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
      <section data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </section>
    );
  }
}

export default CartItem;
