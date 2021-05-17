import React from 'react';
import { Redirect } from 'react-router';
import ListCategories from '../../components/ListCategories';

function Click() {
  return <Redirect to='/carrinho-de-compras' />;
}

function Main() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <label htmlFor="input">
        <input type="text" id="input" />
        <button onClick={ Click }>Carrinho de compras</button>
      </label>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <aside>
        <ListCategories />
      </aside>
    </div>
  );
}

export default Main;
