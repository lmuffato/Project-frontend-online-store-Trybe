import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../imagens/shoppingCart.svg';
import ProductList from './ProductList';

export default class Home extends React.Component {
  render() {
    return (
      <div className="content-container">
        <section className="search-and-products">
          <div className="searchbar-container">
            <input type="text" className="searchbar" />
            <Link
              to="/ShoppingCart"
              data-testid="shopping-cart-button"
              className="shopping-cart-button"
            >
              <img
                src={ shoppingCart }
                alt="Carrinho de compras"
                className="shopping-cart-image"
              />
            </Link>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
        <ProductList className="product-list" />
      </div>
    );
  }
}
