import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  validateCart = () => {
    const {
      location: { cartItems = {} },
    } = this.props;

    if (Object.keys(cartItems).length) {
      return Object.entries(cartItems).map((product, i) => {
        const { title, price, amount } = product[1];
        return (
          <CartProduct key={ i } product={ product[1] } />
        );
      });
    }
    return (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    );
  };

  render() {
    return <section>{this.validateCart()}</section>;
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    cartItems: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    }),
  }).isRequired,
};
