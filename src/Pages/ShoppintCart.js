import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <span>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </span>
      </div>
    );
  }
}

export default ShoppingCart;
