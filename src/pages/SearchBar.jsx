import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section style={ { textAlign: 'center' } }>
        <label data-testid="home-initial-message" htmlFor="searchBar">
          <input id="searchBar" type="search" />
          <br />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </section>
    );
  }
}

export default SearchBar;
