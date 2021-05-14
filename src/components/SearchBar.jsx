import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-bar">
          <input id="search-bar" />
        </label>
      </div>
    );
  }
}
