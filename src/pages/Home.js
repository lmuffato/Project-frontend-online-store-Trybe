import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';
import ButtonCart from '../components/ButtonCart';
import Product from '../components/Product';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      loading: false,
      category: 'all',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      if (name === 'category') {
        this.handleClick();
      }
    });
  }

  getProducts = async () => {
    const { query, category } = this.state;
    const apiProducts = await api.getProductsFromCategoryAndQuery(category, query);
    return apiProducts.results;
  }

  handleClick = () => {
    this.getProducts().then((response) => {
      this.setState({ loading: true }, () => {
        this.setState({
          products: response,
          loading: false,
        });
      });
    });
  }

  render() {
    const { products, loading } = this.state;
    const { addToCart, cartItems, totalCount, freeShipping } = this.props;

    return (
      <main>
        <label data-testid="home-initial-message" htmlFor="search">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            id="search"
            data-testid="query-input"
            onChange={ this.handleChange }
            name="query"
          />
          <button type="button" data-testid="query-button" onClick={ this.handleClick }>
            Buscar
          </button>
        </label>
        <SideBar handleChange={ this.handleChange } />
        <ButtonCart totalCount={ totalCount } />
        <section>
          { products.length ? '' : <span>Nenhum produto foi encontrado</span> }
          { !loading ? products.map((product, index) => (<Product
            key={ index }
            product={ product }
            addToCart={ addToCart }
            cartItems={ cartItems }
            freeShipping={ freeShipping }
          />)) : 'Carregando...' }
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  cartItems: PropTypes.shape({}),
  addToCart: PropTypes.func,
}.isRequired;
