import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './images/shoppingCart.png';

class SearchBar extends Component {
  render() {
    return (
      <section style={ { textAlign: 'center' } }>
        <label data-testid="home-initial-message" htmlFor="searchBar">
          <input id="searchBar" type="search" />
          <br />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Link
          to="/CartContent"
          data-testid="shopping-cart-button"
        >
          <img style={ { width: '40px' } } src={ Cart } alt="Carrinho de compras" />
        </Link>
      </section>
    );
  }
}

export default SearchBar;
