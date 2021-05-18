import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../imagens/shoppingCart.svg';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: undefined,
      checkbox: '',
      // checked: false,
      items: [],
      loading: true,
    };
  }

  request = () => {
    const { input, checkbox } = this.state;
    getProductsFromCategoryAndQuery(checkbox, input)
      .then((finalData) => {
        this.setState({
          loading: false,
          items: finalData.results,
        });
      });
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }

  handleChangeCheckbox = async ({ target }) => {
    await this.setState(() => ({
      checkbox: target.value,
    }));
    this.request();
  }

  handleArrayItems = (items) => {
    if (items.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    const { input, loading, items } = this.state;
    return (
      <div className="content-container">
        <section className="search-and-products">
          <div className="searchbar-container">
            <button
              type="submit"
              data-testid="query-button"
              id="search-button"
              onClick={ this.request }
            >
              Pesquisar
            </button>
            <input
              type="text"
              name="input"
              className="searchbar"
              onChange={ this.handleChangeInput }
              data-testid="query-input"
            />
            <Link
              to="/ShoppingCart"
              data-testid="shopping-cart-button"
              className="shopping-cart-button"
            >
              <img
                src={ shoppingCart }
                alt="Carrinho de compras"
                className="shopping-cart-image"
              />
            </Link>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {loading
            ? <Loading />
            : items.map((item) => <ProductCard item={ item } key={ item.id } />)}
        </section>
        <CategoryList
          className="product-list"
          handleChange={ this.handleChangeCheckbox }
          // request={ this.request }
        />
      </div>
    );
  }
}
