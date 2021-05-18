import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  addCartItem = (newCartProduct) => {
    this.setState((previousState) => ({
      cartList: [...previousState.cartList, newCartProduct],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart"
            render={ (props) => <Cart { ...props } /> }
          />
          <Route
            path="/productdetails/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              cartItemMethod={ this.addCartItem }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
