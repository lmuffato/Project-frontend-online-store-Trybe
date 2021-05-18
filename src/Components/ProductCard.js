import React from 'react';
import * as api from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(param) {
    api.getProductsFromCategoryAndQuery();
    return param;
  }

  render() {
    return (
      <div>
        teste
      </div>
    );
  }
}

export default ProductCard;
