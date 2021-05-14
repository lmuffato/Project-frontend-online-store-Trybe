import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ ProductList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
