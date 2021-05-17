import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class ListCategories extends React.Component {
  async componentDidMount() {
    const { setCategories } = this.props;
    const data = await getCategories();
    setCategories(data);
  }

  render() {
    const { categories } = this.props;
    const { setCategorySelected } = this.props;
    return (
      <div>
        <ul>
          {
            categories
              .map((category, index) => (
                <li key={ index }>
                  <Link
                    to="/"
                    onClick={ () => setCategorySelected(category.id) }
                    data-testid="category"
                  >
                    { category.name }
                  </Link>
                </li>))
          }
        </ul>
      </div>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCategories: PropTypes.func.isRequired,
  setCategorySelected: PropTypes.func.isRequired,
};

export default ListCategories;
