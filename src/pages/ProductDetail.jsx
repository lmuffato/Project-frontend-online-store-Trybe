import React, { Component } from 'react';
import ProductInfo from '../components/ProductInfo';
import * as api from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
    this.fetchProductById = this.fetchProductById.bind(this);
  }

  componentDidMount() {
    this.fetchProductById();
  }

  async fetchProductById() {
    const { match } = this.props;
    const { id } = match.params;
    const result = await api.getProductById(id);
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <ProductInfo product={ result } />
        {/* <ProductRating />
        <AddToCart /> */}
      </>
    );
  }
}

export default ProductDetail;
