
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Pages/ProductList';
import ShoppingCart from './Pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
    };
  }

  handle = (title, ProductId, productQuantity) => {
    this.setState(({ productsInCart }) => ({
      productsInCart: [...productsInCart, { title, ProductId, productQuantity }],
    }), () => {
      const { productsInCart } = this.state;
      console.log(productsInCart);
    });
  };

  render() {
    const { productsInCart } = this.state;
    return (
      <section>
        <BrowserRouter>
          <Route exact path="/">
            <ProductList productsInCart={ productsInCart } handle={ this.handle } />
          </Route>

          <Route path="/shoppingcart">
            <ShoppingCart productsInCart={ productsInCart } />
          </Route>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
