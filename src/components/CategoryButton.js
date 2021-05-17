import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryButton extends Component {
  render() {
    const { category: { name, id }, handleChange } = this.props;

    return (
      <label htmlFor={ name } data-testid="category">

        <input
          id={ name }
          type="radio"
          value={ id }
          name="category"
          onChange={ handleChange }
        />
        {name}
      </label>
    );
  }
}

CategoryButton.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
