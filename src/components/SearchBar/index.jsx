import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      itemToSearch: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { itemToSearch } = this.state;
    const { func } = this.props;
    return (
      <header>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            data-testid="query-input"
            name="itemToSearch"
            type="text"
            id="input-search"
            onChange={ this.handleChange }
            value={ itemToSearch }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => func(itemToSearch) }
        >
          Buscar
        </button>
      </header>
    );
  }
}

SearchBar.propTypes = {
  func: PropTypes.func,
}.isRequired;

export default SearchBar;
