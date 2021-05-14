import React, { Component } from 'react';

class CartContent extends Component {
  render() {
    return (
      <section style={ { textAlign: 'center' } }>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </section>
    )
  }
}

export default CartContent