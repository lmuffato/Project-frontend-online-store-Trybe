import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './pages/Cart';
import * as api from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          { console.log(api.getCategories()) }
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
