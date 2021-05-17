import React, { Component } from 'react';
import '../components/Categories/Categories.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { getProductsByQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      requestedProducts: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  async fetchProducts(requestedProduct) {

    const result = await getProductsByQuery(requestedProduct);
    this.setState({requestedProducts: result});
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
