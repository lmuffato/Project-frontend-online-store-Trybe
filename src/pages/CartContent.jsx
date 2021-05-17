import React, { Component } from 'react';

class CartContent extends Component {
  render() {
    return (
      <section style={ { textAlign: 'center' } }>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
          <br />
          <img
            style={ { width: '100px' } }
            src="./images/emptyCart.png"
            alt="Carrinho vázio"
          />
        </p>
      </section>
    );
  }
}
export default CartContent;
