import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/index';
import Cart from './pages/Cart/index';
import Home from './pages/Home/index';
import Checkout from './pages/Checkout';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" render={ (props) => <Cart { ...props } /> } />
        <Route path="/checkout" render={ (props) => <Checkout { ...props } /> } />
        <Route path="/" component={ Home } exact />
        <Route
          path="/itemDetails/:itemId"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
