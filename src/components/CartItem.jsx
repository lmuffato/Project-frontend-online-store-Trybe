import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { product } = this.props;
    const { title, image, price, quantidade } = product;
    return (
      <div className="cart-item" data-testid="shopping-cart-product-name">
        <p>{ title }</p>
        <img src={ image } alt={ title } />
        <p data-testid="shopping-cart-product-quantity">{ `QTD: ${quantidade}` }</p>
        <p>{ `R$${price}` }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantidade: PropTypes.number,
  }).isRequired,
};
