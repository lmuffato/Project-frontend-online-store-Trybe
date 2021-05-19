import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import CartBasket from './pages/CartBasket';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      shoppingCart: [],
    };
  }

  addToCart(product) {
    // https://pt.stackoverflow.com/questions/315806/alterar-atributo-de-um-array-de-objetos-no-estado-na-aplica%25C3%25A7%25C3%25A3o
    const { shoppingCart } = this.state;
    const addQuantity = shoppingCart
      .find((productShoppingCart) => product.id === productShoppingCart.id);
    if (addQuantity) {
      const index = shoppingCart.indexOf(addQuantity);
      shoppingCart[index].quantity += 1;
      this.setState({ shoppingCart });
    } else {
      this.setState({
        shoppingCart: [...shoppingCart, product],
      });
    }
  }

  render() {
    const { shoppingCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart-basket" component={ CartBasket } />
          <Route
            path="/product-details/:id"
            render={ (props) => (
              <ProductDetails
                { ...props }
                addToCart={ this.addToCart }
                shoppingCart={ shoppingCart }
              />
            ) }
          />
          <Route
            path="/"
            render={ () => (
              <Index addToCart={ this.addToCart } shoppingCart={ shoppingCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
