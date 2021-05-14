import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath } = this.props;
    return (
      <div data-testid="product">
        <h1 >{title}</h1>
        <img src={ imagePath } alt="Imagem do produto" />
        <span>{price}</span>
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
