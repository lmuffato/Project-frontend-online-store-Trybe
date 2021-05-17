// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './ShoppinCart/cartIcon.png';
import SearchProduct from '../components/SearchProducts';
import CategoriesBar from '../components/CategoriesBar';

class ProductList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      categorie: '',
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            placeholder="Pesquisar produto..."
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
        <Link
          to="/ShoppingCart"
        >
          <img
            alt="shopping-cart"
            data-testid="shopping-cart-button"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
        <CategoriesBar />
      </div>
    );
  }
}

export default ProductList;
