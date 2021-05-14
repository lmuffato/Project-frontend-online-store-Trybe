import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
