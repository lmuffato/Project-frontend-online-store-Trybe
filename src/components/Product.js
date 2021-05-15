import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { product, key, addCart } = this.props;
    const { title, thumbnail, price, id } = product;
    const category = product.category_id;
    return (
      <div key={ key } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
        <p>
          R$
          { price }
          {console.log(this.props)}
        </p>
        <Link
          to={ `/details/${id}/${category}` }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        <button type="button" onClick={ addCart } value={ title }>Adicionar ao carrinho</button>
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
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
};

export default Product;
