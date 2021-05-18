import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <label htmlFor="search-bar">
          <input onChange={ onChange } name="searchBar" id="search-bar" />
        </label>
      </div>
    );
  }
}
