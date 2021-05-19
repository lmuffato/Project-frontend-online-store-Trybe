import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  productToCart: PropTypes.func.isRequired,
};

export default AddCart;
