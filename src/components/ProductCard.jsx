import React, { Component } from 'react';
import { string, number } from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath } = this.props;
    const realPrice = `${(new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL' })
      .format(price))}`;

    return (
      <div data-testid="product" className="product-card">
        <img src={ `https://http2.mlstatic.com/D_NQ_NP_${imagePath}-O.webp` } alt="Imagem do produto" />
        <h1>{title}</h1>
        <p>{realPrice}</p>
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
