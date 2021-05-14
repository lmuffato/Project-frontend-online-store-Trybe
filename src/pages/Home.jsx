import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shoppingCart.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Mudamos o link de lugar */}
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <img src={ shoppingCart } alt="Carrinho de compras" className="shopping-cart" />
        </Link>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
