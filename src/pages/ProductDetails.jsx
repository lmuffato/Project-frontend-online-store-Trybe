import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    console.log(match);
    const { params } = match;
    console.log(params);
    const { category, id } = params;
    this.state = {
      category,
      id,
      selectedProduct: {},
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { category, id } = this.state;
    const response = await API
      .getProductsFromCategoryAndQuery(category);
    const productsArray = response.results;
    const productFound = productsArray.find((product) => product.id === id);
    console.log(productFound);
    this.setState({ selectedProduct: productFound });
  }

  render() {
    const { selectedProduct } = this.state;
    const { price, title, thumbnail, attributes } = selectedProduct;
    console.log(attributes);
    console.log('elisa');
    return (
      <div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <p>{` R$ ${price} `}</p>
        <img src={ thumbnail } alt={ title } />
        {attributes && (
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        )}
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
