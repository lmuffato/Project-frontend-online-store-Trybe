import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import Category from './Category';
import * as api from '../services/api';
import Product from './Product';

class InputSearch extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      products: [],
    };
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  }

  handleButton = async () => {
    const { inputValue } = this.state;
    this.setState(async () => {
      const query = await api.getProductsFromCategoryAndQuery(false, inputValue);
      const { results } = await query;
      this.setState(() => ({
        products: [...results],
      }));
    });
  }

  render() {
    const { inputValue, products } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          ype="search"
          onChange={ this.handleInput }
          value={ inputValue }
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleButton }
        >
          Pesquisar
        </button>
        <Link to="/cart-shopping" data-testid="shopping-cart-button">
          <img className="icon-cart" src={ icon } alt="shopping cart icon" />
        </Link>
        <Category />
        {products.map((element) => <Product key={ element.id } product={ element } />)}
      </div>
    );
  }
}

export default InputSearch;