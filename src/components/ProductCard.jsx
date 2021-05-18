import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const { path, id, title, price, thumbnail, addToCart } = this.props;
    const cartProduct = { id, title, price, thumbnail, quantity: 1 };
    return (

      <div className="card-text" data-testid="product-detail-name">
        <Link data-testid="product-detail-link" to={ path }>
          <p>{ title }</p>
          <p>{`R$ ${price.toFixed(2)}` }</p>
          <img className="card-img" src={ thumbnail } alt={ title } />
        </Link>
        <AddToCartButton cartProduct={ cartProduct } addToCart={ addToCart } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductCard;
