import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../components/ProductInfo';

class ProductDetail extends Component {
  render() {
    const { location } = this.props;
    const { product } = location.state;
    // const { title, price, thumbnail } = product;

    return (
      <>
        {/* <h1 data-testid="product-detail-name">{title}</h1>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } /> */}
        <ProductInfo product={ product } />
        {/* <ProductRating />
        <AddToCart /> */}
      </>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: {
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    },
  }).isRequired,
};

export default ProductDetail;
