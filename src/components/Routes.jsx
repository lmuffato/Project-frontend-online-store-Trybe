import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ SearchBar } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    );
  }
}
// xablau
export default Routes;
