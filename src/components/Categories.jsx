import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as apiUrl from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  async categories() {
    const { getCategories } = apiUrl;
    const result = await getCategories();
    this.setState({
      categoryName: [...result],
    });
  }

  render() {
    const { func } = this.props;
    const { categoryName } = this.state;
    return (
      <aside>
        {categoryName.map((thisCategory) => (
          <button
            key={ thisCategory.id }
            type="button"
            data-testid="category"
            onClick={ func }
          >
            {thisCategory.name}
          </button>)) }
      </aside>
    );
  }
}

Categories.propTypes = {
  func: PropTypes.func.isRequired,
};
export default Categories;
