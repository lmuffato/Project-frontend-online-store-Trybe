import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartContent from './pages/CartContent';

function App() {
  return (
    <Router>
      <Route exact path="/CartContent" component={ CartContent } />
      <Route exact path="/" component={ Home } />
    </Router>
  );
}

export default App;
