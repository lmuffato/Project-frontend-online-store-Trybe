import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
  }

  productDetailResource = (product) => ({
    pathname: `/product-details/${product.id}`,
    state: product,
  });

  productsList(products) {
    const { results } = products;
    const { addToCart } = this.props;
    return results.map((product) => (
      <div data-testid="product" className="product-card" key={ product.id }>

        <ProductCard
          path={ this.productDetailResource(product) }
          id={ product.id }
          title={ product.title }
          price={ product.price }
          thumbnail={ product.thumbnail }
          addToCart={ addToCart }
        />

      </div>
    ));
  }

  render() {
    const { products } = this.props;
    return (
      <section>
        <ul className="product-list">
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
  addToCart: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: undefined,
};

export default Products;
