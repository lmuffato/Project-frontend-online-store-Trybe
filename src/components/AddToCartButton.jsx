import React, { Component } from 'react';
import { number, string, objectOf, oneOfType, func } from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { cartProduct, addToCart } = this.props;
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => addToCart(cartProduct) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  cartProduct: objectOf(oneOfType([string, number])),
  addToCart: func,
}.isRequired;

export default AddToCartButton;
