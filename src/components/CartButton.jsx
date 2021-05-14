import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartImage } from '../image/CartIcon.svg';

class CartButton extends Component {
  render() {
    return (
      <Link to="/cart-basket" data-testid="shopping-cart-button">
        <CartImage />
      </Link>
    );
  }
}

export default CartButton;
