import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as api from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  // api.getCategories().then((categories) => { console.log(categories); });
  // api.getProductsFromCategoryAndQuery('MLB5672', 'roda')
  //   .then((categories) => { console.log(categories); });
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/cart" exact component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
