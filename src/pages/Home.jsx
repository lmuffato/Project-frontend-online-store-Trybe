import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../imagens/shoppingCart.svg';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      checkbox: [],
      checked: false,
      items: '',
    };
  }

  request = () => {
    const { input, checkbox } = this.state;
    getProductsFromCategoryAndQuery(checkbox, input)
      .then((item) => this.setState({
        items: item.results,
      }));
    // results.price, results.thumbnail, results.title
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }

  handleChangeCheckbox = ({ target }) => {
    const { checked } = this.state;

    this.setState((prevState) => ({
      checkbox: prevState.checkbox.splice(target.value),
      checked: target.checked,
    }));

    if (checked) {
      this.setState((prevState) => ({
        checkbox: [...prevState.checkbox, target.value],
        checked: target.checked,
      }));
    }
  }

  render() {
    const { input, items } = this.state;
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
          <div>
            {items.map((item) => (
              <div key={ item.id }>
                <h3>{item.title}</h3>
                <img src={ item.thumbnail } alt={ item.title } />
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <ProductList query={ input } />
        </section>
        <CategoryList
          className="product-list"
          handleChange={ this.handleChangeCheckbox }
        />
      </div>
    );
  }
}
