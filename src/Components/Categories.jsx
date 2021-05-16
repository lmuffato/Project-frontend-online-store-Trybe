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
    const { onChange, value } = this.props;

    if (didMount === false) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div>
        <select value={ value } onChange={ (e) => onChange(e) }>
          {
            categories.map((cat) => (
              <option
                value={ cat.id }
                data-testid="category"
                key={ cat.name }
              >
                { cat.name }
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Categories;
