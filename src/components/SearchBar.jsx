import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <>
        <input type='text' onChange={console.log('deu bom')} />
        <p data-testid='home-initial-message'>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </>
    );
  }
}

export default SearchBar;
