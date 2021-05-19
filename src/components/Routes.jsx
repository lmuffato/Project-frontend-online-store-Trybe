import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route
            path="/Products/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </div>
    );
  }
}
// xablau
export default Routes;
