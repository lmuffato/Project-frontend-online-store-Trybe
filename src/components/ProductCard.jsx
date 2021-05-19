import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const { path, id, title, price, thumbnail, addToCart } = this.props; // passado por Products.jsx
    const cartProduct = { id, title, price, thumbnail, quantity: 1 };
    return (

      <div className="card-text" data-testid="product-detail-name">
        <Link data-testid="product-detail-link" to={ path }>
          <p>{ title }</p>
          <p>{`R$ ${price.toFixed(2)}`}</p>
          <img className="card-img" src={ thumbnail } alt={ title } />
        </Link>
        <AddToCartButton
          cartProduct={ cartProduct }
          addToCart={ addToCart }
          testid="product-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  path: PropTypes.string,
  id: PropTypes.string,
  addToCart: PropTypes.func,
}.isRequired;

export default ProductCard;
