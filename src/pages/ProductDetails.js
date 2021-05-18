import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;

    return (
      <section>
        <div>
          <Link to="/">Voltar</Link>
          <ButtonCart />
        </div>
        <div>
          <h2 data-testid="product-detail-name">{ product.title }</h2>
          <img src={ product.thumbnail } alt="Imagem do produto" />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;
