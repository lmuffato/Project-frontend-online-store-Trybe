import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
// import ShoppingCart from './ShoppingCart';

class SearchBar extends Component {
  render() {
    // const link = <Link to="./ShoppingCart" />;
    return (
      <div data-testid="home-initial-message">
        <input
          className="home-initial-message"
          id="home-initial-message"
          type="search"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        <Link to="./ShoppingCart">
          <GrCart data-testid="shopping-cart-button" />
        </Link>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default SearchBar;
