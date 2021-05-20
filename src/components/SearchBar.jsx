import React from 'react';
import PropTypes from 'prop-types';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { getQuery, getProducts } = this.props;
    return (
      <div className="search-bar-container">
        <header className="search-bar">
          <input
            type="text"
            data-testid="query-input"
            onChange={ getQuery }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ getProducts }
          >
            Search
          </button>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </header>
      </div>
    );
  }
}

SearchBar.propTypes = {
  props: PropTypes.shape({
    getQuery: PropTypes.func,
    getProducts: PropTypes.func,
  }).isRequired,
}.isRequired;

export default SearchBar;
