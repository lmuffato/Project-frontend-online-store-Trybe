import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="search-bar">
          <input name="searchBar" onChange={ onChange } id="search-bar" />
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
