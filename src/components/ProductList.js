import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor() {
    super();
    this.productDetails = this.productDetails.bind(this);
  }

  productDetails(data) {
    return (
      <div>
        <li key={ data.id } data-testid="product">
          <p>{ data.title }</p>
          <img src={ data.thumbnail } alt={ `foto ${data.title}` } width="200" />
          <p>{ data.price }</p>
        </li>
      </div>
    );
  }

  render() {
    const { dataApi } = this.props;
    return (
      <div>
        <ul>
          { dataApi.map((data) => this.productDetails(data)) }
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  dataApi: PropTypes.arrayOf.isRequired,
};

export default ProductList;
