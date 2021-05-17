import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';
import Cart from './pages/Cart';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cart" component={ Cart } />
        <Route path="/" component={ Home } exact />
        <Route
          path="/item-details/:title/:item-id"
          render={ (props) => <ItemDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
