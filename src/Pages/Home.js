import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/home.css';
import cardItem from '..Components/cardItem';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: undefined,
      categoryId: undefined,
    };
  }

  newStateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  fetchItem = async () => {
    const { query } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const data = await response.json();
    return data;
  }

  render() {
    return (
      <main>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>

        <label htmlFor="myInput">
          <input id="myInput" onChange={ this.newStateQuery } type="text" data-testid="query-input" />
          <button type="button" data-testid="query-button">Pesquisar</button>
        </label>
        <button type="button">
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img
              className="shopping-cart"
              src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
              alt="carrinho de compras"
            />
          </Link>
        </button>
      </main>
    );
  }
}

export default Home;
