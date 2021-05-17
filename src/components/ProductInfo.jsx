import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <section>
          <h2 data-testid="product-detail-name">{title}</h2>
          <p>{price}</p>
          <img src={ thumbnail } alt={ title } />
        </section>
        <ul>
          Especificações Técnicas
          {/* {attributes.map((attribute) => console.log(attribute)}; */}
        </ul>
      </div>
    );
  }
}

export default ProductInfo;
