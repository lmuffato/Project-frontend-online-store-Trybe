import React, { Component } from 'react';
import { func } from 'prop-types';
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
    const { onClick } = this.props;
    return (
      <div>
        <div className="category-buttons">
          {categories
            .map(({ name, id }) => (
              <button
                className="category"
                type="button"
                data-testid="category"
                id={ id }
                key={ id }
                onClick={ onClick }
              >
                { name }
                {/* { id } */}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  onClick: func,
}.isRequired;

export default CategoryList;
