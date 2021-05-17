import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShopCart from './ShopCart';
import ShopCartButton from './ShopCartButton';
import ListCategories from './ListCategories';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <input type="text" id="searchBar" />
        </label>
        <Link to="/shopcart" Component={ ShopCart } data-testid="shopping-cart-button">
          <ShopCartButton />
        </Link>
        <h1>Olá Mundo</h1>
        <ListCategories />
      </div>
    );
  }
}

export default Home;
