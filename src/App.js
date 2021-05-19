import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListagemProdutos from './Components/ListagemProdutos';
import Details from './Components/Details';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Pages/Checkout';

class App extends Component {
  constructor() {
    super();

    this.state = {
      productsCart: [],
      quantityCart: {},
    };
  }

  render() {
    const { productsCart, quantityCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                products={ productsCart }
                quantity={ quantityCart }
                size={ productsCart.length }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ () => (
              <ListagemProdutos
                addCart={ this.handleAddToCart }
              />
            ) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<Details
              { ...props }
            />) }
          />
          <Route
            path="/checkout"
            component={ Checkout }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
