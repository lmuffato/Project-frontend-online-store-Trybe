import React from 'react';
import CartEmpty from '../components/CartEmpty';
import ShoppingCartList from '../components/shoppingCartList';
import serviceCart from '../services/serviceCart';

class ShoppingCartPage extends React.Component {
  render() {
    return (serviceCart.cartItemList.length === 0 ? <CartEmpty /> : <ShoppingCartList />);
  }
}

export default ShoppingCartPage;
