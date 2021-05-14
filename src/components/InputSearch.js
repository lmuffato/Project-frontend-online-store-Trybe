import React, { Component } from 'react';

class InputSearch extends Component {
  render() {
    return (
      <div>
        <input type="search" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default InputSearch;
