import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { title, price, imagePath } = this.props;
    return(
      <div>
        <h1 data-testid="product">{title}</h1>
        <img data-testid="product" src={imagePath}/>
        <span data-testid="product" >{price}</span>
      </div>
    );
  }
}

export default ProductCard;
