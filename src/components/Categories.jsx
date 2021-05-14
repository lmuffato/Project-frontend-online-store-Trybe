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
    this.setState({ categories: [] }, () => {
      api.getCategories().then((data) => {
        this.setState({ categories: data });
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ol className="categories-list">
          {categories.map((categorie) => (
            <li key={ categorie.id } data-testid="category">{categorie.name}</li>))}
        </ol>
      </div>
    );
  }
}

export default Categories;
