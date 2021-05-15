import React, { Component } from 'react';
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
    return (
      <div>
        <h3>Categorias:</h3>
        {categories.map((categoria) => (
          <>
            <label key={ categoria.id } htmlFor={ categoria.id }>
              {categoria.name}
              <input
                data-testid="category"
                type="radio"
                id={ categoria.id }
                value={ categoria.name }
                name={ categoria.name }
              />
            </label>
            <br />
          </>))}
      </div>
    );
  }
}

export default CategoriesList;
