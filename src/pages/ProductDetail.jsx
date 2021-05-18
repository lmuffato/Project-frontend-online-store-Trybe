import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }

  request = () => {
    const { props } = this.state;
    const { params } = props.match;
    getProductsFromCategoryAndQuery(params.id)
      .then((finalData) => {
        console.log(finalData.results);
      });
  }

  render() {
    const { props } = this.state;
    const { params } = props.match;
    return (
      <div>{params.id}</div>
    );
  }
}

export default ProductDetail;
