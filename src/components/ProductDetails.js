import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id, category } = params;
    const products = await api.getProductsFromCategoryAndQuery(category, false);
    const findProduct = products.results.find((element) => element.id === id);
    this.setState(() => ({
      product: { ...findProduct },
    }));
  }

  conditional = () => {
    const { product: { attributes } } = this.state;
    if (attributes) {
      return (
        <ul>
          {attributes.map((element) => (
            <li key={ element.id }>
              {element.name}
              :
              {element.value_name}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const { product: { title, price, thumbnail } } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt="product" />
        <p>
          $:
          {price}
        </p>
        {this.conditional()}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
