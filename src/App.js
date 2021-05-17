import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/product/:id" component={ ProductDetail } />
    </BrowserRouter>
  );
}

export default App;
