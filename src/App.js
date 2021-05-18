import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import HomeCart from './components/HomeCart';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ SearchBar } />
      <Route exact path="/cart" component={ HomeCart } />
      <Route
        path="/Product-Details/:id"
        render={ (props) => <ProductDetails { ...props } /> }
      />
    </Router>
  );
}

export default App;
