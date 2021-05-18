import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ProductDetails extends React.Component {
  render() {
    return (
      <ProductCard props={ this.props } />
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
