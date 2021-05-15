/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import CardItem from '../components/CardItem';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  fetchResponse = async () => {
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
          onClick={ this.fetchResponse }
          data-testid="query-button"
        >
          Click
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CardItem products={ products } />
      </div>
    );
  }
}
