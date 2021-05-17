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
      search: '',
      message: null,
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

  async handleFetchProducts() {
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search);
    if (result.results.length === 0) {
      this.setState({ productsList: [], message: true, search: '' });
    } else {
      this.setState({ productsList: result.results, search: '', message: false });
    }
  }

  render() {
    const { search, message, productsList } = this.state;
    return (
      <>
        <SearchBar
          search={ search }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <aside>
          <Categories />
        </aside>
        {message ? <ProductNotFound /> : <ProductList products={ productsList } /> }
      </>
    );
  }
}
