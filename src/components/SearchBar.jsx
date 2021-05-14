import React, { Component } from 'react';
import CartButton from './CartButton';

class SearchBar extends Component {
  render() {
    return (
      <header>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input name="searchBar" type="text" data-testid="query-input"/>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button type="button" data-testid="query-button">Busca</button>
        <CartButton />
      </header>
    );
  }
}

export default SearchBar;
