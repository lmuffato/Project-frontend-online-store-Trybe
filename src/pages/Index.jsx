import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Index extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);

    this.state = {
      categories: [],
      searchText: '',
      products: [],
    };
  }

  handleSearchInput({ target }) {
    const searchText = target.value;
    this.setState({ searchText });
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async fetchProducts() {
    const { searchText } = this.state;
    const products = await api.getProductsFromQuery(searchText);
    this.setState({ products });
  }

  render() {
    const { categories, searchText, products } = this.state;

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onChange={ this.handleSearchInput }
          onClick={ this.fetchProducts }
        />
        <Categories categories={ categories } getData={ this.fetchCategories } />
      </main>
    );
  }
}

export default Index;
