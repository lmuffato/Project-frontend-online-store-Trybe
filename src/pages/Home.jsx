import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../imagens/shoppingCart.svg';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: undefined,
      checkbox: [],
      checked: false,
      items: [],
      loading: true,
    };
  }

  request = () => {
    const { input, checkbox } = this.state;
    getProductsFromCategoryAndQuery(checkbox, input)
      .then((finalData) => {
        // console.log(finalData.results);
        this.setState({
          loading: false,
          items: finalData.results,
        });
      });
    // results.price, results.thumbnail, results.title
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }

  handleChangeCheckbox = async ({ target }) => {
    await this.setState((prevState) => ({
      checkbox: [...prevState.checkbox, target.value],
      checked: target.checked,
    }));
    const { checked } = this.state;
    if (checked === false) {
      // console.log('ok');
      this.setState((prevState) => ({
        checkbox: prevState.checkbox.filter((id) => id !== target.value),
      }));
    }
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
            : items.map((item) => <ProductList item={ item } key={ item.id } />)}
        </section>
        <CategoryList
          className="product-list"
          handleChange={ this.handleChangeCheckbox }
        />
      </div>
    );
  }
}
