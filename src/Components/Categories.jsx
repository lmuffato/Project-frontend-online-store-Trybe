import React from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      didMount: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categorias = await getCategories();
    this.setState({ categories: categorias, didMount: true });
  }

  render() {
    const { categories, didMount } = this.state;
    const { onClick } = this.props;

    if (didMount === false) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div>
        <ul style={ { display: 'flex', flexDirection: 'column' } }>
          {categories
            .map((cat) => (
              <label htmlFor="category" key={ cat.id }>
                <input
                  data-testid="category"
                  type="radio"
                  name="category"
                  onClick={ () => onClick(cat.id) }
                />
                {cat.name}
              </label>
            ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
