import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/product_details';
import ProductList from './components/product_list';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/product_details/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
