import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ButtonCart extends Component {
  render() {
    const { totalCount } = this.props;
    return (
      <div>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">{totalCount}</span>
          <i className="bi bi-cart" />
        </Link>
      </div>
    );
  }
}

ButtonCart.defaultProps = {
  cart: {},
};

ButtonCart.propTypes = {
  cart: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }),
  totalCount: PropTypes.number.isRequired,
};
