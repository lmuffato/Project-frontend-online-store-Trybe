import React, { Component } from 'react';
import Categories from './Categories';

class ListagemProdutos extends Component {
  render() {
    return (
      <div>
        <Categories />
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemProdutos;
