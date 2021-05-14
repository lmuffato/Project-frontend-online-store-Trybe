import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: [],
    };
  }

  componentDidMount() {
    api.getCategories().then(
      (results) => this.setState({ categoryName: results }),
    );
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
