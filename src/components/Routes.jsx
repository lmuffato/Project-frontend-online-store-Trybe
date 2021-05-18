import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import CategoryList from './CategoryList';
// import Products from './Products';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/CategoryList" component={ CategoryList } />
        {/* <Route path="/Products" component={ Products } /> */}
      </Switch>
    );
  }
}
// xablau
export default Routes;
