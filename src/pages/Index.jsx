import React, { Component } from 'react';
import { func } from 'prop-types';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import * as api from '../services/api';
import Products from '../components/Products';
import Loading from '../components/Loading';
import CartButton from '../components/CartButton';

class Index extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.selectCategory = this.selectCategory.bind(this);

    this.state = {
      loading: false,
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
    this.setState({ loading: true, products: null });
    const { searchText, categoryId } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(
      searchText,
      categoryId,
    );
    this.setState({ products, loading: false });
  }

  selectCategory(id) {
    this.setState({ categoryId: id }, async () => {
      await this.fetchProducts();
    });
  }

  render() {
    const { categories, searchText, products, loading } = this.state;
    const { addToCart } = this.props;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onChange={ this.handleSearchInput }
          onClick={ this.fetchProducts }
        >
          <CartButton />

        </SearchBar>
        <Categories
          onClick={ this.selectCategory }
          categories={ categories }
          getData={ this.fetchCategories }
        />
        { loading && <Loading /> }
        { products && <Products products={ products } addToCart={ addToCart } /> }
      </main>
    );
  }
}

Index.propTypes = {
  addToCart: func,
}.isRequired;

export default Index;
