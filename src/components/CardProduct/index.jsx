import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.css';

class CardProduct extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price, id, shipping } = product;

    return (
      <section className={ styles.content } data-testid="product">
        <Link
          className={ styles.productInfo }
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`, state: { product } } }
        >
          <span className={ styles.titleProduct }>{ title }</span>
          <img className={ styles.imgProduct } src={ thumbnail } alt={ title } />
        </Link>
        <span className={ styles.priceText }>{`R$${price}`}</span>
        { shipping.free_shipping
          && <span data-testid="free-shipping">Frete grátis</span> }
        <button
          className={ styles.btnAddToCart }
          type="button"
          onClick={ onClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

CardProduct.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default CardProduct;
