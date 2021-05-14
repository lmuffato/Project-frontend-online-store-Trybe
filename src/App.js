import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route to="/" component={ProductList} />
    </BrowserRouter>
  );
}

export default App;
