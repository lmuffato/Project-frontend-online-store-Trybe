import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { oneOfType, objectOf, object, string, number } from 'prop-types';
import ProductInfo from '../components/ProductInfo';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state: product } = location;
    return (
      <section className="product-details">
        <ProductInfo product={ product } />
        <Link to="/">Voltar</Link>
        <AddToCartButton cartProduct={ cartProduct } addToCart={ addToCart } />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: objectOf(oneOfType([string, number, object])).isRequired,
};

export default ProductDetails;
