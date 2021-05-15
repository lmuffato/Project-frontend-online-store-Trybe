import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <form onSubmit={ onSubmit }>
          <input
            placeholder="Digite aqui"
            data-testid="query-input"
            onChange={ onChange }
            value={ value }
          />
          <button type="submit" data-testid="query-button">Buscar</button>
        </form>
      </>
    );
  }
}

export default SearchBar;
