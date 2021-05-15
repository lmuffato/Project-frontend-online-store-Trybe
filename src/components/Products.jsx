import React, { Component } from 'react';
import { getProductsFromQuery } from '../services/api';
import ProductCard from './ProductCard';

class Products extends Component {

  render() {
    const { products } = this.props;
    return (
      products.map((product) => <ProductCard key={ product.id } item={ product } />)
    );
  }
}

export default Products;
