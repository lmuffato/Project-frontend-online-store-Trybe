import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath } = this.props;
    return (
      <div>
        <h1 data-testid="product">{title}</h1>
        <img data-testid="product" src={ imagePath } alt="Imagem do produto" />
        <span data-testid="product">{price}</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
