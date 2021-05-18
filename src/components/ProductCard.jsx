import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton'

class ProductCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt="imagem do produto" />
        <p>{ item.price }</p>
        <Link
          to={ { pathname: `/products/${item.id}`, state: { product: item } } }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
        <AddToCartButton />
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
