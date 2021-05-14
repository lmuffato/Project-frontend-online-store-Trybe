import React, { Component } from 'react';

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

export default Categories;
