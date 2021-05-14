import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import Category from './Category';

class InputSearch extends Component {
  render() {
    return (
      <div>
        <input type="search" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/cart-shopping" data-testid="shopping-cart-button">
          <img className="icon-cart" src={ icon } alt="shopping cart icon" />
        </Link>
        <Category />
      </div>
    );
  }
}

export default InputSearch;
