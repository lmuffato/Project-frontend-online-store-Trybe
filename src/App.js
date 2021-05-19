import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, CartContent, ProductDetails } from './pages';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(selectedItem) {
    this.setState((previousState) => (
      {
        items: [...previousState.items, selectedItem],
      }
    ));
  }

  render() {
    const { items } = this.state;

    return (
      <Router>
        <Route exact path="/product/:id" component={ ProductDetails } />
        <Route
          exact
          path="/cartContent"
          render={ () => <CartContent items={ items } /> }
        />
        <Route
          exact
          path="/"
          render={ () => <Home callBack={ this.addItem } /> }
        />
      </Router>
    );
  }
}
export default App;
