import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.css';

class CardProduct extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <section className={ styles.teste } data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`, state: { product } } }
        >
          <span>{ title }</span>
          <img src={ thumbnail } alt={ title } />
          <span>{`R$${price}`}</span>
        </Link>
        <button
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
  }).isRequired,
};

export default CardProduct;
