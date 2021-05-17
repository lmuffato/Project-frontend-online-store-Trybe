/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CardItems from '../components/CardItems';
import CategoriesList from '../components/CategoriesList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
      categories: [],
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchProductsByCategory = this.fetchProductsByCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchProducts = async () => {
    const { inputValue = null, category = null } = this.state;
    const data = await getProductsFromCategoryAndQuery(category, inputValue);
    this.setState({
      products: data.results,
    });
  };

  async fetchProductsByCategory(event) {
    await this.handleChange(event);
    await this.fetchProducts();
    await console.log(event);
  }

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
          name="inputValue"
          type="text"
          onChange={ this.handleChange }
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
        <CategoriesList
          categories={ categories }
          onClick={ this.fetchProductsByCategory }
        />
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
