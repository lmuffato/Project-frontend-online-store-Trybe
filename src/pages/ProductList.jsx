import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img
              src="../src/img/shopping-basket.jpg"
              alt="icone de crrinho de compras"
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default ProductList;
