import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ SearchBar } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
