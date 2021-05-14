import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <header>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input name="searchBar" type="text" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </header>
    );
  }
}

export default SearchBar;
