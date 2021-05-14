import React, { Component } from 'react';
import * as apiUrl from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  async categories() {
    const { getCategories } = apiUrl;
    const result = await getCategories();
    this.setState({
      categoryName: [...result],
    });
  }

  render() {
    const { categoryName } = this.state;
    return (
      <aside>
        {categoryName.map((thisCategory) => (
          <button
            key={ thisCategory.id }
            type="button"
            data-testid="category"
          >
            {thisCategory.name}
          </button>)) }
      </aside>
    );
  }
}

export default Categories;
