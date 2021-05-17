// implement AddMovie component here
import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      itens: [],
    };
  }

  render() {
    const { itens } = this.state;
    const emptMessage = (
      <span data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </span>
    );
    return (
      <div>
        <span>
          <p>{itens.length === 0 ? emptMessage : 'tem produto' }</p>
        </span>
      </div>
    );
  }
}

export default ShoppingCart;
