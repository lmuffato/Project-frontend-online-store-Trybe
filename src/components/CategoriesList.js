import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick: handleChange } = this.props;
    handleChange(event);
  }

  render() {
    const { categories } = this.props;
    return (
      <ul>
        { categories.map((category) => (
          <Category
            onClick={ this.handleClick }
            key={ category.id }
            category={ category }
          />)) }
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
}.isRequired;
