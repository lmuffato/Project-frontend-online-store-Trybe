import React, { Component } from 'react';
import { oneOfType, objectOf, object, string, number } from 'prop-types';

class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product-detail-name">
        <p>{ title }</p>
        <p>{`R$ ${price.toFixed(2)}` }</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductInfo.propTypes = {
  product: objectOf(oneOfType([string, number, object])).isRequired,
};

export default ProductInfo;
