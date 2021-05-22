import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
    this.setLocalStorage = props.setLocalStorage;
  }

  increaseTotal = (value) => {
    this.setState(({ total }) => ({
      total: total + value,
    }));
    this.setLocalStorage();
  }

  increaseTotal = (value) => {
    this.setState(({ total }) => ({
      total: total + value,
    }));
  }

  decreaseTotal = (value) => {
    this.setState(({ total }) => ({
      total: total - value,
    }));
  }

  deleteItem = (event, value) => {
    const { name } = event.target;
    const { cartItems } = this.props;

    this.decreaseTotal(value);

    delete cartItems[name];
    this.setLocalStorage();
  }

  validateCart = () => {
    const { total } = this.state;
    const { cartItems } = this.props;

    if (Object.keys(cartItems).length) {
      return Object.entries(cartItems)
        .map((product, i) => (<CartProduct
          key={ i }
          product={ product[1] }
          deleteItem={ this.deleteItem }
          cartItems={ cartItems }
          increaseTotal={ this.increaseTotal }
          decreaseTotal={ this.decreaseTotal }
          total={ total }
        />));
    }

    return (
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    );
  };

  render() {
    const { cartItems } = this.state;

    return (
      <section>
        {this.validateCart()}
        <Link
          to={ { pathname: '/checkout', cartItems } }
          data-testid="checkout-products"
        >
          <Button variant="primary">Finalizar compra</Button>
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.shape({
  }).isRequired,
  setLocalStorage: PropTypes.func.isRequired,
};
