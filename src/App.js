import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, CartContent, ProductDetails } from './pages';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.findIndexByID = this.findIndexByID.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItemToCart(selectedItem) {
    this.setState((previousState) => (
      {
        items: [...previousState.items, selectedItem],
      }
    ));
  }

  findIndexByID(givenID) {
    const { items } = this.state;
    const reversedArray = [...items].reverse();
    const itemIndex = items.indexOf(reversedArray.find(({ id }) => id === givenID));
    return itemIndex;
  }

  removeItem(index) {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items,
    });
  }

  addItem(index) {
    const { items } = this.state;
    const clone = { ...items[index] };
    this.addItemToCart(clone);
  }

  render() {
    const { items } = this.state;

    return (
      <Router>
        <Route
          exact
          path="/checkout"
          component={ (routeProps) => (<Checkout
            { ...routeProps }
          />) }
        />
        <Route
          exact
          path="/product/:id"
          render={ (routeProps) => (<ProductDetails
            { ...routeProps }
            callBack={ this.addItemToCart }
          />) }
        />
        <Route
          exact
          path="/cartContent"
          render={ () => (<CartContent
            items={ items }
            add={ this.addItem }
            remove={ this.removeItem }
            find={ this.findIndexByID }
          />) }
        />
        <Route
          exact
          path="/"
          render={ () => <Home callBack={ this.addItemToCart } /> }
        />
      </Router>
    );
  }
}
export default App;
