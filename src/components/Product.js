import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { product, key } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div key={ key } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

Product.propTypes = {
  key: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
