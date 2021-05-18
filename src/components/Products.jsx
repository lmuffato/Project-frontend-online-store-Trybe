import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    return results.map((product) => (
      <div data-testid="product" className="product-card" key={ product.id }>
        {/* função define o link de cada product e passa o obj para a nova página */}
        <Link
          data-testid="product-detail-link"
          to={ () => this.productDetailResource(product) }
        >
          <ProductCard
            title={ product.title }
            price={ product.price }
            thumbnail={ product.thumbnail }
          />
        </Link>
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
};

Products.defaultProps = {
  products: undefined,
};

export default Products;
