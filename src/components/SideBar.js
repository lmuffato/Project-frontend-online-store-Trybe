import React, { Component } from 'react';
import * as api from '../services/api';
import CategoryButton from './CategoryButton';

export default class SideBar extends Component {
  constructor() {
    super();

    this.categoriesApi = this.categoriesApi.bind(this);
    this.categoriesApi();

    this.state = {
      categories: [],
    };
  }

  async categoriesApi() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        {categories.map((category) => (<CategoryButton
          key={ category.id }
          category={ category }
        />))}
      </section>
    );
  }
}
