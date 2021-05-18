import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

// import ShoppingCart from './ShoppingCart';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: false,
      query: '',
      category: '',
    };
  }
  // Funções feitas baseadas no code review do grupo 24

  fetchAPI = () => {
    const { query, category } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const { results } = await getProductsFromCategoryAndQuery(category, query);
        this.setState({
          products: results,
          loading: false,
        });
      },
    );
  }

  renderInput = () => {
    const { query } = this.state;
    return (
      <input
        data-testid="query-input"
        className="home-initial-message"
        id="home-initial-message"
        type="search"
        onChange={ this.handleChangeInput }
        value={ query }
        placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
      />
    );
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      query: target.value,
    });
  }

  renderButton = () => {
    const api = this.fetchAPI;
    return (
      <button
        className="btn-search"
        type="button"
        data-testid="query-button"
        onClick={ api }
      >
        <FaSearch color="#3BC18C" size="1rem" />
      </button>
    );
  }

  render() {
    const { products, loading } = this.state;

    if (loading) {
      return (
        <p>Carregando...</p>
      );
    }
    return (
      <div data-testid="home-initial-message">
        <div className="container-searchBar">
          <Link to="./CategoryList">
            <FaBars
              className="bars"
              color="#3BC18C"
              size="1rem"
            />
          </Link>
          {this.renderInput()}
          {this.renderButton()}
          <Link to="./ShoppingCart">
            <FaShoppingCart
              className="cart"
              color="#3BC18C"
              size="1.5rem"
              data-testid="shopping-cart-button"
            />
          </Link>
        </div>

        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <div className="product-list">
          { products === []
            ? (<p>Nenhum produto foi encontrado</p>)
            : products.map((product) => (
              <ProductCard
                product={ product }
                id={ product.id }
                key={ product.id }
                title={ product.title }
                price={ product.price }
                imagePath={ product.thumbnail_id }
                // onClick={ addCart }
              />
            ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
