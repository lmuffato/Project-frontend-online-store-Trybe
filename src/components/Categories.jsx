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

  categoriesList(categories) {
    return categories.map((category) => (
      <li data-testid="category" key={ category.id }>
        {category.name}
      </li>
    ));
  }

  render() {
    const { categories } = this.props;

    return (
      <aside>
        <ul>
          {categories
            ? this.categoriesList(categories)
            : 'loading...'}
        </ul>
      </aside>
    );
  }
}

Categories.propTypes = {
  getData: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
