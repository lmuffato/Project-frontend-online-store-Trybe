import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        {/* <label htmlFor="home-initial-message"> */}
        <input
          className="home-initial-message"
          id="home-initial-message"
          data-testid="home-initial-message"
          type="search"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        {/* </label> */}
        <h3>Digite algum termo de pesquisa ou escolha uma categoria.</h3>
      </div>
    );
  }
}

export default SearchBar;
