import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { name, onChange, id } = this.props;
    return (
      <label htmlFor="category">
        {name}
        <input
          name="categoryId"
          type="radio"
          data-testid="category"
          className="category"
          onChange={ onChange }
          value={ id }
        />
      </label>
    );
  }
}

Categories.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Categories;
