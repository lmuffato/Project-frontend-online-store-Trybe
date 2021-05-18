import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <Link
        data-testid="product-detail-link"
        to={ { pathname: { title }, state: { product } } }
      >

        <div data-testid="product">
          <h2>
            { title }
          </h2>
          <img
            src={ thumbnail }
            alt="Imagem do produto"
          />
          <h3>
            { price }
          </h3>
        </div>

      </Link>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
