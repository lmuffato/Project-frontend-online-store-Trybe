import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/Home/components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/productdetails" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
