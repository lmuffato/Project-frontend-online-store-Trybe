import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import CartShopPage from './Components/CartShopPage';
import Search from './Components/Search';
import CategorieList from './Components/CategorieList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Search />
        <Route path="/CartShopPage" component={ CartShopPage } />
        <CartButton />
        <CategorieList />
      </div>
    </BrowserRouter>
  );
}

export default App;
