import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import HomeCart from './components/HomeCart';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/cart" component={ HomeCart } />
      <Route exact path="/" component={ SearchBar } />
    </Router>
  );
}

export default App;
