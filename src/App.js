import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  checkIds = (currProduct) => {
    let result = currProduct.quant;
    const { cartList } = this.state;
    cartList.forEach((product) => {
      if (product.id === currProduct.id) {
        result += 1;
      }
      return result;
    });
    return result;
  }

  addCartItem = (newCartProduct) => {
    const { cartList } = this.state;
    const check = this.checkIds(newCartProduct);
    if (check < 2) {
      this.setState((previousState) => ({
        cartList: [...previousState.cartList, newCartProduct],
      }));
    } else {
      const currObj = newCartProduct;
      const indexId = cartList.indexOf(currObj);
      const newObject = cartList[indexId];
      newObject.quant = check;
      const previousCartList = cartList.filter((product) => product.id !== newObject.id);
      this.setState(() => ({
        cartList: [...previousCartList, newObject],
      }));
    }
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path="/cart"
              render={ (props) => <Cart { ...props } items={ cartList } /> }
            />
            <Route
              path="/productdetails/:id"
              render={ (props) => (<ProductDetail
                { ...props }
                cartItemMethod={ this.addCartItem }
              />) }
            />
            <Route
              exact
              path="/"
              render={ (props) => (<Home
                { ...props }
                cartItemMethod={ this.addCartItem }
              />) }
            />
            <Route
              path="/checkout"
              render={ (props) => (<Checkout
                { ...props }
                cartList={ cartList }
              />) }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
