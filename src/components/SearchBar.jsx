import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <header>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" id="input-search" />
        </label>
      </header>
    );
  }
}

export default SearchBar;
