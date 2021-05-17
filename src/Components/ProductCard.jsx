import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath, onClick } = this.props;

    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ imagePath } alt="Imagem do produto" />
        <span>{price}</span>
        <button
          onClick={ onClick }
          value={ title }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
