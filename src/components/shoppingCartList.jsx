import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class ShoppingCartList extends Component {
  render() {
    const { carts } = this.props;
    return (
      <div>
        {carts.map((product) => <CartItem product={ product } key={ product.title } />) }
        <button type="submit">
          <Link
            data-testid="checkout-products"
            to={ { pathname: '/Checkout', state: { carts } } }
          >
            Checkout
          </Link>
        </button>
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  carts: PropTypes.arrayOf(Object),
};

ShoppingCartList.defaultProps = {
  carts: [],
};

export default ShoppingCartList;
