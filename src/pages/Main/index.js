import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import ListCategories from '../../components/ListCategories';
import Input from '../../services/input';

class Main extends React.Component {
  click() {
    return <Redirect to="/carrinho-de-compras" />;
  }

  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
        <Input />
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho-de-compras"
        >
          Carrinho de compras

        </Link>
        <aside>
          <ListCategories />
        </aside>
      </div>
    );
  }
}

export default Main;
