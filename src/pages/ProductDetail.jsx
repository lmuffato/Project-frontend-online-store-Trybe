import React, { Component } from 'react';
// import ProductInfo from '../components/ProductInfo';

class ProductDetail extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    return (
      <>
        <p>{id}</p>
        {/* <ProductInfo id={ id } /> */}
        {/* <ProductRating />
        <AddToCart /> */}
      </>
    );
  }
}

export default ProductDetail;
