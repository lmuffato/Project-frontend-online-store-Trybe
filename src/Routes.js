import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" render={ (props) => <Cart { ...props } /> } />
        <Route path="/" component={ Home } exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
