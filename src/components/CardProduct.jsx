import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProduct extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section data-testid="product">
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>{`R$${price}`}</span>
        <button
          type="button"
          onClick={ onClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

CardProduct.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
