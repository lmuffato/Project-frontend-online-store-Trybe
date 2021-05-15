import React, { Component } from 'react';

class Products extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
  }

  productsList(products) {
    const { results } = products;
    return results.map((product) => (
      <li data-testid="product" key={ product.id }>
        {product.title}
        <img src={ product.thumbnail } alt={ product.title } />
        {product.price}
      </li>
    ));
  }

  render() {
    const { products } = this.props;

    return (
      <section>
        <ul>
          {products.length === 0 ? 'loading...' : this.productsList(products)}
        </ul>
      </section>
    );
  }
}

export default Products;
