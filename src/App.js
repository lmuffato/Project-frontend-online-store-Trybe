import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
