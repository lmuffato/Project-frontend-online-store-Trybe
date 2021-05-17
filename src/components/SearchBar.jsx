import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// import ShoppingCart from './ShoppingCart';

class SearchBar extends Component {
  render() {
    // const link = <Link to="./ShoppingCart" />;
    return (
      <div data-testid="home-initial-message">
        <div className="container-searchBar">
          <input
            className="home-initial-message"
            id="home-initial-message"
            type="search"
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          />
          <Link to="./ShoppingCart">
            <FaShoppingCart
              className="cart"
              color="#3BC18C"
              size="1.8rem"
              data-testid="shopping-cart-button"
            />
          </Link>
        </div>

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default SearchBar;
