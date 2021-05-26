import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getProductLength } from './utils/functions';

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

  componentDidMount() {
    this.storageToCartList();
  }

  componentDidUpdate() {
    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    const { cartList } = this.state;
    localStorage.setItem('cartList', JSON.stringify(cartList));
  };

  handleClickAddCart = (event) => {
    const elementos = [...event.target.parentNode.children];
    const product = [...elementos[0].children];
    const { cartList } = this.state;
    const checked = cartList.find(({ title }) => title === product[0].innerHTML);
    if (checked === undefined) {
      console.log('if');
      this.setState((anterior) => ({
        cartList: [...anterior.cartList, {
          img: product[1].src,
          title: product[0].innerHTML,
          quant: 1,
          price: elementos[1].innerHTML,
          stock: parseInt(product[2].innerHTML, 10),
        }],
      }));
    } else {
      console.log('else');
      const test = cartList.reduce((acc, item) => {
        if (item.title === product[0].innerHTML) {
          console.log('if');
          return [...acc, { ...item, quant: item.quant + 1 }];
        }
        console.log('depois do if');
        return [...acc, item];
      }, []);
      this.setState({
        cartList: test,
      });
    }
  };

  handleDetailsToCart = (product, quant) => {
    const { cartList } = this.state;
    const checked = cartList.find(({ title }) => title === product.title);
    if (checked === undefined) {
      this.setState((anterior) => ({
        cartList: [...anterior.cartList, {
          img: product.thumbnail,
          title: product.title,
          quant,
          price: product.price.toFixed(2),
          stock: product.available_quantity,
        }],
      }));
    } else {
      const test = cartList.reduce((acc, item) => {
        if (item.title === product.title) {
          return [...acc, { ...item, quant: item.quant + quant }];
        }
        return [...acc, item];
      }, []);
      this.setState({
        cartList: test,
      });
    }
  }

  handleClickResetState = () => {
    this.setState({ cartList: [] });
  };

  changeQuantProductLength = (quant, productTitle) => {
    const { cartList } = this.state;
    const newCartList = cartList.map((product) => {
      const checkTitle = product.title === productTitle;
      return checkTitle ? { ...product, quant } : product;
    });

    this.setState({ cartList: newCartList });
  }

  storageToCartList = () => {
    const storage = localStorage.getItem('cartList');
    if (storage) {
      this.setState({
        cartList: JSON.parse(storage),
      });
    }
  };

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
              cartProductLength={ getProductLength(cartList) }
            />
          ) }
        />
        <Route
          path="/details/:id"
          render={ (props) => (
            <ProductDetails
              { ...props }
              handleDetailsToCart={ this.handleDetailsToCart }
              cartProductLength={ getProductLength(cartList) }
            />) }
        />
        <Route
          path="/checkout"
          render={ (props) => <Checkout { ...props } /> }
          handleClickResetState={ this.handleClickResetState }
        />
      </Router>
    );
  }
}

export default App;
