import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
