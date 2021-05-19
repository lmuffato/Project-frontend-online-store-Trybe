import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      // value: '',
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

  /*   handleChange() {

  } */

  render() {
    const { item } = this.state;
    console.log(item);
    return (
      <div data-testid="product-detail-name">
        {item.title}
        <form id="product-evaluation">
          <label htmlFor="evaluation">
            Avalie o produto
            <select name="stars" id="evaluation" form="product-evaluation">
              <option value={ 1 }>1</option>
              <option value={ 2 }>2</option>
              <option value={ 3 }>3</option>
              <option value={ 4 }>4</option>
              <option value={ 5 }>5</option>
            </select>
            <label htmlFor="product-detail-evaluation">
              <textarea
                data-testid="product-detail-evaluation"
                // value={ this.state.value }
                onChange={ this.handleChange }
              />
            </label>
          </label>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
