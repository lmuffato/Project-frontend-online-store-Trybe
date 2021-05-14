import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        {/* <label htmlFor="home-initial-message"> */}
        <input
          className="home-initial-message"
          id="home-initial-message"
          type="search"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        {/* </label> */}
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default SearchBar;
