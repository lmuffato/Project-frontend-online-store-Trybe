import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Cart" component={ Cart } />
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
