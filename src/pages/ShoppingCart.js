import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  validateCart = () => {
    const {
      location: { cartItems = {} },
    } = this.props;

    if (Object.keys(cartItems).length) {
      return Object.entries(cartItems).map((product, i) => {
        const { title, price, amount } = product[1];
        return (
          <div key={ i } className="cart-item-container">
            <div className="cart-item">
              <p className="item-title" data-testid="shopping-cart-product-name">
                {title}
              </p>
              <span className="item-value">
                Preço:
                {price}
              </span>
              <span data-testid="shopping-cart-product-quantity">
                Quantidade:
                {amount}
              </span>
            </div>
          </div>
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
