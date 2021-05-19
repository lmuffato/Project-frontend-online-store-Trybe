import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routers from './components/Routers';

function App() {
  return (
    <BrowserRouter>
      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
      >
        Cart
      </Link>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
