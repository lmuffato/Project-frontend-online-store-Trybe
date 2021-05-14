import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryButton extends Component {
  render() {
    const { category: { name } } = this.props;
    return (
      <label htmlFor={ name } data-testid="category">

        <input id={ name } type="radio" value={ name } />
        {name}
      </label>
    );
  }
}

CategoryButton.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
