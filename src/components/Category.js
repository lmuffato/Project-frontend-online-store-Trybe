import React, { Component } from 'react';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    this.setState(async () => {
      const response = await api.getCategories();
      this.setState((paststate) => ({
        categories: [...paststate.categories, ...response],
      }));
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        <h1>Categorias</h1>
        <ul>
          {
            categories.map((category) => (
              <li data-testid="category" key={ category.id }>{ category.name }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Category;
