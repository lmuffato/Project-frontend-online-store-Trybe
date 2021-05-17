import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import ListCategories from '../../components/ListCategories';

class Main extends React.Component {
  click() {
    return <Redirect to="/carrinho-de-compras" />;
  }

  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
        <label htmlFor="input">
          <input type="text" id="input" />
        </label>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho-de-compras"
        >
          Carrinho de compras

        </Link>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <aside>
          <ListCategories />
        </aside>
      </div>
    );
  }
}

export default Main;
