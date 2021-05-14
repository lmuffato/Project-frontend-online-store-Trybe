import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShopCartButton extends Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
          >
        Carrinho
        </Link>
      </div>
    );
  }
}
