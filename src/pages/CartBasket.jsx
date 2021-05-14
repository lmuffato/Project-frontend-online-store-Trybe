import React, { Component } from 'react';

class CartBasket extends Component {
  render() {
    return (
      <main>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </main>
    );
  }
}

export default CartBasket;
