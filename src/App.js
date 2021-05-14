import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CartBasket from './pages/CartBasket';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart-basket" component={ CartBasket } />
        <Route path="/" component={ SearchBar } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
