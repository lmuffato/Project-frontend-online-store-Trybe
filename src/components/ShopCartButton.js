import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../img/carrinho.png';

export default class ShopCartButton extends Component {
  render() {
    const imgCar = (<img
      className="imgCar"
      src={ carrinho }
      alt="imagemCarrinho"
    />);
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          Carrinho
        </Link>
        {imgCar}
      </div>
    );
  }
}
