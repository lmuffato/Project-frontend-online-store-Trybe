import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';

import ProductCard from './ProductCard';
import Categories from './Categories';

class ListagemProdutos extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: false,
      query: '',
      category: '',
    };
  }

  fetchAPI = () => {
    const { query, category } = this.state;
    this.setState(
      { isLoading: true },
      async () => {
        const { results } = await api.getProductsFromCategoryAndQuery(category, query);
        this.setState({
          products: results,
          isLoading: false,
        });
      },
    );
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      query: target.value,
    });
  }

  handleChangeCategory = (category) => {
    this.setState(
      { category },
      () => this.fetchAPI(),
    );
  }

  render() {
    const { products, isLoading } = this.state;
    console.log(products);

    if (isLoading) {
      return (
        <p>Carregando...</p>
      );
    }

    return (
      <div>
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            type="text"
            onChange={ (e) => this.handleChangeInput(e) }
          />
        </label>
        <button data-testid="query-button" type="button" onClick={ this.fetchAPI }>
          Pesquisar
        </button>

        <Categories onClick={ this.handleChangeCategory } />
        <aside>
          <Link to="/cart">
            <button type="button" data-testid="shopping-cart-button">Cart</button>
          </Link>
        </aside>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products === []
          ? (<p>Nenhum produto foi encontrado</p>)
          : products.map(({ title, price, thumbnail, id }) => (
            <ProductCard
              id={ id }
              key={ id }
              title={ title }
              price={ price }
              imagePath={ thumbnail }
            />
          ))}
      </div>
    );
  }
}

export default ListagemProdutos;
