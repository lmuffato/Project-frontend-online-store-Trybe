import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <section className="products-container">
        {products.map((product) => <ProductCard key={ product.id } item={ product } />)}
      </section>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};

export default Products;
