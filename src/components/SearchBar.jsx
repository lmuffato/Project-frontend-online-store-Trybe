import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { getProductsFromCategoryAndQuery } from '../services/api';

// import ShoppingCart from './ShoppingCart';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const { search } = this.state;
    const response = await getProductsFromCategoryAndQuery(search);
    console.log(response);
    this.setState({
      products: response,
    });
  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  }

  render() {
    const { search } = this.state;
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
          <input
            data-testid="query-input"
            className="home-initial-message"
            id="home-initial-message"
            type="search"
            onChange={ this.onSearchTextChange }
            value={ search }
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          />
          <button className="btn-search" type="button" data-testid="query-button">
            <FaSearch color="#3BC18C" size="1rem" />
          </button>
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
      </div>
    );
  }
}

export default SearchBar;
