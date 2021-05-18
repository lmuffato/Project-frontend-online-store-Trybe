import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartItem from './pages/CartItem';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  handleClickAddCart = async (event) => {
    const elementos = [...event.target.parentNode.children];
    const product = [...elementos[0].children];
    this.setState((anterior) => ({
      cartList: [...anterior.cartList, {
        img: product[1].src,
        title: product[0].innerHTML,
        quant: 1,
        price: product[2].innerHTML,
      }],
    }));
  };

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Route
          path="/carrinho"
          render={ (props) => <CartItem { ...props } cartList={ cartList } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Home { ...props } onClick={ this.handleClickAddCart } /> }
        />
        <Route
          path="/details/:id"
          component={ ProductDetails }
        />
      </Router>
    );
  }
}

export default App;
