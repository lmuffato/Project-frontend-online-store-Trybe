import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </Router>
    </div>
  );
}

export default App;
