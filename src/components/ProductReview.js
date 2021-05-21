import React, { Component } from 'react';

export default class ProductReview extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div className="product">
        <img src={ thumbnail } alt="Imagem do produto no carrinho" />
        <p>{title}</p>
        <span>{price}</span>
      </div>
    );
  }
}
