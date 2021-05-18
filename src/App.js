import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
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

  handleDetailsToCart = async (product) => {
    console.log(product);
    this.setState((anterior) => ({
      cartList: [...anterior.cartList, {
        img: product.thumbnail,
        title: product.title,
        quant: 1,
        price: product.price.toFixed(2),
      }],
    }));
  }

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Route
          path="/carrinho"
          render={ (props) => <Cart { ...props } cartList={ cartList } /> }
        />
        <Route
          exact
          path="/"
          render={ (props) => <Home { ...props } onClick={ this.handleClickAddCart } /> }
        />
        <Route
          path="/details/:id"
          render={ (props) => (
            <ProductDetails
              { ...props }
              handleDetailsToCart={ this.handleDetailsToCart }
            />) }
        />
      </Router>
    );
  }
}

export default App;
