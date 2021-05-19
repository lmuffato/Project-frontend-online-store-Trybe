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
      sumTotalItens: 0,
    };
  }

  sumItensInCart = () => {
    const { productsInCart } = this.state;
    let sum = 0;
    sum = Object.values(productsInCart)
      .reduce((acc, currentItem) => acc + currentItem.productQuantity, 0);
    this.setState({ sumTotalItens: sum });
  }

  handle = (product, addQuantity, del = false) => {
    if (del) {
      this.setState(({ productsInCart }) => {
        delete productsInCart[product.id];
        return ({ productsInCart: { ...productsInCart } });
      }, () => this.sumItensInCart());
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
        const { productsInCart, sumTotalItens } = this.state;
        this.sumItensInCart();
      });
    }
  };

  render() {
    const { productsInCart, sumTotalItens } = this.state;
    return (
      <section>
        <BrowserRouter>
          <Route exact path="/">
            <ProductList
              sumTotalItens={ sumTotalItens }
              productsInCart={ productsInCart }
              handle={ this.handle }
            />
          </Route>

          <Route path="/shoppingcart">
            <ShoppingCart productsInCart={ productsInCart } handle={ this.handle } />
          </Route>
          <Route
            path="/item-details"
            render={
              (props) => (<ItemDetails
                { ...props }
                productsInCart={ productsInCart }
                sumTotalItens={ sumTotalItens }
              />)
            }
          />
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
