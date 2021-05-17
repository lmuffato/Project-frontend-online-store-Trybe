import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ onChange }
        />
        <button data-testid="query-button" type="button" onClick={ onClick }>
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchBar;
