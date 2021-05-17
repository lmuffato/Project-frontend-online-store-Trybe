import React, { Component } from 'react';
import ListCategories from './ListCategories';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <input type="text" id="searchBar" />
        </label>
        <ListCategories />
      </div>
    );
  }
}

export default Home;
