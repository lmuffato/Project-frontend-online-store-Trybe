import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';
import Products from './Products';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: false,
      category: '',
      query: '',
    };
  }
  // Desenvolvemos a mudança das rotas e implementações das funções nos componentes onde deveriam buscar os conteúdos de pesquisa.
  // Fizemos essas mudanças em nosso código analizando o PR do grupo 4.

  fetchAPI = () => {
    const { category, query } = this.state;
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

  handleChangeInput = ({ target }) => {
    this.setState({
      query: target.value,
    });
  }

  handleClick = () => {
    this.fetchAPI();
  }

  categoryClick = ({ target }) => {
    const { id } = target;
    this.setState({ category: id }, () => this.fetchAPI());
  }

  render() {
    const { query, products, loading } = this.state;

    return (
      <div className="container">
        <CategoryList
          onClick={ this.categoryClick }
        />
        <h1>Frontend Online Store</h1>
        <div className="home">
          <Link to="./CategoryList">
            <FaBars
              className="bars"
              color="#3bc18c"
              size="1rem"
            />
          </Link>
          <SearchBar
            value={ query }
            onClick={ this.handleClick }
            onChange={ this.handleChangeInput }
          />
        </div>
        <Products products={ products } />
        { loading && '...carregando' }
      </div>
    );
  }
}
// xablau
export default Home;
