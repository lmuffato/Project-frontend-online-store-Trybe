import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../imagens/shoppingCart.svg';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
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
        <ProductList />
      </div>
    );
  }
}
