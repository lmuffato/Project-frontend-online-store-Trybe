import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
  }

  linkTest = (product) => ({
    pathname: `/product-details/${product.id}`,
    state: product,
  });

  productsList(products) {
    const { results } = products;
    return results.map((product) => (
      <div data-testid="product" className="product-card" key={ product.id }>
        {/* função define o link de cada product e passa o obj para a nova página */}
        <Link data-testid="product-detail-link" to={ () => this.linkTest(product) }>
          <div className="card-text">
            <p>{product.title}</p>
            <p>{product.price.toFixed(2)}</p>
          </div>
          <img className="card-img" src={ product.thumbnail } alt={ product.title } />
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
