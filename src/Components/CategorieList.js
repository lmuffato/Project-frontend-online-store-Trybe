import React from 'react';
import * as api from '../services/api';

class CategorieList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id } data-testid="category">{categorie.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategorieList;
