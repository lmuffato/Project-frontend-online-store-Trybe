import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

fetchCategories = async () => {
  const response = await getCategories();
  this.setState({
    categories: response,
  });
}

render() {
  const { categories } = this.state;
  return (
    <div>
      <ul>
        {categories
          .map(({ name, id }) => (
            <li data-testid="category" key={ id }>{name}</li>
          ))}
      </ul>
    </div>
  );
}
}

export default CategoryList;
