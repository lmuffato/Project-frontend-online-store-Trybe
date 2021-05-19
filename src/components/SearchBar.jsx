import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
// import { getProductsFromCategoryAndQuery } from '../services/api';

// import ShoppingCart from './ShoppingCart';

class SearchBar extends Component {
  renderInput = () => {
    const { onChange, value } = this.props;
    return (
      <input
        data-testid="query-input"
        className="home-initial-message"
        id="home-initial-message"
        type="search"
        onChange={ onChange }
        value={ value }
        placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
      />
    );
  }

  renderButton = () => {
    const { onClick } = this.props;
    return (
      <button
        className="btn-search"
        type="button"
        data-testid="query-button"
        onClick={ onClick }
      >
        <FaSearch color="#3bc18c" size="1rem" />
      </button>
    );
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <div className="container-searchBar">
          {this.renderInput()}
          {this.renderButton()}
          <Link to="./Cart">
            <FaShoppingCart
              className="cart"
              color="#3BC18C"
              size="1.5rem"
              data-testid="shopping-cart-button"
            />
          </Link>
        </div>

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  products: array,
}.isRequired;

export default SearchBar;
