import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  categories = async () => {
    const categoriesList = await api.getCategories();
    this.setState({ categories: categoriesList });
  }

  render() {
    const { categories } = this.state;
    const { filterCategory } = this.props;
    return (
      <div>
        <h3>Categorias:</h3>
        {categories.map((categoria) => (
          <div key={ categoria.id }>
            <label htmlFor={ categoria.id }>
              {categoria.name}
              <input
                data-testid="category"
                type="radio"
                id={ categoria.id }
                value={ categoria.name }
                name="categories"
                onChange={ filterCategory }
              />
            </label>
            <br />
          </div>))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};
export default CategoriesList;
