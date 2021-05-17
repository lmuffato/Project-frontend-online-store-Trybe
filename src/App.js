import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import CartShopPage from './Components/CartShopPage';

import Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Search />
        <Route path="/CartShopPage" component={ CartShopPage } />
        <CartButton />

      </div>
    </BrowserRouter>
  );
}

export default App;
