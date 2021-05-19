import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </header>
    );
  }
}
