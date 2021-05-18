import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import InputSearch from './components/InputSearch';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
      quantityCart: {},
    };
  }

  handleButtonCartAdd = (event) => {
    const { value } = event.target;
    /* console.log(); */
    const { quantityCart } = this.state;
    if (quantityCart[value] === undefined) {
      this.setState((paststate) => ({
        productsCart: [...paststate.productsCart, value],
        quantityCart: { ...paststate.quantityCart, [value]: 1 },
      }));
    } else {
      this.setState((paststate) => ({
        productsCart: [...paststate.productsCart, value],
        quantityCart: { ...paststate.quantityCart,
          [value]: paststate.quantityCart[value] + 1 },
      }));
    }
  }

  handleSubtractButton = (event) => {
    const { quantityCart } = this.state;
    const { value } = event.target;
    if (quantityCart[value] > 1) {
      this.setState((paststate) => ({
        quantityCart: {
          ...paststate.quantityCart,
          [value]: paststate.quantityCart[value] - 1,
        },
      }));
    }
  }

  handleAddButton = (event) => {
    const { value } = event.target;
    this.setState((paststate) => ({
      quantityCart: {
        ...paststate.quantityCart,
        [value]: paststate.quantityCart[value] + 1,
      },
    }));
  }

  handleExcludeButton = (event) => {
    const { value } = event.target;
    const { productsCart } = this.state;
    const filtered = productsCart.filter((element) => element !== value);
    this.setState({
      productsCart: [...filtered],
    });
  }

  render() {
    const { productsCart, quantityCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/details/:id/:category"
              render={ (props) => (<ProductDetails
                { ...props }
                AddCart={ this.handleButtonCartAdd }
              />) }
            />
            <Route
              exact
              path="/cart-shopping"
              render={ () => (<ShoppingCart
                products={ productsCart }
                quantity={ quantityCart }
                handleSubtractButton={ this.handleSubtractButton }
                handleAddButton={ this.handleAddButton }
                handleExcludeButton={ this.handleExcludeButton }
              />) }
            />
            <Route
              exact
              path="/checkout"
              render={ () => (<Checkout
                products={ productsCart }
                quantity={ quantityCart }
              />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <InputSearch
                  AddCart={ this.handleButtonCartAdd }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
