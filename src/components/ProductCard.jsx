import React, { Component } from 'react';
import { string, number } from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath, id, product } = this.props;
    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;

    return (
      <div data-testid="product" className="product-card">
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${imagePath}-O.webp` } alt="Imagem do produto" />
        <h1>{title}</h1>
        <p>{realPrice}</p>
        <button
          type="button"
          className="btn-details"
        >
          <Link
            to={ {
              pathname: `/Products/${id}`,
              state: { product },
            } }
            data-testid="product-detail-link"
          >
            VER DETALHES
          </Link>
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: string,
  imagePath: string,
  price: number,
}.isRequired;

export default ProductCard;
