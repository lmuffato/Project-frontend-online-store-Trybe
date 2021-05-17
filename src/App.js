import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Pages/ProductList';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </BrowserRouter>
    </section>
  );
}

export default App;
