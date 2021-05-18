import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {
  render() {
    const { product } = this.props;
    const { quant, price, title, img } = product;
    return (
      <div>
        <img src={ img } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quant }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

CartList.propTypes = {
  product: PropTypes.shape({
    quant: PropTypes.number,
    price: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default CartList;
