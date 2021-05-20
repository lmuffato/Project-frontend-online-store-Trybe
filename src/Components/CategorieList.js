import React from 'react';
import * as api from '../services/api';
import Cards from './Cards';

class CategorieList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoriesList: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  async handleCategories({ target }) {
    const { name } = target;
    const idProduct = target.checked && name;
    const category = await api.getProductsFromCategoryAndQuery(idProduct, '');
    const { results } = category;
    this.setState({
      categoriesList: results,
    });
  }

  render() {
    const { categories, categoriesList } = this.state;
    return (
      <div>
        <div>
          {categories.map((categorie) => (
            <div key={ categorie.id }>
              <input
                type="checkbox"
                onClick={ this.handleCategories }
                data-testid="category"
                name={ categorie.id }
              />
              <label htmlFor={ categorie.id }>
                {categorie.name}
              </label>
            </div>
          ))}

        </div>
        {categoriesList.map((categorie) => (<Cards
          key={ categorie.id }
          product={ categorie }
        />))}
      </div>
    );
  }
}

export default CategorieList;
