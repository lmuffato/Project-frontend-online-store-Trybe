import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';

export default class CartItem extends Component {
  render() {
    const { product } = this.props;
    const { title, image, price, availableQuantity } = product;
    console.log(availableQuantity);
    return (
      <div className="cart-item" data-testid="shopping-cart-product-name">
        <p>{ title }</p>
        <img src={ image } alt={ title } />
        <p>{ `R$${price}` }</p>
        <p>{ `Available Quantity: ${availableQuantity}`}</p>
        <ShoppingCart product={ product } />
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }).isRequired,
};
