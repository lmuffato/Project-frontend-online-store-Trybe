import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function CategoriesBar(props) {
  const { categories, onClick } = props;

  return (
    <aside>
      <h1>Categorias:</h1>
      <ul>
        {categories.map((category) => (
          <button
            className="category-item"
            type="button"
            key={ category.id }
            data-testid="category"
            onClick={ () => onClick(category.id) }
          >
            { category.name }
          </button>))}
      </ul>
    </aside>
  );
}

CategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  )
    .isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoriesBar;
