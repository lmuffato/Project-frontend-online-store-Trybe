import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      textArea: '',
      select: 1,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  handleChange(field, valueUpdate) {
    this.setState({ [field]: valueUpdate });
  }

  handleSubmit() {
    const { textArea, select } = this.state;
    const productEvaluation = `Texto:${textArea}, Nota:${select}`;
    const previousEvaluations = JSON.parse(localStorage.getItem('productSubmit'));
    const evaluationUpdate = !previousEvaluations ? [] : previousEvaluations;
    localStorage
      .setItem('productSubmit', JSON.stringify([...evaluationUpdate, productEvaluation]));
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
      <div data-testid="product-detail-name">
        {item.title}
        <form>
          <select
            onChange={ (event) => this.handleChange('select', event.target.value) }
          >
            <option value={ 1 }>1</option>
            <option value={ 2 }>2</option>
            <option value={ 3 }>3</option>
            <option value={ 4 }>4</option>
            <option value={ 5 }>5</option>
          </select>
          <label htmlFor="product-detail-evaluation">
            <textarea
              data-testid="product-detail-evaluation"
              onChange={ (event) => this.handleChange('textArea', event.target.value) }
            />
          </label>
          <input onClick={ () => this.handleSubmit() } type="submit" value="Enviar" />
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
