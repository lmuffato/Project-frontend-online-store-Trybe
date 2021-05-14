import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartItem from './pages/CartItem';

function App() {
  return (
    <Router>
      <Route path="/carrinho" component={ CartItem } />
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;
