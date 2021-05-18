import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ProductDetails extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    return (
      <ProductCard id={ id } />
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
