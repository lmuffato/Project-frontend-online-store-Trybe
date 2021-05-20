import React, { Component } from 'react';
import { func, shape, number, string } from 'prop-types';

class AddCart extends Component {
  render() {
    const { productToCart, product } = this.props;
    return (
      <button
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ () => productToCart(product) }
      >
        Add in Cart
      </button>
    );
  }
}

AddCart.propTypes = {
  productToCart: func.isRequired,
  product: shape({
    id: string.isRequired,
    title: string.isRequired,
    thumbnail: string.isRequired,
    price: number.isRequired,
  }).isRequired,
};

export default AddCart;
