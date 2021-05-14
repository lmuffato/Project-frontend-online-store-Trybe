import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { text } = this.state;
    const { clique } = this.props;
    return (
      <header>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleTitle }
          value={ text }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ clique }
        >
          Search
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </header>
    );
  }
}

export default SearchBar;
