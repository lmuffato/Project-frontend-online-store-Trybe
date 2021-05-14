import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      </div>
    );
  }
}
