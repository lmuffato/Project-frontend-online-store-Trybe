import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ListCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="category-id">
        <h1>Categorias:</h1>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <label htmlFor="category">
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  value={ category.id }
                />
                { category.name }
              </label>
            </div>
          ))
        }
      </aside>
    );
  }
}
