import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import CartContent from './pages/CartContent';

function App() {
  return (
    <Router>
      <Route path="/" component={ SearchBar } />
      <Route path="/CartContent" component={ CartContent } />
    </Router>
  );
}

export default App;
