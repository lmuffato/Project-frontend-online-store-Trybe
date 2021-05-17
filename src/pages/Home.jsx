import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import carrinho from '../services/Carrinho-compras.png';
import CardProduct from '../components/CardProduct';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      inputValue: '',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  handleSubmit = async () => {
    const { inputValue } = this.state;
    const request = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({ products: request.results });
  };

  async handleCategoryClicked(id) {
    const request = await getProductsFromCategoryAndQuery(id);
    this.setState({ products: request.results });
  }

  checkRequest = () => {
    const { products } = this.state;
    const { onClick } = this.props;
    if (products.length === 0) return <h2>Nenhum Produto encontrado</h2>;
    return (
      products
        .map((product) => <CardProduct onClick={ onClick } key={ product.id } product={ product } />)
    );
  };

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const propsLink = {
      className: 'btn-cart',
      'data-testid': 'shopping-cart-button',
      to: '/carrinho',
    };
    return (
      <section>
        <div>
          <label htmlFor="search" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              id="search"
              data-testid="query-input"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <button data-testid="query-button" type="button" onClick={ this.handleSubmit }>
            Pesquisar
          </button>
        </div>
        <Link { ...propsLink }>
          <img
            className="img-cart"
            src={ carrinho }
            alt="Logo Cart"
          />
        </Link>
        <ul>
          {categories.map(({ id, name }) => (
            <li
              key={ id }
            >
              <button
                type="button"
                onClick={ () => this.handleCategoryClicked(id) }
                data-testid="category"
              >
                {name}
              </button>
            </li>))}
        </ul>
        {this.checkRequest()}
      </section>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Home;
