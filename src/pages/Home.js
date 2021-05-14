import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <input type="text" />
        <strong data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </strong>
        <button type="button" data-testid="shopping-cart-button">Carrinho</button>
      </>
    );
  }
}

export default Home;
