import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import './CategoriesBar.css';

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

  handleClick({ target: { value } }) {
    const { handle } = this.props;
    handle(value);
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
      <button
        className="category-item"
        key={ category.id }
        id={ category.id }
        type="button"
        data-testid="category"
        value={ category.id }
        onClick={ this.handleClick }
      >
        {category.name}
      </button>
    );
  }

  render() {
    return (
      <section className="categories">
        <h3>Categorias:</h3>
        <aside className="categories">{this.allCategories()}</aside>
      </section>
    );
  }
}

CategoriesBar.propTypes = {
  handle: PropTypes.func.isRequired,
};

export default CategoriesBar;
