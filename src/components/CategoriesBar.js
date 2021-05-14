import React from 'react';
import { getCategories } from '../services/api';

class CategoriesBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const arrayCategoria = await getCategories();
    this.setState({
      categories: arrayCategoria,
    });
  }

  renderLi(category) {
    return (
      <li
        key={ category.id }
        data-testid="category"
        id={ category.id }
      >
        {category.name}
      </li>
    );
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p>Categorias:</p>
        <ul>{categories.map((category) => this.renderLi(category))}</ul>
      </div>
    );
  }
}

export default CategoriesBar;
