import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    this.setState(async () => {
      const response = await api.getCategories();
      this.setState(() => ({
        categories: [...response],
      }));
    });
  }

  render() {
    const { categories } = this.state;
    const { value, onChange } = this.props;
    return (
      <div className="categories">
        <h1>Categorias</h1>
        <select value={ value } onChange={ onChange } data-testid="category">
          {
            categories.map((category) => (
              <option
                value={ category.id }
                
                key={ category.name }
              >
                { category.name }
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

Category.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Category;
