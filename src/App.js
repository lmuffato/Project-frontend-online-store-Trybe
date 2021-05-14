import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={ SearchBar } />
    </Router>
  );
}

export default App;
