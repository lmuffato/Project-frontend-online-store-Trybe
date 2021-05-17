import React, { Component } from 'react';
import Product from '../components/Product';
import SideBar from '../components/SideBar';
import ButtonCart from '../components/ButtonCart';
<<<<<<< HEAD
import { SideBar, ButtonCart } from '../'
=======
import * as api from '../services/api';
>>>>>>> 31afc135192dc219d799a9a6fd007c24d2dfb398

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
      loading: false,
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  }

  getProducts = async () => {
    const { query } = this.state;
    const apiProducts = await api.getProductsFromCategoryAndQuery('all', query);
    return apiProducts.results;
  }

  handleClick = () => {
    this.getProducts().then((response) => {
      this.setState({
        products: response,
        loading: true,
      });
    });
  }

  render() {
    const { products, loading } = this.state;
    // console.log(products, 'oi');
    return (
      <main>
        <label data-testid="home-initial-message" htmlFor="search">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input id="search" data-testid="query-input" onChange={ this.handleChange } />
          <button type="button" data-testid="query-button" onClick={ this.handleClick }>
            Buscar
          </button>
        </label>
        <SideBar />
        <ButtonCart />
        <section>
          { loading ? products.map((product, index) => (<Product
            key={ index }
            product={ product }
          />)) : <span>Nenhum produto foi encontrado</span> }
        </section>
      </main>
    );
  }
}
