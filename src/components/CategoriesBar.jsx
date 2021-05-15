import React from 'react';
import PropTypes from 'prop-types';

function CategoriesBar(props) {
  const { categories } = props;

  return (
    <aside>
      <h1>Categorias</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={ category.id }
            data-testid="category"
          >
            { category.name }
          </li>))}
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
};

export default CategoriesBar;
