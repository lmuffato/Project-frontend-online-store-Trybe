import React from 'react';
import { getCategories } from '../services/api';

class CategoriesBar extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleClick() {
    console.log('Categoria selecionada');
  }

  async fetchCategories() {
    const arrayCategoria = await getCategories();
    this.setState({
      categories: arrayCategoria,
    });
  }

  allCategories() {
    const { categories } = this.state;
    return categories.map((category) => this.renderLi(category));
  }

  renderLi(category) {
    return (
      <li
        key={ category.id }
        data-testid="category"
        id={ category.id }
      >
        <button type="submit" onClick={ this.handleClick }>{category.name}</button>
      </li>
    );
  }

  render() {
    return (
      <div>
        <p>Categorias:</p>
        <ul>{this.allCategories()}</ul>
      </div>
    );
  }
}

export default CategoriesBar;
