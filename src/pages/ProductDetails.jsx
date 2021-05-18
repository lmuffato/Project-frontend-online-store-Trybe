import React, { Component } from 'react';
import { oneOfType, objectOf, object, string, number } from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { state: product } = location;
    return (
      <section className="product-details">
        <div data-testid="product-detail-name">
          <p>{ product.title }</p>
          <p>{ product.price.toFixed(2) }</p>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: objectOf(oneOfType([string, number, object])).isRequired,
};

export default ProductDetails;
