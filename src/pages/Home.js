import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import Product from '../components/Product';
import ButtonCart from '../components/ButtonCart';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      loading: false,
      category: 'all',
      cartItems: {},
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

  addToCart = (id, productInfo) => {
    this.setState(({ cartItems }) => ({
      cartItems: { ...cartItems, [id]: productInfo },
    }));
  }

  render() {
    const { products, loading, cartItems } = this.state;
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
        <ButtonCart cart={ cartItems } />
        <section>
          { !loading ? products.map((product, index) => (<Product
            key={ index }
            product={ product }
            addToCart={ this.addToCart }
          />)) : 'Carregando...' }
          { products ? <span>Nenhum produto foi encontrado</span> : '' }
        </section>
      </main>
    );
  }
}
