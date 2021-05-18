import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log(error));
  }

  render() {
    const { categories } = this.state;
    const { handleChangeCheckbox } = this.props;
    return (
      <div className="category-box">
        {categories.map((item) => (
          <label
            htmlFor="category"
            key={ item.id }
            data-testid="category"
            className="category"
          >
            <input
              type="radio"
              name="radio"
              value={ item.id }
              onClick={ handleChangeCheckbox }
              className="category-checkbox"
            />
            {item.name}
          </label>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  handleChangeCheckbox: PropTypes.func,
}.isRequired;
