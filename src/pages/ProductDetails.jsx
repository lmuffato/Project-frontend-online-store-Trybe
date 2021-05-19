import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';

class ProductDetails extends React.Component {
  render() {
    return (
      <>
        <ProductCard props={ this.props } />
        <CartButton />
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
