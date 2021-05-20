import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShopCart from './components/ShopCart';
import ShopCartButton from './components/ShopCartButton';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/shopcart" component={ ShopCart } />
        <Route path="/shopcartbutton" component={ ShopCartButton } />
        <Route
          path="/productdetails/:id"
          component={ ProductDetails }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
