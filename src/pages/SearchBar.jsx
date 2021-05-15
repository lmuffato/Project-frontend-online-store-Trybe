import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './images/shoppingCart.png';
import { getCategories } from '../services/api';
import Loading from './Loading';
import './Styles/Content.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      loading: true,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const results = await getCategories();
    this.setState({ categories: results, loading: false });
  }

  render() {
    const { categories, loading } = this.state;
    return (
      <section className="container">
        <nav className="content">
          { loading ? <Loading />
            : categories.map((category) => (
              <label
                data-testid="category"
                htmlFor="categoryInput"
                key={ category.id }
              >
                { category.name }
                <input id="categoryInput" type="checkbox" />
              </label>
            ))}
        </nav>
        <section className="search">
          <label data-testid="home-initial-message" htmlFor="searchBar">
            <input id="searchBar" type="search" />
            <br />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <Link
            to="/CartContent"
            data-testid="shopping-cart-button"
          >
            <img style={ { width: '40px' } } src={ Cart } alt="Carrinho de compras" />
          </Link>
        </section>
      </section>
    );
  }
}

export default SearchBar;
