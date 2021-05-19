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
      query: '',
      categoryId: '',
      isCategoriesLoading: true,
      cart: [],
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

  cartId = (productObj) => {
    this.setState(({ cart }) => ({
      cart: [...cart, productObj],
    }));
  }

  render() {
    const {
      categories,
      products,
      isCategoriesLoading,
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

        <main className="produtcs">

          <label htmlFor="myInput">
            <input
              id="myInput"
              name="query"
              onChange={ this.newStateCategoryAndQuery }
              type="text"
              data-testid="query-input"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.fetchItem }
            >
              Pesquisar
            </button>
          </label>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <br />
          <button type="button">
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                className="shopping-cart"
                src="https://img2.gratispng.com/20180425/lcq/kisspng-computer-icons-shopping-cart-5ae061983e57a6.1325375415246544882554.jpg"
                alt="carrinho de compras"
              />
            </Link>
          </button>

          <section>
            <ul className="products">
              {products.map((product) => (
                <CardItem cart={ this.cartId } key={ product.id } { ...product } />
              ))}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
