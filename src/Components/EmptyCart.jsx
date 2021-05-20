import React, { Component } from 'react';

class EmptyCart extends Component {
  render() {
    return (
      <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
    );
  }
}

export default EmptyCart;
