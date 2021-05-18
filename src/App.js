import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListagemProdutos from './Components/ListagemProdutos';
import Details from './Components/Details';
import ShoppingCart from './Pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      productsCart: [],
      quantityCart: {},
    };
  }

  handleAddToCart = ({ target }) => {
    const { quantityCart } = this.state;
    const { value } = target;
    if (quantityCart[value] === undefined) {
      this.setState((prevState) => ({
        productsCart: [...prevState.productsCart, value],
        quantityCart: { ...prevState.quantityCart, [value]: 1 },
      }));
    } else {
      this.setState((prevState) => ({
        productsCart: [...prevState.productsCart, value],
        quantityCart: { ...prevState.quantityCart,
          [value]: prevState.quantityCart[value] + 1 },
      }));
    }
  }

  render() {
    const { productsCart, quantityCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/cart"
            render={ () => (
              <ShoppingCart
                products={ productsCart }
                quantity={ quantityCart }
              />
            ) }
          />
          <Route
            exact
            path="/"
            render={ () => (
              <ListagemProdutos
                addCart={ this.handleAddToCart }
                size={ productsCart.length }
              />
            ) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<Details
              addCart={ this.handleAddToCart }
              size={ productsCart.length }
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
