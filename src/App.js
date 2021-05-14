import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ SearchBar } />
    </BrowserRouter>
  );
}

export default App;
