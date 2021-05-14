import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';

class hom extends Component {
  render() {
    return (
      <section>
        <div>
          <CategoriesList />
          <input placeholder="Digite aqui"/>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                className="carrinho-compra"
                src="../images/shopping-basket.jpg"
                alt="icone de carrinho de compras"
              />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default hom;
