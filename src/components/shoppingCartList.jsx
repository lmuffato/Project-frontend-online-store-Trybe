import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCartList extends Component {
  render() {
    const { carts, add, sub } = this.props;
    return (
      <div>
        {carts.map((product) => (<CartItem
          product={ product }
          key={ product.title }
          add={ add }
          sub={ sub }
        />)) }
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  carts: PropTypes.arrayOf(Object),
  add: PropTypes.func,
  sub: PropTypes.func,
}.isRequired;

export default ShoppingCartList;
