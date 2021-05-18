import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import icon from '../assets/icon.svg';
import Evaluation from './Evaluation';

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
        <div>
          <ul>
            {attributes.map((element) => (
              <li key={ element.id }>
                {element.name}
                :
                {element.value_name}
              </li>
            ))}
          </ul>
          <Evaluation />
        </div>

      );
    }
  }

  render() {
    const { AddCart } = this.props;
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
        <button
          type="button"
          onClick={ AddCart }
          value={ title }
          price={ price }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart-shopping/" data-testid="shopping-cart-button">
          <img className="icon-cart" src={ icon } alt="shopping cart icon" />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  AddCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
