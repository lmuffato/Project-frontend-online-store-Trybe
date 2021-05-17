import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../../services/api';
import CardProduct from './components/CardProduct';
import Category from './components/Category';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchedQuery: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { searchedQuery } = this.state;

    const request = await getProductsFromCategoryAndQuery('', searchedQuery);

    this.setState({
      products: request.results,
    });
  }

  handleChange({ target }) {
    this.setState({
      searchedQuery: target.value,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />

        <button
          data-testid="query-button"
          onClick={ this.handleClick }
          type="button"
        >
          Pesquisa
        </button>

        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <Link to="/cart">
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category />
        <CardProduct products={ products } />

      </>
    );
  }
}

export default Home;
