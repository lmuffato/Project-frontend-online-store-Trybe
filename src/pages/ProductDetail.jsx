import React, { Component } from 'react';
import ProductInfo from '../components/ProductInfo';
import * as api from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  async handleFetch() {
    const { product } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', product);
    if (result.results.length === 0) {
      this.setState({ product: result.results });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.handleFetch();
  }

  render() {
    return (
      <>
        <ProductInfo onClick={ this.handleClick } />
        {/* <ProductRating />
        <AddToCart /> */}
      </>
    );
  }
}

export default ProductDetail;
