import React, { Component } from 'react';
import serviceCart from '../services/serviceCart';
import CartItem from './CartItem';

class ShoppingCartList extends Component {
  render() {
    const { cartItemList } = serviceCart;
    return (
      <div>
        {cartItemList
          .map((product) => <CartItem product={ product } key={ product.title } />) }
      </div>
    );
  }
}

export default ShoppingCartList;
