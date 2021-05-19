import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/checkout" component={ Checkout } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route
          exact
          path="/product/:id"
          render={ (props) => <ProductDetail { ...props } /> }
        />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}
