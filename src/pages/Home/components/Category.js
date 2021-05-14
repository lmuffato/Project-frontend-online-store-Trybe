import React from 'react';
import { getCategories } from '../../../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const request = await getCategories();
    this.setState({
      categories: request,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) => (
          <li data-testid="category" key={ category.id }>
            { category.name}
          </li>
        ))}
      </ul>
    );
  }
}
export default Category;
