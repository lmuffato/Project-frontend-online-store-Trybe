import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class Product extends React.Component {
  render() {
    const { title, imagePath, price, itemId, techSpecs, addToCart } = this.props;
    const { free_shipping: freeShipping } = this.props;

    const location = {
      pathname: `/itemDetails/${itemId}`,
      state: techSpecs,
    };

    const product = {
      id: itemId,
      title,
      thumbnail: imagePath,
      price,
    };

    return (
      <div data-testid="product" className="product-card">
        <img src={ imagePath } alt={ title } />
        <h1 data-testid="addProductToCart">{title}</h1>
        <p>{price}</p>
        {freeShipping && <p data-testid="free-shipping">Frete grátis</p>}
        <Link to={ location }>
          <button
            type="button"
            data-testid="product-detail-link"
          >
            Ver detalhes
          </button>
        </Link>

        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >
          add cart
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  price: PropTypes.number,
  itemId: PropTypes.string,
}.isRequired;

export default Product;
