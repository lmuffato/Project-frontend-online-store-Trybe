import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {cartList: {}};
  }

  addItemToCart = (event) => {
    const { cartList } = this.state;

    const clickedItemId = event.target.value;
    const currentItemsinCart = Object.keys(cartList);

    if (!currentItemsinCart.includes(clickedItemId)) {
      this.setState((prevState) => ({
        cartList: Object.assign(prevState.cartList, { [clickedItemId]: 1 }),
      }), () => console.log(this.state));
    } else {
      const updatedCart = {...cartList};
      updatedCart[clickedItemId] += 1;
      this.setState({ cartList: updatedCart }, () => console.log(this.state));
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
