import React, { Component } from 'react';
import { getCategories } from '../services/api';

class FilterCategory extends Component {
  render() {
    const test = async () => {
      const arrayCategory = await getCategories();
      return arrayCategory;
    };
    const arrayCategory = test();
    console.log(test());
    return (
      <div>
        {arrayCategory.map((item) => (
          <div key={ item.id }>
            <label htmlFor="category">
              {item.name}
              <input data-testid="category " type="checkbox" />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default FilterCategory;
z