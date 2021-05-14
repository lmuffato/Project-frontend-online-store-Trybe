import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <input type="text" id="searchBar" />
        </label>
        <h1>Olá Mundo</h1>
      </div>
    );
  }
}

export default Home;
