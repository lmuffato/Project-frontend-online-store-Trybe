import React from 'react';
import Categories from './Categories';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="search" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories />
      </div>
    );
  }
}

export default SearchBar;
