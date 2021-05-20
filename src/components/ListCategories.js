import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class ListCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { fetchProducts } = this.props;

    return (
      <aside className="category-id">
        <h3>Categorias:</h3>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <label htmlFor="category">
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  value={ category.id }
                  onClick={ ({ target: { value } }) => fetchProducts(value) }
                />
                { category.name }
              </label>
            </div>
          ))
        }
      </aside>
    );
  }
}

ListCategories.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};
