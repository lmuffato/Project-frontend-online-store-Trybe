/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CardItems from '../components/CardItems';
import CategoriesList from '../components/Categories';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
      categories: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  fetchProducts = async () => {
    const { inputValue } = this.state;
    const data = await getProductsFromCategoryAndQuery(null, inputValue);
    this.setState({
      products: data.results,
    });
  };

  fetchCategories() {
    getCategories().then((result) => {
      this.setState({ categories: result });
    });
  }

  render() {
    const { inputValue, products, categories } = this.state;
    return (
      <div>
        <input
          value={ inputValue }
          type="text"
          onChange={ this.handleInputChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.fetchProducts }
          data-testid="query-button"
        >
          Click
        </button>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <CategoriesList categories={ categories } />

        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Cart
        </Link>
        <CardItems products={ products } />
      </div>
    );
  }
}
