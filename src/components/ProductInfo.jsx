import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as shoppingCartService from '../services/shoppingCartService';

class ProductInfo extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { product } = this.props;
    shoppingCartService.setProducts(product);
    shoppingCartService.getQuantity(1);
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </strong>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.onClick }
        >
          Adicionar ao carrinho
        </button>
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
