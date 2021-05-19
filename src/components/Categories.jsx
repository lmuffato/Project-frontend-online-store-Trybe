import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { onChange } = this.props;
    return (
      <div>
        <h2>Categorias:</h2>
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id }>
            <input
              type="radio"
              id={ category.id }
              name="selectedCategory"
              value={ category.id }
              data-testid="category"
              onChange={ onChange }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Categories;
