import React from 'react';
import { Link } from 'react-router-dom';

class ShopCart extends React.Component {
  render() {
    return (
      <div>
        <image />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default ShopCart;
