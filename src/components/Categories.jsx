import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  constructor() {
    super();
    this.categoriesList = this.categoriesList.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  categoriesList(categories, onClick) {
    return categories.map((category) => (
      <li key={ category.id }>
        <button
          data-testid="category"
          type="button"
          onClick={ () => onClick(category.id) }
        >
          {category.name}
        </button>
      </li>
    ));
  }

  render() {
    const { categories, onClick } = this.props;

    return (
      <aside className="color">
        <ul>
          {categories
            ? this.categoriesList(categories, onClick)
            : 'loading...'}
        </ul>
      </aside>
    );
  }
}

Categories.propTypes = {
  getData: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
