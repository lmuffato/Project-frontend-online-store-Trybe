import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Components/Category';
import Loading from '../Components/Loading';

import * as api from '../services/api';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);

    this.state = {
      categories: [],
      status: {
        isCategoriesLoading: true,
        isProdutcsLoading: true,
      },
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    this.setState(
      ({ status: { isProdutcsLoading } }) => ({
        status: {
          isCategoriesLoading: true,
          isProdutcsLoading,
        },
      }),
      async () => {
        const categoriesList = await api.getCategories();
        this.setState(({ status: { isProdutcsLoading } }) => ({
          categories: categoriesList,
          status: {
            isCategoriesLoading: false,
            isProdutcsLoading,
          },
        }));
      },
    );
  }

  render() {
    const {
      categories,
      status: {
        isCategoriesLoading,
        // isProdutcsLoading,
      } } = this.state;

    return (
      <div className="home-container">
        <aside>
          <ul className="categories">
            {
              isCategoriesLoading ? <Loading />
                : categories.map((category) => (
                  <Category key={ category.id } { ...category } />
                ))
            }
          </ul>
        </aside>

        <main className="produtcs">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>

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
      </div>
    );
  }
}

export default Home;
