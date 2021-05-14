import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/home.css';

class Home extends Component {
  render() {
    return (
      <main>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>

        <button type="button">
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img
              className="shopping-cart"
              src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
              alt="carrinho de compras"
            />
          </Link>
        </button>
      </main>
    );
  }
}

export default Home;
