import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {

  deleteItem = (event) => {
    const { id } = event.target;
    const { products } = this.state;
    // const items = Array.from(products).find((item) => Object.keys(products) === id);
    console.log('sou eu', id);
    // this.setState({ products: items });
  }

  validateCart = () => {
    const {
      location: { cartItems = {} },
    } = this.props;

    if (Object.keys(cartItems).length) {
      return Object.entries(cartItems).map((product, i) => <CartProduct key={ i } product={ product[1] } deleteItem={ this.deleteItem } id={ product.id } />);
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
