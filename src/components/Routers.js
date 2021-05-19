import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetail';

export default class Routers extends Component {
  constructor() {
    super();
    this.state = { products: [], quantity: 0 };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = (product) => {
    this.setState((prevState) => ({ products:
      [...prevState.products, product],
    quantity: prevState.quantity + 1 }));
  }

  render() {
    // const { products, quantity } = this.state;
    const { products } = this.state;

    return (
      <Switch>
        <Route
          path="/shopping-cart"
          render={ (props) => <ShoppingCart { ...props } products={ products } /> }
        />
        <Route
          exact
          path="/product/:id"
          render={ (props) => (<ProductDetail
            { ...props }
            addToCart={ this.addToCart }
            // quantity={ quantity }
          />) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            { ...props }
            products={ products }
            // quantity={ quantity }
          />) }
        />
      </Switch>
    );
  }
}
