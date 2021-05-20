import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  constructor() {
    super();
    this.productDetails = this.productDetails.bind(this);
  }

  messageRequest = () => <p>Nenhum produto foi encontrado</p>;

  productDetails(data) {
    return (
      <div data-testid="product-detail-link">
        <li key={ data.id } data-testid="product">
          <Link
            to={ {
              pathname: `/productdetails/${data.id}`,
              state: { data },
            } }
          >
            <p>{ data.title }</p>
            <img src={ data.thumbnail } alt={ `foto ${data.title}` } width="200" />
            <p>{ data.price }</p>
          </Link>
        </li>
      </div>
    );
  }

  render() {
    const { dataApi, request } = this.props;
    // console.log(dataApi);
    return (
      <div>
        <ul>
          { request
            ? this.messageRequest
            : dataApi.map((data) => this.productDetails(data)) }
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  dataApi: PropTypes.arrayOf.isRequired,
  request: PropTypes.bool.isRequired,
};

export default ProductList;
