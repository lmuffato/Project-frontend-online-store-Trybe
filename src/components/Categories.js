import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        { categories
          .map(({ id, name }) => <li key={ id } data-testid="category">{ name }</li>) }
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};
