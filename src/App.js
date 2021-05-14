import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import CartContent from './pages/CartContent';

function App() {
  return (
    <Router>
      <Route exact path="/CartContent" component={ CartContent } />
      <Route exact path="/" component={ SearchBar } />
    </Router>
  );
}

export default App;
