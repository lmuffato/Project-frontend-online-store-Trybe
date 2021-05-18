import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleClick, handleChange, query } = this.props;
    return (
      <div>
        <label htmlFor="searchBar">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <input
            data-testid="query-input"
            type="text"
            id="searchBar"
            name="query"
            value={ query }
            onChange={ handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ handleClick }
          >
            Pesquisa
          </button>

        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchBar;
