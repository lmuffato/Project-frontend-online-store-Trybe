import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, handleInputChange } = this.props;

    return (
      <input
        type="number"
        data-testid="rating-input"
        id="rating"
        min="0"
        max="5"
        onChange={ handleInputChange }
        value={ value }
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
}.isRequired;
