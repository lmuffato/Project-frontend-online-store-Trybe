import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { handleSubmit, cartProductLength, handleChange } = this.props;
    return (
      <header className={ styles.header }>
        <div className={ styles.cartLogo }>
          <h2 className={ styles.titleLogo }>
            Shopping Cart 2.0
          </h2>
          <Link
            className={ styles.btnCart }
            data-testid="shopping-cart-button"
            to="/carrinho"
          >
            <RiShoppingCartFill className={ styles.iconCart } />
            <p
              className={ styles.lengthCart }
              data-testid="shopping-cart-size"
            >
              { cartProductLength }
            </p>
          </Link>
        </div>
        <div className={ styles.inputContent }>
          <p className={ styles.textInput } data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            id="search"
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
            className={ styles.inputSearch }
            placeholder="O que você está procurando?"
          />
          <button
            className={ styles.btnSearch }
            data-testid="query-button"
            type="button"
            onClick={ handleSubmit }
          >
            <FaSearch className={ styles.iconSearch } />
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  cartProductLength: PropTypes.number.isRequired,
};

export default Header;
