import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { name } = this.props;
    return (
      <li data-testid="category" className="category">
        {name}
      </li>
    );
  }
}

Categories.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Categories;
