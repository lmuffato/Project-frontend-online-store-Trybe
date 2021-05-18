import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ButtonCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shoppingcart',
            cartItems: cart,
          } }
          data-testid="shopping-cart-button"
        >
          <i className="bi bi-cart" />
        </Link>
      </div>
    );
  }
}

ButtonCart.propTypes = {
  cart: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
