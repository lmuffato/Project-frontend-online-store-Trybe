import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartItem from './pages/CartItem';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Route path="/carrinho" component={ CartItem } />
      <Route exact path="/" component={ Home } />
      <Route path="/details/:id" component={ ProductDetails } />
    </Router>
  );
}

export default App;
