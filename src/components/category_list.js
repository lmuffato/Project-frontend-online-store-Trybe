import React from 'react';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.fetchCategory = this.fetchCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <ul>
          {categories.map((category) => (
            <li data-testid="category" key={ category.id }>
              { category.name }
            </li>))}
        </ul>
      </section>
    );
  }
}

export default Category;
