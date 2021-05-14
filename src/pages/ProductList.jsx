import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../components/CategoriesList';

class ProductList extends Component {
  render() {
    return (
      <section>
        <CategoriesList />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
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

export default ProductList;
