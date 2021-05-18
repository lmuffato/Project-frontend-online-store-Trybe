import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Pages/ProductList';
import ShoppingCart from './Pages/ShoppingCart';
import ItemDetails from './Pages/ItemDetails';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Route exact path="/" component={ ProductList } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/item-details" component={ ItemDetails } />
      </BrowserRouter>
    </section>
  );
}

export default App;
