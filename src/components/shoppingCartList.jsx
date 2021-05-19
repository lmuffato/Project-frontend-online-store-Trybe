import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCartList extends Component {
  render() {
    const { carts } = this.props;
    return (
      <div>
        {carts.map((product) => <CartItem product={ product } key={ product.title } />) }
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
