import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.categoriesList = this.categoriesList.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      categories: undefined,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  categoriesList(categories) {
    return categories.map((category) => (
      <li
        data-testid="category"
        key={ category.id }
      >
        { category.name }
      </li>));
  }

  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul>
          { categories ? this.categoriesList(categories) : 'loading...' }
        </ul>
      </aside>
    );
  }
}

export default Categories;
