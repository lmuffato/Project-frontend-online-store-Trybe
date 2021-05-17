import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import ProductNotFound from '../components/ProductNotFound';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      categories: [],
      search: '',
      message: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFetchProducts = this.handleFetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFetchCategories = this.handleFetchCategories.bind(this);
    this.handleCategoryEvent = this.handleCategoryEvent.bind(this);
  }

  componentDidMount() {
    this.handleFetchCategories();
  }

  handleChange({ target }) {
    this.setState({
      search: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.handleFetchProducts();
  }

  async handleFetchProducts() {
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search);
    console.log(result);
    if (result.results.length === 0) {
      this.setState({ productsList: [], message: true, search: '' });
    } else {
      this.setState({ productsList: result.results, search: '', message: false });
    }
  }

  handleCategoryEvent(event) {
    const id = event.target.getAttribute('data-id');
    this.handleFetchFromCategory(id);
  }

  async handleFetchCategories() {
    this.setState({ categories: [] }, () => {
      api.getCategories().then((data) => {
        this.setState({ categories: data });
        console.log(data);
      });
    });
  }

  async handleFetchFromCategory(id) {
    const request = await api.getProductsFromCategoryAndQuery(id, '');
    if (request.results.length === 0) {
      this.setState({ productsList: [], message: true });
    } else {
      this.setState({ productsList: request.results, message: false });
    }
  }

  render() {
    const { search, message, productsList, categories } = this.state;
    return (
      <>
        <SearchBar
          search={ search }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <aside>
          <Categories
            categories={ categories }
            handleClick={ this.handleCategoryEvent }
          />
        </aside>
        {message ? <ProductNotFound /> : <ProductList products={ productsList } /> }
      </>
    );
  }
}
