import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { product: { results } } = this.props;
    const { title, price, imagePath } = product.results;
    return (
      <div data-testid="product">
        <h2>
          { title }
        </h2>
        <img
          src={ imagePath }
          alt="Imagem do produto"
        />
        <h3>
          { price }
        </h3>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};
