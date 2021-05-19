import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import Cartitems from './CartItems';
import serviceCart from '../services/serviceCart';

class ShoppingCart extends Component {
  render() {
    return (serviceCart.cartItemList.length === 0 ? <EmptyCart /> : <Cartitems />);
  }
}

export default ShoppingCart;
