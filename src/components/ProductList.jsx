import React from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div data-testid="product">
        <h3>{item.title}</h3>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          Price:
          {item.price}
        </p>
      </div>
    );
  }
}
