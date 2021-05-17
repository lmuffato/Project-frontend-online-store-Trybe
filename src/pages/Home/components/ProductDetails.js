import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        <h1 data-testid="product-detail-name">Detalhes do Produto</h1>
      </div>
    );
  }
}

export default ProductDetails;
