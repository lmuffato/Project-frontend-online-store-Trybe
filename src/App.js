import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {cartList: []};
  }

  addItemToCart = (event) => {
    const { cartList } = this.state;

    const clickedItemId = event.target.value;
    const currentItemsinCart = cartList.map((obj) => obj.id);
    if (!currentItemsinCart.includes(clickedItemId)) {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, { id: clickedItemId, quantity: 1 }],
      }));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home { ...props } addItemToCart={ this.addItemToCart } />}
          />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/products/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
