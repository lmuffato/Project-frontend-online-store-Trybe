import React from 'react';

class EmptyCart extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}

export default EmptyCart;
