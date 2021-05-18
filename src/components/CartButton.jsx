import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartImage } from '../image/CartIcon.svg';

class CartButton extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <Link
        to={ { pathname: '/cart-basket', state: shoppingCart } }
        data-testid="shopping-cart-button"
      >
        <CartImage />
      </Link>
    );
  }
}

export default CartButton;
