/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import CardItems from '../components/CardItems';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  fetchProducts = async () => {
    const { inputValue } = this.state;
    const data = await getProductsFromCategoryAndQuery(null, inputValue);
    this.setState({
      products: data.results,
    });
  };

  render() {
    const { inputValue, products } = this.state;
    return (
      <div>
        <input
          value={ inputValue }
          type="text"
          onChange={ this.handleInputChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.fetchProducts }
          data-testid="query-button"
        >
          Click
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CardItems products={ products } />
      </div>
    );
  }
}
