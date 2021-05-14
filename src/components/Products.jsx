import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';



class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      products: undefined,
    }

  }

  componentDidMount() {
    getProductsFromCategoryAndQuery().then((categories) => {
      this.setState({
        products,
        loading: false,
      });
    });
  }
  
  render() {

    return (
    );
  }
}

export default Products;
