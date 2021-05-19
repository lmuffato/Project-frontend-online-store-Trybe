import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      selectValue: 'MLB5672',
    };
  }

  componentDidMount() {
    this.handleApi();
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  }

  handleSelect = (event) => {
    const { value } = event.target;
    this.setState({
      selectValue: value,
    });
  }

  handleApi= async () => {
    const { inputValue, selectValue } = this.state;
    this.setState(async () => {
      try {
        const query = await api.getProductsFromCategoryAndQuery(selectValue, inputValue);
        const { results } = await query;
        this.setState(() => ({
          products: [...results],
        }));
      } catch {
        return null;
      }
    });
  }

  /* sumQuantity = () => {
    const { quantity } = this.props;
    const arrQuantity = Object.values(quantity);
    const total = arrQuantity.reduce((acc, actual) => acc + actual);
    console.log(total);
  } */

  render() {
    const { AddCart, quantityTotal } = this.props;
    const { inputValue, products, selectValue } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          ype="search"
          onChange={ this.handleInput }
          value={ inputValue }
          className="searchInput"
          placeHolder="🔎"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleApi }
        >
          Pesquisar
        </button>
        <Link to="/cart-shopping/" data-testid="shopping-cart-button">
          <div>
            <img className="icon-cart" src={ icon } alt="shopping cart icon" />
            <p><span data-testid="shopping-cart-size">{ quantityTotal }</span></p>
          </div>
        </Link>
        <Category
          value={ selectValue }
          onChange={ (event) => {
            this.handleSelect(event);
          } }
        />
        {products.map((element) => (<Product
          inputValue={ inputValue }
          selectValue={ selectValue }
          key={ element.id }
          product={ element }
          addCart={ AddCart }
        />))}
      </div>
    );
  }
}

InputSearch.propTypes = {
  AddCart: PropTypes.func.isRequired,
  quantityTotal: PropTypes.number.isRequired,
};

export default InputSearch;
