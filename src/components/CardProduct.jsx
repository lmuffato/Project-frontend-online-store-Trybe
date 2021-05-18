import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Link
        data-testid="product-detail-link"
        to={ { pathname: `/details/${id}`, state: { product } } }
      >
        <section data-testid="product">
          <span>{ title }</span>
          <img src={ thumbnail } alt={ title } />
          <span>{`R$${price}`}</span>
        </section>
      </Link>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CardProduct;
