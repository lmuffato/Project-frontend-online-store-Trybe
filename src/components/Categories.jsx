import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const endPoint = await api.getCategories();
    this.setState({ categories: endPoint });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Categorias:</h2>
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id }>
            { category.name }
            <input
              type="radio"
              id={ category.id }
              name="selected-category"
              value={ category.name }
              data-testid="category"
            />
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
