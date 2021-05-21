import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
    };
  }

  addToCart = (id, productInfo) => {
    this.setState(({ cartItems }) => ({
      cartItems: { ...cartItems, [id]: productInfo },
    }));
  };

  render() {
    const { cartItems } = this.state;
    // console.log(cartItems);

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home addToCart={ this.addToCart } cartItems={ cartItems } />
            ) }
          />
          <Route
            path="/shoppingcart"
            render={ () => <ShoppingCart cartItems={ cartItems } /> }
          />
          <Route
            path="/checkout"
            render={ () => <Checkout cartItems={ cartItems } /> }
          />
          <Route
            path="/:title"
            render={ (props) => (
              <ProductDetails
                addToCart={ this.addToCart }
                cartItems={ cartItems }
                { ...props }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
