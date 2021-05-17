import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
  }

  productsList(products) {
    const { results } = products;
    return results.map((product) => (
      <div data-testid="product" className="product-card" key={ product.id }>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <img className="product-img" src={ product.thumbnail } alt={ product.title } />
      </div>
    ));
  }

  render() {
    const { products } = this.props;

    return (
      <section>
        <ul>
          { this.productsList(products) }
        </ul>
      </section>
    );
  }
}

Products.propTypes = {
  products: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ])),
};

Products.defaultProps = {
  products: undefined,
};

export default Products;
