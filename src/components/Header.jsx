import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  handleCartSize() {
    const productsNumber = JSON.parse(localStorage.getItem('products')).length;
    const quantity = localStorage.setItem('quantidade', JSON.stringify(productsNumber));
    return quantity;
  }

  render() {
    // const { cartSize, status } = this.state;

    return (
      <header>
        <Link to="/">Home</Link>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
        {/* { status
          ? (<span datat-testid="shopping-cart-size">{ cartSize }</span>)
          : (<span datat-testid="shopping-cart-size">0</span>) } */}
      </header>
    );
  }
}
