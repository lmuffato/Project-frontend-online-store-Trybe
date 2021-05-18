import React from 'react';
import * as api from '../services/api';
// import Search from './Search'

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const { productList } = this.props;
    this.state = {
      products: productList
    }
  }

  render() {
    const { products } = this.state;
    const { results } = products;
    // console.log(results);
    return (
      <div>
        { results === undefined ? <h1>te</h1>: results.map((product) => <h1>{product.title}</h1>)}

      </div>
    )
  }
}

export default ProductCard