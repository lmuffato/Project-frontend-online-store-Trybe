import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      category: '',
      dataApi: [],
      // resquest: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  // handleClick = (event) => {
  //   this.setState({
  //     query: event.target.value,
  //   });
  // }

  fetchProducts = async () => {
    const { category, query } = this.state;
    const dataProducts = await Api.getProductsFromCategoryAndQuery(category, query);
    console.log(dataProducts);
    this.setState({
      dataApi: dataProducts.results,
    });
  }

  componentDidMount = async () => {
    this.fetchProducts();
  }

  render() {
    const { dataApi, query } = this.state;
    return (
      <div>
        <SearchBar
          query={ query }
          handleChange={ this.handleChange }
          handleClick={ this.fetchProducts }
        />
        <ProductList dataApi={ dataApi } />
      </div>
    );
  }
}

export default Header;
