import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import InputSearch from './components/InputSearch';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
      quantityCart: {},
      quantityTotal: 0,
    };
  }

  componentDidMount() {
    this.conditionalLocalStorage();
  }

  componentDidUpdate() {
    this.saveQuantity();
  }

  conditionalLocalStorage = () => {
    const saved = localStorage.getItem('quantity');
    if (saved) {
      this.setState({
        quantityTotal: Number(saved),
      });
    }
  }

  saveQuantity = () => {
    const { quantityTotal } = this.state;
    localStorage.setItem('quantity', `${quantityTotal}`);
  }

  // sumQuantity = () => {
  //   const { quantityCart, quantityTotal } = this.state;
  //   const arrQuantity = Object.values(quantityCart);
  //   const total = arrQuantity.reduce((acc, actual) => acc + actual, 0);
  //   console.log(total);
  //   this.setState(() => ({
  //     quantityTotal: total,
  //   }));
  // }

  handleButtonCartAdd = (event) => {
    console.log(event.target);
    const { value } = event.target;
    const price = event.target.getAttribute('price');
    const { quantityCart } = this.state;
    if (quantityCart[value] === undefined) {
      this.setState((paststate) => ({
        productsCart: [...paststate.productsCart, { value, price }],
        quantityCart: { ...paststate.quantityCart, [value]: 1 },
        quantityTotal: paststate.quantityTotal + 1,
      }));
    } else {
      this.setState((paststate) => ({
        productsCart: [...paststate.productsCart, { value, price }],
        quantityCart: { ...paststate.quantityCart,
          [value]: paststate.quantityCart[value] + 1 },
        quantityTotal: paststate.quantityTotal + 1,
      }));
    }
  }

  handleSubtractButton = (event) => {
    const { quantityCart } = this.state;
    const { value } = event.target;
    if (quantityCart[value] > 1) {
      this.setState((paststate) => ({
        quantityCart: {
          ...paststate.quantityCart,
          [value]: paststate.quantityCart[value] - 1,
        },
        quantityTotal: paststate.quantityTotal - 1,
      }));
    }
  }

  handleAddButton = (event) => {
    const { value } = event.target;
    this.setState((paststate) => ({
      quantityCart: {
        ...paststate.quantityCart,
        [value]: paststate.quantityCart[value] + 1,
      },
      quantityTotal: paststate.quantityTotal + 1,
    }));
  }

  handleExcludeButton = (event) => {
    const { value } = event.target;
    const { productsCart } = this.state;
    const filtered = productsCart.filter((element) => element.value !== value);
    this.setState((paststate) => ({
      productsCart: [...filtered],
      quantityCart: {
        ...paststate.quantityCart,
        [value]: 0,
      },
    }));
  }

  render() {
    const { productsCart, quantityCart, quantityTotal } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/details/:id/:category"
              render={ (props) => (<ProductDetails
                { ...props }
                AddCart={ this.handleButtonCartAdd }
                quantityTotal={ quantityTotal }
              />) }
            />
            <Route
              exact
              path="/cart-shopping"
              render={ () => (<ShoppingCart
                products={ productsCart }
                quantity={ quantityCart }
                handleSubtractButton={ this.handleSubtractButton }
                handleAddButton={ this.handleAddButton }
                handleExcludeButton={ this.handleExcludeButton }
              />) }
            />
            <Route
              exact
              path="/checkout"
              render={ () => (<Checkout
                products={ productsCart }
                quantity={ quantityCart }
              />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <InputSearch
                  AddCart={ this.handleButtonCartAdd }
                  quantityTotal={ quantityTotal }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
