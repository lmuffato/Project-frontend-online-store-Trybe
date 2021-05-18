import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    console.log(this.props);
    return (
      <div>
        <img src={ product.thumbnail } alt={ product.id } />
        <h6 data-testid="product-detail-name">{product.title}</h6>
        <p>{` R$ ${product.price} `}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
