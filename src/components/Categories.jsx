import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    api.getCategories().then((data) => {
      this.setState({ categories: data });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ol className="categories-list">
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">{category.name}</li>))}
        </ol>
      </div>
    );
  }
}

export default Categories;
