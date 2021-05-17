import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartItem from './pages/CartItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  handleClickAddCart = async (event) => {
    const elementos = [...event.target.parentNode.children];
    const price = Number(elementos[2].innerText.split('$')[1]);
    this.setState((anterior) => ({
      cartList: [...anterior.cartList, {
        img: elementos[1].src,
        title: elementos[0].innerText,
        quant: 1,
        price,
      }],
    }));
  };

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Route
          path="/carrinho"
          render={ (props) => <CartItem { ...props } state={ cartList } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Home { ...props } onClick={ this.handleClickAddCart } /> }
        />
      </Router>
    );
  }
}

export default App;
