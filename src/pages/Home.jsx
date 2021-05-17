import React, { Component } from 'react';
import '../components/Categories/Categories.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      requestedProducts: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async fetchProducts(requestedProduct) {
    const response = await getProductsFromCategoryAndQuery(requestedProduct);
    const { results } = response;
    this.setState({ requestedProducts: results });
    console.log(response.results);
  }

  render() {
    const { requestedProducts } = this.state;
    return (
      <>
        <Products mlItems={ requestedProducts } />
        <SearchBar onClick={ this.fetchProducts } />
        <Categories />
      </>
    );
  }
}

export default Home;
