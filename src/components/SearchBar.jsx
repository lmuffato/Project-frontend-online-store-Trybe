import React from 'react';
// import PropTypes from 'prop-types';

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
    return (
      <header>
        <label htmlFor="input-search" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="itemToSearch"
            type="text"
            id="input-search"
            onChange={ this.handleChange }
            value={ itemToSearch }
          />
        </label>
      </header>
    );
  }
}

// SearchBar.propTypes = {
// }.isRequired;

export default SearchBar;
