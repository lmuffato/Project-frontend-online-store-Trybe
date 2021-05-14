import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../services/Carrinho-compras.png';

class Home extends Component {
  render() {
    const propsLink = {
      className: 'btn-cart',
      'data-testid': 'shopping-cart-button',
      to: '/carrinho',
    };

    return (
      <section>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link { ...propsLink }>
          <img
            className="img-cart"
            src={ carrinho }
            alt="Logo Cart"
          />
        </Link>
      </section>
    );
  }
}

export default Home;
