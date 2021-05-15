import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

class SearchBar extends Component {
  render() {
    const { searchText, onChange, onClick } = this.props;

    return (
      <header>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input
            name="searchBar"
            type="text"
            data-testid="query-input"
            onChange={ onChange }
            value={ searchText }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button type="button" data-testid="query-button" onClick={ onClick }>
          Buscar
        </button>
        <CartButton />
      </header>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
