import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}
