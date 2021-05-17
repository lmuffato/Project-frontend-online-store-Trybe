import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="search" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="https://image.flaticon.com/icons/png/512/126/126083.png" alt="Icone Cart" />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default SearchBar;
