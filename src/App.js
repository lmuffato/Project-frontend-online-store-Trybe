import React from 'react';
import './App.css';

function App() {
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

export default App;
