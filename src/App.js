import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cartList: {} };
  }

  addItemToCart = (event) => {
    const { cartList } = this.state;

    const clickedItemId = event.target.getAttribute('data-id');
    const clickedItemTitle = event.target.getAttribute('data-title');
    const clickedItemPrice = event.target.getAttribute('data-price');
    const clickedItemThumbnail = event.target.getAttribute('data-thumbnail');
    const currentItemsinCart = Object.keys(cartList);

    if (!currentItemsinCart.includes(clickedItemId)) {
      this.setState((prevState) => ({
        cartList: Object.assign(
          prevState.cartList,
          { [clickedItemId]: {
            qty: 1,
            title: clickedItemTitle,
            price: clickedItemPrice,
            thumbnail: clickedItemThumbnail } },
        ),
      }));
    } else {
      const updatedCart = { ...cartList };
      updatedCart[clickedItemId].qty += 1;
      this.setState({ cartList: updatedCart });
    }
  }

  updateItemQtyInCart = (event) => {
    console.log(event.target.getAttribute('operation'));
    console.log(event.target.getAttribute('data-id'));
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home { ...props } addItemToCart={ this.addItemToCart } />
            ) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                cartList={ cartList }
                updateItemQtyInCart={ this.updateItemQtyInCart }
              />
            ) }
          />
          <Route
            exact
            path="/products/:id"
            render={ (props) => (
              <ProductDetails { ...props } addItemToCart={ this.addItemToCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
