import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
