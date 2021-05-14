import React, { Component } from 'react';
import { ReactComponent as CartImage } from '../image/CartIcon.svg';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
		return (
			<Link to="cart-basket" data-testid="shopping-cart-empty-message">
			  <CartImage />
			</Link>
		);
	}
}

export default CartButton;
