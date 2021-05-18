import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, CartContent, ProductDetails } from './pages';

function App() {
  return (
    <Router>
      <Route exact path="/product/:id" component={ ProductDetails } />
      <Route exact path="/cartContent" component={ CartContent } />
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;
