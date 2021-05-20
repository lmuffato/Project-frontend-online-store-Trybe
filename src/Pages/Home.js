import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../Components/CardItem';
import Category from '../Components/Category';
import Loading from '../Components/Loading';
import * as api from '../services/api';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      cart: [],
      query: '',
      categoryId: '',
      isCategoriesLoading: true,
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const categoriesList = await api.getCategories();
    this.setState({
      categories: categoriesList,
      isCategoriesLoading: false,
    });
  };

  newStateCategoryAndQuery = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.fetchItem();
    });
  }

  fetchItem = async () => {
    const { query, categoryId } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: data.results,
    });
  }

  productToCart = (productObj) => {
    this.setState(({ cart }) => ({
      cart: [...cart, productObj],
    }));
  }

  render() {
    const {
      categories,
      products,
      isCategoriesLoading,
      cart,
    } = this.state;

    return (
      <div className="home-container">
        <aside>
          <form className="categories">
            {
              isCategoriesLoading ? <Loading />
                : categories.map((category) => (
                  <Category
                    { ...category }
                    key={ category.id }
                    onChange={ this.newStateCategoryAndQuery }
                  />
                ))
            }
          </form>
        </aside>

        <main className="main-products">
          <header className="home-header">
            <label htmlFor="query" className="query-label">
              <input
                className="query-input"
                name="query"
                onChange={ this.newStateCategoryAndQuery }
                type="text"
                data-testid="query-input"
              />
              <button type="button" data-testid="query-button">
                Pesquisar
              </button>
            </label>

            <Link
              to={ {
                pathname: '/shopping-cart',
                state: { cart },
              } }
              data-testid="shopping-cart-button"
            >
              <img
                className="shopping-cart-icon"
                src="https://image.flaticon.com/icons/png/128/833/833314.png"
                alt="carrinho de compras"
              />
            </Link>
          </header>

          <h3
            data-testid="home-initial-message"
            className="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>

          <section>
            <ul className="products">
              {products.map((product) => (
                <CardItem
                  productToCart={ this.productToCart }
                  key={ product.id }
                  product={ { ...product } }
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
