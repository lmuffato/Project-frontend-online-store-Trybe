import React, { Component } from 'react';
import Category from '../Components/Category';
import Loading from '../Components/Loading';

import * as api from '../services/api';

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
      <div id="home-container">
        <aside>
          <ul id="categories">
            {
              isCategoriesLoading ? <Loading />
                : categories.map((category) => (
                  <Category key={ category.id } { ...category } />
                ))
            }
          </ul>
        </aside>

        <main id="produtcs">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </main>
      </div>
    );
  }
}

export default Home;
