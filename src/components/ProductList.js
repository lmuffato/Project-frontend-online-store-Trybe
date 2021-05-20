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
      <div>
        <li key={ data.id } data-testid="product">
          <p>{ data.title }</p>
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: `/productdetails/${data.id}`,
              state: { data },
            } }
          >
            <img src={ data.thumbnail } alt={ `foto ${data.title}` } width="200" />
            <p>{ data.price }</p>
          </Link>
        </li>
      </div>
    );
  }

  render() {
    const { dataApi, request } = this.props;
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
