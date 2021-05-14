import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleFetchCategories = this.handleFetchCategories.bind(this);
  }

  componentDidMount() {
    this.handleFetchCategories();
  }

  async handleFetchCategories() {
    this.setState({ categories: [] }, () => {
      api.getCategories().then((data) => {
        this.setState({ categories: data });
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li data-testid="category" key={ category.id }>{category.name}</li>
        ))}
      </ul>
    );
  }
}

export default Categories;
