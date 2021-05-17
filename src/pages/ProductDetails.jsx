import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { state: { product } } = this.props.location;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <section data-testid="product">
          <span>{ title }</span>
          <img src={ thumbnail } alt={ title } />
          <span>{`R$${price}`}</span>
        </section>
        <Link to="/carrinho">
          <button type="button">Ir para o Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default ProductDetails;
