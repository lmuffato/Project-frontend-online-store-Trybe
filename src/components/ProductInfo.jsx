import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <Link
          to={ { pathname: '/shopping-cart', state: { product },
          } }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </Link>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductInfo;
