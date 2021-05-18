import React from 'react';
import * as api from '../services/api';
import Search from './Search'

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.getQuery = this.getQuery.bind(this)
  }
  
  getQuery(param) {
    api.getProductsFromCategoryAndQuery()
    return param
  }

  render() {
    return (
      <div>
        <Search products = { this.getQuery } />
      </div>
    )
  }
}

export default ProductCard