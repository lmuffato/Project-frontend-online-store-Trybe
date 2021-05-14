import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          data-testid="home-initial-message"
          type="search"
          placeholder="'Digite algum termo de pesquisa ou escolha uma categoria.'"
        />
      </div>
    );
  }
}

export default SearchBar;
