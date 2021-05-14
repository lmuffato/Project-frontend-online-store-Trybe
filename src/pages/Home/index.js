import React from 'react';
import { Link } from 'react-router-dom';
import Category from './components/Category';

class Home extends React.Component {
  render() {
    return (
      <>
        <input type="text" />
        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category />

      </>
    );
  }
}

export default Home;
