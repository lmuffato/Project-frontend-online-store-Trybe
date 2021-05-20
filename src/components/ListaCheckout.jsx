import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListaCheckout extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </p>
      </div>
    );
  }
}

ListaCheckout.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
