import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id, title } } } = this.props;
    const productsData = await getProductsFromCategoryAndQuery(1, title);
    const productData = productsData.results.filter((product) => product.id === id);
    return this.setState({
      item: productData[0],
    });
  }
  
  render() {
    const { item } = this.state;
    console.log(item);
    return (
      <div data-testid="product-detail-name">{item.title}</div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
