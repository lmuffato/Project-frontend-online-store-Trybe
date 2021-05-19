import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/product_details';
import ProductList from './components/product_list';
import ShoppingCart from './components/ShoppingCart';
import ProductCheckout from './components/ProductCheckout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/ShoppingCart" component={ ShoppingCart } exact />
          <Route path="/ShoppingCart/Checkout" component={ ProductCheckout } />
          <Route path="/product_details/:id" component={ ProductDetails } />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
