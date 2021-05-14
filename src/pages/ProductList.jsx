import React, { Component } from 'react';
import CategoriesList from '../components/CategoriesList';

class ProductList extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
      </div>
    );
  }
}

export default ProductList;
