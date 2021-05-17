import React, { Component } from 'react';
import Product from '../components/Product';
import SideBar from '../components/SideBar';
import ButtonCart from '../components/ButtonCart';
import * as api from '../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  }

  handleClick = async () => {
    const { query } = this.state;
    this.setState({
      products: await api.getItemsByTerm(query),
    });
    console.log(this.state.products);
  }

  render() {
    const { products } = this.state;
    console.log(products);
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
          {products.map(({ results }) => (<Product
            key={ product.id }
            product={ results }
          />))}
        </section>
      </main>
    );
  }
}
