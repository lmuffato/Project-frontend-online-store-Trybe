import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ Home } />
      </Router>
    </div>
  );
}

export default App;
