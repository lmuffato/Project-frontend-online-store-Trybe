import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { product, add, sub } = this.props;
    const { title, image, price, quantity } = product;
    return (
      <div className="cart-item" data-testid="shopping-cart-product-name">
        <p>{ title }</p>
        <img src={ image } alt={ title } />
        <p>{ `R$${price}` }</p>
        <button
          type="button"
          onClick={ add }
          data={ product }
          data-testid="product-decrease-quantity"
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          onClick={ sub }
          data={ product }
          data-testid="product-increase-quantity"
        >
          -
        </button>
        <p>{ `Total: R$${price * quantity}` }</p>
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
  }),
  props: PropTypes.shape({
    add: PropTypes.func,
    sub: PropTypes.func,
  }),
}.isRequired;
