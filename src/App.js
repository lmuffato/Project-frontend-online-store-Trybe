import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';

import './App.css';
import './styles/globals.css';

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

  changeQuantProductLength = (quant, productTitle) => {
    const { cartList } = this.state;
    const newCartList = cartList.map((product) => {
      const checkTitle = product.title === productTitle;
      return checkTitle ? { ...product, quant } : product;
    });

    this.setState({ cartList: newCartList });
  }

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
            render={ (props) => (
              <Cart
                { ...props }
                cartList={ cartList }
                changeQuantProductLength={ this.changeQuantProductLength }
              />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                onClick={ this.handleClickAddCart }
              />
            ) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                handleDetailsToCart={ this.handleDetailsToCart }
              />) }
          />
          <Route path="/checkout" render={ (props) => <Checkout { ...props } /> } />
        </Router>
      );
    }
}

export default App;
