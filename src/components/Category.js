import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {
  render() {
    const { category: { name, id }, onClick } = this.props;
    return (
      <li>
        <button
          type="button"
          onClick={ onClick }
          data-testid="category"
          name="category"
          value={ id }
        >
          {name}
        </button>
      </li>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
}.isRequired;
