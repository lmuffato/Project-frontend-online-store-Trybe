import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategory } from '../../../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.loadProduct();
  }

  async loadProduct() {
    const { location, match } = this.props;
    const { category, id } = match.params;
    let products = [];
    let productFound = {};

    if (location.state) {
      const { products: productsState } = location.state;
      products = productsState;
      console.log('não foi feita nenhuma requisição');
    } else {
      products = await getProductsFromCategory(category);
      products = products.results;
      console.log('foi feita requisição');
    }

    productFound = products.find((product) => product.id === id);

    this.setState({
      product: productFound,
    });
  }

  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        <h1 data-testid="product-detail-name">Detalhes do Produto</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
