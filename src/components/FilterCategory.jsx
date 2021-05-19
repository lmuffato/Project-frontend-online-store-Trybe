import React, { Component } from 'react';
import { getCategories } from '../services/api';

class FilterCategory extends Component {
  constructor() {
    super();

    this.state = {
      arrayCategory: [],
    };
  }

  render() {
    // const test = () => {
    getCategories().then((category) => {
      this.setState({
        arrayCategory: category,
      });
    });
    // };
    const { arrayCategory } = this.state;
    console.log(arrayCategory);
    if (arrayCategory) {
      return (
        <div>
          {arrayCategory.map((item) => (
            <div key={ item.id }>
              <label htmlFor="category">
                {item.name}
                <input data-testid="category " type="radio" />
              </label>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default FilterCategory;
