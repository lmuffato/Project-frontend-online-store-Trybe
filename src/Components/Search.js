import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <div>
          <h1
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </h1>
        </div>
      </div>
    );
  }
}

export default Search;
