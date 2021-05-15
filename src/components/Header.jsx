import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Header extends Component {
  render() {
    const { handleInput, handleProductsByQuery, inputSearch } = this.props;
    return (
      <header>
        <SearchBar
          onChange={ handleInput }
          onSubmit={ handleProductsByQuery }
          value={ inputSearch }
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img
            className="shopping-cart-img"
            src="../images/shopping-basket.jpg"
            alt="Ícone de carrinho de compras"
          />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleProductsByQuery: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default Header;
