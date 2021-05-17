import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShopCart from './components/ShopCart';
import ShopCartButton from './components/ShopCartButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/shopcart" component={ ShopCart } />
        <Route path="/shopcartbutton" component={ ShopCartButton } />
      </BrowserRouter>
    </div>
  );
}

export default App;
