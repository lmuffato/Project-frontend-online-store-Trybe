import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartList from '../components/CartList';

class CartItem extends Component {
  xablau = () => {
    const { cartList } = this.props;
    const string = 'Seu carrinho está vazio';
    return cartList.length > 0
      ? cartList
        .map((product, index) => <CartList key={ index } product={ product } />)
      : string;
  };

  render() {
    return (
      <section data-testid="shopping-cart-empty-message">
        <button type="button"><Link to="/">Home</Link></button>
        { this.xablau() }
      </section>
    );
  }
}

CartItem.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CartItem;
