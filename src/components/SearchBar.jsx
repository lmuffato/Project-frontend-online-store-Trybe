import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { search, handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          value={ search }
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
          onClick={ handleClick }
          type="submit"
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchBar;
