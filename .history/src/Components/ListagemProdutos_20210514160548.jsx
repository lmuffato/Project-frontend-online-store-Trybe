import React, { Component } from 'react';

class ListagemProdutos extends Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="home-initial-message" />
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemProdutos;
