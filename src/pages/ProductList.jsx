import React from 'react';
import { getCategories } from '../services/api';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.callCategories();
  }

  callCategories = () => {
    getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log(error));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((item) => (
          <label htmlFor="category" key={ item.id } data-testid="category">
            {item.name}
            <input type="checkbox" />
          </label>
        ))}
      </div>
    );
  }
}
