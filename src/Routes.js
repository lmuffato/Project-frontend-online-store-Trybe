import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/index';
import Cart from './pages/Cart/index';
import Home from './pages/Home/index';
import Form from './components/Form';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" render={ (props) => <Cart { ...props } /> } />
        <Route path="/finish" render={ (props) => <Form { ...props } /> } />
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
