import React, { Component } from 'react';

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

export default AddToCartButton;
