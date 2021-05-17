// implement AddMovie component here
import React, { Component } from 'react';
import SearchProduct from '../components/SearchProducts';
import CategoriesBar from '../components/CategoriesBar';

class ProductList extends Component {
  render() {
    // const { } = this.props;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="searchProduct"
            // value={ searchText }
            // onChange={ }
          />
        </label>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <SearchProduct />
        </div>
        <CategoriesBar />
      </div>
    );
  }
}

export default ProductList;