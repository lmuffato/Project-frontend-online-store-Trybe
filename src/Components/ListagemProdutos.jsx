import React, { Component } from 'react';

import ProductCard from './ProductCard';

class ListagemProdutos extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: false,
      query: '',
    };
  }

  fetchAPI = () => {
    const { query } = this.state;
    this.setState(
      { isLoading: true },
      async () => {
        const { results } = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
          .then((data) => data.json());
        console.log(results);
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

  render() {
    const { products, isLoading } = this.state;

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
        <button query-button="query-button" type="button" onClick={ this.fetchAPI }>
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products === []
          ? (<p>Nenhum produto foi encontrado</p>)
          : products.map(({ title, price, thumbnail, id }) => (
            <ProductCard
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
