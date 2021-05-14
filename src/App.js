import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import CartBasket from './pages/CartBasket';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart-basket" component={ CartBasket } />
        <Route path="/" component={ Index } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
