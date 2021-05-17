import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <ul>
          {getCategories().map(({ name, id }) => <li key={ id }>{name}</li>)}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
