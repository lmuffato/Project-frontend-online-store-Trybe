import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import ListCategories from './ListCategories';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      category: '',
      dataApi: [],
      request: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  fetchProducts = async () => {
    this.setState({ request: true },
      async () => {
        const { category, query } = this.state;
        const dataProducts = await getProductsFromCategoryAndQuery(category, query);
        this.setState({
          dataApi: dataProducts.results,
          request: false,
        });
      });
  }

  render() {
    const { dataApi, query, request } = this.state;
    return (
      <div>
        <ListCategories />
        <SearchBar
          query={ query }
          handleChange={ this.handleChange }
          handleClick={ this.fetchProducts }
        />
        <ProductList dataApi={ dataApi } request={ request } />
      </div>
    );
  }
}

export default Header;
