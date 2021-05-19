import React, { Component } from 'react';
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

export default ShoppingCartList;
