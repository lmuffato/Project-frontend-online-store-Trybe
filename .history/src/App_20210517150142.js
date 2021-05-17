import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListagemProdutos from './Components/ListagemProdutos';
import ShoppingCart from './Pages/ShoppintCart';
import Details from './Components/Details';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListagemProdutos } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/details" Component={ Details } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
