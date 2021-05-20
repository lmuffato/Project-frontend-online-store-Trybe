import React, { Component } from 'react';
import { number, string, objectOf, oneOfType, func } from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { cartProduct, addToCart, testid } = this.props;
    return (
      <button // usado em ProductDetails e ProductCard
        className="bt"
        type="button"
        data-testid={ testid }
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
