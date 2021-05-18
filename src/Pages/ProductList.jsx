// implement AddMovie component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './ShoppinCart/cartIcon.png';
import SearchProduct from '../components/SearchProducts';
import CategoriesBar from '../components/CategoriesBar';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
  }

  handle = (category) => {
    this.setState({ category });
  };

  render() {
    const { handle } = this.props;
    const { category } = this.state;
    return (
      <div>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto
          <input
            placeholder="Pesquisar produto..."
            data-testid="text-input"
            type="text"
            name="searchProduct"
          />
        </label>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          <img
            alt="shopping-cart"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <SearchProduct category={ category } handle={ handle } />
        </div>
        <CategoriesBar handle={ this.handle } />
      </div>
    );
  }
}

export default ProductList;
