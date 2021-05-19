import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Pages/ProductList';
import ShoppingCart from './Pages/ShoppingCart';
import ItemDetails from './Pages/ItemDetails';
import Checkout from './Pages/Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsInCart: {},
    };
  }

  handle = (product, addQuantity, del = false) => {
    if (del) {
      this.setState(({ productsInCart }) => {
        delete productsInCart[product.id];
        return ({ productsInCart: { ...productsInCart } });
      });
    } else {
      this.setState(({ productsInCart }) => {
        const productQuantity = (product.id in productsInCart)
          ? productsInCart[product.id].productQuantity + addQuantity
          : addQuantity;
        return ({
          productsInCart:
            {
              ...productsInCart,
              [product.id]: { ...product, productQuantity },
            },
        });
      }, () => {
        const { productsInCart } = this.state;
        console.log(productsInCart);
      });
    }
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
            <ShoppingCart productsInCart={ productsInCart } handle={ this.handle } />
          </Route>
          <Route path="/item-details" component={ ItemDetails } />
          <Route
            path="/checkout"
            render={
              (props) => <Checkout { ...props } productsInCart={ productsInCart } />
            }
          />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
