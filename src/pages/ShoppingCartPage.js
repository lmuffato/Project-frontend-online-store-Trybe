import React from 'react';
import CartEmpty from '../components/CartEmpty';
import ShoppingCartList from '../components/shoppingCartList';
import serviceCart from '../services/products';

class ShoppingCartPage extends React.Component {
  render() {
    return (serviceCart.products.length === 0 ? <CartEmpty /> : <ShoppingCartList />);
  }
}

export default ShoppingCartPage;
