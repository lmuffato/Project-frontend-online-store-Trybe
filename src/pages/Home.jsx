import React, { Component } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFetchProducts = this.handleFetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleFetchProducts() {
    const { search } = this.state;
    const result = api.getProductsFromQuery(search);
    this.setState({ productsList: result });
  }

  render() {
    const { search, productsList } = this.state;
    return (
      <>
        <SearchBar
          search={ search }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <Categories />
        <ProductList products={ productsList } />
      </>
    );
  }
}
