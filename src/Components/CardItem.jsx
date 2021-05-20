import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

class cardItem extends Component {
  render() {
    const { product, productToCart } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <>
        <Link
          to={ {
            pathname: `/productDetails/${id}`,
            state: { thumbnail, title, price, id },
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="product">
            <img src={ thumbnail } alt="produto" />
            <h3>{title}</h3>
            <span>{`R$ ${price}`}</span>
            <br />
          </div>
        </Link>
        <AddCart product={ { ...product } } productToCart={ productToCart } />
      </>
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
