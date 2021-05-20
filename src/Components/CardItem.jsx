import React, { Component } from 'react';
import { string, number, func, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

class cardItem extends Component {
  render() {
    const { product, productToCart } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <div data-testid="product" className="product">
        <header>
          <h3>{title}</h3>
        </header>
        <Link
          to={ {
            pathname: `/productDetails/${id}`,
            state: { thumbnail, title, price, id, product },
          } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt="produto" className="product-image" />
        </Link>
        <span className="product-price">{`R$ ${price}`}</span>
        <AddCart
          product={ { ...product } }
          productToCart={ productToCart }
          dataTestId="product-add-to-cart"
        />
      </div>
    );
  }
}

cardItem.propTypes = {
  productToCart: func.isRequired,
  product: shape({
    id: string.isRequired,
    title: string.isRequired,
    thumbnail: string.isRequired,
    price: number.isRequired,
  }).isRequired,
};

export default cardItem;
