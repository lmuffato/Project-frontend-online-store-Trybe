import React, { Component } from 'react';
import serviceCart from '../services/products';
import CartItem from './CartItem';

class ShoppingCartList extends Component {
  render() {
    const { products } = serviceCart;
    return (
      <div>
        {products
          .map((product) => <CartItem product={ product } key={ product.title } />) }
      </div>
    );
  }
}

export default ShoppingCartList;
