import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';
import Products from '../components/Products';

class Index extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.selectCategory = this.selectCategory.bind(this);

    this.state = {
      categories: [],
      categoryId: '',
      searchText: '',
      products: undefined, // inicia como undefined pra facilitar a condição do ternário em Products.jsx
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
    const { searchText, categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(
      searchText,
      categoryId,
    );
    this.setState({ products });
  }

  selectCategory(id) {
    this.setState({ categoryId: id }, async () => {
      this.fetchProducts();
    });
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
        <Categories
          onClick={ this.selectCategory }
          categories={ categories }
          getData={ this.fetchCategories }
        />
        {products && <Products products={ products } />}
      </main>
    );
  }
}

export default Index;
