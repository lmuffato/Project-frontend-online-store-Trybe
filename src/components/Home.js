import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ShopCart from './ShopCart';
import ShopCartButton from './ShopCartButton';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <Link to="/shopcart" Component={ ShopCart } data-testid="shopping-cart-button">
          <ShopCartButton />
        </Link>
        <Header />
      </div>
    );
  }
}

export default Home;
