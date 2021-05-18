import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { product, key, addCart } = this.props;
    const { title, thumbnail, price, id, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    const category = product.category_id;
    const isFreeShipping = <span data-testid="free-shipping">Frete Gratis!</span>;
    return (
      <div className="productList">
        <div key={ key } data-testid="product" className="products">
          <img src={ thumbnail } alt={ title } />
          <h3>{title}</h3>
          <p>
            R$
            {price}
          </p>
          <Link
            to={ `/details/${id}/${category}` }
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
          { (freeShipping) ? isFreeShipping : '' }
          <button
            type="button"
            onClick={ addCart }
            value={ title }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  addCart: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default Product;
