import React, { Component } from 'react';
import { getProductsByQuery } from '../../services/api';

class Products extends Component {
  constructor(props) {
    super(props);
    const { mlItems } = props;
    this.state = {
      mlProducts: mlItems,
    };
  }

  render() {
    return (<header>oi</header>);
  }
}

export default Products;
