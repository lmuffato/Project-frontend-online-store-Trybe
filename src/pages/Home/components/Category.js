import React from 'react';
import PropTypes from 'prop-types';
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
    const { onCategorySelection } = this.props;
    return (
      <div>
        <p>Categorias</p>
        {categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor={ `category-${category.id}` } data-testid="category">
              <input
                type="radio"
                id={ `category-${category.id}` }
                name="category"
                value={ category.id }
                onClick={ (event) => onCategorySelection(event.target.value) }
              />
              { category.name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;

Category.propTypes = {
  onCategorySelection: PropTypes.func,
}.isRequired;
