import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCartPage" component={ ShoppingCartPage } />
          <Route path="/Checkout" component={ Checkout } />
          <Route path="/:title" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
