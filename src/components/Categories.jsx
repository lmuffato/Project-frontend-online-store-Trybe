import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, handleClick } = this.props;

    return (
      <>
        {categories.map((category) => (
          <button
            type="button"
            id={ category.id }
            data-testid="category"
            key={ category.id }
            onClick={ handleClick }
          >
            {category.name}
          </button>
        ))}
      </>
    );
  }
}

Categories.defaultProps = {
  handleClick: () => {},
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func,
};

export default Categories;
