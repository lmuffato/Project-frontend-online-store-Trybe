import React from 'react';
import PropTypes from 'prop-types';
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
    const { handleFunction } = this.props;
    return (
      <section id="categories" className="categories">
        {categories.map((category) => (
          <div key={ category.id }>
            <label htmlFor={ category.id }>
              <input
                type="radio"
                value={ category.id }
                name="checkFilter"
                onChange={ handleFunction }
                data-testid="category"
              />
              { category.name }
            </label>
            <br />
          </div>))}
      </section>
    );
  }
}

export default Category;

Category.propTypes = {
  handleFunction: PropTypes.func.isRequired,
};
