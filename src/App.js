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
      this.setState({ cartList: updatedCart }, () => this.saveCartToLocalStorage());
    }
  }

  updateItemQtyInCart = (event) => {
    const operation = event.target.getAttribute('operation');
    const itemId = event.target.getAttribute('data-id');
    const { cartList } = this.state;
    const updatedCart = { ...cartList };

    if (operation === '+') {
      updatedCart[itemId].qty += 1;
    } else {
      updatedCart[itemId].qty -= 1;
    }

    this.setState({ cartList: updatedCart }, () => this.saveCartToLocalStorage());
  }

  returnTotalCartItemQty = () => {
    const { cartList } = this.state;
    return Object.values(cartList).reduce((accum, currItem) => accum + currItem.qty, 0);
  }

  saveCartToLocalStorage = () => {
    const { cartList } = this.state;
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }

  pushLocalStoragetoState = () => {
    const localStorageCartList = JSON.parse(localStorage.getItem('cartList'));
    this.setState({ cartList: { ...localStorageCartList } });
  }

  componentDidMount = () => {
    this.pushLocalStoragetoState();
  }

  componentWillUnmount = () => {
    this.saveCartToLocalStorage();
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
              <Home
                { ...props }
                addItemToCart={ this.addItemToCart }
                totalItemQty={ this.returnTotalCartItemQty() }
              />
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
              <ProductDetails
                { ...props }
                addItemToCart={ this.addItemToCart }
                totalItemQty={ this.returnTotalCartItemQty() }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
