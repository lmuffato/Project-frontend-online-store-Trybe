import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';

function App() {
  return (
    <Router>
      <Route path="/" component={ SearchBar } />
    </Router>
  );
}

export default App;
