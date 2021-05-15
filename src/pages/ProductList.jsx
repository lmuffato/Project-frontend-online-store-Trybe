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
      <div className="category-box">
        {categories.map((item) => (
          <label
            htmlFor="category"
            key={ item.id }
            data-testid="category"
            className="category"
          >
            <input type="radio" className="category-checkbox" />
            {item.name}
          </label>
        ))}
      </div>
    );
  }
}
