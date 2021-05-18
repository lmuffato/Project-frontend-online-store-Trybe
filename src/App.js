import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Pages/ProductList';
import ShoppingCart from './Pages/ShoppingCart';
import ItemDetails from './Pages/ItemDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
    };
  }

  handle = (product, productQuantity) => {
    this.setState(({ productsInCart }) => ({
      productsInCart: [...productsInCart, { product, productQuantity }],
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
          <Route path="/item-details" component={ ItemDetails } />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
