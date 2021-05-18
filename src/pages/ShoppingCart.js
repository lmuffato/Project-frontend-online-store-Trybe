import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const {
      location: { cartItems = {} },
    } = this.props;

    this.state = {
      cartItems,
    };
  }

  deleteItem = (event) => {
    const { name } = event.target;
    const { cartItems } = this.state;

    delete cartItems[name];
    this.setState({ cartItems });
  }

  validateCart = () => {
    const { cartItems } = this.state;

    if (Object.keys(cartItems).length) {
<<<<<<< HEAD
      return Object.entries(cartItems).map((product, i) => {
        const { title, price, amount } = product[1];
        return (
          <CartProduct key={ i } product={ product[1] } />
        );
      });
=======
      return Object.entries(cartItems)
        .map((product, i) => (<CartProduct
          key={ i }
          product={ product[1] }
          deleteItem={ this.deleteItem }
          cart={ cartItems }
        />));
>>>>>>> main-group-1-requisito-10
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
