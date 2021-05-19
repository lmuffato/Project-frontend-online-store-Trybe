import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { addToLocalStorage } from './services/localStorage';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import './styles/FrontPage.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            {/* Adição do componente nas routes */}
            <Route
              path="/ShoppingCart"
              render={
                (props) => (<ShoppingCart
                  { ...props }
                  cartInfo={ addToLocalStorage }
                  // buyQuantity={ this.quantityProduct }
                />)
              }
            />
            <Route
              path="/:id"
              render={
                (props) => (<ProductDetail
                  { ...props }
                  // addToCart={ this.addToCart }
                />)
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
