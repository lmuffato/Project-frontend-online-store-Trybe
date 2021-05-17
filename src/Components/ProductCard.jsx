import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, title, price, imagePath, id } = this.props;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ imagePath } alt="Imagem do produto" />
        <span>{price}</span>
        <Link
          to={ {
            pathname: `/details/${id}`,
            search: '',
            hash: '',
            state: { productDetail: product },
          } }
          data-testid="product-detail-link"
        >
          Mais Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductCard;
