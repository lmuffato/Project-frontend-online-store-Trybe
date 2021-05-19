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

  fetchProducts = async (id) => {
    const { query, category } = this.state;
    this.setState({ request: true, category: id },
      async () => {
        const dataProducts = await getProductsFromCategoryAndQuery(category, query);
        this.setState({
          dataApi: dataProducts.results,
          request: false,
          query: '',
        });
      });
  }

  render() {
    const { dataApi, query, request } = this.state;
    console.log(dataApi);
    return (
      <div>
        <ListCategories fetchProducts={ this.fetchProducts } />
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
