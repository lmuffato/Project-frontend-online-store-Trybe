import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import InputSearch from './components/InputSearch';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/details/:id/:category"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/cart-shopping" component={ ShoppingCart } />
          <Route exact path="/" component={ InputSearch } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
